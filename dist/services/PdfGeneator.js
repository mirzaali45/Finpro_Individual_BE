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
// Fungsi untuk menghitung total pembayaran dari invoice
function calculateTotalPaid(invoice) {
    if (!invoice.payments || invoice.payments.length === 0) {
        return 0;
    }
    // Convert all payment amounts to numbers with fixed precision
    return Number(invoice.payments
        .reduce((sum, payment) => {
        const paymentAmount = typeof payment.amount === "string"
            ? parseFloat(payment.amount)
            : payment.amount;
        return sum + paymentAmount;
    }, 0)
        .toFixed(2));
}
// Fungsi untuk cek apakah perlu halaman baru
function checkForNewPage(doc, yPos, spaceNeeded, pageHeight) {
    if (yPos + spaceNeeded > pageHeight - 50) {
        doc.addPage();
        return 40; // Reset posisi y ke atas halaman baru
    }
    return yPos;
}
const generateInvoicePdf = (invoice) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            // Buat dokumen PDF
            const doc = new pdfkit_1.default({
                margin: 40,
                size: "A4",
                layout: "portrait",
                bufferPages: true,
                autoFirstPage: true,
            });
            // Collect PDF data in memory
            const chunks = [];
            doc.on("data", (chunk) => chunks.push(chunk));
            doc.on("end", () => resolve(Buffer.concat(chunks)));
            doc.on("error", reject);
            // Definisi ukuran halaman
            const pageWidth = doc.page.width;
            const pageHeight = doc.page.height;
            // Format tanggal
            const issueDate = new Date(invoice.issue_date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
            });
            const dueDate = new Date(invoice.due_date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
            });
            // Info bisnis
            const businessName = ((_b = (_a = invoice.user) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.company_name) || "Your Business";
            const businessAddress = ((_d = (_c = invoice.user) === null || _c === void 0 ? void 0 : _c.profile) === null || _d === void 0 ? void 0 : _d.address) || "";
            const businessEmail = ((_e = invoice.user) === null || _e === void 0 ? void 0 : _e.email) || "";
            const businessPhone = ((_g = (_f = invoice.user) === null || _f === void 0 ? void 0 : _f.profile) === null || _g === void 0 ? void 0 : _g.phone) || "";
            // Format mata uang
            const formatCurrency = (amount) => {
                const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
                // Ensure clean integer display with proper rounding
                return `Rp ${Math.round(numAmount).toLocaleString("id-ID")}`;
            };
            // Warna tema
            const primaryColor = "#3498db";
            const secondaryColor = "#2c3e50";
            const successColor = "#27ae60";
            const warningColor = "#f39c12";
            const dangerColor = "#e74c3c";
            // Menghitung status pembayaran
            const isPaid = invoice.status === "PAID";
            const isPartial = invoice.status === "PARTIAL";
            const isOverdue = invoice.status === "OVERDUE";
            // Hitung total pembayaran dan sisa tagihan dengan benar
            const totalPaid = Number(calculateTotalPaid(invoice).toFixed(2));
            const totalAmount = typeof invoice.total_amount === "string"
                ? Number(parseFloat(invoice.total_amount).toFixed(2))
                : Number(invoice.total_amount.toFixed(2));
            // const balanceDue = Math.max(0, totalAmount - totalPaid);
            let balanceDue = Number((totalAmount - totalPaid).toFixed(2));
            if (Math.abs(balanceDue) < 0.01 || invoice.status === "PAID") {
                balanceDue = 0;
            }
            // ===== MULAI MEMBUAT LAYOUT INVOICE =====
            // 1. HEADER - Nama Perusahaan
            doc.fontSize(24).fillColor(secondaryColor).text(businessName, 40, 40);
            // 2. Info perusahaan
            let headerYPos = 70;
            if (businessAddress) {
                doc
                    .fontSize(10)
                    .fillColor(secondaryColor)
                    .text(businessAddress, 40, headerYPos);
                headerYPos += 15;
            }
            if (businessEmail) {
                doc
                    .fontSize(10)
                    .fillColor(secondaryColor)
                    .text(`Email: ${businessEmail}`, 40, headerYPos);
                headerYPos += 15;
            }
            if (businessPhone) {
                doc
                    .fontSize(10)
                    .fillColor(secondaryColor)
                    .text(`Phone: ${businessPhone}`, 40, headerYPos);
                headerYPos += 15;
            }
            // 3. Garis pemisah
            const separatorY = headerYPos + 10;
            doc
                .strokeColor(primaryColor)
                .lineWidth(1)
                .moveTo(40, separatorY)
                .lineTo(pageWidth - 40, separatorY)
                .stroke();
            // 4. INVOICE Title - biru besar
            const titleY = separatorY + 20;
            doc.fontSize(36).fillColor(primaryColor).text("INVOICE", 40, titleY);
            // 5. Detail invoice di kanan atas
            const detailX = 350;
            const detailY = titleY;
            doc
                .fontSize(10)
                .fillColor(secondaryColor)
                .text("No. Invoice:", detailX, detailY)
                .text(invoice.invoice_number, detailX + 100, detailY)
                .text("Tanggal:", detailX, detailY + 20)
                .text(issueDate, detailX + 100, detailY + 20)
                .text("Jatuh Tempo:", detailX, detailY + 40)
                .text(dueDate, detailX + 100, detailY + 40)
                .text("Status:", detailX, detailY + 60);
            // Status dengan warna sesuai
            const statusColor = invoice.status === "PAID"
                ? successColor
                : invoice.status === "OVERDUE"
                    ? dangerColor
                    : invoice.status === "PARTIAL"
                        ? warningColor
                        : invoice.status === "PENDING"
                            ? primaryColor
                            : "#95a5a6";
            doc
                .fillColor(statusColor)
                .text(invoice.status, detailX + 100, detailY + 60);
            // 6. Info client
            const clientY = titleY + 90;
            doc
                .fontSize(12)
                .fillColor(primaryColor)
                .text("Ditagihkan kepada:", 40, clientY);
            let clientInfoY = clientY + 15;
            doc
                .fontSize(12)
                .fillColor(secondaryColor)
                .text(invoice.client.name, 40, clientInfoY);
            clientInfoY += 15;
            // Tampilkan informasi client secara lengkap
            if (invoice.client.company_name) {
                doc.fontSize(10).text(invoice.client.company_name, 40, clientInfoY);
                clientInfoY += 15;
            }
            // Gabungkan alamat lengkap
            let fullAddress = "";
            if (invoice.client.address) {
                fullAddress += invoice.client.address;
            }
            if (invoice.client.city) {
                fullAddress += (fullAddress ? ", " : "") + invoice.client.city;
            }
            if (invoice.client.state) {
                fullAddress += (fullAddress ? ", " : "") + invoice.client.state;
            }
            if (invoice.client.postal_code) {
                fullAddress += (fullAddress ? " " : "") + invoice.client.postal_code;
            }
            if (invoice.client.country) {
                fullAddress += (fullAddress ? ", " : "") + invoice.client.country;
            }
            if (fullAddress) {
                doc.fontSize(10).text(fullAddress, 40, clientInfoY);
                clientInfoY += 15;
            }
            if (invoice.client.email) {
                doc.fontSize(10).text(invoice.client.email, 40, clientInfoY);
                clientInfoY += 15;
            }
            if (invoice.client.phone) {
                doc.fontSize(10).text(invoice.client.phone, 40, clientInfoY);
                clientInfoY += 15;
            }
            // 7. Tabel item invoice
            let yPos = Math.max(clientInfoY + 25, titleY + 200);
            yPos = checkForNewPage(doc, yPos, 250, pageHeight);
            const tableTop = yPos;
            const tableWidth = pageWidth - 80; // 40px margin di setiap sisi
            // Header tabel dengan latar biru
            doc.fillColor(primaryColor).rect(40, tableTop, tableWidth, 25).fill();
            // Definisikan lebar kolom
            const colWidths = {
                item: tableWidth * 0.25,
                desc: tableWidth * 0.25,
                qty: tableWidth * 0.1,
                price: tableWidth * 0.15,
                tax: tableWidth * 0.1,
                total: tableWidth * 0.15,
            };
            const colX = {
                item: 40,
                desc: 40 + colWidths.item,
                qty: 40 + colWidths.item + colWidths.desc,
                price: 40 + colWidths.item + colWidths.desc + colWidths.qty,
                tax: 40 +
                    colWidths.item +
                    colWidths.desc +
                    colWidths.qty +
                    colWidths.price,
                total: 40 +
                    colWidths.item +
                    colWidths.desc +
                    colWidths.qty +
                    colWidths.price +
                    colWidths.tax,
            };
            // Teks header tabel
            doc
                .fillColor("white")
                .fontSize(11)
                .text("Item", colX.item + 5, tableTop + 8)
                .text("Description", colX.desc + 5, tableTop + 8)
                .text("Qty", colX.qty + 5, tableTop + 8, {
                width: colWidths.qty - 10,
                align: "center",
            })
                .text("Harga Satuan", colX.price + 5, tableTop + 8, {
                width: colWidths.price - 10,
                align: "center",
            })
                .text("Pajak", colX.tax + 5, tableTop + 8, {
                width: colWidths.tax - 10,
                align: "center",
            })
                .text("Jumlah", colX.total + 5, tableTop + 8, {
                width: colWidths.total - 10,
                align: "center",
            });
            // Isi tabel
            yPos = tableTop + 35;
            let altRow = false;
            invoice.items.forEach((item, index) => {
                var _a, _b;
                // Cek apakah perlu halaman baru untuk item berikutnya
                const itemHeight = 25;
                if (yPos + itemHeight > pageHeight - 50) {
                    doc.addPage();
                    yPos = 40;
                    // Ulangi header tabel di halaman baru
                    doc.fillColor(primaryColor).rect(40, yPos, tableWidth, 25).fill();
                    doc
                        .fillColor("white")
                        .fontSize(11)
                        .text("Item", colX.item + 5, yPos + 8)
                        .text("Description", colX.desc + 5, yPos + 8)
                        .text("Qty", colX.qty + 5, yPos + 8, {
                        width: colWidths.qty - 10,
                        align: "center",
                    })
                        .text("Harga Satuan", colX.price + 5, yPos + 8, {
                        width: colWidths.price - 10,
                        align: "center",
                    })
                        .text("Pajak", colX.tax + 5, yPos + 8, {
                        width: colWidths.tax - 10,
                        align: "center",
                    })
                        .text("Jumlah", colX.total + 5, yPos + 8, {
                        width: colWidths.total - 10,
                        align: "center",
                    });
                    yPos += 35;
                    altRow = false;
                }
                if (altRow) {
                    doc
                        .fillColor("#f6f6f6")
                        .rect(40, yPos - 10, tableWidth, 25)
                        .fill();
                }
                altRow = !altRow;
                // Tampilkan item dan deskripsi terpisah
                const itemName = ((_a = item.product) === null || _a === void 0 ? void 0 : _a.name) || "Unnamed Product";
                const itemDesc = item.description || ((_b = item.product) === null || _b === void 0 ? void 0 : _b.description) || "";
                doc
                    .fillColor(secondaryColor)
                    .fontSize(10)
                    .text(itemName, colX.item + 5, yPos - 5, {
                    width: colWidths.item - 10,
                })
                    .text(itemDesc, colX.desc + 5, yPos - 5, {
                    width: colWidths.desc - 10,
                })
                    .text(item.quantity.toString(), colX.qty + 5, yPos - 5, {
                    width: colWidths.qty - 10,
                    align: "center",
                })
                    .text(formatCurrency(item.unit_price), colX.price + 5, yPos - 5, {
                    width: colWidths.price - 10,
                    align: "center",
                })
                    .text(item.tax_rate ? `${item.tax_rate}%` : "0%", colX.tax + 5, yPos - 5, { width: colWidths.tax - 10, align: "center" })
                    .text(formatCurrency(item.amount), colX.total + 5, yPos - 5, {
                    width: colWidths.total - 10,
                    align: "center",
                });
                yPos += itemHeight;
            });
            // Garis di bawah tabel
            doc
                .strokeColor(primaryColor)
                .lineWidth(1)
                .moveTo(40, yPos)
                .lineTo(pageWidth - 40, yPos)
                .stroke();
            // 8. Bagian summary
            yPos = checkForNewPage(doc, yPos, 200, pageHeight);
            yPos += 20;
            // Area ringkasan di sisi kanan
            const summaryWidth = 250;
            const summaryX = pageWidth - summaryWidth - 40; // 40 adalah margin
            // Subtotal
            doc
                .fontSize(10)
                .fillColor(secondaryColor)
                .text("Subtotal:", summaryX, yPos, {
                width: 150,
                align: "right",
            })
                .text(formatCurrency(invoice.subtotal), summaryX + 160, yPos, {
                width: 90,
                align: "right",
            });
            // Discount (if any)
            yPos += 20;
            if (invoice.discount_amount &&
                parseFloat(invoice.discount_amount.toString()) > 0) {
                doc
                    .text("Diskon:", summaryX, yPos, {
                    width: 150,
                    align: "right",
                })
                    .text(`- ${formatCurrency(invoice.discount_amount)}`, summaryX + 160, yPos, {
                    width: 90,
                    align: "right",
                });
                yPos += 20;
            }
            // Pajak
            doc
                .text("Pajak:", summaryX, yPos, {
                width: 150,
                align: "right",
            })
                .text(formatCurrency(invoice.tax_amount), summaryX + 160, yPos, {
                width: 90,
                align: "right",
            });
            // Total dengan background biru
            yPos += 25;
            doc
                .fillColor(primaryColor)
                .rect(summaryX, yPos - 5, summaryWidth, 25)
                .fill();
            doc
                .fontSize(12)
                .fillColor("white")
                .text("TOTAL:", summaryX, yPos, {
                width: 150,
                align: "right",
            })
                .text(formatCurrency(invoice.total_amount), summaryX + 160, yPos, {
                width: 90,
                align: "right",
            });
            // Amount Paid - gunakan total pembayaran yang benar (tidak melebihi total invoice)
            // Amount Paid - show actual total paid without capping
            yPos += 30;
            doc
                .fontSize(11)
                .fillColor(successColor)
                .text("AMOUNT PAID:", summaryX, yPos, {
                width: 150,
                align: "right",
            });
            if (invoice.payments && invoice.payments.length > 0) {
                // Remove capping - show actual total paid
                doc
                    .fillColor(successColor)
                    .text(formatCurrency(totalPaid), summaryX + 160, yPos, {
                    width: 90,
                    align: "right",
                });
            }
            else {
                // Jika tidak ada pembayaran
                doc
                    .fillColor(successColor)
                    .text(formatCurrency(0), summaryX + 160, yPos, {
                    width: 90,
                    align: "right",
                });
            }
            // Balance Due - sisa pembayaran yang benar
            // Balance Due - with improved display for paid invoices and credits
            yPos += 25;
            const balanceDueColor = balanceDue > 0
                ? isOverdue
                    ? dangerColor
                    : warningColor
                : successColor;
            // Use appropriate label based on balance
            let balanceDueText = "BALANCE DUE:";
            if (balanceDue < 0) {
                balanceDueText = "CREDIT:";
            }
            doc
                .fontSize(12)
                .fillColor(balanceDueColor)
                .text(balanceDueText, summaryX, yPos, {
                width: 150,
                align: "right",
            })
                .text(formatCurrency(Math.abs(balanceDue)), summaryX + 160, yPos, {
                width: 90,
                align: "right",
            });
            // Riwayat pembayaran jika ada
            if (invoice.payments && invoice.payments.length > 0) {
                // Cek ruang yang cukup untuk riwayat pembayaran
                yPos = checkForNewPage(doc, yPos, 150 + invoice.payments.length * 25, pageHeight);
                yPos += 40;
                doc
                    .fontSize(14)
                    .fillColor(secondaryColor)
                    .text("Payment History", 40, yPos);
                yPos += 20;
                // Header tabel riwayat pembayaran
                const paymentTableTop = yPos;
                const paymentTableWidth = pageWidth - 80;
                doc
                    .fillColor(primaryColor)
                    .rect(40, paymentTableTop, paymentTableWidth, 25)
                    .fill();
                // Definisikan lebar kolom untuk tabel pembayaran - ubah reference menjadi bank account
                const paymentColWidths = {
                    date: paymentTableWidth * 0.2,
                    method: paymentTableWidth * 0.2,
                    account: paymentTableWidth * 0.4, // Kolom ini untuk bank account
                    amount: paymentTableWidth * 0.2,
                };
                const paymentColX = {
                    date: 40,
                    method: 40 + paymentColWidths.date,
                    account: 40 + paymentColWidths.date + paymentColWidths.method,
                    amount: 40 +
                        paymentColWidths.date +
                        paymentColWidths.method +
                        paymentColWidths.account,
                };
                // Teks header tabel pembayaran
                doc
                    .fillColor("white")
                    .fontSize(11)
                    .text("DATE", paymentColX.date + 5, paymentTableTop + 8)
                    .text("METHOD", paymentColX.method + 5, paymentTableTop + 8)
                    .text("BANK ACCOUNT", paymentColX.account + 5, paymentTableTop + 8) // Ubah menjadi Bank Account
                    .text("AMOUNT", paymentColX.amount + 5, paymentTableTop + 8, {
                    width: paymentColWidths.amount - 10,
                    align: "right",
                });
                // Isi tabel pembayaran
                let paymentYPos = paymentTableTop + 35;
                let altPaymentRow = false;
                invoice.payments.forEach((payment, index) => {
                    var _a, _b, _c, _d;
                    // Cek apakah perlu halaman baru untuk pembayaran berikutnya
                    if (paymentYPos + 25 > pageHeight - 50) {
                        doc.addPage();
                        paymentYPos = 40;
                        // Ulangi header tabel di halaman baru
                        doc
                            .fillColor(primaryColor)
                            .rect(40, paymentYPos - 10, paymentTableWidth, 25)
                            .fill();
                        doc
                            .fillColor("white")
                            .fontSize(11)
                            .text("DATE", paymentColX.date + 5, paymentYPos - 2)
                            .text("METHOD", paymentColX.method + 5, paymentYPos - 2)
                            .text("BANK ACCOUNT", paymentColX.account + 5, paymentYPos - 2) // Ubah menjadi Bank Account
                            .text("AMOUNT", paymentColX.amount + 5, paymentYPos - 2, {
                            width: paymentColWidths.amount - 10,
                            align: "right",
                        });
                        paymentYPos += 20;
                        altPaymentRow = false;
                    }
                    if (altPaymentRow) {
                        doc
                            .fillColor("#f6f6f6")
                            .rect(40, paymentYPos - 10, paymentTableWidth, 25)
                            .fill();
                    }
                    altPaymentRow = !altPaymentRow;
                    const paymentDate = new Date(payment.payment_date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    });
                    // Tampilkan bank account atau e-wallet dari payment method
                    let accountInfo = "-";
                    if (payment.payment_method === "BANK_TRANSFER" &&
                        ((_b = (_a = invoice.user) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.bank_accounts)) {
                        // Cari bank account yang sesuai dengan reference (jika ada)
                        if (payment.reference) {
                            const bankAccount = invoice.user.profile.bank_accounts.find((account) => account.account_number === payment.reference);
                            if (bankAccount) {
                                accountInfo = `${bankAccount.bank_name}: ${bankAccount.account_number} (${bankAccount.account_name})`;
                            }
                            else {
                                // Jika tidak ditemukan, tampilkan reference sebagai nomor rekening
                                accountInfo = payment.reference;
                            }
                        }
                        else if (invoice.user.profile.bank_accounts.length > 0) {
                            // Jika tidak ada reference tapi ada rekening, tampilkan rekening utama
                            const primaryAccount = invoice.user.profile.bank_accounts.find((acc) => acc.is_primary);
                            const firstAccount = invoice.user.profile.bank_accounts[0];
                            const accountToShow = primaryAccount || firstAccount;
                            accountInfo = `${accountToShow.bank_name}: ${accountToShow.account_number} (${accountToShow.account_name})`;
                        }
                    }
                    else if (payment.payment_method === "E_WALLET" &&
                        ((_d = (_c = invoice.user) === null || _c === void 0 ? void 0 : _c.profile) === null || _d === void 0 ? void 0 : _d.e_wallets)) {
                        // Cari e-wallet yang sesuai dengan reference (jika ada)
                        if (payment.reference) {
                            const eWallet = invoice.user.profile.e_wallets.find((wallet) => wallet.phone_number === payment.reference);
                            if (eWallet) {
                                accountInfo = `${eWallet.wallet_type}: ${eWallet.phone_number} (${eWallet.account_name})`;
                            }
                            else {
                                // Jika tidak ditemukan, tampilkan reference sebagai nomor e-wallet
                                accountInfo = payment.reference;
                            }
                        }
                        else if (invoice.user.profile.e_wallets.length > 0) {
                            // Jika tidak ada reference tapi ada e-wallet, tampilkan e-wallet utama
                            const primaryWallet = invoice.user.profile.e_wallets.find((wallet) => wallet.is_primary);
                            const firstWallet = invoice.user.profile.e_wallets[0];
                            const walletToShow = primaryWallet || firstWallet;
                            accountInfo = `${walletToShow.wallet_type}: ${walletToShow.phone_number} (${walletToShow.account_name})`;
                        }
                    }
                    else if (payment.reference) {
                        // Jika ada reference tapi tidak cocok dengan bank atau e-wallet
                        accountInfo = payment.reference;
                    }
                    doc
                        .fillColor(secondaryColor)
                        .fontSize(10)
                        .text(paymentDate, paymentColX.date + 5, paymentYPos - 5)
                        .text(payment.payment_method, paymentColX.method + 5, paymentYPos - 5)
                        .text(accountInfo, // Tampilkan bank account atau reference
                    paymentColX.account + 5, paymentYPos - 5)
                        .fillColor(successColor)
                        .text(formatCurrency(payment.amount), paymentColX.amount + 5, paymentYPos - 5, {
                        width: paymentColWidths.amount - 10,
                        align: "right",
                    });
                    paymentYPos += 25;
                });
                // Garis di bawah tabel pembayaran
                doc
                    .strokeColor(primaryColor)
                    .lineWidth(1)
                    .moveTo(40, paymentYPos)
                    .lineTo(pageWidth - 40, paymentYPos)
                    .stroke();
                // Update yPos untuk konten berikutnya
                yPos = paymentYPos + 20;
            }
            // Payment Information - ditampilkan jika belum lunas
            if (!isPaid && invoice.user && invoice.user.profile) {
                const bankAccounts = invoice.user.profile.bank_accounts;
                const eWallets = invoice.user.profile.e_wallets;
                const hasBankAccounts = bankAccounts !== undefined &&
                    bankAccounts !== null &&
                    bankAccounts.length > 0;
                const hasEWallets = eWallets !== undefined && eWallets !== null && eWallets.length > 0;
                if (hasBankAccounts || hasEWallets) {
                    // Cek ruang yang cukup
                    yPos = checkForNewPage(doc, yPos, 150, pageHeight);
                    yPos += 20;
                    doc
                        .fontSize(14)
                        .fillColor(secondaryColor)
                        .text("Informasi Pembayaran", 40, yPos);
                    // Tambahkan catatan pembayaran
                    yPos += 20;
                    doc
                        .fontSize(10)
                        .fillColor(secondaryColor)
                        .text("Silakan lakukan pembayaran melalui salah satu metode berikut:", 40, yPos);
                    yPos += 20;
                    // Bank accounts
                    if (hasBankAccounts && bankAccounts) {
                        // Tampilkan rekening utama (primary) dahulu
                        const primaryAccounts = bankAccounts.filter((acc) => acc.is_primary);
                        const otherAccounts = bankAccounts.filter((acc) => !acc.is_primary);
                        const sortedAccounts = [...primaryAccounts, ...otherAccounts];
                        doc
                            .fontSize(12)
                            .fillColor(secondaryColor)
                            .text("Rekening Bank:", 40, yPos);
                        yPos += 20;
                        sortedAccounts.forEach((account, index) => {
                            // Cek ruang yang cukup
                            if (yPos + 15 > pageHeight - 50) {
                                doc.addPage();
                                yPos = 40;
                            }
                            const accountText = `${account.bank_name}: ${account.account_number} (${account.account_name})${account.is_primary ? " (Direkomendasikan)" : ""}`;
                            doc
                                .fontSize(10)
                                .fillColor(secondaryColor)
                                .text(accountText, 60, yPos);
                            yPos += 15;
                            // Hanya tambahkan sedikit spasi ekstra jika bukan item terakhir
                            if (index < sortedAccounts.length - 1) {
                                yPos += 5;
                            }
                        });
                    }
                    // E-wallets
                    if (hasEWallets && eWallets) {
                        // Cek ruang yang cukup
                        yPos = checkForNewPage(doc, yPos, 100, pageHeight);
                        yPos += 15;
                        // Tampilkan rekening utama (primary) dahulu
                        const primaryWallets = eWallets.filter((wallet) => wallet.is_primary);
                        const otherWallets = eWallets.filter((wallet) => !wallet.is_primary);
                        const sortedWallets = [...primaryWallets, ...otherWallets];
                        doc
                            .fontSize(12)
                            .fillColor(secondaryColor)
                            .text("E-Wallet:", 40, yPos);
                        yPos += 20;
                        sortedWallets.forEach((wallet, index) => {
                            // Cek ruang yang cukup
                            if (yPos + 15 > pageHeight - 50) {
                                doc.addPage();
                                yPos = 40;
                            }
                            const walletText = `${wallet.wallet_type}: ${wallet.phone_number} (${wallet.account_name})${wallet.is_primary ? " (Direkomendasikan)" : ""}`;
                            doc
                                .fontSize(10)
                                .fillColor(secondaryColor)
                                .text(walletText, 60, yPos);
                            yPos += 15;
                        });
                    }
                    // Tambahkan instruksi pembayaran
                    // Cek ruang yang cukup
                    yPos = checkForNewPage(doc, yPos, 30, pageHeight);
                    yPos += 15;
                    doc
                        .fontSize(10)
                        .fillColor(secondaryColor)
                        .text(`Mohon mencantumkan nomor invoice ${invoice.invoice_number} saat melakukan pembayaran untuk memudahkan verifikasi.`, 40, yPos);
                }
            }
            // 9. Catatan
            if (invoice.notes || invoice.terms) {
                // Cek ruang yang cukup
                yPos = checkForNewPage(doc, yPos, 100, pageHeight);
                yPos += 40;
            }
            if (invoice.notes) {
                doc.fontSize(12).fillColor(primaryColor).text("Notes", 40, yPos);
                doc
                    .fontSize(10)
                    .fillColor(secondaryColor)
                    .text(invoice.notes, 40, yPos + 15, { width: pageWidth - 80 });
                yPos = doc.y + 10;
            }
            // 10. Syarat & Ketentuan
            if (invoice.terms) {
                // Cek ruang yang cukup
                yPos = checkForNewPage(doc, yPos, 100, pageHeight);
                doc
                    .fontSize(12)
                    .fillColor(primaryColor)
                    .text("Terms & Conditions", 40, yPos);
                doc
                    .fontSize(10)
                    .fillColor(secondaryColor)
                    .text(invoice.terms, 40, yPos + 15, { width: pageWidth - 80 });
                yPos = doc.y + 20;
            }
            // Pesan Terima Kasih
            yPos = checkForNewPage(doc, yPos, 50, pageHeight);
            doc
                .fontSize(10)
                .fillColor(secondaryColor)
                .text("Thank you for your business!", 0, yPos, {
                align: "center",
                width: pageWidth,
            });
            // 11. Nomor halaman di footer
            const totalPages = doc.bufferedPageRange().count;
            for (let i = 0; i < totalPages; i++) {
                doc.switchToPage(i);
                doc
                    .fontSize(10)
                    .fillColor(secondaryColor)
                    .text(`Page ${i + 1} / ${totalPages}`, 0, pageHeight - 30, {
                    align: "center",
                    width: pageWidth,
                });
            }
            // Finalisasi dokumen
            doc.end();
        }
        catch (error) {
            reject(error);
        }
    });
});
exports.generateInvoicePdf = generateInvoicePdf;
