import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
require("dotenv").config();

// Tangani environment variables yang mungkin tidak ada
const MAIL_USER = process.env.EMAIL_USER;
const MAIL_PASS = process.env.EMAIL_PASS;
const MAIL_FROM = process.env.MAIL_FROM || MAIL_USER;
const BASE_URL_FE = process.env.BASE_URL_FE;

// Tambahkan console log untuk debugging

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
  paymentLink?: string | null,
  bankAccounts?: Array<{
    bank_name: string;
    account_number: string;
    account_name: string;
    is_primary: boolean;
  }> | null,
  eWallets?: Array<{
    wallet_type: string;
    phone_number: string;
    account_name: string;
    is_primary: boolean;
  }> | null
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

    // Check if template exists
    let html = "";
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Use hardcoded template if file not found
      html = `<!DOCTYPE html>
        <html>
          <head>
            <title>Invoice from ${businessName}</title>
            <!-- Inline styles here -->
          </head>
          <body>
            <!-- Basic template -->
          </body>
        </html>`;
    } else {
      // Use template file if exists
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
        bankAccounts,
        eWallets,
        currentYear: new Date().getFullYear(),
        issueDate: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        companyLogo: process.env.COMPANY_LOGO_URL || null,
        socialLinks: [
          { name: "Website", url: process.env.COMPANY_WEBSITE || "#" },
          { name: "LinkedIn", url: process.env.COMPANY_LINKEDIN || "#" },
        ],
      });
    }

    // Send email with PDF attachment
    const info = await transporter.sendMail({
      from: `"${businessName}" <${MAIL_FROM}>`,
      to: email,
      subject: `Invoice #${invoiceNumber} from ${businessName}`,
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
  paymentLink?: string | null,
  bankAccounts?: Array<{
    bank_name: string;
    account_number: string;
    account_name: string;
    is_primary: boolean;
  }> | null,
  eWallets?: Array<{
    wallet_type: string;
    phone_number: string;
    account_name: string;
    is_primary: boolean;
  }> | null
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

    // Check if template exists
    let html = "";
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Use hardcoded template if file not found
      html = `<!DOCTYPE html>
        <html>
          <head>
            <title>${isOverdue ? "OVERDUE INVOICE" : "Payment Reminder"}</title>
            <!-- Inline styles here -->
          </head>
          <body>
            <!-- Basic template -->
          </body>
        </html>`;
    } else {
      // Use template file if exists
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
        bankAccounts,
        eWallets,
        currentYear: new Date().getFullYear(),
        companyLogo: process.env.COMPANY_LOGO_URL || null,
        socialLinks: [
          { name: "Website", url: process.env.COMPANY_WEBSITE || "#" },
          { name: "LinkedIn", url: process.env.COMPANY_LINKEDIN || "#" },
        ],
      });
    }

    // Create subject based on invoice status
    const subject = isOverdue
      ? `OVERDUE INVOICE: #${invoiceNumber} from ${businessName}`
      : `Payment Reminder: Invoice #${invoiceNumber} from ${businessName}`;

    // Send email with PDF attachment
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

export const sendPaymentConfirmation = async (
  email: string,
  invoiceNumber: string,
  businessName: string,
  amount: string,
  paymentDate: string,
  paymentMethod: string,
  paymentStatus: string = "PAID",
  clientName: string = "Customer",
  businessEmail: string = "",
  businessPhone: string = "",
  businessAddress: string = "",
  isPartial: boolean = false,
  remainingBalance?: string,
  pdfBuffer?: Buffer,
  paymentLink?: string | null,
  bankAccounts?: Array<{
    bank_name: string;
    account_number: string;
    account_name: string;
    is_primary: boolean;
  }> | null,
  eWallets?: Array<{
    wallet_type: string;
    phone_number: string;
    account_name: string;
    is_primary: boolean;
  }> | null
): Promise<boolean> => {
  try {
    if (process.env.SKIP_EMAIL_SENDING === "true") {
      console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
      console.log(`Recipient: ${email}`);
      console.log(`Payment Confirmation: ${invoiceNumber} to ${businessName}`);
      console.log(
        `Amount: ${amount}, Payment Date: ${paymentDate}, Method: ${paymentMethod}, Status: ${paymentStatus}`
      );
      console.log(
        `Is Partial: ${isPartial}, Remaining: ${remainingBalance || "None"}`
      );
      console.log(`PDF attachment included: ${pdfBuffer ? "Yes" : "No"}`);
      return true;
    }

    const templatePath = path.join(__dirname, "../templates", "payment.hbs");

    // Check if template exists
    let html = "";
    if (!fs.existsSync(templatePath)) {
      console.error(`Template file not found: ${templatePath}`);
      // Use hardcoded template if file not found
      html = `
        <h1>Payment Confirmation</h1>
        <p>Your payment of ${amount} for invoice #${invoiceNumber} has been received.</p>
        <p><strong>Payment Date:</strong> ${paymentDate}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Status:</strong> ${paymentStatus}</p>
        ${
          isPartial
            ? `<p><strong>Remaining Balance:</strong> ${remainingBalance}</p>`
            : ""
        }
        <p>Thank you for your business!</p>
      `;
    } else {
      // Use template file if exists
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);

      html = compiledTemplate({
        businessName,
        invoiceNumber,
        amount,
        paymentDate,
        paymentMethod,
        paymentStatus,
        clientName,
        businessEmail,
        businessPhone,
        businessAddress,
        isPartial,
        remainingBalance,
        paymentLink,
        bankAccounts: isPartial ? bankAccounts : null, // Only show payment methods if partial
        eWallets: isPartial ? eWallets : null, // Only show payment methods if partial
        currentYear: new Date().getFullYear(),
        companyLogo: process.env.COMPANY_LOGO_URL || null,
        socialLinks: [
          { name: "Website", url: process.env.COMPANY_WEBSITE || "#" },
          { name: "LinkedIn", url: process.env.COMPANY_LINKEDIN || "#" },
        ],
      });
    }

    // Set subject based on payment status
    const subject = isPartial
      ? `Partial Payment Received: Invoice #${invoiceNumber}`
      : `Payment Confirmation: Invoice #${invoiceNumber}`;

    // Prepare email options with conditional attachment
    const mailOptions: any = {
      from: `"${businessName}" <${MAIL_FROM}>`,
      to: email,
      subject,
      html,
    };

    // Add PDF attachment if available
    if (pdfBuffer) {
      mailOptions.attachments = [
        {
          filename: `Invoice-${invoiceNumber}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);

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
