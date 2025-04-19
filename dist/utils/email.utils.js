"use strict";
// // utils/email.util.ts
// import nodemailer from "nodemailer";
// import { v4 as uuidv4 } from "uuid";
// // Setup transporter
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: parseInt(process.env.EMAIL_PORT || "587"),
//   secure: process.env.EMAIL_SECURE === "true",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });
// export const generateVerificationToken = (): string => {
//   return uuidv4();
// };
// export const sendVerificationEmail = async (
//   email: string,
//   token: string
// ): Promise<void> => {
//   const verificationUrl = `${process.env.BASE_URL_FE}/verify-email?token=${token}`;
//   const mailOptions = {
//     from: process.env.EMAIL_FROM,
//     to: email,
//     subject: "Verify Your Email",
//     html: `
//       <div>
//         <h1>Email Verification</h1>
//         <p>Please click the link below to verify your email:</p>
//         <a href="${verificationUrl}" target="_blank">Verify Email</a>
//       </div>
//     `,
//   };
//   await transporter.sendMail(mailOptions);
// };
// export const sendPasswordResetEmail = async (
//   email: string,
//   token: string
// ): Promise<void> => {
//   const resetUrl = `${process.env.BASE_URL_FE}/reset-password?token=${token}`;
//   const mailOptions = {
//     from: process.env.EMAIL_FROM,
//     to: email,
//     subject: "Reset Your Password",
//     html: `
//       <div>
//         <h1>Password Reset</h1>
//         <p>Please click the link below to reset your password:</p>
//         <a href="${resetUrl}" target="_blank">Reset Password</a>
//       </div>
//     `,
//   };
//   await transporter.sendMail(mailOptions);
// };
