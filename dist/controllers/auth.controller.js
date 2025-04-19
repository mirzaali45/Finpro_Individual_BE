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
exports.AuthController = void 0;
const client_1 = require("../../prisma/generated/client");
const createToken_1 = require("../helpers/createToken");
const mailer_1 = require("../services/mailer");
const hashPassword_1 = require("../helpers/hashPassword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const cloudinary_1 = require("../services/cloudinary");
const JWT_SECRET = process.env.SECRET_KEY || "osdjfksdhfishd";
const prisma = new client_1.PrismaClient();
class AuthController {
    googleRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, picture } = req.body;
                if (!email)
                    return res.status(400).json({ error: "Email tidak ditemukan" });
                // Split name into first_name and last_name
                const nameParts = name.split(" ");
                const firstName = nameParts[0];
                const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
                let users = yield prisma.user.upsert({
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
                const token = createToken_1.tokenService.createLoginToken({
                    id: users.user_id,
                });
                // Get or create profile
                let profile = yield prisma.profile.findUnique({
                    where: { user_id: users.user_id },
                });
                if (!profile) {
                    profile = yield prisma.profile.create({
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
            }
            catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ message: "Could not reach the server database" });
            }
        });
    }
    registerBusiness(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                if (!email) {
                    return res.status(400).json({
                        status: "error",
                        message: "Email is required",
                    });
                }
                const existingUser = yield prisma.user.findUnique({
                    where: { email },
                });
                if (existingUser) {
                    return res
                        .status(400)
                        .json({ message: "Email address already exists" });
                }
                const newUser = yield prisma.user.create({
                    data: {
                        email,
                        verified: false,
                    },
                });
                const token = createToken_1.tokenService.createEmailRegisterToken({
                    id: newUser.user_id,
                    email,
                });
                yield prisma.user.update({
                    where: { user_id: newUser.user_id },
                    data: { verify_token: token },
                });
                yield (0, mailer_1.sendVerificationEmail)(email, token);
                return res.status(201).json({
                    status: "success",
                    token: token,
                    message: "Registration successful. Please check your email for verification.",
                    user: newUser,
                });
            }
            catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ message: "Could not reach the server database" });
            }
        });
    }
    verifyAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }
                const { username, firstName, lastName, phone, password, confirmPassword, companyName, address, city, state, postalCode, country, website, taxNumber, } = req.body;
                if (password !== confirmPassword) {
                    return res.status(400).json({ message: "Passwords do not match" });
                }
                const userId = req.user.user_id;
                const user = yield prisma.user.findUnique({
                    where: { user_id: userId },
                });
                if (!user || user.verified) {
                    return res
                        .status(400)
                        .json({ message: "Invalid verification request" });
                }
                const hashedPassword = yield (0, hashPassword_1.hashPass)(password);
                // Handle avatar upload
                let avatarUrl = null;
                if (req.file) {
                    avatarUrl = yield cloudinary_1.cloudinaryService.uploadUserAvatar(req.file, userId);
                }
                else if (req.body.avatar &&
                    typeof req.body.avatar === "string" &&
                    req.body.avatar.startsWith("data:")) {
                    avatarUrl = yield cloudinary_1.cloudinaryService.uploadUserAvatar(req.body.avatar, userId);
                }
                yield prisma.user.update({
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
                    yield prisma.profile.create({
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
            }
            catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ error: "Could not reach the server database" });
            }
        });
    }
    resetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const isNewbie = yield prisma.user.findFirst({
                    where: { email, password: null },
                });
                if (isNewbie) {
                    return res.status(403).json({
                        status: "error",
                        token: "",
                        message: "The email has no password. Please choose another account.",
                    });
                }
                const findUser = yield prisma.user.findFirst({
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
                const token = createToken_1.tokenService.createResetToken({
                    id: findUser.user_id,
                    resetPassword: true,
                });
                yield prisma.user.update({
                    where: { user_id: findUser === null || findUser === void 0 ? void 0 : findUser.user_id },
                    data: { password_reset_token: token },
                });
                yield (0, mailer_1.sendResetPassEmail)(email, token);
                return res.status(201).json({
                    status: "success",
                    token: token,
                    message: "Reset Password Link sent successfully. Please check your email for verification.",
                    user: findUser,
                });
            }
            catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ error: "Could not reach the server database" });
            }
        });
    }
    verifyResetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const { password, confirmPassword } = req.body;
                if (password !== confirmPassword) {
                    return res.status(400).json({ message: "Passwords do not match" });
                }
                const userId = req.user.user_id;
                const user = yield prisma.user.findUnique({
                    where: { user_id: userId },
                });
                if (!user) {
                    return res
                        .status(400)
                        .json({ message: "Invalid Reset password request" });
                }
                const hashedPassword = yield (0, hashPassword_1.hashPass)(password);
                yield prisma.user.update({
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
            }
            catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ message: "Could not reach the server database" });
            }
        });
    }
    loginAny(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // validation
            if (!req.body.email || !req.body.password) {
                return res
                    .status(400)
                    .json({ message: "Email and password are required" });
            }
            try {
                const user = yield prisma.user.findUnique({
                    where: { email: req.body.email },
                });
                if (!user) {
                    return res.status(400).json({ message: "User not found" });
                }
                if (!user.password) {
                    return res.status(400).json({
                        message: "User has no password set. Please use Google login or reset your password",
                    });
                }
                const validPass = yield bcrypt_1.default.compare(req.body.password, user.password);
                if (!validPass) {
                    return res.status(400).json({ message: "Password incorrect!" });
                }
                const token = createToken_1.tokenService.createLoginToken({
                    id: user.user_id,
                });
                // Get user profile
                const profile = yield prisma.profile.findUnique({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    checkExpTokenEmailVerif(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.params;
            if (!token) {
                return res.status(401).json({ error: "Unauthorized" });
            }
            try {
                // Verifikasi token
                const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
                // Cek apakah token sudah lebih dari 1 jam sejak dibuat
                const tokenAge = Math.floor(Date.now() / 1000) - decoded.iat; // Selisih waktu dalam detik
                if (tokenAge > 3600) {
                    // 1 jam = 3600 detik
                    return res.status(409).json({ status: "no", message: "Token Expired" });
                }
                return res.status(200).json({ status: "ok", message: "Token Active" });
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({ error: "Invalid or expired token" });
            }
        });
    }
    requestChangeEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const { newEmail } = req.body;
                if (!newEmail) {
                    return res.status(400).json({ message: "New email is required" });
                }
                // Cek apakah email sudah digunakan
                const existingUser = yield prisma.user.findUnique({
                    where: { email: newEmail },
                });
                if (existingUser) {
                    return res.status(400).json({ message: "Email is already in use" });
                }
                // Buat token verifikasi email
                const token = createToken_1.tokenService.createEmailChangeToken({ userId, newEmail });
                // Simpan token verifikasi di database
                yield prisma.user.update({
                    where: { user_id: userId },
                    data: { verify_token: token },
                });
                // Kirim email verifikasi
                yield (0, mailer_1.sendReverificationEmail)(newEmail, token);
                return res.status(200).json({
                    status: "success",
                    message: "Verification email sent. Please check your inbox.",
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    verifyChangeEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.body;
                if (!token) {
                    return res.status(400).json({ message: "Token is required" });
                }
                let decoded;
                try {
                    decoded = createToken_1.tokenService.verifyEmailChangeToken(token);
                }
                catch (error) {
                    return res.status(400).json({ message: "Invalid or expired token" });
                }
                const { userId, newEmail } = decoded;
                const existingUser = yield prisma.user.findUnique({
                    where: { user_id: userId },
                });
                if (!existingUser) {
                    return res.status(400).json({ message: "User not found" });
                }
                yield prisma.user.update({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const user = yield prisma.user.findUnique({
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
                const profile = yield prisma.profile.findUnique({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    updateProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const { username, firstName, lastName, phone, companyName, address, city, state, postalCode, country, website, taxNumber, } = req.body;
                // Get current user to check for existing avatar
                const currentUser = yield prisma.user.findUnique({
                    where: { user_id: userId },
                    select: { avatar: true },
                });
                // Handle avatar upload
                let avatarUrl = currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar; // Default to current avatar if exists
                if (req.files && "avatar" in req.files && req.files.avatar[0]) {
                    // Delete old avatar if it exists
                    if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar) && currentUser.avatar.includes("cloudinary")) {
                        yield cloudinary_1.cloudinaryService.deleteImage(currentUser.avatar);
                    }
                    avatarUrl = yield cloudinary_1.cloudinaryService.uploadUserAvatar(req.files.avatar[0], userId);
                    console.log("Uploaded avatar from file:", avatarUrl);
                }
                else if (req.body.avatar &&
                    typeof req.body.avatar === "string" &&
                    req.body.avatar.startsWith("data:")) {
                    // Delete old avatar if it exists
                    if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar) && currentUser.avatar.includes("cloudinary")) {
                        yield cloudinary_1.cloudinaryService.deleteImage(currentUser.avatar);
                    }
                    avatarUrl = yield cloudinary_1.cloudinaryService.uploadUserAvatar(req.body.avatar, userId);
                    console.log("Uploaded avatar from base64:", avatarUrl);
                }
                // Update user data
                const updatedUser = yield prisma.user.update({
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
                const currentProfile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                    select: { profile_id: true, logo: true },
                });
                // Handle logo upload if provided
                let logoUrl = currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.logo; // Default to current logo if exists
                if (req.files && "logo" in req.files && req.files.logo[0]) {
                    // Delete old logo if it exists
                    if ((currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.logo) &&
                        currentProfile.logo.includes("cloudinary")) {
                        yield cloudinary_1.cloudinaryService.deleteImage(currentProfile.logo);
                    }
                    logoUrl = yield cloudinary_1.cloudinaryService.uploadCompanyLogo(req.files.logo[0], userId);
                    console.log("Uploaded logo from file:", logoUrl);
                }
                else if (req.body.logo &&
                    typeof req.body.logo === "string" &&
                    req.body.logo.startsWith("data:")) {
                    // Delete old logo if it exists
                    if ((currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.logo) &&
                        currentProfile.logo.includes("cloudinary")) {
                        yield cloudinary_1.cloudinaryService.deleteImage(currentProfile.logo);
                    }
                    logoUrl = yield cloudinary_1.cloudinaryService.uploadCompanyLogo(req.body.logo, userId);
                    console.log("Uploaded logo from base64:", logoUrl);
                }
                // Update profile if it exists, create if it doesn't
                let profile;
                if (currentProfile) {
                    profile = yield prisma.profile.update({
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
                }
                else {
                    profile = yield prisma.profile.create({
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
            }
            catch (error) {
                console.error("Error updating profile:", error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    // Bank Account methods
    addBankAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const { bank_name, account_number, account_name, is_primary } = req.body;
                if (!bank_name || !account_number || !account_name) {
                    return res.status(400).json({ message: "Missing required fields" });
                }
                // Get user profile
                const profile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                });
                if (!profile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                // If new account is primary, reset all other accounts to non-primary
                if (is_primary) {
                    yield prisma.bankAccount.updateMany({
                        where: { profile_id: profile.profile_id },
                        data: { is_primary: false },
                    });
                }
                // Create bank account
                const bankAccount = yield prisma.bankAccount.create({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    updateBankAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                const bankAccountId = parseInt(req.params.id);
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                if (isNaN(bankAccountId)) {
                    return res.status(400).json({ message: "Invalid bank account ID" });
                }
                const { bank_name, account_number, account_name, is_primary } = req.body;
                // Get user profile
                const profile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                });
                if (!profile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                // Check if bank account belongs to the user
                const bankAccount = yield prisma.bankAccount.findFirst({
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
                    yield prisma.bankAccount.updateMany({
                        where: {
                            profile_id: profile.profile_id,
                            id: { not: bankAccountId },
                        },
                        data: { is_primary: false },
                    });
                }
                // Update bank account
                const updatedBankAccount = yield prisma.bankAccount.update({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    deleteBankAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                const bankAccountId = parseInt(req.params.id);
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                if (isNaN(bankAccountId)) {
                    return res.status(400).json({ message: "Invalid bank account ID" });
                }
                // Get user profile
                const profile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                });
                if (!profile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                // Check if bank account belongs to the user
                const bankAccount = yield prisma.bankAccount.findFirst({
                    where: {
                        id: bankAccountId,
                        profile_id: profile.profile_id,
                    },
                });
                if (!bankAccount) {
                    return res.status(404).json({ message: "Bank account not found" });
                }
                // Delete bank account
                yield prisma.bankAccount.delete({
                    where: { id: bankAccountId },
                });
                return res.status(200).json({
                    status: "success",
                    message: "Bank account deleted successfully",
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    // E-Wallet methods
    addEWallet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const { wallet_type, phone_number, account_name, is_primary } = req.body;
                if (!wallet_type || !phone_number || !account_name) {
                    return res.status(400).json({ message: "Missing required fields" });
                }
                // Get user profile
                const profile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                });
                if (!profile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                // If new wallet is primary, reset all other wallets to non-primary
                if (is_primary) {
                    yield prisma.eWallet.updateMany({
                        where: { profile_id: profile.profile_id },
                        data: { is_primary: false },
                    });
                }
                // Create e-wallet
                const eWallet = yield prisma.eWallet.create({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    updateEWallet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                const eWalletId = parseInt(req.params.id);
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                if (isNaN(eWalletId)) {
                    return res.status(400).json({ message: "Invalid e-wallet ID" });
                }
                const { wallet_type, phone_number, account_name, is_primary } = req.body;
                // Get user profile
                const profile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                });
                if (!profile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                // Check if e-wallet belongs to the user
                const eWallet = yield prisma.eWallet.findFirst({
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
                    yield prisma.eWallet.updateMany({
                        where: {
                            profile_id: profile.profile_id,
                            id: { not: eWalletId },
                        },
                        data: { is_primary: false },
                    });
                }
                // Update e-wallet
                const updatedEWallet = yield prisma.eWallet.update({
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
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
    deleteEWallet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                const eWalletId = parseInt(req.params.id);
                if (!userId) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                if (isNaN(eWalletId)) {
                    return res.status(400).json({ message: "Invalid e-wallet ID" });
                }
                // Get user profile
                const profile = yield prisma.profile.findUnique({
                    where: { user_id: userId },
                });
                if (!profile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                // Check if e-wallet belongs to the user
                const eWallet = yield prisma.eWallet.findFirst({
                    where: {
                        id: eWalletId,
                        profile_id: profile.profile_id,
                    },
                });
                if (!eWallet) {
                    return res.status(404).json({ message: "E-wallet not found" });
                }
                // Delete e-wallet
                yield prisma.eWallet.delete({
                    where: { id: eWalletId },
                });
                return res.status(200).json({
                    status: "success",
                    message: "E-wallet deleted successfully",
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Could not process request" });
            }
        });
    }
}
exports.AuthController = AuthController;
