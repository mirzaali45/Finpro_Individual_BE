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
exports.InvoiceController = void 0;
const client_1 = require("../../prisma/generated/client");
const invoice_utils_1 = require("../utils/invoice.utils");
const client_2 = require("../../prisma/generated/client");
const dateUtils_1 = require("../utils/dateUtils");
const ProductService_1 = require("../services/ProductService");
const mailer_1 = require("../services/mailer");
const PdfGeneator_1 = require("../services/PdfGeneator");
const prisma = new client_1.PrismaClient();
class InvoiceController {
    constructor() {
        this.sendInvoiceEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoiceId = parseInt(req.params.id);
                // Get complete invoice data with all required relations
                const invoice = yield prisma.invoice.findFirst({
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
                const businessName = ((_c = (_b = invoice.user) === null || _b === void 0 ? void 0 : _b.profile) === null || _c === void 0 ? void 0 : _c.company_name) || "Your Business";
                const businessEmail = ((_d = invoice.user) === null || _d === void 0 ? void 0 : _d.email) || "";
                const businessPhone = ((_e = invoice.user) === null || _e === void 0 ? void 0 : _e.phone) || "";
                const businessAddress = ((_g = (_f = invoice.user) === null || _f === void 0 ? void 0 : _f.profile) === null || _g === void 0 ? void 0 : _g.address) || "";
                // Extract bank accounts and e-wallets
                const bankAccounts = ((_j = (_h = invoice.user) === null || _h === void 0 ? void 0 : _h.profile) === null || _j === void 0 ? void 0 : _j.bank_accounts) || null;
                const eWallets = ((_l = (_k = invoice.user) === null || _k === void 0 ? void 0 : _k.profile) === null || _l === void 0 ? void 0 : _l.e_wallets) || null;
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
                const pdfBuffer = yield (0, PdfGeneator_1.generateInvoicePdf)(invoice);
                const paymentLink = process.env.PAYMENT_GATEWAY_URL
                    ? `${process.env.PAYMENT_GATEWAY_URL}/invoice/${invoiceId}`
                    : undefined;
                // Send email with PDF attachment
                const emailSent = yield (0, mailer_1.sendInvoiceWithPdf)(invoice.client.email, invoice.invoice_number, businessName, amount, dueDate, invoice.client.name, businessEmail, businessPhone, businessAddress, pdfBuffer, paymentLink, bankAccounts, eWallets);
                if (emailSent) {
                    // Update invoice status to PENDING if it was DRAFT
                    if (invoice.status === "DRAFT") {
                        yield prisma.invoice.update({
                            where: { invoice_id: invoiceId },
                            data: { status: "PENDING" },
                        });
                    }
                    res.status(200).json({
                        message: "Invoice successfully sent with PDF attachment",
                        invoice_id: invoiceId,
                        client_email: invoice.client.email,
                    });
                }
                else {
                    res.status(500).json({ message: "Failed to send invoice email" });
                }
            }
            catch (error) {
                this.handleError(res, error, "send invoice email");
            }
        });
        this.sendReminderEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoiceId = parseInt(req.params.id);
                // Get complete invoice data with all required relations
                const invoice = yield prisma.invoice.findFirst({
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
                const businessName = ((_c = (_b = invoice.user) === null || _b === void 0 ? void 0 : _b.profile) === null || _c === void 0 ? void 0 : _c.company_name) || "Your Business";
                const businessEmail = ((_d = invoice.user) === null || _d === void 0 ? void 0 : _d.email) || "";
                const businessPhone = ((_e = invoice.user) === null || _e === void 0 ? void 0 : _e.phone) || "";
                const businessAddress = ((_g = (_f = invoice.user) === null || _f === void 0 ? void 0 : _f.profile) === null || _g === void 0 ? void 0 : _g.address) || "";
                // Extract bank accounts and e-wallets
                const bankAccounts = ((_j = (_h = invoice.user) === null || _h === void 0 ? void 0 : _h.profile) === null || _j === void 0 ? void 0 : _j.bank_accounts) || null;
                const eWallets = ((_l = (_k = invoice.user) === null || _k === void 0 ? void 0 : _k.profile) === null || _l === void 0 ? void 0 : _l.e_wallets) || null;
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
                const pdfBuffer = yield (0, PdfGeneator_1.generateInvoicePdf)(invoice);
                // Optional: Create payment link if available
                const paymentLink = process.env.PAYMENT_GATEWAY_URL
                    ? `${process.env.PAYMENT_GATEWAY_URL}/invoice/${invoiceId}`
                    : undefined;
                // Send email with PDF attachment
                const emailSent = yield (0, mailer_1.sendReminderWithPdf)(invoice.client.email, invoice.invoice_number, businessName, amount, dueDate, invoice.client.name, businessEmail, businessPhone, businessAddress, pdfBuffer, isOverdue, paymentLink, bankAccounts, eWallets);
                if (emailSent) {
                    res.status(200).json({
                        message: "Reminder email successfully sent with PDF attachment",
                        invoice_id: invoiceId,
                        client_email: invoice.client.email,
                        is_overdue: isOverdue,
                    });
                }
                else {
                    res.status(500).json({ message: "Failed to send reminder email" });
                }
            }
            catch (error) {
                this.handleError(res, error, "send reminder email");
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
        // Check if it's a unique constraint error (e.g., duplicate invoice number)
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
    // Get all invoices
    getInvoices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoices = yield prisma.invoice.findMany({
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
            }
            catch (error) {
                this.handleError(res, error, "fetch invoices");
            }
        });
    }
    // Get a single invoice by id
    getInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoiceId = parseInt(req.params.id);
                const invoice = yield prisma.invoice.findFirst({
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
            }
            catch (error) {
                this.handleError(res, error, "fetch invoice");
            }
        });
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
    createInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const { client_id, issue_date, due_date, items, notes, terms, discount_amount, is_recurring, recurring_pattern, } = req.body;
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
                const invoiceNumber = yield (0, invoice_utils_1.generateInvoiceNumber)(userId, clientId);
                // Start a transaction to ensure data consistency
                try {
                    // Wrap the entire transaction in another try/catch for better error logging
                    const invoice = yield prisma.$transaction((prismaClient) => __awaiter(this, void 0, void 0, function* () {
                        // Create the invoice first
                        const newInvoice = yield prismaClient.invoice.create({
                            data: {
                                user_id: userId,
                                client_id: clientId,
                                invoice_number: invoiceNumber,
                                issue_date: new Date(issue_date),
                                due_date: new Date(due_date),
                                status: "DRAFT",
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
                            // Log item for debugging
                            console.log("Processing item:", JSON.stringify(item));
                            // Ensure product_id is an integer
                            const productId = parseInt(item.product_id, 10);
                            if (isNaN(productId)) {
                                throw new Error(`Invalid product ID format: ${item.product_id}`);
                            }
                            const product = yield prismaClient.product.findFirst({
                                where: {
                                    product_id: productId,
                                    user_id: userId,
                                },
                            });
                            if (!product) {
                                throw new Error(`Product with ID ${productId} not found`);
                            }
                            const quantity = parseFloat(item.quantity); // Ensure quantity is a number
                            const unitPrice = parseFloat(product.price.toString());
                            const itemAmount = quantity * unitPrice;
                            let itemTaxAmount = 0;
                            if (product.tax_rate) {
                                const taxRate = parseFloat(product.tax_rate.toString());
                                itemTaxAmount = itemAmount * (taxRate / 100);
                            }
                            subtotal += itemAmount;
                            tax_amount += itemTaxAmount;
                            const invoiceItem = yield prismaClient.invoiceItem.create({
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
                        const updatedInvoice = yield prismaClient.invoice.update({
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
                        // Handle recurring invoice setup if needed
                        if (is_recurring && recurring_pattern) {
                            console.log("Setting up recurring invoice with pattern:", recurring_pattern);
                            const nextInvoiceDate = (0, dateUtils_1.calculateNextInvoiceDate)(new Date(due_date), recurring_pattern);
                            // Create items for recurring invoice with explicit type conversions
                            const itemsToCreate = [];
                            for (const item of items) {
                                const productId = parseInt(item.product_id, 10);
                                if (isNaN(productId)) {
                                    throw new Error(`Invalid product ID format: ${item.product_id}`);
                                }
                                const product = yield prismaClient.product.findUnique({
                                    where: { product_id: productId },
                                });
                                if (product) {
                                    // Ensure all numeric values are properly converted
                                    itemsToCreate.push({
                                        product_id: productId,
                                        description: item.description || "",
                                        quantity: parseFloat(item.quantity),
                                        unit_price: parseFloat(product.price.toString()),
                                    });
                                }
                            }
                            console.log("Creating recurring invoice with items:", JSON.stringify(itemsToCreate));
                            // Create recurring invoice with explicit connection objects
                            yield prismaClient.recurringInvoice.create({
                                data: {
                                    user_id: userId, // Direct assignment instead of using connect
                                    client_id: clientId, // Direct assignment instead of using connect
                                    pattern: recurring_pattern,
                                    next_invoice_date: nextInvoiceDate,
                                    start_date: new Date(),
                                    is_active: true,
                                    generated_invoices: {
                                        connect: {
                                            invoice_id: updatedInvoice.invoice_id,
                                        },
                                    },
                                    items: {
                                        create: itemsToCreate,
                                    },
                                },
                            });
                        }
                        return updatedInvoice;
                    }));
                    res.status(201).json({
                        message: "Invoice created successfully",
                        invoice,
                    });
                }
                catch (transactionError) {
                    console.error("Transaction error:", transactionError);
                    throw transactionError; // Re-throw to be caught by outer catch
                }
            }
            catch (error) {
                console.error("Error creating invoice:", error);
                this.handleError(res, error, "create invoice");
            }
        });
    }
    // Update an existing invoice
    updateInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoiceId = parseInt(req.params.id);
                const { client_id, issue_date, due_date, items, notes, terms, discount_amount, // Add support for discount
                is_recurring, recurring_pattern, } = req.body;
                // Ensure client_id is converted to an integer
                const clientId = parseInt(client_id, 10);
                // Check if clientId is a valid number
                if (isNaN(clientId)) {
                    res.status(400).json({ message: "Invalid client ID format" });
                    return;
                }
                // Check if invoice exists and belongs to the user
                const existingInvoice = yield prisma.invoice.findFirst({
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
                const updatedInvoice = yield prisma.$transaction((prismaClient) => __awaiter(this, void 0, void 0, function* () {
                    // First, update the basic invoice data
                    const invoice = yield prismaClient.invoice.update({
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
                    yield prismaClient.invoiceItem.deleteMany({
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
                        const product = yield prismaClient.product.findFirst({
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
                        yield prismaClient.invoiceItem.create({
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
                    const finalInvoice = yield prismaClient.invoice.update({
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
                    if (existingInvoice.source_recurring_id &&
                        is_recurring &&
                        recurring_pattern) {
                        // Fixed the issue with async in map
                        const itemsToCreate = [];
                        for (const item of items) {
                            // Ensure product_id is an integer here too
                            const productId = parseInt(item.product_id, 10);
                            if (isNaN(productId)) {
                                throw new Error(`Invalid product ID format: ${item.product_id}`);
                            }
                            const product = yield prismaClient.product.findUnique({
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
                        yield prismaClient.recurringInvoice.update({
                            where: {
                                id: existingInvoice.source_recurring_id,
                            },
                            data: {
                                pattern: recurring_pattern,
                                items: {
                                    deleteMany: {},
                                    create: itemsToCreate,
                                },
                            },
                        });
                    }
                    else if (is_recurring &&
                        recurring_pattern &&
                        !existingInvoice.source_recurring_id) {
                        // Fixed the issue with async in map
                        const itemsToCreate = [];
                        for (const item of items) {
                            // Ensure product_id is an integer here too
                            const productId = parseInt(item.product_id, 10);
                            if (isNaN(productId)) {
                                throw new Error(`Invalid product ID format: ${item.product_id}`);
                            }
                            const product = yield prismaClient.product.findUnique({
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
                        const nextInvoiceDate = (0, dateUtils_1.calculateNextInvoiceDate)(new Date(due_date), recurring_pattern);
                        const recurringInvoice = yield prismaClient.recurringInvoice.create({
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
                                pattern: recurring_pattern,
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
                        yield prismaClient.invoice.update({
                            where: {
                                invoice_id: invoiceId,
                            },
                            data: {
                                source_recurring_id: recurringInvoice.id,
                            },
                        });
                    }
                    return finalInvoice;
                }));
                res.status(200).json({
                    message: "Invoice updated successfully",
                    invoice: updatedInvoice,
                });
            }
            catch (error) {
                this.handleError(res, error, "update invoice");
            }
        });
    }
    // Delete an invoice (soft delete)
    deleteInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
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
                const invoice = yield prisma.invoice.findFirst({
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
                yield prisma.invoice.update({
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
            }
            catch (error) {
                this.handleError(res, error, "delete invoice");
            }
        });
    }
    // Change invoice status
    changeStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoiceId = parseInt(req.params.id);
                const { status } = req.body;
                // Validate status
                if (!Object.values(client_2.InvoiceStatus).includes(status)) {
                    res.status(400).json({ message: "Invalid status value" });
                    return;
                }
                // Check if invoice exists and belongs to the user
                const invoice = yield prisma.invoice.findFirst({
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
                const updatedInvoice = yield prisma.invoice.update({
                    where: {
                        invoice_id: invoiceId,
                    },
                    data: {
                        status: status,
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
            }
            catch (error) {
                this.handleError(res, error, "change invoice status");
            }
        });
    }
    // Get invoice payments
    getInvoicePayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const invoiceId = parseInt(req.params.id);
                // Check if invoice exists and belongs to the user
                const invoice = yield prisma.invoice.findFirst({
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
                const payments = yield prisma.payment.findMany({
                    where: {
                        invoice_id: invoiceId,
                    },
                    orderBy: {
                        payment_date: "desc",
                    },
                });
                res.status(200).json({ payments });
            }
            catch (error) {
                this.handleError(res, error, "fetch invoice payments");
            }
        });
    }
    // Add a payment to an invoice
    addPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    res.status(401).json({ message: "User not authenticated" });
                    return;
                }
                const { invoice_id, amount, payment_date, payment_method, reference, notes, } = req.body;
                // Ensure invoice_id is converted to an integer
                const invoiceId = parseInt(invoice_id, 10);
                // Check if invoiceId is a valid number
                if (isNaN(invoiceId)) {
                    res.status(400).json({ message: "Invalid invoice ID format" });
                    return;
                }
                // Check if invoice exists and belongs to the user with all required relations for PDF generation
                const invoice = yield prisma.invoice.findFirst({
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
                const payment = yield prisma.payment.create({
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
                const totalPaid = [...invoice.payments, payment].reduce((sum, payment) => sum + parseFloat(payment.amount.toString()), 0);
                // Get the actual invoice total (considering discount if any)
                const invoiceTotal = parseFloat(invoice.total_amount.toString());
                // Update invoice status based on payment
                let newStatus = invoice.status;
                let statusChanged = false;
                let isPartial = false;
                if (totalPaid >= invoiceTotal) {
                    newStatus = "PAID";
                    statusChanged = true;
                }
                else if (totalPaid > 0) {
                    newStatus = "PARTIAL";
                    statusChanged = true;
                    isPartial = true;
                }
                // Update invoice status in the database if changed
                if (newStatus !== invoice.status) {
                    yield prisma.invoice.update({
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
                        const formattedPaymentDate = new Date(payment_date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        });
                        // Get business information
                        const businessName = ((_c = (_b = invoice.user) === null || _b === void 0 ? void 0 : _b.profile) === null || _c === void 0 ? void 0 : _c.company_name) || "Your Business";
                        const businessEmail = ((_d = invoice.user) === null || _d === void 0 ? void 0 : _d.email) || "";
                        const businessPhone = ((_e = invoice.user) === null || _e === void 0 ? void 0 : _e.phone) || "";
                        const businessAddress = ((_g = (_f = invoice.user) === null || _f === void 0 ? void 0 : _f.profile) === null || _g === void 0 ? void 0 : _g.address) || "";
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
                            ? ((_j = (_h = invoice.user) === null || _h === void 0 ? void 0 : _h.profile) === null || _j === void 0 ? void 0 : _j.bank_accounts) || null
                            : null;
                        const eWallets = isPartial
                            ? ((_l = (_k = invoice.user) === null || _k === void 0 ? void 0 : _k.profile) === null || _l === void 0 ? void 0 : _l.e_wallets) || null
                            : null;
                        // Tambahkan pembayaran baru ke array payments
                        // Ini memastikan PDF melihat semua pembayaran termasuk yang baru ditambahkan
                        invoice.payments.push(payment);
                        // Generate PDF invoice for attachment with updated status
                        let pdfBuffer;
                        try {
                            console.log(`Generating PDF with status: ${invoice.status}`);
                            pdfBuffer = yield (0, PdfGeneator_1.generateInvoicePdf)(invoice);
                        }
                        catch (pdfError) {
                            console.error("Failed to generate PDF for payment confirmation:", pdfError);
                            // Continue without PDF if generation fails
                        }
                        // Send payment confirmation email
                        yield (0, mailer_1.sendPaymentConfirmation)(invoice.client.email, invoice.invoice_number, businessName, formattedAmount, formattedPaymentDate, payment_method, newStatus, invoice.client.name, businessEmail, businessPhone, businessAddress, isPartial, remainingBalance, pdfBuffer, paymentLink, bankAccounts, eWallets);
                        console.log(`Payment confirmation email sent to ${invoice.client.email} for invoice ${invoice.invoice_number}`);
                    }
                    catch (emailError) {
                        console.error("Failed to send payment confirmation email:", emailError);
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
            }
            catch (error) {
                this.handleError(res, error, "add payment");
            }
        });
    }
    /**
     * Get product usage in invoices
     */
    getProductUsage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.params;
                const userId = req.user.user_id;
                // Convert productId to number
                const productIdNum = parseInt(productId, 10);
                // Check if productIdNum is a valid number
                if (isNaN(productIdNum)) {
                    res.status(400).json({ message: "Invalid product ID format" });
                    return;
                }
                // Get the product service (you may need to inject this in your constructor)
                const productService = new ProductService_1.ProductService();
                // Check if product exists and belongs to user
                const product = yield productService.getProductById(productIdNum, userId);
                if (!product) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Get product usage in invoices
                const usage = yield productService.getProductUsage(productIdNum);
                // Return in the format the frontend expects
                res.status(200).json(usage);
            }
            catch (error) {
                this.handleError(res, error, "fetch product usage");
            }
        });
    }
}
exports.InvoiceController = InvoiceController;
