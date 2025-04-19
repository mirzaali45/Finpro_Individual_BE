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
exports.generateInvoiceNumber = generateInvoiceNumber;
exports.isInvoiceOverdue = isInvoiceOverdue;
exports.updateOverdueInvoices = updateOverdueInvoices;
exports.generateRecurringInvoices = generateRecurringInvoices;
const client_1 = require("../../prisma/generated/client");
const date_fns_1 = require("date-fns");
const prisma = new client_1.PrismaClient();
/**
 * Generate a unique invoice number in the format INV-UID-YYYY-MM-XXXX
 * Where UID is the user ID, YYYY is the current year, MM is the current month,
 * and XXXX is a sequential number padded with zeros
 */
function generateInvoiceNumber(userId, clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        const today = new Date();
        const year = (0, date_fns_1.format)(today, "yyyy");
        const month = (0, date_fns_1.format)(today, "MM");
        // Include both the user ID and client ID in the invoice number prefix
        const prefix = `INV-U${userId}-C${clientId}-${year}-${month}-`;
        // Find the highest existing invoice number with this prefix for this specific user and client
        const lastInvoice = yield prisma.invoice.findFirst({
            where: {
                user_id: userId,
                client_id: clientId,
                invoice_number: {
                    startsWith: prefix,
                },
            },
            orderBy: {
                invoice_number: "desc",
            },
        });
        // Extract the sequence number from the last invoice number or use 0 if none exists
        let sequenceNumber = 0;
        if (lastInvoice && lastInvoice.invoice_number) {
            const parts = lastInvoice.invoice_number.split("-");
            if (parts.length >= 6) {
                // Now we have 6 parts with both user ID and client ID included
                sequenceNumber = parseInt(parts[5], 10) || 0;
            }
        }
        // Increment and pad the sequence number
        sequenceNumber++;
        const paddedSequence = sequenceNumber.toString().padStart(4, "0");
        // Generate the invoice number with both user ID and client ID included
        const invoiceNumber = `${prefix}${paddedSequence}`;
        // Double check that this invoice number doesn't already exist
        const existingInvoice = yield prisma.invoice.findFirst({
            where: {
                invoice_number: invoiceNumber,
            },
        });
        // If the invoice number already exists, recursively generate a new one
        if (existingInvoice) {
            return generateInvoiceNumber(userId, clientId);
        }
        return invoiceNumber;
    });
}
/**
 * Check if an invoice is overdue based on its due date and status
 */
function isInvoiceOverdue(dueDate, status) {
    // Only check invoices that are still pending or partially paid
    if (status !== "PENDING" && status !== "PARTIAL") {
        return false;
    }
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    // Reset the time component to compare just the dates
    today.setHours(0, 0, 0, 0);
    dueDateObj.setHours(0, 0, 0, 0);
    return dueDateObj < today;
}
/**
 * Check and update all invoices that have become overdue
 * This would typically be run as a scheduled job
 */
function updateOverdueInvoices() {
    return __awaiter(this, void 0, void 0, function* () {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Find all invoices that are due before today and are still pending or partially paid
        const overdueInvoices = yield prisma.invoice.findMany({
            where: {
                due_date: {
                    lt: today,
                },
                status: {
                    in: ["PENDING", "PARTIAL"],
                },
                deleted_at: null,
            },
        });
        // Update each overdue invoice
        for (const invoice of overdueInvoices) {
            yield prisma.invoice.update({
                where: {
                    invoice_id: invoice.invoice_id,
                },
                data: {
                    status: "OVERDUE",
                },
            });
        }
    });
}
/**
 * Check and generate invoices for all active recurring invoice templates
 * that have reached their next invoice date
 * This would typically be run as a scheduled job
 */
function generateRecurringInvoices() {
    return __awaiter(this, void 0, void 0, function* () {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Find all active recurring invoices that are due for generation
        const dueRecurringInvoices = yield prisma.recurringInvoice.findMany({
            where: {
                is_active: true,
                next_invoice_date: {
                    lte: today,
                },
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
        // Generate invoice for each due recurring template
        for (const recurringInvoice of dueRecurringInvoices) {
            try {
                yield prisma.$transaction((prismaClient) => __awaiter(this, void 0, void 0, function* () {
                    const userId = recurringInvoice.user_id;
                    const clientId = recurringInvoice.client_id;
                    // Generate a unique invoice number including the client ID
                    const invoiceNumber = yield generateInvoiceNumber(userId, clientId);
                    // Calculate due date based on issue date and recurring pattern
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
                            total_amount: 0, // Will update this later
                            source_recurring_id: recurringInvoice.id,
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
                    // Calculate the total amount
                    const total_amount = subtotal + tax_amount;
                    // Update the invoice with calculated totals
                    yield prismaClient.invoice.update({
                        where: {
                            invoice_id: newInvoice.invoice_id,
                        },
                        data: {
                            subtotal,
                            tax_amount,
                            total_amount,
                        },
                    });
                    // Calculate and update the next invoice date for the recurring invoice
                    const nextInvoiceDate = new Date(today);
                    switch (recurringInvoice.pattern) {
                        case "WEEKLY":
                            nextInvoiceDate.setDate(nextInvoiceDate.getDate() + 7);
                            break;
                        case "BIWEEKLY":
                            nextInvoiceDate.setDate(nextInvoiceDate.getDate() + 14);
                            break;
                        case "MONTHLY":
                            nextInvoiceDate.setMonth(nextInvoiceDate.getMonth() + 1);
                            break;
                        case "QUARTERLY":
                            nextInvoiceDate.setMonth(nextInvoiceDate.getMonth() + 3);
                            break;
                        case "SEMIANNUALLY":
                            nextInvoiceDate.setMonth(nextInvoiceDate.getMonth() + 6);
                            break;
                        case "ANNUALLY":
                            nextInvoiceDate.setFullYear(nextInvoiceDate.getFullYear() + 1);
                            break;
                    }
                    yield prismaClient.recurringInvoice.update({
                        where: {
                            id: recurringInvoice.id,
                        },
                        data: {
                            next_invoice_date: nextInvoiceDate,
                        },
                    });
                }));
            }
            catch (error) {
                console.error(`Error generating invoice for recurring template ${recurringInvoice.id}:`, error);
                // Continue with the next recurring invoice even if one fails
            }
        }
    });
}
