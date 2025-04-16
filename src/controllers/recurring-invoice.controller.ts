import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/client";
import {
  RecurringPattern,
  InvoiceStatus,
  Prisma,
} from "../../prisma/generated/client";
import { calculateNextInvoiceDate } from "../utils/dateUtils";
import { generateInvoiceNumber } from "../utils/invoice.utils";

const prisma = new PrismaClient();

export class RecurringInvoiceController {
  // Get all recurring invoices
  getRecurringInvoices = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringInvoices = await prisma.recurringInvoice.findMany({
        where: {
          user_id: userId,
          deleted_at: null,
        },
        include: {
          client: true,
          items: {
            include: {
              product: true,
            },
          },
          generated_invoices: {
            where: {
              deleted_at: null,
            },
            orderBy: {
              created_at: "desc",
            },
            take: 5,
          },
        },
        orderBy: {
          created_at: "desc",
        },
      });

      res.status(200).json({ recurringInvoices });
    } catch (error: any) {
      console.error("Error fetching recurring invoices:", error);
      res.status(500).json({
        message: "Failed to fetch recurring invoices",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Get a single recurring invoice by id
  getRecurringInvoice = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);

      const recurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
        include: {
          client: true,
          items: {
            include: {
              product: true,
            },
          },
          generated_invoices: {
            where: {
              deleted_at: null,
            },
            orderBy: {
              created_at: "desc",
            },
          },
        },
      });

      if (!recurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      res.status(200).json({ recurringInvoice });
    } catch (error: any) {
      console.error("Error fetching recurring invoice:", error);
      res.status(500).json({
        message: "Failed to fetch recurring invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Create a new recurring invoice
  createRecurringInvoice = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const {
        client_id,
        pattern,
        next_invoice_date,
        items,
        source_invoice_id,
      } = req.body;

      // Validate pattern
      if (
        !Object.values(RecurringPattern).includes(pattern as RecurringPattern)
      ) {
        res.status(400).json({ message: "Invalid recurring pattern" });
        return;
      }

      // Start a transaction to ensure data consistency
      const recurringInvoice = await prisma.$transaction(
        async (prismaClient) => {
          // Create the recurring invoice
          const newRecurringInvoice =
            await prismaClient.recurringInvoice.create({
              data: {
                user: {
                  connect: {
                    user_id: userId,
                  },
                },
                client: {
                  connect: {
                    client_id,
                  },
                },
                pattern: pattern as RecurringPattern,
                next_invoice_date: new Date(next_invoice_date),
                start_date: new Date(),
                is_active: true,
              },
            });

          // Create recurring invoice items
          for (const item of items) {
            const product = await prismaClient.product.findFirst({
              where: {
                product_id: item.product_id,
                user_id: userId,
              },
            });

            if (!product) {
              throw new Error(`Product with ID ${item.product_id} not found`);
            }

            await prismaClient.recurringInvoiceItem.create({
              data: {
                recurring_id: newRecurringInvoice.id,
                product_id: product.product_id,
                description: item.description || product.description,
                quantity: item.quantity,
                unit_price: product.price,
              },
            });
          }

          // If a source invoice ID is provided, connect it to this recurring invoice
          if (source_invoice_id) {
            const invoice = await prismaClient.invoice.findFirst({
              where: {
                invoice_id: source_invoice_id,
                user_id: userId,
                deleted_at: null,
              },
            });

            if (invoice) {
              await prismaClient.invoice.update({
                where: {
                  invoice_id: source_invoice_id,
                },
                data: {
                  source_recurring_id: newRecurringInvoice.id,
                },
              });
            }
          }

          // Return the created recurring invoice with its related data
          return prismaClient.recurringInvoice.findUnique({
            where: {
              id: newRecurringInvoice.id,
            },
            include: {
              client: true,
              items: {
                include: {
                  product: true,
                },
              },
              generated_invoices: true,
            },
          });
        }
      );

      res.status(201).json({
        message: "Recurring invoice created successfully",
        recurringInvoice,
      });
    } catch (error: any) {
      console.error("Error creating recurring invoice:", error);
      res.status(500).json({
        message: "Failed to create recurring invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Update an existing recurring invoice
  updateRecurringInvoice = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);
      const { pattern, next_invoice_date, is_active, items } = req.body;

      // Check if recurring invoice exists and belongs to the user
      const existingRecurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!existingRecurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      // Start a transaction to ensure data consistency
      const updatedRecurringInvoice = await prisma.$transaction(
        async (prismaClient) => {
          // First, update the basic recurring invoice data
          const updateData: Prisma.RecurringInvoiceUpdateInput = {};

          if (
            pattern &&
            Object.values(RecurringPattern).includes(
              pattern as RecurringPattern
            )
          ) {
            updateData.pattern = pattern as RecurringPattern;
          }

          if (next_invoice_date) {
            updateData.next_invoice_date = new Date(next_invoice_date);
          }

          if (is_active !== undefined) {
            updateData.is_active = is_active;
          }

          const recurringInvoice = await prismaClient.recurringInvoice.update({
            where: {
              id: recurringId,
            },
            data: updateData,
          });

          // If items are provided, update them
          if (items && items.length > 0) {
            // Delete existing items
            await prismaClient.recurringInvoiceItem.deleteMany({
              where: {
                recurring_id: recurringId,
              },
            });

            // Create new items
            for (const item of items) {
              const product = await prismaClient.product.findFirst({
                where: {
                  product_id: item.product_id,
                  user_id: userId,
                },
              });

              if (!product) {
                throw new Error(`Product with ID ${item.product_id} not found`);
              }

              await prismaClient.recurringInvoiceItem.create({
                data: {
                  recurring_id: recurringId,
                  product_id: product.product_id,
                  description: item.description || product.description,
                  quantity: item.quantity,
                  unit_price: product.price,
                },
              });
            }
          }

          // Return the updated recurring invoice with its related data
          return prismaClient.recurringInvoice.findUnique({
            where: {
              id: recurringId,
            },
            include: {
              client: true,
              items: {
                include: {
                  product: true,
                },
              },
              generated_invoices: true,
            },
          });
        }
      );

      res.status(200).json({
        message: "Recurring invoice updated successfully",
        recurringInvoice: updatedRecurringInvoice,
      });
    } catch (error: any) {
      console.error("Error updating recurring invoice:", error);
      res.status(500).json({
        message: "Failed to update recurring invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Delete a recurring invoice (soft delete)
  deleteRecurringInvoice = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);

      // Check if recurring invoice exists and belongs to the user
      const recurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!recurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      // Soft delete the recurring invoice
      await prisma.recurringInvoice.update({
        where: {
          id: recurringId,
        },
        data: {
          deleted_at: new Date(),
          is_active: false,
        },
      });

      res.status(200).json({
        message: "Recurring invoice deleted successfully",
      });
    } catch (error: any) {
      console.error("Error deleting recurring invoice:", error);
      res.status(500).json({
        message: "Failed to delete recurring invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Activate a recurring invoice
  activateRecurringInvoice = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);

      // Check if recurring invoice exists and belongs to the user
      const recurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!recurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      // Activate the recurring invoice
      const updatedRecurringInvoice = await prisma.recurringInvoice.update({
        where: {
          id: recurringId,
        },
        data: {
          is_active: true,
        },
        include: {
          client: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      res.status(200).json({
        message: "Recurring invoice activated successfully",
        recurringInvoice: updatedRecurringInvoice,
      });
    } catch (error: any) {
      console.error("Error activating recurring invoice:", error);
      res.status(500).json({
        message: "Failed to activate recurring invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Deactivate a recurring invoice
  deactivateRecurringInvoice = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);

      // Check if recurring invoice exists and belongs to the user
      const recurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!recurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      // Deactivate the recurring invoice
      const updatedRecurringInvoice = await prisma.recurringInvoice.update({
        where: {
          id: recurringId,
        },
        data: {
          is_active: false,
        },
        include: {
          client: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      res.status(200).json({
        message: "Recurring invoice deactivated successfully",
        recurringInvoice: updatedRecurringInvoice,
      });
    } catch (error: any) {
      console.error("Error deactivating recurring invoice:", error);
      res.status(500).json({
        message: "Failed to deactivate recurring invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Get generated invoices from a recurring invoice
  getGeneratedInvoices = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);

      // Check if recurring invoice exists and belongs to the user
      const recurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!recurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      // Get the generated invoices
      const invoices = await prisma.invoice.findMany({
        where: {
          source_recurring_id: recurringId,
          deleted_at: null,
        },
        include: {
          client: true,
          items: {
            include: {
              product: true,
            },
          },
          payments: true,
        },
        orderBy: {
          created_at: "desc",
        },
      });

      res.status(200).json({ invoices });
    } catch (error: any) {
      console.error("Error fetching generated invoices:", error);
      res.status(500).json({
        message: "Failed to fetch generated invoices",
        error: error.message || "Unknown error occurred",
      });
    }
  };

  // Manually generate an invoice from a recurring template
  generateInvoiceManually = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const recurringId = parseInt(req.params.id);

      // Check if recurring invoice exists and belongs to the user
      const recurringInvoice = await prisma.recurringInvoice.findFirst({
        where: {
          id: recurringId,
          user_id: userId,
          deleted_at: null,
        },
        include: {
          client: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      if (!recurringInvoice) {
        res.status(404).json({ message: "Recurring invoice not found" });
        return;
      }

      // Start a transaction to ensure data consistency
      const invoice = await prisma.$transaction(async (prismaClient) => {
        // Get client ID
        const clientId = recurringInvoice.client_id;

        // Generate a unique invoice number with client ID
        const invoiceNumber = await generateInvoiceNumber(userId, clientId);

        // Calculate dates
        const issueDate = new Date();
        const dueDate = new Date();

        // Set due date based on the recurring pattern
        switch (recurringInvoice.pattern) {
          case "WEEKLY":
            dueDate.setDate(dueDate.getDate() + 7);
            break;
          case "BIWEEKLY":
            dueDate.setDate(dueDate.getDate() + 14);
            break;
          case "MONTHLY":
            dueDate.setMonth(dueDate.getMonth() + 1);
            break;
          case "QUARTERLY":
            dueDate.setMonth(dueDate.getMonth() + 3);
            break;
          case "SEMIANNUALLY":
            dueDate.setMonth(dueDate.getMonth() + 6);
            break;
          case "ANNUALLY":
            dueDate.setFullYear(dueDate.getFullYear() + 1);
            break;
        }

        // Calculate subtotal, tax amount, and total amount
        let subtotal = 0;
        let tax_amount = 0;

        // Create the invoice
        const newInvoice = await prismaClient.invoice.create({
          data: {
            user_id: userId,
            client_id: clientId,
            invoice_number: invoiceNumber,
            issue_date: issueDate,
            due_date: dueDate,
            status: "PENDING" as InvoiceStatus,
            subtotal: 0, // Will update this later
            tax_amount: 0, // Will update this later
            total_amount: 0, // Will update this later
            source_recurring_id: recurringId,
          },
        });

        // Create invoice items
        for (const item of recurringInvoice.items) {
          const product = item.product;
          const quantity = item.quantity;
          const unitPrice = parseFloat(item.unit_price.toString());
          const itemAmount = quantity * unitPrice;

          let itemTaxAmount = 0;
          if (product.tax_rate) {
            const taxRate = parseFloat(product.tax_rate.toString());
            itemTaxAmount = itemAmount * (taxRate / 100);
          }

          subtotal += itemAmount;
          tax_amount += itemTaxAmount;

          await prismaClient.invoiceItem.create({
            data: {
              invoice_id: newInvoice.invoice_id,
              product_id: product.product_id,
              description: item.description || product.description,
              quantity,
              unit_price: unitPrice,
              tax_rate: product.tax_rate
                ? parseFloat(product.tax_rate.toString())
                : null,
              tax_amount: itemTaxAmount,
              amount: itemAmount,
            },
          });
        }

        // Calculate the total amount
        const total_amount = subtotal + tax_amount;

        // Update the invoice with calculated totals
        const updatedInvoice = await prismaClient.invoice.update({
          where: {
            invoice_id: newInvoice.invoice_id,
          },
          data: {
            subtotal,
            tax_amount,
            total_amount,
          },
          include: {
            client: true,
            items: {
              include: {
                product: true,
              },
            },
          },
        });

        // Update the next invoice date for the recurring invoice
        const nextInvoiceDate = calculateNextInvoiceDate(
          new Date(),
          recurringInvoice.pattern
        );

        await prismaClient.recurringInvoice.update({
          where: {
            id: recurringId,
          },
          data: {
            next_invoice_date: nextInvoiceDate,
          },
        });

        return updatedInvoice;
      });

      res.status(201).json({
        message: "Invoice generated successfully",
        invoice,
      });
    } catch (error: any) {
      console.error("Error generating invoice:", error);
      res.status(500).json({
        message: "Failed to generate invoice",
        error: error.message || "Unknown error occurred",
      });
    }
  };
}
