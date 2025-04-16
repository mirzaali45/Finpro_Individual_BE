import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
require("dotenv").config();

// Tangani environment variables yang mungkin tidak ada
const MAIL_USER = process.env.MAIL_USER || process.env.EMAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS || process.env.EMAIL_PASS;
const MAIL_FROM = process.env.MAIL_FROM || MAIL_USER;
const BASE_URL_FE = process.env.BASE_URL_FE || "http://localhost:3000";

// Tambahkan console log untuk debugging
console.log("Email Configuration:");
console.log("- SMTP Host: smtp.gmail.com");
console.log(
  "- SMTP User:",
  MAIL_USER ? MAIL_USER.substring(0, 3) + "..." : "Not set"
);
console.log("- SMTP Pass:", MAIL_PASS ? "Set (hidden)" : "Not set");
console.log("- Frontend URL:", BASE_URL_FE);

// Definisikan tipe untuk transporter dummy
interface DummyTransporter {
  sendMail: (
    options: nodemailer.SendMailOptions
  ) => Promise<{ messageId: string }>;
  verify: (callback: (error: Error | null, success: boolean) => void) => void;
}

// Buat transporter dengan error handling yang lebih baik
let transporter: nodemailer.Transporter | DummyTransporter;

try {
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
    connectionTimeout: 10000,
    // Tambahkan opsi debug untuk testing
    debug: process.env.NODE_ENV === "development",
    logger: process.env.NODE_ENV === "development",
  });
} catch (error) {
  console.error("Failed to create email transporter:", error);
  // Buat transporter dummy untuk development agar aplikasi tetap berjalan
  if (process.env.NODE_ENV === "development") {
    transporter = {
      sendMail: async (options: nodemailer.SendMailOptions) => {
        console.log("==== DEVELOPMENT MODE: EMAIL NOT SENT ====");
        console.log("To:", options.to);
        console.log("Subject:", options.subject);
        console.log("Template would be sent if configured correctly");
        return { messageId: "dev-mode-no-email-sent" };
      },
      verify: (callback: (error: Error | null, success: boolean) => void) => {
        callback(null, true);
      },
    };
  } else {
    // Untuk production, kita masih perlu membuat transporter agar tidak error
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "dummy@example.com", // ini tidak akan digunakan
        pass: "dummy",
      },
    });
    console.warn(
      "Using non-functional email transport in production - emails won't be sent!"
    );
  }
}

// Verifikasi koneksi SMTP dengan handling yg lebih baik
transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection error:", error);
    console.log(
      "Email sending will not work. Check your credentials or network connection."
    );
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

export const sendVerificationEmail = async (
  email: string,
  token: string
): Promise<boolean> => {
  try {
    // Periksa jika mau melewati proses email untuk development
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(`Verification Link: ${BASE_URL_FE}/verify/${token}`);
      return true;
    }

    const templatePath = path.join(__dirname, "../templates/verify.hbs");

    // Tambahkan cek file exists
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      console.log("Current directory:", __dirname);
      // Gunakan template hardcoded sebagai fallback
      const html = `
        <h1>Complete Your Business Account Registration</h1>
        <p>Thank you for registering your business with our invoice management system.</p>
        <p>Please click the link below to verify your email address and complete your account setup:</p>
        <p><a href="${BASE_URL_FE}/verify/${token}">Complete Registration</a></p>
        <p>Or copy this link: ${BASE_URL_FE}/verify/${token}</p>
      `;

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        subject: "Verify Your Business Account",
        html,
      });

      return true;
    }

    const source = fs.readFileSync(templatePath, "utf-8");
    const template = handlebars.compile(source);

    const html = template({
      link: `${BASE_URL_FE}/verify/${token}`,
    });

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: "Verify Your Business Account",
      html,
    });

    console.log("Verification email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending verification email:", error);
    // Jangan throw error agar registrasi tetap bisa selesai meskipun email gagal
    return false;
  }
};

export const sendResetPassEmail = async (
  email: string,
  token: string
): Promise<boolean> => {
  try {
    // Periksa jika mau melewati proses email untuk development
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(
        `Reset Password Link: ${BASE_URL_FE}/reset-password/${token}`
      );
      return true;
    }

    const templatePath = path.join(__dirname, "../templates", "resetpass.hbs");

    // Tambahkan cek file exists
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Gunakan template hardcoded sebagai fallback
      const html = `
        <h1>Reset Your Password</h1>
        <p>You have requested to reset your password for your invoice management account.</p>
        <p>Please click the link below to reset your password:</p>
        <p><a href="${BASE_URL_FE}/reset-password/${token}">Reset Password</a></p>
        <p>Or copy this link: ${BASE_URL_FE}/reset-password/${token}</p>
        <p>If you did not request this password reset, please ignore this email or contact support.</p>
      `;

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        subject: "Reset Your Password",
        html,
      });

      return true;
    }

    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = handlebars.compile(templateSource);
    const html = compiledTemplate({
      link: `${BASE_URL_FE}/reset-password/${token}`,
    });

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: "Reset Your Password",
      html,
    });

    console.log("Reset password email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending reset password email:", error);
    // Jangan throw error agar proses reset tetap bisa selesai
    return false;
  }
};

export const sendReverificationEmail = async (
  email: string,
  token: string
): Promise<boolean> => {
  try {
    // Periksa jika mau melewati proses email untuk development
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(
        `Email Change Verification Link: ${BASE_URL_FE}/verify-email-change/${token}`
      );
      return true;
    }

    const templatePath = path.join(
      __dirname,
      "../templates",
      "reverification.hbs"
    );

    // Tambahkan cek file exists
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Gunakan template hardcoded sebagai fallback
      const html = `
        <h1>Verify Your Email Change</h1>
        <p>You have requested to change your email address for your invoice management account.</p>
        <p>Please click the link below to verify this new email address:</p>
        <p><a href="${BASE_URL_FE}/verify-change-email/${token}">Verify Email Change</a></p>
        <p>Or copy this link: ${BASE_URL_FE}/verify-change-email/${token}</p>
        <p>If you did not request this email change, please contact support immediately.</p>
      `;

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        subject: "Verify Your Email Change",
        html,
      });

      return true;
    }

    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = handlebars.compile(templateSource);
    const html = compiledTemplate({
      link: `${BASE_URL_FE}/verify-change-email/${token}`,
    });

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: "Verify Your Email Change",
      html,
    });

    console.log("Email change verification sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email change verification:", error);
    // Jangan throw error
    return false;
  }
};
// Modifikasi file mailer.ts

export const sendInvoiceWithPdf = async (
  email: string,
  invoiceNumber: string,
  businessName: string,
  amount: string,
  dueDate: string,
  clientName: string,
  businessEmail: string,
  businessPhone: string,
  businessAddress: string,
  pdfBuffer: Buffer,
  paymentLink?: string | null // Ubah di sini
): Promise<boolean> => {
  try {
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(
        `Invoice Notification: ${invoiceNumber} from ${businessName}`
      );
      console.log(`Amount: ${amount}, Due Date: ${dueDate}`);
      console.log(`PDF attachment included: ${pdfBuffer.length} bytes`);
      return true;
    }

    const templatePath = path.join(
      __dirname,
      "../templates",
      "invoice-email.hbs"
    );

    // Periksa apakah template ada
    let html = "";
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Gunakan template hardcoded jika file tidak ditemukan
      html = `<!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; }
              .header { text-align: center; padding: 20px 0; }
              .content { padding: 20px 0; }
              .invoice-details { background: #f7f7f7; padding: 15px; margin: 15px 0; }
              .footer { text-align: center; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Invoice dari ${businessName}</h1>
              </div>
              <div class="content">
                <p>Halo ${clientName},</p>
                <p>Kami telah melampirkan invoice untuk layanan/produk yang telah kami sediakan:</p>
                <div class="invoice-details">
                  <p><strong>No. Invoice:</strong> ${invoiceNumber}</p>
                  <p><strong>Jatuh Tempo:</strong> ${dueDate}</p>
                  <p><strong>Total:</strong> ${amount}</p>
                </div>
                <p>Invoice lengkap telah kami lampirkan sebagai file PDF dalam email ini.</p>
                ${
                  paymentLink
                    ? `<p><a href="${paymentLink}" style="display: inline-block; background: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Bayar Sekarang</a></p>`
                    : ""
                }
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} ${businessName}. Seluruh hak cipta dilindungi.</p>
                <p>${businessPhone} | ${businessEmail}</p>
                <p>${businessAddress}</p>
              </div>
            </div>
          </body>
        </html>`;
    } else {
      // Gunakan template file jika ada
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);

      html = compiledTemplate({
        businessName,
        invoiceNumber,
        amount,
        dueDate,
        clientName,
        businessEmail,
        businessPhone,
        businessAddress,
        paymentLink,
        currentYear: new Date().getFullYear(),
        issueDate: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        // Tambahkan jika ada logo perusahaan
        companyLogo: process.env.COMPANY_LOGO_URL || null,
        // Tambahkan jika ada social media
        socialLinks: [
          { name: "Website", url: process.env.COMPANY_WEBSITE || "#" },
          { name: "LinkedIn", url: process.env.COMPANY_LINKEDIN || "#" },
        ],
      });
    }

    // Kirim email dengan attachment PDF
    const info = await transporter.sendMail({
      from: `"${businessName}" <${MAIL_FROM}>`,
      to: email,
      subject: `Invoice #${invoiceNumber} dari ${businessName}`,
      html,
      attachments: [
        {
          filename: `Invoice-${invoiceNumber}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Invoice email with PDF sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending invoice email with PDF:", error);
    return false;
  }
};

// Di mailer.ts
export const sendReminderWithPdf = async (
  email: string,
  invoiceNumber: string,
  businessName: string,
  amount: string,
  dueDate: string,
  clientName: string,
  businessEmail: string,
  businessPhone: string,
  businessAddress: string,
  pdfBuffer: Buffer,
  isOverdue: boolean = false,
  paymentLink?: string | null
): Promise<boolean> => {
  try {
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(
        `Reminder for Invoice: ${invoiceNumber} from ${businessName}`
      );
      console.log(`Amount: ${amount}, Due Date: ${dueDate}`);
      console.log(`Is Overdue: ${isOverdue}`);
      console.log(`PDF attachment included: ${pdfBuffer.length} bytes`);
      return true;
    }

    const templatePath = path.join(
      __dirname,
      "../templates",
      "reminder-invoice-email.hbs"
    );

    // Periksa apakah template ada
    let html = "";
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Gunakan template hardcoded jika file tidak ditemukan
      html = `<!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; }
              .header { text-align: center; padding: 20px 0; }
              .content { padding: 20px 0; }
              .invoice-details { background: #f7f7f7; padding: 15px; margin: 15px 0; }
              .footer { text-align: center; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 20px; }
              .overdue { color: #e74c3c; font-weight: bold; }
              .btn { display: inline-block; background: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
              .btn-warning { background: #e74c3c; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>${
                  isOverdue
                    ? "INVOICE JATUH TEMPO"
                    : "Pengingat Pembayaran Invoice"
                }</h1>
              </div>
              <div class="content">
                <p>Halo ${clientName},</p>
                ${
                  isOverdue
                    ? `<p>Kami ingin mengingatkan bahwa invoice berikut <span class="overdue">telah jatuh tempo</span>:</p>`
                    : `<p>Kami ingin mengingatkan Anda tentang invoice berikut yang akan segera jatuh tempo:</p>`
                }
                <div class="invoice-details">
                  <p><strong>No. Invoice:</strong> ${invoiceNumber}</p>
                  <p><strong>Jatuh Tempo:</strong> ${dueDate}</p>
                  <p><strong>Total:</strong> ${amount}</p>
                  ${
                    isOverdue
                      ? `<p class="overdue">Status: JATUH TEMPO</p>`
                      : ""
                  }
                </div>
                <p>Invoice lengkap telah kami lampirkan kembali sebagai file PDF dalam email ini untuk kemudahan Anda.</p>
                ${
                  paymentLink
                    ? `<p style="text-align: center; margin-top: 30px;">
                      <a href="${paymentLink}" class="btn ${
                        isOverdue ? "btn-warning" : ""
                      }">${
                        isOverdue ? "Bayar Sekarang" : "Lakukan Pembayaran"
                      }</a>
                    </p>`
                    : ""
                }
                <p>Jika Anda telah melakukan pembayaran, harap abaikan email ini dan kami mohon maaf atas ketidaknyamanannya.</p>
                <p>Jika Anda memiliki pertanyaan tentang invoice ini, silakan hubungi kami di ${businessEmail} atau ${businessPhone}.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} ${businessName}. Seluruh hak cipta dilindungi.</p>
                <p>${businessPhone} | ${businessEmail}</p>
                <p>${businessAddress}</p>
              </div>
            </div>
          </body>
        </html>`;
    } else {
      // Gunakan template file jika ada
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);

      html = compiledTemplate({
        businessName,
        invoiceNumber,
        amount,
        dueDate,
        clientName,
        businessEmail,
        businessPhone,
        businessAddress,
        paymentLink,
        isOverdue,
        currentYear: new Date().getFullYear(),
        // Tambahkan jika ada logo perusahaan
        companyLogo: process.env.COMPANY_LOGO_URL || null,
        // Tambahkan jika ada social media
        socialLinks: [
          { name: "Website", url: process.env.COMPANY_WEBSITE || "#" },
          { name: "LinkedIn", url: process.env.COMPANY_LINKEDIN || "#" },
        ],
      });
    }

    // Buat subject sesuai status invoice
    const subject = isOverdue
      ? `INVOICE JATUH TEMPO: #${invoiceNumber} dari ${businessName}`
      : `Pengingat Pembayaran: Invoice #${invoiceNumber} dari ${businessName}`;

    // Kirim email dengan attachment PDF
    const info = await transporter.sendMail({
      from: `"${businessName}" <${MAIL_FROM}>`,
      to: email,
      subject,
      html,
      attachments: [
        {
          filename: `Invoice-${invoiceNumber}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Reminder email with PDF sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending reminder email with PDF:", error);
    return false;
  }
};

// export const sendInvoiceNotification = async (
//   email: string,
//   invoiceNumber: string,
//   businessName: string,
//   amount: string,
//   dueDate: string,
//   invoiceLink: string
// ): Promise<boolean> => {
//   try {
//     if (process.env.SKIP_EMAIL_SENDING === "true") {
//       console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
//       console.log(`Recipient: ${email}`);
//       console.log(
//         `Invoice Notification: ${invoiceNumber} from ${businessName}`
//       );
//       console.log(`Amount: ${amount}, Due Date: ${dueDate}`);
//       console.log(`Invoice Link: ${BASE_URL_FE}/invoices/${invoiceLink}`);
//       return true;
//     }

//     const templatePath = path.join(__dirname, "../templates", "invoice.hbs");

//     if (!fs.existsSync(templatePath)) {
//       console.error(`Template file not found: ${templatePath}`);
//       const html = `
//         <h1>New Invoice</h1>
//         <p>You have received a new invoice from ${businessName}.</p>
//         <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
//         <p><strong>Amount Due:</strong> ${amount}</p>
//         <p><strong>Due Date:</strong> ${dueDate}</p>
//         <p>Please click the link below to view and pay your invoice:</p>
//         <p><a href="${BASE_URL_FE}/invoices/${invoiceLink}">View Invoice</a></p>
//       `;

//       await transporter.sendMail({
//         from: MAIL_FROM,
//         to: email,
//         subject: `Invoice #${invoiceNumber} from ${businessName}`,
//         html,
//       });

//       return true;
//     }

//     const templateSource = fs.readFileSync(templatePath, "utf-8");
//     const compiledTemplate = handlebars.compile(templateSource);
//     const html = compiledTemplate({
//       businessName,
//       invoiceNumber,
//       amount,
//       dueDate,
//       link: `${BASE_URL_FE}/invoices/${invoiceLink}`,
//     });

//     const info = await transporter.sendMail({
//       from: MAIL_FROM,
//       to: email,
//       subject: `Invoice #${invoiceNumber} from ${businessName}`,
//       html,
//     });

//     console.log(
//       "Invoice notification email sent successfully:",
//       info.messageId
//     );
//     return true;
//   } catch (error) {
//     console.error("Error sending invoice notification email:", error);
//     return false;
//   }
// };

export const sendPaymentConfirmation = async (
  email: string,
  invoiceNumber: string,
  businessName: string,
  amount: string,
  paymentDate: string,
  paymentMethod: string
): Promise<boolean> => {
  try {
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(`Payment Confirmation: ${invoiceNumber} to ${businessName}`);
      console.log(
        `Amount: ${amount}, Payment Date: ${paymentDate}, Method: ${paymentMethod}`
      );
      return true;
    }

    const templatePath = path.join(__dirname, "../templates", "payment.hbs");

    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      const html = `
        <h1>Payment Confirmation</h1>
        <p>Your payment to ${businessName} has been received.</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Amount Paid:</strong> ${amount}</p>
        <p><strong>Payment Date:</strong> ${paymentDate}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p>Thank you for your business!</p>
      `;

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        subject: `Payment Confirmation for Invoice #${invoiceNumber}`,
        html,
      });

      return true;
    }

    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = handlebars.compile(templateSource);
    const html = compiledTemplate({
      businessName,
      invoiceNumber,
      amount,
      paymentDate,
      paymentMethod,
    });

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: `Payment Confirmation for Invoice #${invoiceNumber}`,
      html,
    });

    console.log(
      "Payment confirmation email sent successfully:",
      info.messageId
    );
    return true;
  } catch (error) {
    console.error("Error sending payment confirmation email:", error);
    return false;
  }
};
