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
exports.sendPaymentConfirmation = exports.sendReminderWithPdf = exports.sendInvoiceWithPdf = exports.sendReverificationEmail = exports.sendResetPassEmail = exports.sendVerificationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
require("dotenv").config();
// Tangani environment variables yang mungkin tidak ada
const MAIL_USER = process.env.EMAIL_USER;
const MAIL_PASS = process.env.EMAIL_PASS;
const MAIL_FROM = process.env.MAIL_FROM || MAIL_USER;
const BASE_URL_FE = process.env.BASE_URL_FE;
// Helper function to find template file
const findTemplatePath = (templateName) => {
    // Possible paths where templates might be located
    const possiblePaths = [
        path_1.default.join(__dirname, "../templates", templateName),
        path_1.default.join(__dirname, "../../templates", templateName),
        path_1.default.join(__dirname, "./templates", templateName),
        path_1.default.join(process.cwd(), "templates", templateName),
        path_1.default.join(process.cwd(), "src/templates", templateName),
        path_1.default.join(process.cwd(), "dist/templates", templateName),
    ];
    console.log(`[Mailer] Looking for template: ${templateName}`);
    console.log(`[Mailer] __dirname: ${__dirname}`);
    console.log(`[Mailer] cwd: ${process.cwd()}`);
    for (const p of possiblePaths) {
        console.log(`[Mailer] Checking path: ${p} - exists: ${fs_1.default.existsSync(p)}`);
        if (fs_1.default.existsSync(p)) {
            console.log(`[Mailer] Found template at: ${p}`);
            return p;
        }
    }
    console.error(`[Mailer] Template not found: ${templateName}`);
    return null;
};
// Buat transporter dengan error handling yang lebih baik
let transporter;
try {
    transporter = nodemailer_1.default.createTransport({
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
}
catch (error) {
    console.error("Failed to create email transporter:", error);
    // Buat transporter dummy untuk development agar aplikasi tetap berjalan
    if (process.env.NODE_ENV === "development") {
        transporter = {
            sendMail: (options) => __awaiter(void 0, void 0, void 0, function* () {
                console.log("==== DEVELOPMENT MODE: EMAIL NOT SENT ====");
                console.log("To:", options.to);
                console.log("Subject:", options.subject);
                console.log("Template would be sent if configured correctly");
                return { messageId: "dev-mode-no-email-sent" };
            }),
            verify: (callback) => {
                callback(null, true);
            },
        };
    }
    else {
        // Untuk production, kita masih perlu membuat transporter agar tidak error
        transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "dummy@example.com", // ini tidak akan digunakan
                pass: "dummy",
            },
        });
        console.warn("Using non-functional email transport in production - emails won't be sent!");
    }
}
// Verifikasi koneksi SMTP dengan handling yg lebih baik
transporter.verify((error) => {
    if (error) {
        console.error("SMTP connection error:", error);
        console.log("Email sending will not work. Check your credentials or network connection.");
    }
    else {
        console.log("SMTP server is ready to send emails");
    }
});
// ============ FALLBACK TEMPLATES ============
const getFallbackInvoiceEmailTemplate = (data) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice from ${data.businessName}</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
      ${data.companyLogo ? `<img src="${data.companyLogo}" alt="${data.businessName}" style="max-height: 60px; margin-bottom: 15px;">` : ''}
      <h1 style="color: #2c3e50; font-size: 24px; font-weight: 600; margin: 0;">Invoice from ${data.businessName}</h1>
      <p style="color: #7f8c8d; font-size: 16px; margin-top: 5px;">Thank you for your business!</p>
    </div>
    
    <div style="padding: 30px 0;">
      <p>Hello ${data.clientName},</p>
      
      <p>We have attached an invoice for the products/services provided. You can find the invoice details below:</p>
      
      <div style="background-color: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 25px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Invoice Number:</td>
            <td style="padding: 8px 0;">${data.invoiceNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Invoice Date:</td>
            <td style="padding: 8px 0;">${data.issueDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Due Date:</td>
            <td style="padding: 8px 0;">${data.dueDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Total Amount:</td>
            <td style="padding: 8px 0; font-size: 20px; font-weight: 700; color: #2980b9;">${data.amount}</td>
          </tr>
        </table>
      </div>
      
      ${(data.bankAccounts && data.bankAccounts.length > 0) || (data.eWallets && data.eWallets.length > 0) ? `
      <div style="background-color: #f0f7fb; border-radius: 6px; padding: 15px; margin-bottom: 25px; border-left: 5px solid #3498db;">
        <h3 style="margin-top: 0; color: #2c3e50;">Payment Information</h3>
        <p>Please make your payment using one of the following methods:</p>
        
        ${data.bankAccounts && data.bankAccounts.length > 0 ? `
        <div style="margin-bottom: 10px;">
          <h4 style="margin-bottom: 5px; color: #2c3e50;">Bank Accounts:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.bankAccounts.map((account) => `
            <li>
              <strong>${account.bank_name}:</strong> ${account.account_number} (${account.account_name})
              ${account.is_primary ? '<span style="color: #27ae60; font-weight: 600;"> (Recommended)</span>' : ''}
            </li>
            `).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${data.eWallets && data.eWallets.length > 0 ? `
        <div style="margin-bottom: 10px;">
          <h4 style="margin-bottom: 5px; color: #2c3e50;">E-Wallets:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.eWallets.map((wallet) => `
            <li>
              <strong>${wallet.wallet_type}:</strong> ${wallet.phone_number} (${wallet.account_name})
              ${wallet.is_primary ? '<span style="color: #27ae60; font-weight: 600;"> (Recommended)</span>' : ''}
            </li>
            `).join('')}
          </ul>
        </div>
        ` : ''}
        
        <p style="font-style: italic; margin-top: 10px; color: #7f8c8d;">Please include the invoice number ${data.invoiceNumber} when making payment to help us verify your transaction.</p>
      </div>
      ` : ''}
      
      <p>The complete invoice has been attached as a PDF file to this email. Please check the attachment for a detailed breakdown of the invoice.</p>
      
      <p>If you have any questions about this invoice, please don't hesitate to contact us.</p>
      
      ${data.paymentLink ? `
      <div style="text-align: center; margin: 30px 0;">
        <a href="${data.paymentLink}" style="display: inline-block; background-color: #3498db; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 600; text-align: center;">Pay Now</a>
      </div>
      ` : ''}
    </div>
    
    <div style="text-align: center; color: #7f8c8d; font-size: 14px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p>&copy; ${data.currentYear} ${data.businessName}. All rights reserved.</p>
      
      <div style="margin-top: 15px;">
        ${data.businessPhone ? `<span>Tel: ${data.businessPhone}</span> | ` : ''}
        ${data.businessEmail ? `<span>Email: <a href="mailto:${data.businessEmail}">${data.businessEmail}</a></span>` : ''}
      </div>
      
      ${data.businessAddress ? `<p>${data.businessAddress}</p>` : ''}
      
      ${data.socialLinks && data.socialLinks.length > 0 ? `
      <div style="margin-top: 15px;">
        ${data.socialLinks.map((link) => `<a href="${link.url}" style="display: inline-block; margin: 0 5px;">${link.name}</a>`).join('')}
      </div>
      ` : ''}
    </div>
  </div>
</body>
</html>`;
};
const getFallbackPaymentTemplate = (data) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Confirmation for Invoice #${data.invoiceNumber}</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
      ${data.companyLogo ? `<img src="${data.companyLogo}" alt="${data.businessName}" style="max-height: 60px; margin-bottom: 15px;">` : ''}
      <h1 style="color: #27ae60; font-size: 24px; font-weight: 600; margin: 0;">Payment Confirmation</h1>
      <p style="color: #7f8c8d; font-size: 16px; margin-top: 5px;">${data.businessName}</p>
    </div>
    
    <div style="padding: 30px 0;">
      <p>Hello ${data.clientName},</p>
      
      <p>We're pleased to confirm that your payment has been received for the following invoice:</p>
      
      <div style="background-color: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 25px; border-left: 5px solid #27ae60;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Invoice Number:</td>
            <td style="padding: 8px 0;">${data.invoiceNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Payment Date:</td>
            <td style="padding: 8px 0;">${data.paymentDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Amount Paid:</td>
            <td style="padding: 8px 0; font-size: 20px; font-weight: 700; color: #27ae60;">${data.amount}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Payment Method:</td>
            <td style="padding: 8px 0;">${data.paymentMethod}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Status:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #27ae60;">${data.paymentStatus}</td>
          </tr>
        </table>
      </div>
      
      <p>${data.isPartial ? 'Your payment has been received, but there is still a remaining balance on this invoice. Please consider settling the full amount to avoid any late fees.' : 'Thank you for your payment. Your invoice has been fully paid.'}</p>
      
      ${data.remainingBalance ? `
      <div style="background-color: #f0fbf6; border-radius: 6px; padding: 15px; margin-bottom: 25px; border-left: 5px solid #27ae60;">
        <h3 style="margin-top: 0; color: #2c3e50;">Remaining Balance Information</h3>
        <p>Your invoice has a remaining balance of <strong>${data.remainingBalance}</strong> that needs to be paid.</p>
        
        ${data.bankAccounts && data.bankAccounts.length > 0 ? `
        <div style="margin-bottom: 10px;">
          <h4 style="margin-bottom: 5px; color: #2c3e50;">Bank Accounts:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.bankAccounts.map((account) => `
            <li>
              <strong>${account.bank_name}:</strong> ${account.account_number} (${account.account_name})
              ${account.is_primary ? '<span style="color: #27ae60; font-weight: 600;"> (Recommended)</span>' : ''}
            </li>
            `).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${data.eWallets && data.eWallets.length > 0 ? `
        <div style="margin-bottom: 10px;">
          <h4 style="margin-bottom: 5px; color: #2c3e50;">E-Wallets:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.eWallets.map((wallet) => `
            <li>
              <strong>${wallet.wallet_type}:</strong> ${wallet.phone_number} (${wallet.account_name})
              ${wallet.is_primary ? '<span style="color: #27ae60; font-weight: 600;"> (Recommended)</span>' : ''}
            </li>
            `).join('')}
          </ul>
        </div>
        ` : ''}
        
        <p style="font-style: italic; margin-top: 10px; color: #7f8c8d;">Please include the invoice number ${data.invoiceNumber} when making payment to help us verify your transaction.</p>
      </div>
      ` : ''}
      
      <p>If you have any questions about this payment or your invoice, please don't hesitate to contact us.</p>
      
      ${data.paymentLink ? `
      <div style="text-align: center; margin: 30px 0;">
        <a href="${data.paymentLink}" style="display: inline-block; background-color: #27ae60; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 600; text-align: center;">${data.isPartial ? 'Pay Remaining Balance' : 'View Invoice Details'}</a>
      </div>
      ` : ''}
      
      <p>Thank you for your business!</p>
    </div>
    
    <div style="text-align: center; color: #7f8c8d; font-size: 14px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p>&copy; ${data.currentYear} ${data.businessName}. All rights reserved.</p>
      
      <div style="margin-top: 15px;">
        ${data.businessPhone ? `<span>Tel: ${data.businessPhone}</span> | ` : ''}
        ${data.businessEmail ? `<span>Email: <a href="mailto:${data.businessEmail}">${data.businessEmail}</a></span>` : ''}
      </div>
      
      ${data.businessAddress ? `<p>${data.businessAddress}</p>` : ''}
      
      ${data.socialLinks && data.socialLinks.length > 0 ? `
      <div style="margin-top: 15px;">
        ${data.socialLinks.map((link) => `<a href="${link.url}" style="display: inline-block; margin: 0 5px;">${link.name}</a>`).join('')}
      </div>
      ` : ''}
    </div>
  </div>
</body>
</html>`;
};
const getFallbackReminderTemplate = (data) => {
    const headerColor = data.isOverdue ? '#e74c3c' : '#f39c12';
    const headerText = data.isOverdue ? 'OVERDUE INVOICE' : 'Payment Reminder';
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${headerText} - Invoice #${data.invoiceNumber}</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
      ${data.companyLogo ? `<img src="${data.companyLogo}" alt="${data.businessName}" style="max-height: 60px; margin-bottom: 15px;">` : ''}
      <h1 style="color: ${headerColor}; font-size: 24px; font-weight: 600; margin: 0;">${headerText}</h1>
      <p style="color: #7f8c8d; font-size: 16px; margin-top: 5px;">${data.businessName}</p>
    </div>
    
    <div style="padding: 30px 0;">
      <p>Hello ${data.clientName},</p>
      
      <p>${data.isOverdue
        ? `This is a reminder that your invoice is <strong style="color: #e74c3c;">overdue</strong>. Please make your payment as soon as possible to avoid any additional charges.`
        : `This is a friendly reminder that your invoice is due soon. Please ensure payment is made by the due date.`}</p>
      
      <div style="background-color: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 25px; border-left: 5px solid ${headerColor};">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Invoice Number:</td>
            <td style="padding: 8px 0;">${data.invoiceNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Due Date:</td>
            <td style="padding: 8px 0; ${data.isOverdue ? 'color: #e74c3c; font-weight: bold;' : ''}">${data.dueDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 40%;">Amount Due:</td>
            <td style="padding: 8px 0; font-size: 20px; font-weight: 700; color: ${headerColor};">${data.amount}</td>
          </tr>
        </table>
      </div>
      
      ${(data.bankAccounts && data.bankAccounts.length > 0) || (data.eWallets && data.eWallets.length > 0) ? `
      <div style="background-color: #f0f7fb; border-radius: 6px; padding: 15px; margin-bottom: 25px; border-left: 5px solid #3498db;">
        <h3 style="margin-top: 0; color: #2c3e50;">Payment Information</h3>
        <p>Please make your payment using one of the following methods:</p>
        
        ${data.bankAccounts && data.bankAccounts.length > 0 ? `
        <div style="margin-bottom: 10px;">
          <h4 style="margin-bottom: 5px; color: #2c3e50;">Bank Accounts:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.bankAccounts.map((account) => `
            <li>
              <strong>${account.bank_name}:</strong> ${account.account_number} (${account.account_name})
              ${account.is_primary ? '<span style="color: #27ae60; font-weight: 600;"> (Recommended)</span>' : ''}
            </li>
            `).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${data.eWallets && data.eWallets.length > 0 ? `
        <div style="margin-bottom: 10px;">
          <h4 style="margin-bottom: 5px; color: #2c3e50;">E-Wallets:</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.eWallets.map((wallet) => `
            <li>
              <strong>${wallet.wallet_type}:</strong> ${wallet.phone_number} (${wallet.account_name})
              ${wallet.is_primary ? '<span style="color: #27ae60; font-weight: 600;"> (Recommended)</span>' : ''}
            </li>
            `).join('')}
          </ul>
        </div>
        ` : ''}
        
        <p style="font-style: italic; margin-top: 10px; color: #7f8c8d;">Please include the invoice number ${data.invoiceNumber} when making payment to help us verify your transaction.</p>
      </div>
      ` : ''}
      
      <p>The complete invoice has been attached as a PDF file to this email.</p>
      
      <p>If you have any questions or have already made the payment, please contact us.</p>
      
      ${data.paymentLink ? `
      <div style="text-align: center; margin: 30px 0;">
        <a href="${data.paymentLink}" style="display: inline-block; background-color: ${headerColor}; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 600; text-align: center;">Pay Now</a>
      </div>
      ` : ''}
      
      <p>Thank you for your business!</p>
    </div>
    
    <div style="text-align: center; color: #7f8c8d; font-size: 14px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p>&copy; ${data.currentYear} ${data.businessName}. All rights reserved.</p>
      
      <div style="margin-top: 15px;">
        ${data.businessPhone ? `<span>Tel: ${data.businessPhone}</span> | ` : ''}
        ${data.businessEmail ? `<span>Email: <a href="mailto:${data.businessEmail}">${data.businessEmail}</a></span>` : ''}
      </div>
      
      ${data.businessAddress ? `<p>${data.businessAddress}</p>` : ''}
    </div>
  </div>
</body>
</html>`;
};
const getFallbackVerifyTemplate = (data) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Verify Your Business Account</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
      <h1 style="color: #2c3e50; font-size: 24px; font-weight: 600; margin: 0;">Complete Your Business Account Registration</h1>
    </div>
    <div style="padding: 30px 0;">
      <p>Thank you for registering your business with our invoice management system.</p>
      <p>Please click the link below to verify your email address and complete your account setup:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${data.link}" style="display: inline-block; background-color: #3498db; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 600;">Complete Registration</a>
      </div>
      <p>Or copy this link: ${data.link}</p>
    </div>
  </div>
</body>
</html>`;
};
const getFallbackResetPasswordTemplate = (data) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
      <h1 style="color: #2c3e50; font-size: 24px; font-weight: 600; margin: 0;">Reset Your Password</h1>
    </div>
    <div style="padding: 30px 0;">
      <p>You have requested to reset your password for your invoice management account.</p>
      <p>Please click the link below to reset your password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${data.link}" style="display: inline-block; background-color: #e74c3c; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 600;">Reset Password</a>
      </div>
      <p>Or copy this link: ${data.link}</p>
      <p>If you did not request this password reset, please ignore this email or contact support.</p>
    </div>
  </div>
</body>
</html>`;
};
// ============ EMAIL FUNCTIONS ============
const sendVerificationEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.SKIP_EMAIL_SENDING === "true") {
            console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
            console.log(`Recipient: ${email}`);
            console.log(`Verification Link: ${BASE_URL_FE}/verify/${token}`);
            return true;
        }
        const templatePath = findTemplatePath("verify.hbs");
        let html;
        if (!templatePath) {
            html = getFallbackVerifyTemplate({ link: `${BASE_URL_FE}/verify/${token}` });
        }
        else {
            const source = fs_1.default.readFileSync(templatePath, "utf-8");
            const template = handlebars_1.default.compile(source);
            html = template({ link: `${BASE_URL_FE}/verify/${token}` });
        }
        const info = yield transporter.sendMail({
            from: MAIL_FROM,
            to: email,
            subject: "Verify Your Business Account",
            html,
        });
        console.log("Verification email sent successfully:", info.messageId);
        return true;
    }
    catch (error) {
        console.error("Error sending verification email:", error);
        return false;
    }
});
exports.sendVerificationEmail = sendVerificationEmail;
const sendResetPassEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.SKIP_EMAIL_SENDING === "true") {
            console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
            console.log(`Recipient: ${email}`);
            console.log(`Reset Password Link: ${BASE_URL_FE}/reset-password/${token}`);
            return true;
        }
        const templatePath = findTemplatePath("resetpass.hbs");
        let html;
        if (!templatePath) {
            html = getFallbackResetPasswordTemplate({ link: `${BASE_URL_FE}/reset-password/${token}` });
        }
        else {
            const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
            const compiledTemplate = handlebars_1.default.compile(templateSource);
            html = compiledTemplate({ link: `${BASE_URL_FE}/reset-password/${token}` });
        }
        const info = yield transporter.sendMail({
            from: MAIL_FROM,
            to: email,
            subject: "Reset Your Password",
            html,
        });
        console.log("Reset password email sent successfully:", info.messageId);
        return true;
    }
    catch (error) {
        console.error("Error sending reset password email:", error);
        return false;
    }
});
exports.sendResetPassEmail = sendResetPassEmail;
const sendReverificationEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.SKIP_EMAIL_SENDING === "true") {
            console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
            console.log(`Recipient: ${email}`);
            console.log(`Email Change Verification Link: ${BASE_URL_FE}/verify-email-change/${token}`);
            return true;
        }
        const templatePath = findTemplatePath("reverification.hbs");
        let html;
        if (!templatePath) {
            html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Verify Your Email Change</title></head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px;">
    <h1 style="color: #2c3e50;">Verify Your Email Change</h1>
    <p>You have requested to change your email address for your invoice management account.</p>
    <p>Please click the link below to verify this new email address:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${BASE_URL_FE}/verify-change-email/${token}" style="display: inline-block; background-color: #3498db; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 600;">Verify Email Change</a>
    </div>
    <p>Or copy this link: ${BASE_URL_FE}/verify-change-email/${token}</p>
    <p>If you did not request this email change, please contact support immediately.</p>
  </div>
</body>
</html>`;
        }
        else {
            const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
            const compiledTemplate = handlebars_1.default.compile(templateSource);
            html = compiledTemplate({ link: `${BASE_URL_FE}/verify-change-email/${token}` });
        }
        const info = yield transporter.sendMail({
            from: MAIL_FROM,
            to: email,
            subject: "Verify Your Email Change",
            html,
        });
        console.log("Email change verification sent successfully:", info.messageId);
        return true;
    }
    catch (error) {
        console.error("Error sending email change verification:", error);
        return false;
    }
});
exports.sendReverificationEmail = sendReverificationEmail;
const sendInvoiceWithPdf = (email, invoiceNumber, businessName, amount, dueDate, clientName, businessEmail, businessPhone, businessAddress, pdfBuffer, paymentLink, bankAccounts, eWallets) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.SKIP_EMAIL_SENDING === "true") {
            console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
            console.log(`Recipient: ${email}`);
            console.log(`Invoice Notification: ${invoiceNumber} from ${businessName}`);
            console.log(`Amount: ${amount}, Due Date: ${dueDate}`);
            console.log(`PDF attachment included: ${pdfBuffer.length} bytes`);
            return true;
        }
        const templateData = {
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
        };
        const templatePath = findTemplatePath("invoice-email.hbs");
        let html;
        if (!templatePath) {
            console.log("[Mailer] Using fallback invoice email template");
            html = getFallbackInvoiceEmailTemplate(templateData);
        }
        else {
            const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
            const compiledTemplate = handlebars_1.default.compile(templateSource);
            html = compiledTemplate(templateData);
        }
        const info = yield transporter.sendMail({
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
    }
    catch (error) {
        console.error("Error sending invoice email with PDF:", error);
        return false;
    }
});
exports.sendInvoiceWithPdf = sendInvoiceWithPdf;
const sendReminderWithPdf = (email_1, invoiceNumber_1, businessName_1, amount_1, dueDate_1, clientName_1, businessEmail_1, businessPhone_1, businessAddress_1, pdfBuffer_1, ...args_1) => __awaiter(void 0, [email_1, invoiceNumber_1, businessName_1, amount_1, dueDate_1, clientName_1, businessEmail_1, businessPhone_1, businessAddress_1, pdfBuffer_1, ...args_1], void 0, function* (email, invoiceNumber, businessName, amount, dueDate, clientName, businessEmail, businessPhone, businessAddress, pdfBuffer, isOverdue = false, paymentLink, bankAccounts, eWallets) {
    try {
        if (process.env.SKIP_EMAIL_SENDING === "true") {
            console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
            console.log(`Recipient: ${email}`);
            console.log(`Reminder for Invoice: ${invoiceNumber} from ${businessName}`);
            console.log(`Amount: ${amount}, Due Date: ${dueDate}`);
            console.log(`Is Overdue: ${isOverdue}`);
            console.log(`PDF attachment included: ${pdfBuffer.length} bytes`);
            return true;
        }
        const templateData = {
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
        };
        const templatePath = findTemplatePath("reminder-invoice-email.hbs");
        let html;
        if (!templatePath) {
            console.log("[Mailer] Using fallback reminder email template");
            html = getFallbackReminderTemplate(templateData);
        }
        else {
            const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
            const compiledTemplate = handlebars_1.default.compile(templateSource);
            html = compiledTemplate(templateData);
        }
        const subject = isOverdue
            ? `OVERDUE INVOICE: #${invoiceNumber} from ${businessName}`
            : `Payment Reminder: Invoice #${invoiceNumber} from ${businessName}`;
        const info = yield transporter.sendMail({
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
    }
    catch (error) {
        console.error("Error sending reminder email with PDF:", error);
        return false;
    }
});
exports.sendReminderWithPdf = sendReminderWithPdf;
const sendPaymentConfirmation = (email_1, invoiceNumber_1, businessName_1, amount_1, paymentDate_1, paymentMethod_1, ...args_1) => __awaiter(void 0, [email_1, invoiceNumber_1, businessName_1, amount_1, paymentDate_1, paymentMethod_1, ...args_1], void 0, function* (email, invoiceNumber, businessName, amount, paymentDate, paymentMethod, paymentStatus = "PAID", clientName = "Customer", businessEmail = "", businessPhone = "", businessAddress = "", isPartial = false, remainingBalance, pdfBuffer, paymentLink, bankAccounts, eWallets) {
    try {
        if (process.env.SKIP_EMAIL_SENDING === "true") {
            console.log("==== EMAIL SENDING SKIPPED (Development Mode) ====");
            console.log(`Recipient: ${email}`);
            console.log(`Payment Confirmation: ${invoiceNumber} to ${businessName}`);
            console.log(`Amount: ${amount}, Payment Date: ${paymentDate}, Method: ${paymentMethod}, Status: ${paymentStatus}`);
            console.log(`Is Partial: ${isPartial}, Remaining: ${remainingBalance || "None"}`);
            console.log(`PDF attachment included: ${pdfBuffer ? "Yes" : "No"}`);
            return true;
        }
        const templateData = {
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
            bankAccounts: isPartial ? bankAccounts : null,
            eWallets: isPartial ? eWallets : null,
            currentYear: new Date().getFullYear(),
            companyLogo: process.env.COMPANY_LOGO_URL || null,
            socialLinks: [
                { name: "Website", url: process.env.COMPANY_WEBSITE || "#" },
                { name: "LinkedIn", url: process.env.COMPANY_LINKEDIN || "#" },
            ],
        };
        const templatePath = findTemplatePath("payment.hbs");
        let html;
        if (!templatePath) {
            console.log("[Mailer] Using fallback payment confirmation template");
            html = getFallbackPaymentTemplate(templateData);
        }
        else {
            const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
            const compiledTemplate = handlebars_1.default.compile(templateSource);
            html = compiledTemplate(templateData);
        }
        const subject = isPartial
            ? `Partial Payment Received: Invoice #${invoiceNumber}`
            : `Payment Confirmation: Invoice #${invoiceNumber}`;
        const mailOptions = {
            from: `"${businessName}" <${MAIL_FROM}>`,
            to: email,
            subject,
            html,
        };
        if (pdfBuffer) {
            console.log(`Including PDF attachment of ${pdfBuffer.length} bytes`);
            mailOptions.attachments = [
                {
                    filename: `Invoice-${invoiceNumber}.pdf`,
                    content: pdfBuffer,
                    contentType: "application/pdf",
                },
            ];
        }
        else {
            console.log("No PDF buffer provided - email will be sent without PDF attachment");
        }
        const info = yield transporter.sendMail(mailOptions);
        console.log("Payment confirmation email sent successfully:", info.messageId);
        return true;
    }
    catch (error) {
        console.error("Error sending payment confirmation email:", error);
        return false;
    }
});
exports.sendPaymentConfirmation = sendPaymentConfirmation;
