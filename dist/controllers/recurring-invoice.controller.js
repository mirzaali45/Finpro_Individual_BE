"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringInvoiceController = void 0;
const client_1 = require("../../prisma/generated/client");
const client_2 = require("../../prisma/generated/client");
const dateUtils_1 = require("../utils/dateUtils");
const invoice_utils_1 = require("../utils/invoice.utils");
const prisma = new client_1.PrismaClient();
class RecurringInvoiceController {
    constructor() {
        // Get all recurring invoices
        this.getRecurringInvoices = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringInvoices = yield prisma.recurringInvoice.findMany({
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
            }
            catch (error) {
                this.handleError(res, error, "fetch recurring invoices");
            }
        });
        // Get a single recurring invoice by id
        this.getRecurringInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                const recurringInvoice = yield prisma.recurringInvoice.findFirst({
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
            }
            catch (error) {
                this.handleError(res, error, "fetch recurring invoice");
            }
        });
        this.createRecurringInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const { client_id, pattern, next_invoice_date, items, source_invoice_id, } = req.body;
                // Pastikan client_id adalah number
                const clientId = parseInt(client_id, 10);
                // Validasi clientId
                if (isNaN(clientId)) {
                    res.status(400).json({ message: "Invalid client ID format" });
                    return;
                }
                // Validate pattern
                if (!Object.values(client_2.RecurringPattern).includes(pattern)) {
                    res.status(400).json({ message: "Invalid recurring pattern" });
                    return;
                }
                console.log("Creating recurring invoice with pattern:", pattern);
                console.log("Items received:", JSON.stringify(items));
                // Persiapkan dan validasi item di luar transaksi untuk mengurangi waktu transaksi
                const preparedItems = [];
                for (const item of items) {
                    const productId = parseInt(item.product_id, 10);
                    if (isNaN(productId)) {
                        res
                            .status(400)
                            .json({ message: `Invalid product ID format: ${item.product_id}` });
                        return;
                    }
                    const product = yield prisma.product.findFirst({
                        where: {
                            product_id: productId,
                            user_id: userId,
                        },
                    });
                    if (!product) {
                        res
                            .status(404)
                            .json({ message: `Product with ID ${productId} not found` });
                        return;
                    }
                    const quantity = parseInt(item.quantity, 10);
                    if (isNaN(quantity)) {
                        res
                            .status(400)
                            .json({ message: `Invalid quantity format: ${item.quantity}` });
                        return;
                    }
                    preparedItems.push({
                        product_id: productId,
                        description: item.description || product.description || "",
                        quantity: quantity,
                        unit_price: parseFloat(product.price.toString()),
                    });
                }
                // Buat recurring invoice dasar tanpa relasi kompleks
                try {
                    // Buat recurring invoice dasar
                    const newRecurringInvoice = yield prisma.recurringInvoice.create({
                        data: {
                            user_id: userId,
                            client_id: clientId,
                            pattern: pattern,
                            next_invoice_date: new Date(next_invoice_date),
                            start_date: new Date(),
                            is_active: true,
                        },
                    });
                    console.log("Created recurring invoice base:", newRecurringInvoice.id);
                    // Buat item untuk recurring invoice secara terpisah
                    for (const item of preparedItems) {
                        yield prisma.recurringInvoiceItem.create({
                            data: {
                                recurring_id: newRecurringInvoice.id,
                                product_id: item.product_id,
                                description: item.description,
                                quantity: item.quantity,
                                unit_price: item.unit_price,
                            },
                        });
                    }
                    // Tangani source invoice jika ada
                    if (source_invoice_id) {
                        const sourceId = parseInt(source_invoice_id, 10);
                        if (!isNaN(sourceId)) {
                            const invoice = yield prisma.invoice.findFirst({
                                where: {
                                    invoice_id: sourceId,
                                    user_id: userId,
                                    deleted_at: null,
                                },
                            });
                            if (invoice) {
                                // Update invoice dengan source_recurring_id
                                yield prisma.invoice.update({
                                    where: {
                                        invoice_id: sourceId,
                                    },
                                    data: {
                                        source_recurring_id: newRecurringInvoice.id,
                                    },
                                });
                                // Update recurring invoice untuk connect ke invoice
                                yield prisma.recurringInvoice.update({
                                    where: {
                                        id: newRecurringInvoice.id,
                                    },
                                    data: {
                                        generated_invoices: {
                                            connect: {
                                                invoice_id: sourceId,
                                            },
                                        },
                                    },
                                });
                            }
                        }
                    }
                    // Ambil data lengkap untuk response
                    const recurringInvoice = yield prisma.recurringInvoice.findUnique({
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
                    res.status(201).json({
                        message: "Recurring invoice created successfully",
                        recurringInvoice,
                    });
                }
                catch (creationError) {
                    console.error("Error creating recurring invoice:", creationError);
                    throw creationError;
                }
            }
            catch (error) {
                console.error("Error in createRecurringInvoice:", error);
                this.handleError(res, error, "create recurring invoice");
            }
        });
        // Create a new recurring invoice
        // createRecurringInvoice = async (
        //   req: Request,
        //   res: Response
        // ): Promise<void> => {
        //   try {
        //     const userId = req.user?.user_id;
        //     if (!userId) {
        //       res.status(401).json({ message: "User not authenticated" });
        //       return;
        //     }
        //     const {
        //       client_id,
        //       pattern,
        //       next_invoice_date,
        //       items,
        //       source_invoice_id,
        //     } = req.body;
        //     // Validate pattern
        //     if (
        //       !Object.values(RecurringPattern).includes(pattern as RecurringPattern)
        //     ) {
        //       res.status(400).json({ message: "Invalid recurring pattern" });
        //       return;
        //     }
        //     // Start a transaction to ensure data consistency
        //     const recurringInvoice = await prisma.$transaction(
        //       async (prismaClient) => {
        //         // Create the recurring invoice
        //         const newRecurringInvoice =
        //           await prismaClient.recurringInvoice.create({
        //             data: {
        //               user: {
        //                 connect: {
        //                   user_id: userId,
        //                 },
        //               },
        //               client: {
        //                 connect: {
        //                   client_id,
        //                 },
        //               },
        //               pattern: pattern as RecurringPattern,
        //               next_invoice_date: new Date(next_invoice_date),
        //               start_date: new Date(),
        //               is_active: true,
        //             },
        //           });
        //         // Create recurring invoice items
        //         for (const item of items) {
        //           const product = await prismaClient.product.findFirst({
        //             where: {
        //               product_id: item.product_id,
        //               user_id: userId,
        //             },
        //           });
        //           if (!product) {
        //             throw new Error(`Product with ID ${item.product_id} not found`);
        //           }
        //           await prismaClient.recurringInvoiceItem.create({
        //             data: {
        //               recurring_id: newRecurringInvoice.id,
        //               product_id: product.product_id,
        //               description: item.description || product.description,
        //               quantity: item.quantity,
        //               unit_price: product.price,
        //             },
        //           });
        //         }
        //         // If a source invoice ID is provided, connect it to this recurring invoice
        //         if (source_invoice_id) {
        //           const invoice = await prismaClient.invoice.findFirst({
        //             where: {
        //               invoice_id: source_invoice_id,
        //               user_id: userId,
        //               deleted_at: null,
        //             },
        //           });
        //           if (invoice) {
        //             await prismaClient.invoice.update({
        //               where: {
        //                 invoice_id: source_invoice_id,
        //               },
        //               data: {
        //                 source_recurring_id: newRecurringInvoice.id,
        //               },
        //             });
        //           }
        //         }
        //         // Return the created recurring invoice with its related data
        //         return prismaClient.recurringInvoice.findUnique({
        //           where: {
        //             id: newRecurringInvoice.id,
        //           },
        //           include: {
        //             client: true,
        //             items: {
        //               include: {
        //                 product: true,
        //               },
        //             },
        //             generated_invoices: true,
        //           },
        //         });
        //       }
        //     );
        //     res.status(201).json({
        //       message: "Recurring invoice created successfully",
        //       recurringInvoice,
        //     });
        //   } catch (error: any) {
        //     this.handleError(res, error, "create recurring invoice");
        //   }
        // };
        // Update an existing recurring invoice
        this.updateRecurringInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                const { pattern, next_invoice_date, is_active, items } = req.body;
                // Check if recurring invoice exists and belongs to the user
                const existingRecurringInvoice = yield prisma.recurringInvoice.findFirst({
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
                const updatedRecurringInvoice = yield prisma.$transaction((prismaClient) => __awaiter(this, void 0, void 0, function* () {
                    // First, update the basic recurring invoice data
                    const updateData = {};
                    if (pattern &&
                        Object.values(client_2.RecurringPattern).includes(pattern)) {
                        updateData.pattern = pattern;
                    }
                    if (next_invoice_date) {
                        updateData.next_invoice_date = new Date(next_invoice_date);
                    }
                    if (is_active !== undefined) {
                        updateData.is_active = is_active;
                    }
                    const recurringInvoice = yield prismaClient.recurringInvoice.update({
                        where: {
                            id: recurringId,
                        },
                        data: updateData,
                    });
                    // If items are provided, update them
                    if (items && items.length > 0) {
                        // Delete existing items
                        yield prismaClient.recurringInvoiceItem.deleteMany({
                            where: {
                                recurring_id: recurringId,
                            },
                        });
                        // Create new items
                        for (const item of items) {
                            const product = yield prismaClient.product.findFirst({
                                where: {
                                    product_id: item.product_id,
                                    user_id: userId,
                                },
                            });
                            if (!product) {
                                throw new Error(`Product with ID ${item.product_id} not found`);
                            }
                            yield prismaClient.recurringInvoiceItem.create({
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
                }));
                res.status(200).json({
                    message: "Recurring invoice updated successfully",
                    recurringInvoice: updatedRecurringInvoice,
                });
            }
            catch (error) {
                this.handleError(res, error, "update recurring invoice");
            }
        });
        // Delete a recurring invoice (soft delete)
        this.deleteRecurringInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id; // Changed from req.user?.id to req.user?.user_id
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                const { confirmed } = req.body;
                // Check if the confirmation flag is provided
                if (!confirmed) {
                    res.status(400).json({
                        message: "Please confirm the deletion of this recurring invoice",
                        requireConfirmation: true,
                    });
                    return;
                }
                // Check if recurring invoice exists and belongs to the user
                const recurringInvoice = yield prisma.recurringInvoice.findFirst({
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
                yield prisma.recurringInvoice.update({
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
            }
            catch (error) {
                this.handleError(res, error, "delete recurring invoice");
            }
        });
        // Activate a recurring invoice
        this.activateRecurringInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                // Check if recurring invoice exists and belongs to the user
                const recurringInvoice = yield prisma.recurringInvoice.findFirst({
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
                const updatedRecurringInvoice = yield prisma.recurringInvoice.update({
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
            }
            catch (error) {
                this.handleError(res, error, "activate recurring invoice");
            }
        });
        // Deactivate a recurring invoice
        this.deactivateRecurringInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                // Check if recurring invoice exists and belongs to the user
                const recurringInvoice = yield prisma.recurringInvoice.findFirst({
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
                const updatedRecurringInvoice = yield prisma.recurringInvoice.update({
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
            }
            catch (error) {
                this.handleError(res, error, "deactivate recurring invoice");
            }
        });
        // Get generated invoices from a recurring invoice
        this.getGeneratedInvoices = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                // Check if recurring invoice exists and belongs to the user
                const recurringInvoice = yield prisma.recurringInvoice.findFirst({
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
                const invoices = yield prisma.invoice.findMany({
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
            }
            catch (error) {
                this.handleError(res, error, "fetch generated invoices");
            }
        });
        // Manually generate an invoice from a recurring template
        this.generateInvoiceManually = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const recurringId = parseInt(req.params.id);
                // Check if recurring invoice exists and belongs to the user
                const recurringInvoice = yield prisma.recurringInvoice.findFirst({
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
                const invoice = yield prisma.$transaction((prismaClient) => __awaiter(this, void 0, void 0, function* () {
                    // Get client ID
                    const clientId = recurringInvoice.client_id;
                    // Generate a unique invoice number with client ID
                    const invoiceNumber = yield (0, invoice_utils_1.generateInvoiceNumber)(userId, clientId);
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
                    // Default discount is null (no discount)
                    const discount_amount = null;
                    // Create the invoice
                    const newInvoice = yield prismaClient.invoice.create({
                        data: {
                            user_id: userId,
                            client_id: clientId,
                            invoice_number: invoiceNumber,
                            issue_date: issueDate,
                            due_date: dueDate,
                            status: "PENDING",
                            subtotal: 0, // Will update this later
                            tax_amount: 0, // Will update this later
                            discount_amount: discount_amount, // Set discount amount
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
                        yield prismaClient.invoiceItem.create({
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
                    // Calculate the total amount (considering any discount)
                    const total_amount = subtotal + tax_amount - (discount_amount || 0);
                    // Update the invoice with calculated totals
                    const updatedInvoice = yield prismaClient.invoice.update({
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
                    const nextInvoiceDate = (0, dateUtils_1.calculateNextInvoiceDate)(new Date(), recurringInvoice.pattern);
                    yield prismaClient.recurringInvoice.update({
                        where: {
                            id: recurringId,
                        },
                        data: {
                            next_invoice_date: nextInvoiceDate,
                        },
                    });
                    return updatedInvoice;
                }));
                res.status(201).json({
                    message: "Invoice generated successfully",
                    invoice,
                });
            }
            catch (error) {
                this.handleError(res, error, "generate invoice");
            }
        });
    }
    // Helper method for error handling
    handleError(res, error, message) {
        var _a;
        console.error(`Error ${message}:`, error);
        // Check if it's a validation error from Prisma
        if (error instanceof client_2.Prisma.PrismaClientValidationError) {
            res.status(400).json({
                message: "Validation error",
                error: error.message,
            });
            return;
        }
        // Check if it's a unique constraint error
        if (error instanceof client_2.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002") {
            res.status(409).json({
                message: "Conflict error",
                error: `A unique constraint was violated: ${(_a = error.meta) === null || _a === void 0 ? void 0 : _a.target}`,
            });
            return;
        }
        // Default error handling
        res.status(500).json({
            message: `Failed to ${message}`,
            error: error.message || "Unknown error occurred",
        });
    }
}
exports.RecurringInvoiceController = RecurringInvoiceController;
