// src/utils/pdfGenerator.ts
import PDFDocument from "pdfkit";

// Definisikan interface untuk invoice PDF
export interface InvoiceForPDF {
  invoice_number: string;
  issue_date: Date;
  due_date: Date;
  status: string;
  subtotal: number | string;
  tax_amount: number | string;
  total_amount: number | string;
  notes?: string | null;
  terms?: string | null;

  client: {
    name: string;
    email: string;
    address?: string | null;
    phone?: string | null;
  };

  items: Array<{
    description?: string | null;
    quantity: number;
    unit_price: number | string;
    tax_rate?: number | string | null;
    tax_amount?: number | string | null;
    amount: number | string;
    product: {
      description?: string | null;
    };
  }>;

  user?: {
    email?: string;
    profile?: {
      company_name?: string | null;
      address?: string | null;
      phone?: string | null;
    } | null;
  } | null;
}

export const generateInvoicePdf = async (
  invoice: InvoiceForPDF
): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      // Buat dokumen PDF dengan orientation landscape untuk memastikan cukup ruang horizontal
      const doc = new PDFDocument({
        margin: 40,
        size: "A4",
        layout: "portrait",
        bufferPages: true,
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
        return `Rp ${numAmount}`;
      };

      // Warna tema
      const primaryColor = "#3498db";
      const secondaryColor = "#2c3e50";

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

      // 5. Detail invoice di kanan atas
      const detailX = 350;

      doc
        .fontSize(10)
        .fillColor(secondaryColor)
        .text("No. Invoice:", detailX, 125)
        .text(invoice.invoice_number, detailX + 100, 125)

        .text("Tanggal:", detailX, 140)
        .text(issueDate, detailX + 100, 140)

        .text("Jatuh Tempo:", detailX, 155)
        .text(dueDate, detailX + 100, 155)

        .text("Status:", detailX, 170);

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

      doc.fillColor(statusColor).text(invoice.status, detailX + 100, 170);

      // 6. Info client
      doc
        .fontSize(12)
        .fillColor(primaryColor)
        .text("Ditagihkan kepada:", 40, 200);

      doc
        .fontSize(12)
        .fillColor(secondaryColor)
        .text(invoice.client.name, 40, 215);

      doc
        .fontSize(10)
        .text(invoice.client.address || "", 40, 230)
        .text(invoice.client.email, 40, invoice.client.address ? 245 : 230)
        .text(
          invoice.client.phone || "",
          40,
          invoice.client.address ? 260 : 245
        );

      // 7. Tabel item invoice
      const tableTop = 300;
      const tableWidth = pageWidth - 80; // 40px margin di setiap sisi

      // Header tabel dengan latar biru
      doc.fillColor(primaryColor).rect(40, tableTop, tableWidth, 25).fill();

      // Definisikan lebar kolom
      const colWidths = {
        desc: tableWidth * 0.4,
        qty: tableWidth * 0.15,
        price: tableWidth * 0.15,
        tax: tableWidth * 0.15,
        total: tableWidth * 0.15,
      };

      const colX = {
        desc: 40,
        qty: 40 + colWidths.desc,
        price: 40 + colWidths.desc + colWidths.qty,
        tax: 40 + colWidths.desc + colWidths.qty + colWidths.price,
        total:
          40 + colWidths.desc + colWidths.qty + colWidths.price + colWidths.tax,
      };

      // Teks header tabel
      doc
        .fillColor("white")
        .fontSize(11)
        .text("Item / Deskripsi", colX.desc + 5, tableTop + 8)
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
      let yPos = tableTop + 35;
      let altRow = false;

      invoice.items.forEach((item) => {
        if (altRow) {
          doc
            .fillColor("#f6f6f6")
            .rect(40, yPos - 10, tableWidth, 25)
            .fill();
        }
        altRow = !altRow;

        doc
          .fillColor(secondaryColor)
          .fontSize(10)
          .text(
            item.description || item.product?.description || "No description",
            colX.desc + 5,
            yPos - 5,
            { width: colWidths.desc - 10 }
          )
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

        yPos += 25;
      });

      // Garis di bawah tabel
      doc
        .strokeColor(primaryColor)
        .lineWidth(1)
        .moveTo(40, yPos)
        .lineTo(pageWidth - 40, yPos)
        .stroke();

      // 8. Bagian summary
      yPos += 20;

      // Subtotal
      doc
        .fontSize(10)
        .fillColor(secondaryColor)
        .text("Subtotal:", colX.tax, yPos, {
          width: colWidths.tax,
          align: "right",
        })
        .text(formatCurrency(invoice.subtotal), colX.total, yPos, {
          width: colWidths.total,
          align: "right",
        });

      // Pajak
      yPos += 20;
      doc
        .text("Pajak:", colX.tax, yPos, {
          width: colWidths.tax,
          align: "right",
        })
        .text(formatCurrency(invoice.tax_amount), colX.total, yPos, {
          width: colWidths.total,
          align: "right",
        });

      // Total dengan background biru
      yPos += 20;
      const totalBoxWidth = colWidths.tax + colWidths.total;

      doc
        .fillColor(primaryColor)
        .rect(colX.tax, yPos - 5, totalBoxWidth, 25)
        .fill();

      doc
        .fontSize(12)
        .fillColor("white")
        .text("TOTAL:", colX.tax, yPos, {
          width: colWidths.tax,
          align: "right",
        })
        .text(formatCurrency(invoice.total_amount), colX.total, yPos, {
          width: colWidths.total,
          align: "right",
        });

      // 9. Catatan
      yPos += 40;

      if (invoice.notes) {
        doc.fontSize(12).fillColor(primaryColor).text("Catatan:", 40, yPos);

        doc
          .fontSize(10)
          .fillColor(secondaryColor)
          .text(invoice.notes, 40, yPos + 15, { width: pageWidth - 80 });

        yPos = doc.y + 10;
      }

      // 10. Syarat & Ketentuan
      if (invoice.terms) {
        doc
          .fontSize(12)
          .fillColor(primaryColor)
          .text("Syarat & Ketentuan:", 40, yPos);

        doc
          .fontSize(10)
          .fillColor(secondaryColor)
          .text(invoice.terms, 40, yPos + 15, { width: pageWidth - 80 });
      }

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