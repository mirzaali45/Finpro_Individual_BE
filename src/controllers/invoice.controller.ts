import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { generateInvoiceNumber } from "../utils/invoice.utils";
import {
  InvoiceStatus,
  RecurringPattern,
  Prisma,
} from "../../prisma/generated/client";
import { calculateNextInvoiceDate } from "../utils/dateUtils";
import { ProductService } from "../services/ProductService";
import {
  sendInvoiceWithPdf,
  sendPaymentConfirmation,
  sendReminderWithPdf,
} from "../services/mailer";
import { generateInvoicePdf, InvoiceForPDF } from "../services/PdfGeneator";

const prisma = new PrismaClient();

export class InvoiceController {
  // Helper method for error handling
  private handleError(res: Response, error: any, message: string): void {
    console.error(`Error ${message}:`, error);

    // Check if it's a validation error from Prisma
    if (error instanceof Prisma.PrismaClientValidationError) {
      res.status(400).json({
        message: "Validation error",
        error: error.message,
      });
      return;
    }

    // Check if it's a unique constraint error (e.g., duplicate invoice number)
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      res.status(409).json({
        message: "Conflict error",
        error: `A unique constraint was violated: ${error.meta?.target}`,
      });
      return;
    }

    // Default error handling
    res.status(500).json({
      message: `Failed to ${message}`,
      error: error.message || "Unknown error occurred",
    });
  }

  // Get all invoices
  async getInvoices(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoices = await prisma.invoice.findMany({
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
          payments: true,
        },
        orderBy: {
          created_at: "desc",
        },
      });

      res.status(200).json({ invoices });
    } catch (error: any) {
      this.handleError(res, error, "fetch invoices");
    }
  }

  // Get a single invoice by id
  async getInvoice(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);

      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
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
          payments: true,
          source_recurring: true,
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      res.status(200).json({ invoice });
    } catch (error: any) {
      this.handleError(res, error, "fetch invoice");
    }
  }

  // async createInvoice(req: Request, res: Response): Promise<void> {
  //   try {
  //     const userId = req.user?.user_id;

  //     if (!userId) {
  //       res.status(401).json({ message: "User not authenticated" });
  //       return;
  //     }

  //     const {
  //       client_id,
  //       issue_date,
  //       due_date,
  //       items,
  //       notes,
  //       terms,
  //       discount_amount, // Add support for discount
  //       is_recurring,
  //       recurring_pattern,
  //     } = req.body;

  //     // Ensure client_id is converted to an integer
  //     const clientId = parseInt(client_id, 10);

  //     // Check if clientId is a valid number
  //     if (isNaN(clientId)) {
  //       res.status(400).json({ message: "Invalid client ID format" });
  //       return;
  //     }

  //     // Calculate invoice subtotal, tax amount, and total
  //     let subtotal = 0;
  //     let tax_amount = 0;
  //     const discountValue = discount_amount ? parseFloat(discount_amount) : 0;

  //     // Generate a unique invoice number including the client ID
  //     const invoiceNumber = await generateInvoiceNumber(userId, clientId);

  //     // Start a transaction to ensure data consistency
  //     const invoice = await prisma.$transaction(async (prismaClient) => {
  //       // Create the invoice first
  //       const newInvoice = await prismaClient.invoice.create({
  //         data: {
  //           user_id: userId,
  //           client_id: clientId,
  //           invoice_number: invoiceNumber,
  //           issue_date: new Date(issue_date),
  //           due_date: new Date(due_date),
  //           status: "DRAFT" as InvoiceStatus,
  //           subtotal: 0, // Will update this later
  //           tax_amount: 0, // Will update this later
  //           discount_amount: discountValue || null, // Add support for discount
  //           total_amount: 0, // Will update this later
  //           notes,
  //           terms,
  //         },
  //       });

  //       // Create the invoice items and calculate totals
  //       const invoiceItems = [];

  //       for (const item of items) {
  //         // Ensure product_id is an integer
  //         const productId = parseInt(item.product_id, 10);

  //         if (isNaN(productId)) {
  //           throw new Error(`Invalid product ID format: ${item.product_id}`);
  //         }

  //         const product = await prismaClient.product.findFirst({
  //           where: {
  //             product_id: productId,
  //             user_id: userId,
  //           },
  //         });

  //         if (!product) {
  //           throw new Error(`Product with ID ${productId} not found`);
  //         }

  //         const quantity = item.quantity;
  //         const unitPrice = parseFloat(product.price.toString());
  //         const itemAmount = quantity * unitPrice;

  //         let itemTaxAmount = 0;
  //         if (product.tax_rate) {
  //           const taxRate = parseFloat(product.tax_rate.toString());
  //           itemTaxAmount = itemAmount * (taxRate / 100);
  //         }

  //         subtotal += itemAmount;
  //         tax_amount += itemTaxAmount;

  //         const invoiceItem = await prismaClient.invoiceItem.create({
  //           data: {
  //             invoice_id: newInvoice.invoice_id,
  //             product_id: productId,
  //             description: item.description || product.description,
  //             quantity,
  //             unit_price: unitPrice,
  //             tax_rate: product.tax_rate
  //               ? parseFloat(product.tax_rate.toString())
  //               : null,
  //             tax_amount: itemTaxAmount,
  //             amount: itemAmount,
  //           },
  //         });

  //         invoiceItems.push(invoiceItem);
  //       }

  //       // Calculate the total amount with discount
  //       const total_amount = subtotal + tax_amount - (discountValue || 0);

  //       // Update the invoice with calculated totals
  //       const updatedInvoice = await prismaClient.invoice.update({
  //         where: {
  //           invoice_id: newInvoice.invoice_id,
  //         },
  //         data: {
  //           subtotal,
  //           tax_amount,
  //           discount_amount: discountValue || null,
  //           total_amount,
  //         },
  //         include: {
  //           client: true,
  //           items: {
  //             include: {
  //               product: true,
  //             },
  //           },
  //         },
  //       });

  //       // Handle recurring invoice setup if needed
  //       if (is_recurring && recurring_pattern) {
  //         const nextInvoiceDate = calculateNextInvoiceDate(
  //           new Date(due_date),
  //           recurring_pattern as RecurringPattern
  //         );

  //         // Fixed the issue with async in map and the user_id type issue
  //         const itemsToCreate = [];
  //         for (const item of items) {
  //           // Ensure product_id is an integer here too
  //           const productId = parseInt(item.product_id, 10);

  //           if (isNaN(productId)) {
  //             throw new Error(`Invalid product ID format: ${item.product_id}`);
  //           }

  //           const product = await prismaClient.product.findUnique({
  //             where: { product_id: productId },
  //           });

  //           if (product) {
  //             itemsToCreate.push({
  //               product_id: productId,
  //               description: item.description,
  //               quantity: item.quantity,
  //               unit_price: product.price,
  //             });
  //           }
  //         }

  //         await prismaClient.recurringInvoice.create({
  //           data: {
  //             user: {
  //               connect: {
  //                 user_id: userId,
  //               },
  //             },
  //             client: {
  //               connect: {
  //                 client_id: clientId,
  //               },
  //             },
  //             pattern: recurring_pattern as RecurringPattern,
  //             next_invoice_date: nextInvoiceDate,
  //             start_date: new Date(),
  //             is_active: true,
  //             generated_invoices: {
  //               connect: {
  //                 invoice_id: updatedInvoice.invoice_id,
  //               },
  //             },
  //             items: {
  //               create: itemsToCreate,
  //             },
  //           },
  //         });
  //       }

  //       return updatedInvoice;
  //     });

  //     res.status(201).json({
  //       message: "Invoice created successfully",
  //       invoice,
  //     });
  //   } catch (error: any) {
  //     this.handleError(res, error, "create invoice");
  //   }
  // }
  async createInvoice(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const {
        client_id,
        issue_date,
        due_date,
        items,
        notes,
        terms,
        discount_amount,
        is_recurring,
        recurring_pattern,
      } = req.body;

      // Ensure client_id is converted to an integer
      const clientId = parseInt(client_id, 10);

      // Check if clientId is a valid number
      if (isNaN(clientId)) {
        res.status(400).json({ message: "Invalid client ID format" });
        return;
      }

      // Calculate invoice subtotal, tax amount, and total
      let subtotal = 0;
      let tax_amount = 0;
      const discountValue = discount_amount ? parseFloat(discount_amount) : 0;

      // Generate a unique invoice number including the client ID
      const invoiceNumber = await generateInvoiceNumber(userId, clientId);

      // Pisahkan pembuatan invoice dan recurring invoice untuk mengatasi timeout
      try {
        // Buat invoice dalam transaksi dengan timeout yang ditingkatkan
        const invoice = await prisma.$transaction(
          async (prismaClient) => {
            // Create the invoice first
            const newInvoice = await prismaClient.invoice.create({
              data: {
                user_id: userId,
                client_id: clientId,
                invoice_number: invoiceNumber,
                issue_date: new Date(issue_date),
                due_date: new Date(due_date),
                status: "DRAFT" as InvoiceStatus,
                subtotal: 0, // Will update this later
                tax_amount: 0, // Will update this later
                discount_amount: discountValue || null,
                total_amount: 0, // Will update this later
                notes,
                terms,
              },
            });

            // Create the invoice items and calculate totals
            const invoiceItems = [];

            for (const item of items) {
              // Ensure product_id is an integer
              const productId = parseInt(item.product_id, 10);

              if (isNaN(productId)) {
                throw new Error(
                  `Invalid product ID format: ${item.product_id}`
                );
              }

              const product = await prismaClient.product.findFirst({
                where: {
                  product_id: productId,
                  user_id: userId,
                },
              });

              if (!product) {
                throw new Error(`Product with ID ${productId} not found`);
              }

              const quantity = parseFloat(item.quantity);
              const unitPrice = parseFloat(product.price.toString());
              const itemAmount = quantity * unitPrice;

              let itemTaxAmount = 0;
              if (product.tax_rate) {
                const taxRate = parseFloat(product.tax_rate.toString());
                itemTaxAmount = itemAmount * (taxRate / 100);
              }

              subtotal += itemAmount;
              tax_amount += itemTaxAmount;

              const invoiceItem = await prismaClient.invoiceItem.create({
                data: {
                  invoice_id: newInvoice.invoice_id,
                  product_id: productId,
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

              invoiceItems.push(invoiceItem);
            }

            // Calculate the total amount with discount
            const total_amount = subtotal + tax_amount - (discountValue || 0);

            // Update the invoice with calculated totals
            const updatedInvoice = await prismaClient.invoice.update({
              where: {
                invoice_id: newInvoice.invoice_id,
              },
              data: {
                subtotal,
                tax_amount,
                discount_amount: discountValue || null,
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

            return updatedInvoice;
          },
          {
            timeout: 15000, // Meningkatkan timeout menjadi 15 detik
            maxWait: 10000, // Waktu maksimal menunggu untuk mendapatkan koneksi
          }
        );

        // Jika memerlukan recurring, buat recurring di luar transaksi utama
        if (is_recurring && recurring_pattern) {
          try {
            console.log(
              "Setting up recurring invoice with pattern:",
              recurring_pattern
            );

            const nextInvoiceDate = calculateNextInvoiceDate(
              new Date(due_date),
              recurring_pattern as RecurringPattern
            );

            // Siapkan data untuk recurring invoice
            const itemsToCreate = [];
            for (const item of items) {
              const productId = parseInt(item.product_id, 10);

              const product = await prisma.product.findUnique({
                where: { product_id: productId },
              });

              if (product) {
                itemsToCreate.push({
                  product_id: productId,
                  description: item.description || "",
                  quantity: parseFloat(item.quantity),
                  unit_price: parseFloat(product.price.toString()),
                });
              }
            }

            // Buat recurring invoice dengan Direct Assignment
            await prisma.recurringInvoice.create({
              data: {
                user_id: userId,
                client_id: clientId,
                pattern: recurring_pattern as RecurringPattern,
                next_invoice_date: nextInvoiceDate,
                start_date: new Date(),
                is_active: true,
                generated_invoices: {
                  connect: {
                    invoice_id: invoice.invoice_id,
                  },
                },
                items: {
                  create: itemsToCreate,
                },
              },
            });
          } catch (recurringError) {
            console.error("Error creating recurring invoice:", recurringError);
            // Jangan gagalkan seluruh operasi jika recurring gagal
            res.status(201).json({
              message:
                "Invoice created successfully, but failed to set up recurring schedule",
              invoice,
              warning: "Failed to set up recurring schedule",
            });
            return;
          }
        }

        res.status(201).json({
          message: "Invoice created successfully",
          invoice,
        });
      } catch (transactionError) {
        console.error("Transaction error:", transactionError);
        throw transactionError;
      }
    } catch (error: any) {
      console.error("Error creating invoice:", error);
      this.handleError(res, error, "create invoice");
    }
  }

  // Update an existing invoice
  async updateInvoice(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);
      const {
        client_id,
        issue_date,
        due_date,
        items,
        notes,
        terms,
        discount_amount, // Add support for discount
        is_recurring,
        recurring_pattern,
      } = req.body;

      // Ensure client_id is converted to an integer
      const clientId = parseInt(client_id, 10);

      // Check if clientId is a valid number
      if (isNaN(clientId)) {
        res.status(400).json({ message: "Invalid client ID format" });
        return;
      }

      // Check if invoice exists and belongs to the user
      const existingInvoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!existingInvoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      // Calculate invoice subtotal, tax amount, and total
      let subtotal = 0;
      let tax_amount = 0;
      const discountValue = discount_amount ? parseFloat(discount_amount) : 0;

      // Start a transaction to ensure data consistency
      const updatedInvoice = await prisma.$transaction(async (prismaClient) => {
        // First, update the basic invoice data
        const invoice = await prismaClient.invoice.update({
          where: {
            invoice_id: invoiceId,
          },
          data: {
            client_id: clientId, // Use the parsed integer value
            issue_date: new Date(issue_date),
            due_date: new Date(due_date),
            notes,
            terms,
            discount_amount: discountValue || null, // Add support for discount
          },
        });

        // Delete existing invoice items
        await prismaClient.invoiceItem.deleteMany({
          where: {
            invoice_id: invoiceId,
          },
        });

        // Create new invoice items and calculate totals
        for (const item of items) {
          // Ensure product_id is an integer
          const productId = parseInt(item.product_id, 10);

          if (isNaN(productId)) {
            throw new Error(`Invalid product ID format: ${item.product_id}`);
          }

          const product = await prismaClient.product.findFirst({
            where: {
              product_id: productId,
              user_id: userId,
            },
          });

          if (!product) {
            throw new Error(`Product with ID ${productId} not found`);
          }

          const quantity = item.quantity;
          const unitPrice = parseFloat(product.price.toString());
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
              invoice_id: invoiceId,
              product_id: productId,
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

        // Calculate the total amount with discount
        const total_amount = subtotal + tax_amount - (discountValue || 0);

        // Update the invoice with calculated totals
        const finalInvoice = await prismaClient.invoice.update({
          where: {
            invoice_id: invoiceId,
          },
          data: {
            subtotal,
            tax_amount,
            discount_amount: discountValue || null,
            total_amount,
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
        });

        // Handle recurring invoice updates if applicable
        if (
          existingInvoice.source_recurring_id &&
          is_recurring &&
          recurring_pattern
        ) {
          // Fixed the issue with async in map
          const itemsToCreate = [];
          for (const item of items) {
            // Ensure product_id is an integer here too
            const productId = parseInt(item.product_id, 10);

            if (isNaN(productId)) {
              throw new Error(`Invalid product ID format: ${item.product_id}`);
            }

            const product = await prismaClient.product.findUnique({
              where: { product_id: productId },
            });

            if (product) {
              itemsToCreate.push({
                product_id: productId,
                description: item.description,
                quantity: item.quantity,
                unit_price: product.price,
              });
            }
          }

          // Update existing recurring invoice
          await prismaClient.recurringInvoice.update({
            where: {
              id: existingInvoice.source_recurring_id,
            },
            data: {
              pattern: recurring_pattern as RecurringPattern,
              items: {
                deleteMany: {},
                create: itemsToCreate,
              },
            },
          });
        } else if (
          is_recurring &&
          recurring_pattern &&
          !existingInvoice.source_recurring_id
        ) {
          // Fixed the issue with async in map
          const itemsToCreate = [];
          for (const item of items) {
            // Ensure product_id is an integer here too
            const productId = parseInt(item.product_id, 10);

            if (isNaN(productId)) {
              throw new Error(`Invalid product ID format: ${item.product_id}`);
            }

            const product = await prismaClient.product.findUnique({
              where: { product_id: productId },
            });

            if (product) {
              itemsToCreate.push({
                product_id: productId,
                description: item.description,
                quantity: item.quantity,
                unit_price: product.price,
              });
            }
          }

          // Create new recurring invoice with proper user and client connections
          const nextInvoiceDate = calculateNextInvoiceDate(
            new Date(due_date),
            recurring_pattern as RecurringPattern
          );

          const recurringInvoice = await prismaClient.recurringInvoice.create({
            data: {
              user: {
                connect: {
                  user_id: userId,
                },
              },
              client: {
                connect: {
                  client_id: clientId,
                },
              },
              pattern: recurring_pattern as RecurringPattern,
              next_invoice_date: nextInvoiceDate,
              start_date: new Date(),
              is_active: true,
              generated_invoices: {
                connect: {
                  invoice_id: invoiceId,
                },
              },
              items: {
                create: itemsToCreate,
              },
            },
          });

          // Update the invoice with the recurring invoice ID
          await prismaClient.invoice.update({
            where: {
              invoice_id: invoiceId,
            },
            data: {
              source_recurring_id: recurringInvoice.id,
            },
          });
        }

        return finalInvoice;
      });

      res.status(200).json({
        message: "Invoice updated successfully",
        invoice: updatedInvoice,
      });
    } catch (error: any) {
      this.handleError(res, error, "update invoice");
    }
  }

  // Delete an invoice (soft delete)
  async deleteInvoice(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);
      const { confirmed } = req.body;

      // Check if the confirmation flag is provided
      if (!confirmed) {
        res.status(400).json({
          message: "Please confirm the deletion of this invoice",
          requireConfirmation: true,
        });
        return;
      }

      // Check if invoice exists and belongs to the user
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      // Soft delete the invoice
      await prisma.invoice.update({
        where: {
          invoice_id: invoiceId,
        },
        data: {
          deleted_at: new Date(),
        },
      });

      res.status(200).json({
        message: "Invoice deleted successfully",
      });
    } catch (error: any) {
      this.handleError(res, error, "delete invoice");
    }
  }

  // Change invoice status
  async changeStatus(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);
      const { status } = req.body;

      // Validate status
      if (!Object.values(InvoiceStatus).includes(status as InvoiceStatus)) {
        res.status(400).json({ message: "Invalid status value" });
        return;
      }

      // Check if invoice exists and belongs to the user
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      // Update the invoice status
      const updatedInvoice = await prisma.invoice.update({
        where: {
          invoice_id: invoiceId,
        },
        data: {
          status: status as InvoiceStatus,
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
      });

      res.status(200).json({
        message: "Invoice status updated successfully",
        invoice: updatedInvoice,
      });
    } catch (error: any) {
      this.handleError(res, error, "change invoice status");
    }
  }

  // Get invoice payments
  async getInvoicePayments(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);

      // Check if invoice exists and belongs to the user
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      // Get the payments for this invoice
      const payments = await prisma.payment.findMany({
        where: {
          invoice_id: invoiceId,
        },
        orderBy: {
          payment_date: "desc",
        },
      });

      res.status(200).json({ payments });
    } catch (error: any) {
      this.handleError(res, error, "fetch invoice payments");
    }
  }

  // Add a payment to an invoice
  async addPayment(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const {
        invoice_id,
        amount,
        payment_date,
        payment_method,
        reference,
        notes,
      } = req.body;

      // Ensure invoice_id is converted to an integer
      const invoiceId = parseInt(invoice_id, 10);

      // Check if invoiceId is a valid number
      if (isNaN(invoiceId)) {
        res.status(400).json({ message: "Invalid invoice ID format" });
        return;
      }

      // Check if invoice exists and belongs to the user with all required relations for PDF generation
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
          user_id: userId,
          deleted_at: null,
        },
        include: {
          client: true,
          payments: true,
          items: {
            include: {
              product: true,
            },
          },
          user: {
            include: {
              profile: {
                include: {
                  bank_accounts: true,
                  e_wallets: true,
                },
              },
            },
          },
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      // Create the payment
      const payment = await prisma.payment.create({
        data: {
          invoice_id: invoiceId,
          amount: parseFloat(amount),
          payment_date: new Date(payment_date),
          payment_method,
          reference,
          notes,
        },
      });

      // Calculate total paid amount
      const totalPaid = [...invoice.payments, payment].reduce(
        (sum, payment) => sum + parseFloat(payment.amount.toString()),
        0
      );

      // Get the actual invoice total (considering discount if any)
      const invoiceTotal = parseFloat(invoice.total_amount.toString());

      // Update invoice status based on payment
      let newStatus = invoice.status;
      let statusChanged = false;
      let isPartial = false;

      if (totalPaid >= invoiceTotal) {
        newStatus = "PAID" as InvoiceStatus;
        statusChanged = true;
      } else if (totalPaid > 0) {
        newStatus = "PARTIAL" as InvoiceStatus;
        statusChanged = true;
        isPartial = true;
      }

      // Update invoice status in the database if changed
      if (newStatus !== invoice.status) {
        await prisma.invoice.update({
          where: {
            invoice_id: invoiceId,
          },
          data: {
            status: newStatus,
          },
        });

        // PENTING: Update status pada objek invoice di memori
        // untuk memastikan PDF mencerminkan status terbaru
        invoice.status = newStatus;
      }

      // Send payment confirmation email to client
      if (invoice.client && invoice.client.email) {
        try {
          // Format amount with currency
          const formattedAmount = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(parseFloat(amount));

          // Format payment date
          const formattedPaymentDate = new Date(
            payment_date
          ).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          // Get business information
          const businessName =
            invoice.user?.profile?.company_name || "Your Business";
          const businessEmail = invoice.user?.email || "";
          const businessPhone = invoice.user?.phone || "";
          const businessAddress = invoice.user?.profile?.address || "";

          // Calculate remaining balance if partial payment
          let remainingBalance;
          if (isPartial) {
            const remaining = invoiceTotal - totalPaid;
            remainingBalance = new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(remaining);
          }

          // Create payment link if available
          const paymentLink = process.env.PAYMENT_GATEWAY_URL
            ? `${process.env.PAYMENT_GATEWAY_URL}/invoice/${invoiceId}`
            : undefined;

          // Get bank accounts and e-wallets for partial payments
          const bankAccounts = isPartial
            ? invoice.user?.profile?.bank_accounts || null
            : null;
          const eWallets = isPartial
            ? invoice.user?.profile?.e_wallets || null
            : null;

          // Tambahkan pembayaran baru ke array payments
          // Ini memastikan PDF melihat semua pembayaran termasuk yang baru ditambahkan
          invoice.payments.push(payment);

          // Generate PDF invoice for attachment with updated status
          let pdfBuffer: Buffer | undefined;
          try {
            console.log(`Generating PDF with status: ${invoice.status}`);
            pdfBuffer = await generateInvoicePdf(
              invoice as unknown as InvoiceForPDF
            );
          } catch (pdfError) {
            console.error(
              "Failed to generate PDF for payment confirmation:",
              pdfError
            );
            // Continue without PDF if generation fails
          }

          // Send payment confirmation email
          await sendPaymentConfirmation(
            invoice.client.email,
            invoice.invoice_number,
            businessName,
            formattedAmount,
            formattedPaymentDate,
            payment_method,
            newStatus,
            invoice.client.name,
            businessEmail,
            businessPhone,
            businessAddress,
            isPartial,
            remainingBalance,
            pdfBuffer,
            paymentLink,
            bankAccounts,
            eWallets
          );

          console.log(
            `Payment confirmation email sent to ${invoice.client.email} for invoice ${invoice.invoice_number}`
          );
        } catch (emailError) {
          console.error(
            "Failed to send payment confirmation email:",
            emailError
          );
          // Don't return an error to the client, just log it
        }
      }

      res.status(201).json({
        message: "Payment added successfully",
        payment,
        invoice_status: newStatus,
        total_paid: totalPaid,
        remaining_amount: Math.max(0, invoiceTotal - totalPaid),
      });
    } catch (error: any) {
      this.handleError(res, error, "add payment");
    }
  }

  /**
   * Get product usage in invoices
   */
  async getProductUsage(req: Request, res: Response): Promise<void> {
    try {
      const { productId } = req.params;
      const userId = req.user!.user_id;

      // Convert productId to number
      const productIdNum = parseInt(productId, 10);

      // Check if productIdNum is a valid number
      if (isNaN(productIdNum)) {
        res.status(400).json({ message: "Invalid product ID format" });
        return;
      }

      // Get the product service (you may need to inject this in your constructor)
      const productService = new ProductService();

      // Check if product exists and belongs to user
      const product = await productService.getProductById(productIdNum, userId);

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      // Get product usage in invoices
      const usage = await productService.getProductUsage(productIdNum);

      // Return in the format the frontend expects
      res.status(200).json(usage);
    } catch (error) {
      this.handleError(res, error, "fetch product usage");
    }
  }

  sendInvoiceEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.user_id;
      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);

      // Get complete invoice data with all required relations
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
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
          user: {
            include: {
              profile: {
                include: {
                  bank_accounts: true,
                  e_wallets: true,
                },
              },
            },
          },
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      if (!invoice.client || !invoice.client.email) {
        res.status(400).json({ message: "Client email not found" });
        return;
      }

      // Get business profile data
      const businessName =
        invoice.user?.profile?.company_name || "Your Business";
      const businessEmail = invoice.user?.email || "";
      const businessPhone = invoice.user?.phone || "";
      const businessAddress = invoice.user?.profile?.address || "";

      // Extract bank accounts and e-wallets
      const bankAccounts = invoice.user?.profile?.bank_accounts || null;
      const eWallets = invoice.user?.profile?.e_wallets || null;

      // Format due date
      const dueDate = new Date(invoice.due_date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // Format amount
      const amount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(invoice.total_amount));

      // Generate PDF invoice
      const pdfBuffer = await generateInvoicePdf(
        invoice as unknown as InvoiceForPDF
      );

      const paymentLink = process.env.PAYMENT_GATEWAY_URL
        ? `${process.env.PAYMENT_GATEWAY_URL}/invoice/${invoiceId}`
        : undefined;

      // Send email with PDF attachment
      const emailSent = await sendInvoiceWithPdf(
        invoice.client.email,
        invoice.invoice_number,
        businessName,
        amount,
        dueDate,
        invoice.client.name,
        businessEmail,
        businessPhone,
        businessAddress,
        pdfBuffer,
        paymentLink,
        bankAccounts,
        eWallets
      );

      if (emailSent) {
        // Update invoice status to PENDING if it was DRAFT
        if (invoice.status === "DRAFT") {
          await prisma.invoice.update({
            where: { invoice_id: invoiceId },
            data: { status: "PENDING" },
          });
        }

        res.status(200).json({
          message: "Invoice successfully sent with PDF attachment",
          invoice_id: invoiceId,
          client_email: invoice.client.email,
        });
      } else {
        res.status(500).json({ message: "Failed to send invoice email" });
      }
    } catch (error: any) {
      this.handleError(res, error, "send invoice email");
    }
  };

  sendReminderEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.user_id;
      if (!userId) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const invoiceId = parseInt(req.params.id);

      // Get complete invoice data with all required relations
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoice_id: invoiceId,
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
          user: {
            include: {
              profile: {
                include: {
                  bank_accounts: true,
                  e_wallets: true,
                },
              },
            },
          },
        },
      });

      if (!invoice) {
        res.status(404).json({ message: "Invoice not found" });
        return;
      }

      if (!invoice.client || !invoice.client.email) {
        res.status(400).json({ message: "Client email not found" });
        return;
      }

      // Get business profile data
      const businessName =
        invoice.user?.profile?.company_name || "Your Business";
      const businessEmail = invoice.user?.email || "";
      const businessPhone = invoice.user?.phone || "";
      const businessAddress = invoice.user?.profile?.address || "";

      // Extract bank accounts and e-wallets
      const bankAccounts = invoice.user?.profile?.bank_accounts || null;
      const eWallets = invoice.user?.profile?.e_wallets || null;

      // Format due date
      const dueDate = new Date(invoice.due_date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      // Format amount
      const amount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Number(invoice.total_amount));

      // Check if invoice is overdue
      const isOverdue = new Date(invoice.due_date) < new Date();
      const reminderSubject = isOverdue
        ? `OVERDUE INVOICE: #${invoice.invoice_number}`
        : `Payment Reminder: Invoice #${invoice.invoice_number}`;

      // Generate PDF invoice
      const pdfBuffer = await generateInvoicePdf(
        invoice as unknown as InvoiceForPDF
      );

      // Optional: Create payment link if available
      const paymentLink = process.env.PAYMENT_GATEWAY_URL
        ? `${process.env.PAYMENT_GATEWAY_URL}/invoice/${invoiceId}`
        : undefined;

      // Send email with PDF attachment
      const emailSent = await sendReminderWithPdf(
        invoice.client.email,
        invoice.invoice_number,
        businessName,
        amount,
        dueDate,
        invoice.client.name,
        businessEmail,
        businessPhone,
        businessAddress,
        pdfBuffer,
        isOverdue,
        paymentLink,
        bankAccounts,
        eWallets
      );

      if (emailSent) {
        res.status(200).json({
          message: "Reminder email successfully sent with PDF attachment",
          invoice_id: invoiceId,
          client_email: invoice.client.email,
          is_overdue: isOverdue,
        });
      } else {
        res.status(500).json({ message: "Failed to send reminder email" });
      }
    } catch (error: any) {
      this.handleError(res, error, "send reminder email");
    }
  };
}
