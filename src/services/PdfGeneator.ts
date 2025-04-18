// src/services/PdfGeneator.ts
import PDFDocument from "pdfkit";

// Fungsi untuk menghitung total pembayaran dari invoice
function calculateTotalPaid(invoice: InvoiceForPDF): number {
  if (!invoice.payments || invoice.payments.length === 0) {
    return 0;
  }

  return invoice.payments.reduce(
    (sum, payment) =>
      sum +
      (typeof payment.amount === "string"
        ? parseFloat(payment.amount)
        : payment.amount),
    0
  );
}

// Fungsi untuk cek apakah perlu halaman baru
function checkForNewPage(
  doc: any,
  yPos: number,
  spaceNeeded: number,
  pageHeight: number
): number {
  if (yPos + spaceNeeded > pageHeight - 50) {
    doc.addPage();
    return 40; // Reset posisi y ke atas halaman baru
  }
  return yPos;
}

// Definisikan interface untuk invoice PDF
export interface InvoiceForPDF {
  invoice_number: string;
  issue_date: Date;
  due_date: Date;
  status: string;
  subtotal: number | string;
  tax_amount: number | string;
  discount_amount?: number | string | null;
  total_amount: number | string;
  notes?: string | null;
  terms?: string | null;

  client: {
    name: string;
    email: string;
    address?: string | null;
    phone?: string | null;
    company_name?: string | null;
    city?: string | null;
    state?: string | null;
    postal_code?: string | null;
    country?: string | null;
  };

  items: Array<{
    description?: string | null;
    quantity: number;
    unit_price: number | string;
    tax_rate?: number | string | null;
    tax_amount?: number | string | null;
    amount: number | string;
    product: {
      name?: string | null;
      description?: string | null;
    };
  }>;

  payments?: Array<{
    payment_id?: number;
    amount: number | string;
    payment_date: Date | string;
    payment_method: string;
    reference?: string | null;
  }> | null;

  user?: {
    email?: string;
    profile?: {
      company_name?: string | null;
      address?: string | null;
      phone?: string | null;
      bank_accounts?: Array<{
        bank_name: string;
        account_number: string;
        account_name: string;
        is_primary: boolean;
      }> | null;
      e_wallets?: Array<{
        wallet_type: string;
        phone_number: string;
        account_name: string;
        is_primary: boolean;
      }> | null;
    } | null;
  } | null;
}

export const generateInvoicePdf = async (
  invoice: InvoiceForPDF
): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      // Buat dokumen PDF
      const doc = new PDFDocument({
        margin: 40,
        size: "A4",
        layout: "portrait",
        bufferPages: true,
        autoFirstPage: true,
      });

      // Collect PDF data in memory
      const chunks: Buffer[] = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      // Definisi ukuran halaman
      const pageWidth = doc.page.width;
      const pageHeight = doc.page.height;

      // Format tanggal
      const issueDate = new Date(invoice.issue_date).toLocaleDateString(
        "id-ID",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );
      const dueDate = new Date(invoice.due_date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // Info bisnis
      const businessName =
        invoice.user?.profile?.company_name || "Your Business";
      const businessAddress = invoice.user?.profile?.address || "";
      const businessEmail = invoice.user?.email || "";

      // Format mata uang
      const formatCurrency = (amount: number | string) => {
        const numAmount =
          typeof amount === "string" ? parseFloat(amount) : amount;
        return `Rp ${numAmount.toLocaleString("id-ID")}`;
      };

      // Format mata uang untuk amount paid yang lebih simpel
      const formatCurrencyForAmountPaid = (amount: number | string) => {
        const numAmount =
          typeof amount === "string" ? parseFloat(amount) : amount;
        return `Rp ${numAmount}`;
      };

      // Warna tema
      const primaryColor = "#3498db";
      const secondaryColor = "#2c3e50";

      // Menghitung status pembayaran
      const isPaid = invoice.status === "PAID";
      const isPartial = invoice.status === "PARTIAL";

      // Hitung total pembayaran dan sisa tagihan
      const totalPaid = calculateTotalPaid(invoice);
      const totalAmount =
        typeof invoice.total_amount === "string"
          ? parseFloat(invoice.total_amount.toString())
          : invoice.total_amount;
      const balanceDue = Math.max(0, totalAmount - totalPaid);

      // ===== MULAI MEMBUAT LAYOUT INVOICE =====

      // 1. HEADER - Nama Perusahaan
      doc.fontSize(24).fillColor(secondaryColor).text(businessName, 40, 40);

      // 2. Info perusahaan
      doc
        .fontSize(10)
        .fillColor(secondaryColor)
        .text(businessAddress, 40, 70)
        .text(`Email: ${businessEmail}`, 40, 85);

      // 3. Garis pemisah
      doc
        .strokeColor(primaryColor)
        .lineWidth(1)
        .moveTo(40, 105)
        .lineTo(pageWidth - 40, 105)
        .stroke();

      // 4. INVOICE Title - biru besar
      doc.fontSize(36).fillColor(primaryColor).text("INVOICE", 40, 125);

      // 5. Detail invoice di kanan atas - PERBAIKAN: Beri ruang lebih antar data
      const detailX = 350;

      doc
        .fontSize(10)
        .fillColor(secondaryColor)
        .text("No. Invoice:", detailX, 125)
        .text(invoice.invoice_number, detailX + 100, 125)

        .text("Tanggal:", detailX, 145) // Tambahkan jarak vertikal
        .text(issueDate, detailX + 100, 145)

        .text("Jatuh Tempo:", detailX, 165) // Tambahkan jarak vertikal
        .text(dueDate, detailX + 100, 165)

        .text("Status:", detailX, 185); // Tambahkan jarak vertikal

      // Status dengan warna sesuai
      const statusColor =
        invoice.status === "PAID"
          ? "#27ae60"
          : invoice.status === "OVERDUE"
          ? "#e74c3c"
          : invoice.status === "PARTIAL"
          ? "#f39c12"
          : invoice.status === "PENDING"
          ? primaryColor
          : "#95a5a6";

      doc.fillColor(statusColor).text(invoice.status, detailX + 100, 185);

      // 6. Info client
      doc
        .fontSize(12)
        .fillColor(primaryColor)
        .text("Ditagihkan kepada:", 40, 200);

      doc
        .fontSize(12)
        .fillColor(secondaryColor)
        .text(invoice.client.name, 40, 215);

      // Tampilkan informasi client secara lengkap
      let clientYPos = 230;
      if (invoice.client.company_name) {
        doc.fontSize(10).text(invoice.client.company_name, 40, clientYPos);
        clientYPos += 15;
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
        doc.fontSize(10).text(fullAddress, 40, clientYPos);
        clientYPos += 15;
      }

      doc.fontSize(10).text(invoice.client.email, 40, clientYPos);
      clientYPos += 15;

      if (invoice.client.phone) {
        doc.fontSize(10).text(invoice.client.phone, 40, clientYPos);
        clientYPos += 15;
      }

      // 7. Tabel item invoice
      let yPos = Math.max(300, clientYPos + 20); // Pastikan cukup jarak dari data klien
      yPos = checkForNewPage(doc, yPos, 250, pageHeight); // Cek apakah cukup ruang untuk tabel

      const tableTop = yPos;
      const tableWidth = pageWidth - 80; // 40px margin di setiap sisi

      // Header tabel dengan latar biru
      doc.fillColor(primaryColor).rect(40, tableTop, tableWidth, 25).fill();

      // Definisikan lebar kolom - UBAH: Pisahkan item dan deskripsi
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
        tax:
          40 +
          colWidths.item +
          colWidths.desc +
          colWidths.qty +
          colWidths.price,
        total:
          40 +
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

      // Kita perlu menghitung total tinggi yang dibutuhkan item
      const itemHeight = 25; // Tinggi untuk setiap item
      const totalItemsHeight = invoice.items.length * itemHeight + 20; // 20px tambahan untuk margin

      // Cek apakah perlu halaman baru untuk tabel item
      if (yPos + totalItemsHeight > pageHeight - 50) {
        doc.addPage();
        yPos = 40;
      }

      invoice.items.forEach((item, index) => {
        // Cek apakah perlu halaman baru untuk item berikutnya
        if (yPos + itemHeight > pageHeight - 50) {
          doc.addPage();
          yPos = 40;

          // Opsional: Ulangi header tabel di halaman baru
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
        const itemName = item.product?.name || "Unnamed Product";
        const itemDesc = item.description || item.product?.description || "";

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
          .text(
            item.tax_rate ? `${item.tax_rate}%` : "0%",
            colX.tax + 5,
            yPos - 5,
            { width: colWidths.tax - 10, align: "center" }
          )
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

      // 8. Bagian summary - cek ruang yang cukup
      yPos = checkForNewPage(doc, yPos, 200, pageHeight);
      yPos += 20;

      // Pastikan area ringkasan (subtotal, dll) berada di sisi kanan
      // PERBAIKAN: Buat area lebih lebar
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
      if (
        invoice.discount_amount &&
        parseFloat(invoice.discount_amount.toString()) > 0
      ) {
        doc
          .text("Diskon:", summaryX, yPos, {
            width: 150,
            align: "right",
          })
          .text(
            `- ${formatCurrency(invoice.discount_amount)}`,
            summaryX + 160,
            yPos,
            {
              width: 90,
              align: "right",
            }
          );
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
      yPos += 20;

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

      // Amount Paid dengan warna hijau - PERBAIKAN FORMAT TEKS
      yPos += 30; // tambah jarak lebih banyak
      const amountPaidY = yPos;

      // Jika pembayaran ada, ambil hanya pembayaran terakhir
      const latestPayment =
        invoice.payments && invoice.payments.length > 0
          ? invoice.payments[invoice.payments.length - 1]
          : null;

      const amountPaidValue = latestPayment
        ? formatCurrencyForAmountPaid(latestPayment.amount)
        : formatCurrencyForAmountPaid(0);

      // Tampilkan hanya amount paid terbaru saja
      doc
        .fontSize(11)
        .fillColor("#27ae60")
        .text("Amount Paid:", summaryX, amountPaidY, {
          width: 150,
          align: "right",
        });

      // Pisahkan text amount paid ke variabel untuk menghindari terpotong
      doc
        .fontSize(11)
        .fillColor("#27ae60")
        .text(amountPaidValue, summaryX + 160, amountPaidY, {
          width: 90,
          align: "right",
          lineBreak: false,
        });

      // Balance Due dengan warna yang sesuai status - PERBAIKAN FORMAT
      yPos += 25; // tambah jarak lebih banyak
      const balanceDueY = yPos;

      // Hitung balance due hanya dengan pembayaran terakhir (jika ada)
      const paidAmount = latestPayment
        ? typeof latestPayment.amount === "string"
          ? parseFloat(latestPayment.amount)
          : latestPayment.amount
        : 0;

      const simplifiedBalanceDue = Math.max(0, totalAmount - paidAmount);

      doc
        .fontSize(12)
        .fillColor(simplifiedBalanceDue <= 0 ? "#27ae60" : "#e74c3c")
        .text("Balance Due:", summaryX, balanceDueY, {
          width: 150,
          align: "right",
        });

      // Pisahkan text balance due ke variabel untuk menghindari terpotong
      doc
        .fontSize(12)
        .fillColor(simplifiedBalanceDue <= 0 ? "#27ae60" : "#e74c3c")
        .text(
          formatCurrency(simplifiedBalanceDue),
          summaryX + 160,
          balanceDueY,
          {
            width: 90,
            align: "right",
            lineBreak: false,
          }
        );

      // Riwayat pembayaran jika ada
      if (invoice.payments && invoice.payments.length > 0) {
        // Cek ruang yang cukup untuk riwayat pembayaran
        yPos = checkForNewPage(
          doc,
          yPos,
          150 + invoice.payments.length * 25,
          pageHeight
        );
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

        // Definisikan lebar kolom untuk tabel pembayaran
        const paymentColWidths = {
          date: paymentTableWidth * 0.25,
          method: paymentTableWidth * 0.25,
          reference: paymentTableWidth * 0.25,
          amount: paymentTableWidth * 0.25,
        };

        const paymentColX = {
          date: 40,
          method: 40 + paymentColWidths.date,
          reference: 40 + paymentColWidths.date + paymentColWidths.method,
          amount:
            40 +
            paymentColWidths.date +
            paymentColWidths.method +
            paymentColWidths.reference,
        };

        // Teks header tabel pembayaran
        doc
          .fillColor("white")
          .fontSize(11)
          .text("DATE", paymentColX.date + 5, paymentTableTop + 8)
          .text("METHOD", paymentColX.method + 5, paymentTableTop + 8)
          .text("REFERENCE", paymentColX.reference + 5, paymentTableTop + 8)
          .text("AMOUNT", paymentColX.amount + 5, paymentTableTop + 8, {
            width: paymentColWidths.amount - 10,
            align: "right",
          });

        // Isi tabel pembayaran
        let paymentYPos = paymentTableTop + 35;
        let altPaymentRow = false;

        invoice.payments.forEach((payment, index) => {
          // Cek apakah perlu halaman baru untuk pembayaran berikutnya
          if (paymentYPos + 25 > pageHeight - 50) {
            doc.addPage();
            paymentYPos = 40;

            // Opsional: Ulangi header tabel di halaman baru
            doc
              .fillColor(primaryColor)
              .rect(40, paymentYPos - 10, paymentTableWidth, 25)
              .fill();
            doc
              .fillColor("white")
              .fontSize(11)
              .text("DATE", paymentColX.date + 5, paymentYPos - 2)
              .text("METHOD", paymentColX.method + 5, paymentYPos - 2)
              .text("REFERENCE", paymentColX.reference + 5, paymentYPos - 2)
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

          const paymentDate = new Date(payment.payment_date).toLocaleDateString(
            "id-ID",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          );

          doc
            .fillColor(secondaryColor)
            .fontSize(10)
            .text(paymentDate, paymentColX.date + 5, paymentYPos - 5)
            .text(
              payment.payment_method,
              paymentColX.method + 5,
              paymentYPos - 5
            )
            .text(
              payment.reference || "-",
              paymentColX.reference + 5,
              paymentYPos - 5
            )
            .fillColor("#27ae60")
            .text(
              formatCurrency(payment.amount),
              paymentColX.amount + 5,
              paymentYPos - 5,
              {
                width: paymentColWidths.amount - 10,
                align: "right",
              }
            );

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

      // Payment Information - HANYA TAMPILKAN JIKA BELUM LUNAS
      if (!isPaid && invoice.user && invoice.user.profile) {
        const bankAccounts = invoice.user.profile.bank_accounts;
        const eWallets = invoice.user.profile.e_wallets;

        const hasBankAccounts =
          bankAccounts !== undefined &&
          bankAccounts !== null &&
          bankAccounts.length > 0;
        const hasEWallets =
          eWallets !== undefined && eWallets !== null && eWallets.length > 0;

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
            .text(
              "Silakan lakukan pembayaran melalui salah satu metode berikut:",
              40,
              yPos
            );

          yPos += 20;

          // Bank accounts
          if (hasBankAccounts && bankAccounts) {
            // Tampilkan rekening utama (primary) dahulu
            const primaryAccounts = bankAccounts.filter(
              (acc) => acc.is_primary
            );
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

              const accountText = `${account.bank_name}: ${
                account.account_number
              } (${account.account_name})${
                account.is_primary ? " (Direkomendasikan)" : ""
              }`;
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
            const primaryWallets = eWallets.filter(
              (wallet) => wallet.is_primary
            );
            const otherWallets = eWallets.filter(
              (wallet) => !wallet.is_primary
            );
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

              const walletText = `${wallet.wallet_type}: ${
                wallet.phone_number
              } (${wallet.account_name})${
                wallet.is_primary ? " (Direkomendasikan)" : ""
              }`;
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
            .text(
              `Mohon mencantumkan nomor invoice ${invoice.invoice_number} saat melakukan pembayaran untuk memudahkan verifikasi.`,
              40,
              yPos
            );
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
    } catch (error) {
      reject(error);
    }
  });
};
