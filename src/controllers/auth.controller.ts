import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { tokenService } from "../helpers/createToken";
import {
  sendResetPassEmail,
  sendReverificationEmail,
  sendVerificationEmail,
} from "../services/mailer";
import { hashPass } from "../helpers/hashPassword";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { cloudinaryService } from "../services/cloudinary";

const JWT_SECRET = process.env.SECRET_KEY || "osdjfksdhfishd";
const prisma = new PrismaClient();

export class AuthController {
  async googleRegister(req: Request, res: Response) {
    try {
      const { email, name, picture } = req.body;

      if (!email)
        return res.status(400).json({ error: "Email tidak ditemukan" });

      // Split name into first_name and last_name
      const nameParts = name.split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

      let users = await prisma.user.upsert({
        where: { email },
        update: {}, // If user already exists, leave as is
        create: {
          email: email,
          username: name,
          avatar: picture,
          verified: true,
          is_google: true,
          first_name: firstName,
          last_name: lastName,
        },
      });

      const token = tokenService.createLoginToken({
        id: users.user_id,
      });

      // Get or create profile
      let profile = await prisma.profile.findUnique({
        where: { user_id: users.user_id },
      });

      if (!profile) {
        profile = await prisma.profile.create({
          data: {
            user_id: users.user_id,
          },
        });
      }

      return res.status(201).json({
        status: "success",
        token: token,
        message: "Login google successfully.",
        user: users,
        profile,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Could not reach the server database" });
    }
  }

  async registerBusiness(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          status: "error",
          message: "Email is required",
        });
      }

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email address already exists" });
      }

      const newUser = await prisma.user.create({
        data: {
          email,
          verified: false,
        },
      });

      const token = tokenService.createEmailRegisterToken({
        id: newUser.user_id,
        email,
      });

      await prisma.user.update({
        where: { user_id: newUser.user_id },
        data: { verify_token: token },
      });

      await sendVerificationEmail(email, token);

      return res.status(201).json({
        status: "success",
        token: token,
        message:
          "Registration successful. Please check your email for verification.",
        user: newUser,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Could not reach the server database" });
    }
  }

  async verifyAccount(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const {
        username,
        firstName,
        lastName,
        phone,
        password,
        confirmPassword,
        companyName,
        address,
        city,
        state,
        postalCode,
        country,
        website,
        taxNumber,
      } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      const userId = req.user.user_id;

      const user = await prisma.user.findUnique({
        where: { user_id: userId },
      });

      if (!user || user.verified) {
        return res
          .status(400)
          .json({ message: "Invalid verification request" });
      }

      const hashedPassword = await hashPass(password);

      // Handle avatar upload
      let avatarUrl = null;
      if (req.file) {
        avatarUrl = await cloudinaryService.uploadUserAvatar(req.file, userId);
      } else if (
        req.body.avatar &&
        typeof req.body.avatar === "string" &&
        req.body.avatar.startsWith("data:")
      ) {
        avatarUrl = await cloudinaryService.uploadUserAvatar(
          req.body.avatar,
          userId
        );
      }

      await prisma.user.update({
        where: { user_id: userId },
        data: {
          username,
          first_name: firstName || null,
          last_name: lastName || null,
          phone,
          password: hashedPassword,
          verified: true,
          verify_token: null,
          avatar: avatarUrl || undefined,
        },
      });

      // Create profile for business account
      if (companyName) {
        await prisma.profile.create({
          data: {
            user_id: userId,
            company_name: companyName,
            address: address || null,
            city: city || null,
            state: state || null,
            postal_code: postalCode || null,
            country: country || null,
            website: website || null,
            tax_number: taxNumber || null,
          },
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Email verified successfully",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Could not reach the server database" });
    }
  }

  async resetPassword(req: Request, res: Response) {
    try {
      const { email } = req.body;

      const isNewbie = await prisma.user.findFirst({
        where: { email, password: null },
      });

      if (isNewbie) {
        return res.status(403).json({
          status: "error",
          token: "",
          message: "The email has no password. Please choose another account.",
        });
      }

      const findUser = await prisma.user.findFirst({
        where: { email },
        select: {
          user_id: true,
          email: true,
          avatar: true,
          username: true,
          first_name: true,
          last_name: true,
          phone: true,
          verified: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!findUser) {
        return res.status(403).json({
          status: "error",
          token: "",
          message: "User not found.",
        });
      }

      const token = tokenService.createResetToken({
        id: findUser.user_id,
        resetPassword: true,
      });

      await prisma.user.update({
        where: { user_id: findUser?.user_id },
        data: { password_reset_token: token },
      });

      await sendResetPassEmail(email, token);

      return res.status(201).json({
        status: "success",
        token: token,
        message:
          "Reset Password Link sent successfully. Please check your email for verification.",
        user: findUser,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Could not reach the server database" });
    }
  }

  async verifyResetPassword(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      const userId = req.user.user_id;

      const user = await prisma.user.findUnique({
        where: { user_id: userId },
      });

      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid Reset password request" });
      }

      const hashedPassword = await hashPass(password);

      await prisma.user.update({
        where: { user_id: userId },
        data: {
          password: hashedPassword,
          verify_token: null,
          password_reset_token: null,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Password Reset successfully",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Could not reach the server database" });
    }
  }

  async loginAny(req: Request, res: Response) {
    // validation
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      if (!user.password) {
        return res.status(400).json({
          message:
            "User has no password set. Please use Google login or reset your password",
        });
      }

      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) {
        return res.status(400).json({ message: "Password incorrect!" });
      }

      const token = tokenService.createLoginToken({
        id: user.user_id,
      });

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: user.user_id },
        include: {
          bank_accounts: true,
          e_wallets: true,
        },
      });

      return res.status(201).send({
        status: "ok",
        msg: "Login Success",
        token,
        user,
        profile,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async checkExpTokenEmailVerif(req: Request, res: Response) {
    const { token } = req.params;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Verifikasi token
      const decoded: any = jwt.verify(token, JWT_SECRET);

      // Cek apakah token sudah lebih dari 1 jam sejak dibuat
      const tokenAge = Math.floor(Date.now() / 1000) - decoded.iat; // Selisih waktu dalam detik
      if (tokenAge > 3600) {
        // 1 jam = 3600 detik
        return res.status(409).json({ status: "no", message: "Token Expired" });
      }

      return res.status(200).json({ status: "ok", message: "Token Active" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Invalid or expired token" });
    }
  }

  async requestChangeEmail(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { newEmail } = req.body;

      if (!newEmail) {
        return res.status(400).json({ message: "New email is required" });
      }

      // Cek apakah email sudah digunakan
      const existingUser = await prisma.user.findUnique({
        where: { email: newEmail },
      });

      if (existingUser) {
        return res.status(400).json({ message: "Email is already in use" });
      }

      // Buat token verifikasi email
      const token = tokenService.createEmailChangeToken({ userId, newEmail });

      // Simpan token verifikasi di database
      await prisma.user.update({
        where: { user_id: userId },
        data: { verify_token: token },
      });

      // Kirim email verifikasi
      await sendReverificationEmail(newEmail, token);

      return res.status(200).json({
        status: "success",
        message: "Verification email sent. Please check your inbox.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async verifyChangeEmail(req: Request, res: Response) {
    try {
      const { token } = req.body;
      if (!token) {
        return res.status(400).json({ message: "Token is required" });
      }

      let decoded;
      try {
        decoded = tokenService.verifyEmailChangeToken(token as string);
      } catch (error) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }

      const { userId, newEmail } = decoded;

      const existingUser = await prisma.user.findUnique({
        where: { user_id: userId },
      });
      if (!existingUser) {
        return res.status(400).json({ message: "User not found" });
      }

      await prisma.user.update({
        where: { user_id: userId },
        data: {
          email: newEmail,
          verify_token: null,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Email successfully changed",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const user = await prisma.user.findUnique({
        where: { user_id: userId },
        select: {
          user_id: true,
          email: true,
          username: true,
          first_name: true,
          last_name: true,
          phone: true,
          avatar: true,
          verified: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Get profile with bank accounts and e-wallets
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
        include: {
          bank_accounts: true,
          e_wallets: true,
        },
      });

      return res.status(200).json({
        status: "success",
        user,
        profile,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const {
        username,
        firstName,
        lastName,
        phone,
        companyName,
        address,
        city,
        state,
        postalCode,
        country,
        website,
        taxNumber,
      } = req.body;

      // Get current user to check for existing avatar
      const currentUser = await prisma.user.findUnique({
        where: { user_id: userId },
        select: { avatar: true },
      });

      // Handle avatar upload
      let avatarUrl = currentUser?.avatar; // Default to current avatar if exists

      if (req.files && "avatar" in req.files && req.files.avatar[0]) {
        // Delete old avatar if it exists
        if (currentUser?.avatar && currentUser.avatar.includes("cloudinary")) {
          await cloudinaryService.deleteImage(currentUser.avatar);
        }
        avatarUrl = await cloudinaryService.uploadUserAvatar(
          req.files.avatar[0],
          userId
        );
        console.log("Uploaded avatar from file:", avatarUrl);
      } else if (
        req.body.avatar &&
        typeof req.body.avatar === "string" &&
        req.body.avatar.startsWith("data:")
      ) {
        // Delete old avatar if it exists
        if (currentUser?.avatar && currentUser.avatar.includes("cloudinary")) {
          await cloudinaryService.deleteImage(currentUser.avatar);
        }
        avatarUrl = await cloudinaryService.uploadUserAvatar(
          req.body.avatar,
          userId
        );
        console.log("Uploaded avatar from base64:", avatarUrl);
      }

      // Update user data
      const updatedUser = await prisma.user.update({
        where: { user_id: userId },
        data: {
          username: username || undefined,
          first_name: firstName || undefined,
          last_name: lastName || undefined,
          phone: phone || undefined,
          avatar: avatarUrl, // Use avatarUrl directly (will be undefined/null only if explicitly set)
        },
        select: {
          user_id: true,
          email: true,
          username: true,
          first_name: true,
          last_name: true,
          phone: true,
          avatar: true,
          verified: true,
          created_at: true,
          updated_at: true,
        },
      });

      // Get the current profile
      const currentProfile = await prisma.profile.findUnique({
        where: { user_id: userId },
        select: { profile_id: true, logo: true },
      });

      // Handle logo upload if provided
      let logoUrl = currentProfile?.logo; // Default to current logo if exists

      if (req.files && "logo" in req.files && req.files.logo[0]) {
        // Delete old logo if it exists
        if (
          currentProfile?.logo &&
          currentProfile.logo.includes("cloudinary")
        ) {
          await cloudinaryService.deleteImage(currentProfile.logo);
        }
        logoUrl = await cloudinaryService.uploadCompanyLogo(
          req.files.logo[0],
          userId
        );
        console.log("Uploaded logo from file:", logoUrl);
      } else if (
        req.body.logo &&
        typeof req.body.logo === "string" &&
        req.body.logo.startsWith("data:")
      ) {
        // Delete old logo if it exists
        if (
          currentProfile?.logo &&
          currentProfile.logo.includes("cloudinary")
        ) {
          await cloudinaryService.deleteImage(currentProfile.logo);
        }
        logoUrl = await cloudinaryService.uploadCompanyLogo(
          req.body.logo,
          userId
        );
        console.log("Uploaded logo from base64:", logoUrl);
      }

      // Update profile if it exists, create if it doesn't
      let profile;
      if (currentProfile) {
        profile = await prisma.profile.update({
          where: { user_id: userId },
          data: {
            company_name: companyName || undefined,
            address: address || undefined,
            city: city || undefined,
            state: state || undefined,
            postal_code: postalCode || undefined,
            country: country || undefined,
            logo: logoUrl, // Use logoUrl directly
            website: website || undefined,
            tax_number: taxNumber || undefined,
          },
          include: {
            bank_accounts: true,
            e_wallets: true,
          },
        });
      } else {
        profile = await prisma.profile.create({
          data: {
            user_id: userId,
            company_name: companyName || null,
            address: address || null,
            city: city || null,
            state: state || null,
            postal_code: postalCode || null,
            country: country || null,
            logo: logoUrl || null,
            website: website || null,
            tax_number: taxNumber || null,
          },
          include: {
            bank_accounts: true,
            e_wallets: true,
          },
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Profile updated successfully",
        user: updatedUser,
        profile,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  // Bank Account methods
  async addBankAccount(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { bank_name, account_number, account_name, is_primary } = req.body;

      if (!bank_name || !account_number || !account_name) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
      });

      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }

      // If new account is primary, reset all other accounts to non-primary
      if (is_primary) {
        await prisma.bankAccount.updateMany({
          where: { profile_id: profile.profile_id },
          data: { is_primary: false },
        });
      }

      // Create bank account
      const bankAccount = await prisma.bankAccount.create({
        data: {
          profile_id: profile.profile_id,
          bank_name,
          account_number,
          account_name,
          is_primary: is_primary || false,
        },
      });

      return res.status(201).json({
        status: "success",
        message: "Bank account added successfully",
        bankAccount,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async updateBankAccount(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;
      const bankAccountId = parseInt(req.params.id);

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (isNaN(bankAccountId)) {
        return res.status(400).json({ message: "Invalid bank account ID" });
      }

      const { bank_name, account_number, account_name, is_primary } = req.body;

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
      });

      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }

      // Check if bank account belongs to the user
      const bankAccount = await prisma.bankAccount.findFirst({
        where: {
          id: bankAccountId,
          profile_id: profile.profile_id,
        },
      });

      if (!bankAccount) {
        return res.status(404).json({ message: "Bank account not found" });
      }

      // If new account is primary, reset all other accounts to non-primary
      if (is_primary) {
        await prisma.bankAccount.updateMany({
          where: {
            profile_id: profile.profile_id,
            id: { not: bankAccountId },
          },
          data: { is_primary: false },
        });
      }

      // Update bank account
      const updatedBankAccount = await prisma.bankAccount.update({
        where: { id: bankAccountId },
        data: {
          bank_name: bank_name || undefined,
          account_number: account_number || undefined,
          account_name: account_name || undefined,
          is_primary: is_primary !== undefined ? is_primary : undefined,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Bank account updated successfully",
        bankAccount: updatedBankAccount,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async deleteBankAccount(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;
      const bankAccountId = parseInt(req.params.id);

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (isNaN(bankAccountId)) {
        return res.status(400).json({ message: "Invalid bank account ID" });
      }

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
      });

      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }

      // Check if bank account belongs to the user
      const bankAccount = await prisma.bankAccount.findFirst({
        where: {
          id: bankAccountId,
          profile_id: profile.profile_id,
        },
      });

      if (!bankAccount) {
        return res.status(404).json({ message: "Bank account not found" });
      }

      // Delete bank account
      await prisma.bankAccount.delete({
        where: { id: bankAccountId },
      });

      return res.status(200).json({
        status: "success",
        message: "Bank account deleted successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  // E-Wallet methods
  async addEWallet(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { wallet_type, phone_number, account_name, is_primary } = req.body;

      if (!wallet_type || !phone_number || !account_name) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
      });

      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }

      // If new wallet is primary, reset all other wallets to non-primary
      if (is_primary) {
        await prisma.eWallet.updateMany({
          where: { profile_id: profile.profile_id },
          data: { is_primary: false },
        });
      }

      // Create e-wallet
      const eWallet = await prisma.eWallet.create({
        data: {
          profile_id: profile.profile_id,
          wallet_type,
          phone_number,
          account_name,
          is_primary: is_primary || false,
        },
      });

      return res.status(201).json({
        status: "success",
        message: "E-wallet added successfully",
        eWallet,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async updateEWallet(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;
      const eWalletId = parseInt(req.params.id);

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (isNaN(eWalletId)) {
        return res.status(400).json({ message: "Invalid e-wallet ID" });
      }

      const { wallet_type, phone_number, account_name, is_primary } = req.body;

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
      });

      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }

      // Check if e-wallet belongs to the user
      const eWallet = await prisma.eWallet.findFirst({
        where: {
          id: eWalletId,
          profile_id: profile.profile_id,
        },
      });

      if (!eWallet) {
        return res.status(404).json({ message: "E-wallet not found" });
      }

      // If new wallet is primary, reset all other wallets to non-primary
      if (is_primary) {
        await prisma.eWallet.updateMany({
          where: {
            profile_id: profile.profile_id,
            id: { not: eWalletId },
          },
          data: { is_primary: false },
        });
      }

      // Update e-wallet
      const updatedEWallet = await prisma.eWallet.update({
        where: { id: eWalletId },
        data: {
          wallet_type: wallet_type || undefined,
          phone_number: phone_number || undefined,
          account_name: account_name || undefined,
          is_primary: is_primary !== undefined ? is_primary : undefined,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "E-wallet updated successfully",
        eWallet: updatedEWallet,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }

  async deleteEWallet(req: Request, res: Response) {
    try {
      const userId = req.user?.user_id;
      const eWalletId = parseInt(req.params.id);

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (isNaN(eWalletId)) {
        return res.status(400).json({ message: "Invalid e-wallet ID" });
      }

      // Get user profile
      const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
      });
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }

      // Check if e-wallet belongs to the user
      const eWallet = await prisma.eWallet.findFirst({
        where: {
          id: eWalletId,
          profile_id: profile.profile_id,
        },
      });

      if (!eWallet) {
        return res.status(404).json({ message: "E-wallet not found" });
      }

      // Delete e-wallet
      await prisma.eWallet.delete({
        where: { id: eWalletId },
      });

      return res.status(200).json({
        status: "success",
        message: "E-wallet deleted successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Could not process request" });
    }
  }
}
