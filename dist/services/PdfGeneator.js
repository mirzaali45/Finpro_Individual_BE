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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInvoicePdf = void 0;
// src/services/PdfGenerator.ts
const pdfkit_1 = __importDefault(require("pdfkit"));
const axios_1 = __importDefault(require("axios"));
// Helper: Fetch image from URL and return as Buffer
function fetchImageAsBuffer(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(url, {
                responseType: "arraybuffer",
                timeout: 10000,
            });
            return Buffer.from(response.data);
        }
        catch (error) {
            console.error("Error fetching image:", error);
            return null;
        }
    });
}
// Helper: Convert any value to number (handles Prisma Decimal, string, number)
function toNumber(value) {
    if (value === null || value === undefined) {
        return 0;
    }
    // If it's already a number
    if (typeof value === "number") {
        return isNaN(value) ? 0 : value;
    }
    // If it's a string or has toString method (Prisma Decimal)
    const strValue = typeof value === "string" ? value : value.toString();
    const parsed = parseFloat(strValue);
    return isNaN(parsed) ? 0 : parsed;
}
// Helper: Calculate total paid - FIXED for Prisma Decimal
function calculateTotalPaid(invoice) {
    if (!invoice.payments || invoice.payments.length === 0) {
        return 0;
    }
    let total = 0;
    for (const payment of invoice.payments) {
        const amount = toNumber(payment.amount);
        total += amount;
    }
    return total;
}
// Helper: Format currency (Rupiah) using Intl.NumberFormat like frontend
function formatCurrency(value) {
    const amount = toNumber(value);
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
// Helper: Format date
function formatDate(date) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}
// Helper: Get payment method detail
function getPaymentMethodDetail(payment) {
    if (payment.payment_method === "BANK_TRANSFER" && payment.BankAccount) {
        return `${payment.BankAccount.bank_name} - ${payment.BankAccount.account_number}`;
    }
    else if (payment.payment_method === "E_WALLET" && payment.EWallet) {
        return `${payment.EWallet.wallet_type} - ${payment.EWallet.phone_number}`;
    }
    return payment.reference || "-";
}
// Main PDF Generator
const generateInvoicePdf = (invoice) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        try {
            // Fetch logo if available
            let logoBuffer = null;
            const logoUrl = (_b = (_a = invoice.user) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.logo;
            if (logoUrl) {
                logoBuffer = yield fetchImageAsBuffer(logoUrl);
            }
            // Create PDF document (A4 size)
            const doc = new pdfkit_1.default({
                margin: 40,
                size: "A4",
                layout: "portrait",
                bufferPages: true,
                autoFirstPage: true,
            });
            // Collect PDF data
            const chunks = [];
            doc.on("data", (chunk) => chunks.push(chunk));
            doc.on("end", () => resolve(Buffer.concat(chunks)));
            doc.on("error", reject);
            // Page dimensions
            const pageWidth = doc.page.width;
            const pageHeight = doc.page.height;
            const margin = 40;
            const contentWidth = pageWidth - margin * 2;
            // Colors
            const colors = {
                primary: "#2563eb",
                secondary: "#1f2937",
                gray500: "#6b7280",
                gray400: "#9ca3af",
                gray300: "#d1d5db",
                gray200: "#e5e7eb",
                gray100: "#f3f4f6",
                gray50: "#f9fafb",
                green600: "#16a34a",
                green500: "#22c55e",
                red600: "#dc2626",
                red500: "#ef4444",
                orange500: "#f97316",
                blue600: "#2563eb",
                blue100: "#dbeafe",
            };
            // Company info
            const company = ((_d = (_c = invoice.user) === null || _c === void 0 ? void 0 : _c.profile) === null || _d === void 0 ? void 0 : _d.company_name) || "Your Company";
            const address = ((_f = (_e = invoice.user) === null || _e === void 0 ? void 0 : _e.profile) === null || _f === void 0 ? void 0 : _f.address) || "";
            const email = ((_g = invoice.user) === null || _g === void 0 ? void 0 : _g.email) || "";
            const phone = ((_h = invoice.user) === null || _h === void 0 ? void 0 : _h.phone) || "";
            // Calculate totals - FIXED: Use toNumber for proper conversion
            const totalPaid = calculateTotalPaid(invoice);
            const totalAmount = toNumber(invoice.total_amount);
            const balanceDue = Math.max(0, totalAmount - totalPaid);
            // Debug log (can be removed in production)
            console.log("PDF Generation - Totals:", {
                totalAmount,
                totalPaid,
                balanceDue,
                paymentsCount: ((_j = invoice.payments) === null || _j === void 0 ? void 0 : _j.length) || 0,
                payments: (_k = invoice.payments) === null || _k === void 0 ? void 0 : _k.map(p => ({ amount: p.amount, converted: toNumber(p.amount) }))
            });
            // ========== WATERMARK LOGO ==========
            if (logoBuffer) {
                try {
                    doc.save();
                    doc.opacity(0.07);
                    const watermarkSize = 250;
                    const watermarkX = (pageWidth - watermarkSize) / 2;
                    const watermarkY = (pageHeight - watermarkSize) / 2;
                    doc.image(logoBuffer, watermarkX, watermarkY, {
                        width: watermarkSize,
                        height: watermarkSize,
                        fit: [watermarkSize, watermarkSize],
                        align: "center",
                        valign: "center",
                    });
                    doc.restore();
                }
                catch (err) {
                    console.error("Error drawing watermark:", err);
                }
            }
            // ========== STATUS STAMP ==========
            if (["PAID", "CANCELLED", "OVERDUE"].includes(invoice.status)) {
                doc.save();
                const stampText = invoice.status;
                const centerX = pageWidth / 2;
                const centerY = pageHeight / 2;
                doc.translate(centerX, centerY);
                doc.rotate(-15);
                const stampWidth = invoice.status === "CANCELLED" ? 280 : 200;
                const stampHeight = 80;
                doc.opacity(0.3);
                doc.lineWidth(6);
                if (invoice.status === "PAID") {
                    doc.strokeColor(colors.green500);
                    doc.fillColor(colors.green500);
                }
                else if (invoice.status === "CANCELLED") {
                    doc.strokeColor(colors.red500);
                    doc.fillColor(colors.red500);
                }
                else if (invoice.status === "OVERDUE") {
                    doc.strokeColor(colors.orange500);
                    doc.fillColor(colors.orange500);
                }
                doc.roundedRect(-stampWidth / 2, -stampHeight / 2, stampWidth, stampHeight, 8).stroke();
                doc.fontSize(48);
                doc.text(stampText, -stampWidth / 2, -20, {
                    width: stampWidth,
                    align: "center",
                });
                doc.restore();
            }
            // ========== HEADER ==========
            let yPos = margin;
            if (logoBuffer) {
                try {
                    doc.image(logoBuffer, margin, yPos, {
                        width: 80,
                        height: 40,
                        fit: [80, 40],
                    });
                    yPos += 45;
                }
                catch (err) {
                    console.error("Error drawing header logo:", err);
                }
            }
            doc.fontSize(18).fillColor(colors.secondary).text(company, margin, yPos);
            yPos += 25;
            // INVOICE title (right side)
            doc.fontSize(28).fillColor(colors.secondary).text("INVOICE", pageWidth - margin - 150, margin, {
                width: 150,
                align: "right",
            });
            // Invoice number
            doc.fontSize(14).fillColor(colors.primary).text(`#${invoice.invoice_number}`, pageWidth - margin - 200, margin + 35, {
                width: 200,
                align: "right",
            });
            // Status badge
            const statusY = margin + 60;
            let statusColor;
            let statusBgColor;
            switch (invoice.status) {
                case "PAID":
                    statusColor = colors.green600;
                    statusBgColor = "#dcfce7";
                    break;
                case "PENDING":
                    statusColor = colors.blue600;
                    statusBgColor = colors.blue100;
                    break;
                case "OVERDUE":
                    statusColor = colors.red600;
                    statusBgColor = "#fee2e2";
                    break;
                case "PARTIAL":
                    statusColor = "#ca8a04";
                    statusBgColor = "#fef9c3";
                    break;
                default:
                    statusColor = colors.gray500;
                    statusBgColor = colors.gray100;
            }
            const statusText = invoice.status;
            const statusWidth = doc.widthOfString(statusText) + 16;
            const statusX = pageWidth - margin - statusWidth;
            doc.roundedRect(statusX, statusY, statusWidth, 20, 10).fill(statusBgColor);
            doc.fontSize(10).fillColor(statusColor).text(statusText, statusX, statusY + 5, {
                width: statusWidth,
                align: "center",
            });
            // Dates
            doc.fontSize(10).fillColor(colors.gray500)
                .text(`Issue Date: ${formatDate(invoice.issue_date)}`, pageWidth - margin - 200, statusY + 30, { width: 200, align: "right" })
                .text(`Due Date: ${formatDate(invoice.due_date)}`, pageWidth - margin - 200, statusY + 45, { width: 200, align: "right" });
            // ========== FROM / TO SECTION ==========
            yPos = margin + 130;
            const boxWidth = (contentWidth - 30) / 2;
            const boxPadding = 12;
            const textWidth = boxWidth - (boxPadding * 2);
            const lineHeight = 14;
            const titleLineHeight = 18;
            const calculateTextHeight = (text, fontSize, maxWidth) => {
                doc.fontSize(fontSize);
                return doc.heightOfString(text, { width: maxWidth });
            };
            // Calculate heights
            let fromContentHeight = titleLineHeight;
            if (address)
                fromContentHeight += calculateTextHeight(address, 9, textWidth) + 4;
            if (email)
                fromContentHeight += lineHeight;
            if (phone)
                fromContentHeight += lineHeight;
            let toContentHeight = titleLineHeight;
            if (invoice.client.company_name)
                toContentHeight += lineHeight;
            if (invoice.client.email)
                toContentHeight += lineHeight;
            if (invoice.client.phone)
                toContentHeight += lineHeight;
            let clientFullAddress = "";
            if (invoice.client.address) {
                clientFullAddress = invoice.client.address;
                if (invoice.client.city)
                    clientFullAddress += `, ${invoice.client.city}`;
                if (invoice.client.state)
                    clientFullAddress += `, ${invoice.client.state}`;
                if (invoice.client.postal_code)
                    clientFullAddress += ` ${invoice.client.postal_code}`;
                if (invoice.client.country)
                    clientFullAddress += `, ${invoice.client.country}`;
                toContentHeight += calculateTextHeight(clientFullAddress, 9, textWidth) + 4;
            }
            const boxHeight = Math.max(fromContentHeight, toContentHeight) + (boxPadding * 2) + 10;
            // Labels
            doc.fontSize(10).fillColor(colors.gray500).text("FROM:", margin, yPos);
            const toX = margin + boxWidth + 30;
            doc.fontSize(10).fillColor(colors.gray500).text("TO:", toX, yPos);
            yPos += 18;
            // Boxes
            doc.roundedRect(margin, yPos, boxWidth, boxHeight, 8).fill(colors.gray50);
            doc.roundedRect(toX, yPos, boxWidth, boxHeight, 8).fill(colors.gray50);
            // FROM content
            let fromY = yPos + boxPadding;
            doc.fontSize(11).fillColor(colors.secondary).text(company, margin + boxPadding, fromY, { width: textWidth, lineBreak: true });
            fromY += titleLineHeight;
            if (address) {
                const h = calculateTextHeight(address, 9, textWidth);
                doc.fontSize(9).fillColor(colors.gray500).text(address, margin + boxPadding, fromY, { width: textWidth, lineBreak: true });
                fromY += h + 4;
            }
            if (email) {
                doc.fontSize(9).fillColor(colors.gray500).text(email, margin + boxPadding, fromY, { width: textWidth });
                fromY += lineHeight;
            }
            if (phone) {
                doc.fontSize(9).fillColor(colors.gray500).text(phone, margin + boxPadding, fromY, { width: textWidth });
            }
            // TO content
            let toY = yPos + boxPadding;
            doc.fontSize(11).fillColor(colors.secondary).text(invoice.client.name, toX + boxPadding, toY, { width: textWidth, lineBreak: true });
            toY += titleLineHeight;
            if (invoice.client.company_name) {
                doc.fontSize(9).fillColor(colors.gray500).text(invoice.client.company_name, toX + boxPadding, toY, { width: textWidth });
                toY += lineHeight;
            }
            if (invoice.client.email) {
                doc.fontSize(9).fillColor(colors.gray500).text(invoice.client.email, toX + boxPadding, toY, { width: textWidth });
                toY += lineHeight;
            }
            if (invoice.client.phone) {
                doc.fontSize(9).fillColor(colors.gray500).text(invoice.client.phone, toX + boxPadding, toY, { width: textWidth });
                toY += lineHeight;
            }
            if (clientFullAddress) {
                doc.fontSize(9).fillColor(colors.gray500).text(clientFullAddress, toX + boxPadding, toY, { width: textWidth, lineBreak: true });
            }
            // ========== INVOICE ITEMS TABLE ==========
            yPos += boxHeight + 25;
            if (yPos > pageHeight - 300) {
                doc.addPage();
                yPos = margin;
            }
            const tableTop = yPos;
            const colWidths = {
                item: contentWidth * 0.25,
                desc: contentWidth * 0.25,
                qty: contentWidth * 0.1,
                price: contentWidth * 0.2,
                total: contentWidth * 0.2,
            };
            // Header
            doc.rect(margin, tableTop, contentWidth, 30).fill(colors.gray100);
            doc.fontSize(10).fillColor(colors.gray500);
            let colX = margin + 10;
            doc.text("ITEM", colX, tableTop + 10);
            colX += colWidths.item;
            doc.text("DESCRIPTION", colX, tableTop + 10);
            colX += colWidths.desc;
            doc.text("QTY", colX, tableTop + 10, { width: colWidths.qty, align: "right" });
            colX += colWidths.qty;
            doc.text("PRICE", colX, tableTop + 10, { width: colWidths.price, align: "right" });
            colX += colWidths.price;
            doc.text("TOTAL", colX, tableTop + 10, { width: colWidths.total - 10, align: "right" });
            yPos = tableTop + 35;
            for (const item of invoice.items) {
                if (yPos > pageHeight - 150) {
                    doc.addPage();
                    yPos = margin;
                    doc.rect(margin, yPos, contentWidth, 30).fill(colors.gray100);
                    doc.fontSize(10).fillColor(colors.gray500);
                    colX = margin + 10;
                    doc.text("ITEM", colX, yPos + 10);
                    colX += colWidths.item;
                    doc.text("DESCRIPTION", colX, yPos + 10);
                    colX += colWidths.desc;
                    doc.text("QTY", colX, yPos + 10, { width: colWidths.qty, align: "right" });
                    colX += colWidths.qty;
                    doc.text("PRICE", colX, yPos + 10, { width: colWidths.price, align: "right" });
                    colX += colWidths.price;
                    doc.text("TOTAL", colX, yPos + 10, { width: colWidths.total - 10, align: "right" });
                    yPos += 35;
                }
                doc.strokeColor(colors.gray200).lineWidth(0.5).moveTo(margin, yPos).lineTo(pageWidth - margin, yPos).stroke();
                yPos += 10;
                colX = margin + 10;
                doc.fontSize(10).fillColor(colors.secondary).text(((_l = item.product) === null || _l === void 0 ? void 0 : _l.name) || "Unknown Product", colX, yPos, { width: colWidths.item - 10 });
                colX += colWidths.item;
                doc.fontSize(10).fillColor(colors.gray500).text(item.description || "-", colX, yPos, { width: colWidths.desc - 10 });
                colX += colWidths.desc;
                doc.text(item.quantity.toString(), colX, yPos, { width: colWidths.qty, align: "right" });
                colX += colWidths.qty;
                doc.text(formatCurrency(item.unit_price), colX, yPos, { width: colWidths.price, align: "right" });
                colX += colWidths.price;
                doc.fillColor(colors.secondary).text(formatCurrency(item.amount), colX, yPos, { width: colWidths.total - 10, align: "right" });
                yPos += 25;
            }
            doc.strokeColor(colors.gray200).lineWidth(0.5).moveTo(margin, yPos).lineTo(pageWidth - margin, yPos).stroke();
            // ========== SUMMARY SECTION ==========
            yPos += 20;
            if (yPos > pageHeight - 200) {
                doc.addPage();
                yPos = margin;
            }
            const summaryX = pageWidth - margin - 200;
            const summaryWidth = 200;
            // Calculate summary box height
            let summaryBoxHeight = 90;
            if (invoice.discount_amount && toNumber(invoice.discount_amount) > 0) {
                summaryBoxHeight += 20;
            }
            if (invoice.payments && invoice.payments.length > 0) {
                summaryBoxHeight += 55;
            }
            doc.roundedRect(summaryX, yPos, summaryWidth, summaryBoxHeight, 8).fill(colors.gray50);
            let summaryY = yPos + 15;
            // Subtotal
            doc.fontSize(10).fillColor(colors.gray500).text("Subtotal", summaryX + 15, summaryY);
            doc.fillColor(colors.secondary).text(formatCurrency(invoice.subtotal), summaryX + 15, summaryY, { width: summaryWidth - 30, align: "right" });
            summaryY += 20;
            // Tax
            doc.fillColor(colors.gray500).text("Tax", summaryX + 15, summaryY);
            doc.fillColor(colors.secondary).text(formatCurrency(invoice.tax_amount), summaryX + 15, summaryY, { width: summaryWidth - 30, align: "right" });
            summaryY += 20;
            // Discount
            if (invoice.discount_amount && toNumber(invoice.discount_amount) > 0) {
                doc.fillColor(colors.green600).text("Discount", summaryX + 15, summaryY);
                doc.text(`-${formatCurrency(invoice.discount_amount)}`, summaryX + 15, summaryY, { width: summaryWidth - 30, align: "right" });
                summaryY += 20;
            }
            // Separator
            doc.strokeColor(colors.gray300).lineWidth(1).moveTo(summaryX + 15, summaryY).lineTo(summaryX + summaryWidth - 15, summaryY).stroke();
            summaryY += 10;
            // Total
            doc.fontSize(12).fillColor(colors.secondary).text("Total", summaryX + 15, summaryY);
            doc.fillColor(colors.primary).text(formatCurrency(invoice.total_amount), summaryX + 15, summaryY, { width: summaryWidth - 30, align: "right" });
            // Amount Paid & Balance Due - FIXED
            if (invoice.payments && invoice.payments.length > 0) {
                summaryY += 25;
                doc.fontSize(10).fillColor(colors.green600).text("Amount Paid", summaryX + 15, summaryY);
                doc.text(formatCurrency(totalPaid), summaryX + 15, summaryY, { width: summaryWidth - 30, align: "right" });
                summaryY += 20;
                doc.strokeColor(colors.gray200).lineWidth(0.5).moveTo(summaryX + 15, summaryY).lineTo(summaryX + summaryWidth - 15, summaryY).stroke();
                summaryY += 10;
                const balanceColor = balanceDue > 0 ? colors.red600 : colors.green600;
                doc.fontSize(12).fillColor(colors.secondary).text("Balance Due", summaryX + 15, summaryY);
                doc.fillColor(balanceColor).text(formatCurrency(balanceDue), summaryX + 15, summaryY, { width: summaryWidth - 30, align: "right" });
            }
            yPos += summaryBoxHeight + 20;
            // ========== PAYMENT INFORMATION ==========
            const bankAccounts = (_o = (_m = invoice.user) === null || _m === void 0 ? void 0 : _m.profile) === null || _o === void 0 ? void 0 : _o.bank_accounts;
            const eWallets = (_q = (_p = invoice.user) === null || _p === void 0 ? void 0 : _p.profile) === null || _q === void 0 ? void 0 : _q.e_wallets;
            const hasPaymentInfo = (bankAccounts && bankAccounts.length > 0) || (eWallets && eWallets.length > 0);
            if (hasPaymentInfo) {
                if (yPos > pageHeight - 180) {
                    doc.addPage();
                    yPos = margin;
                }
                doc.fontSize(10).fillColor(colors.gray500).text("PAYMENT INFORMATION", margin, yPos);
                yPos += 15;
                let paymentBoxHeight = 50;
                if (bankAccounts && bankAccounts.length > 0)
                    paymentBoxHeight += 15 + (bankAccounts.length * 15);
                if (eWallets && eWallets.length > 0)
                    paymentBoxHeight += 20 + (eWallets.length * 15);
                doc.roundedRect(margin, yPos, contentWidth, paymentBoxHeight, 8).fill("#eff6ff");
                doc.fontSize(10).fillColor(colors.gray500).text("Please make payment via one of the following methods:", margin + 15, yPos + 15);
                let paymentY = yPos + 35;
                if (bankAccounts && bankAccounts.length > 0) {
                    doc.fontSize(10).fillColor(colors.gray500).text("Bank Account:", margin + 15, paymentY);
                    paymentY += 15;
                    const sortedBanks = [...bankAccounts].sort((a, b) => (b.is_primary ? 1 : 0) - (a.is_primary ? 1 : 0));
                    for (const account of sortedBanks) {
                        let text = `${account.bank_name}: ${account.account_number} (${account.account_name})`;
                        if (account.is_primary)
                            text += " (Recommended)";
                        doc.fontSize(10).fillColor(colors.secondary).text(text, margin + 30, paymentY);
                        paymentY += 15;
                    }
                }
                if (eWallets && eWallets.length > 0) {
                    if (bankAccounts && bankAccounts.length > 0)
                        paymentY += 5;
                    doc.fontSize(10).fillColor(colors.gray500).text("E-Wallet:", margin + 15, paymentY);
                    paymentY += 15;
                    const sortedWallets = [...eWallets].sort((a, b) => (b.is_primary ? 1 : 0) - (a.is_primary ? 1 : 0));
                    for (const wallet of sortedWallets) {
                        let text = `${wallet.wallet_type}: ${wallet.phone_number} (${wallet.account_name})`;
                        if (wallet.is_primary)
                            text += " (Recommended)";
                        doc.fontSize(10).fillColor(colors.secondary).text(text, margin + 30, paymentY);
                        paymentY += 15;
                    }
                }
                yPos += paymentBoxHeight + 10;
                doc.fontSize(9).fillColor(colors.gray500).text(`Please include the invoice number #${invoice.invoice_number} when making payments to facilitate verification.`, margin, yPos, { width: contentWidth, oblique: true });
                yPos += 25;
            }
            // ========== PAYMENT HISTORY ==========
            if (invoice.payments && invoice.payments.length > 0) {
                if (yPos > pageHeight - 150) {
                    doc.addPage();
                    yPos = margin;
                }
                doc.fontSize(10).fillColor(colors.gray500).text("PAYMENT HISTORY", margin, yPos);
                yPos += 15;
                const phBoxHeight = 30 + invoice.payments.length * 25;
                doc.roundedRect(margin, yPos, contentWidth, phBoxHeight, 8).fill(colors.gray50);
                const phColWidths = {
                    date: contentWidth * 0.25,
                    method: contentWidth * 0.25,
                    account: contentWidth * 0.3,
                    amount: contentWidth * 0.2,
                };
                let phX = margin + 10;
                doc.fontSize(9).fillColor(colors.gray500);
                doc.text("DATE", phX, yPos + 10);
                phX += phColWidths.date;
                doc.text("METHOD", phX, yPos + 10);
                phX += phColWidths.method;
                doc.text("ACCOUNT/REFERENCE", phX, yPos + 10);
                phX += phColWidths.account;
                doc.text("AMOUNT", phX, yPos + 10, { width: phColWidths.amount - 20, align: "right" });
                let phY = yPos + 30;
                for (const payment of invoice.payments) {
                    doc.strokeColor(colors.gray200).lineWidth(0.5).moveTo(margin + 10, phY).lineTo(pageWidth - margin - 10, phY).stroke();
                    phY += 5;
                    phX = margin + 10;
                    doc.fontSize(9).fillColor(colors.gray500);
                    doc.text(formatDate(payment.payment_date), phX, phY);
                    phX += phColWidths.date;
                    doc.text(payment.payment_method, phX, phY);
                    phX += phColWidths.method;
                    doc.text(getPaymentMethodDetail(payment), phX, phY);
                    phX += phColWidths.account;
                    doc.fillColor(colors.green600).text(formatCurrency(payment.amount), phX, phY, { width: phColWidths.amount - 20, align: "right" });
                    phY += 20;
                }
                yPos += phBoxHeight + 15;
            }
            // ========== NOTES & TERMS ==========
            if (invoice.notes || invoice.terms) {
                if (yPos > pageHeight - 120) {
                    doc.addPage();
                    yPos = margin;
                }
                const halfWidth = (contentWidth - 20) / 2;
                const notesTermsY = yPos;
                if (invoice.notes) {
                    doc.fontSize(10).fillColor(colors.gray500).text("NOTES", margin, yPos);
                    yPos += 15;
                    doc.roundedRect(margin, yPos, invoice.terms ? halfWidth : contentWidth, 60, 8).fill(colors.gray50);
                    doc.fontSize(10).fillColor(colors.gray500).text(invoice.notes, margin + 15, yPos + 15, {
                        width: (invoice.terms ? halfWidth : contentWidth) - 30,
                    });
                }
                if (invoice.terms) {
                    const termsX = invoice.notes ? margin + halfWidth + 20 : margin;
                    doc.fontSize(10).fillColor(colors.gray500).text("TERMS & CONDITIONS", termsX, notesTermsY);
                    doc.roundedRect(termsX, notesTermsY + 15, invoice.notes ? halfWidth : contentWidth, 60, 8).fill(colors.gray50);
                    doc.fontSize(10).fillColor(colors.gray500).text(invoice.terms, termsX + 15, notesTermsY + 30, {
                        width: (invoice.notes ? halfWidth : contentWidth) - 30,
                    });
                }
                yPos += 80;
            }
            // ========== FOOTER ==========
            if (yPos > pageHeight - 80) {
                doc.addPage();
                yPos = margin;
            }
            yPos = Math.max(yPos + 30, pageHeight - 80);
            doc.strokeColor(colors.gray200).lineWidth(0.5).moveTo(margin, yPos).lineTo(pageWidth - margin, yPos).stroke();
            const footerContentY = yPos + 15;
            if (logoBuffer) {
                try {
                    doc.image(logoBuffer, margin, footerContentY - 5, { width: 20, height: 20, fit: [20, 20] });
                }
                catch (err) { }
            }
            doc.fontSize(10).fillColor(colors.gray500).text(company, margin + (logoBuffer ? 25 : 0), footerContentY);
            const currentYear = new Date().getFullYear();
            doc.fontSize(8).fillColor(colors.gray400).text(`© ${currentYear} ${company}. All rights reserved.`, pageWidth - margin - 200, footerContentY, { width: 200, align: "right" });
            doc.fontSize(10).fillColor(colors.gray500).text("Thank you for your business!", 0, footerContentY + 20, { width: pageWidth, align: "center" });
            doc.end();
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.generateInvoicePdf = generateInvoicePdf;
