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
exports.googleAuth = exports.resetPassword = exports.forgotPassword = exports.verifyEmail = exports.loginUser = exports.registerUser = void 0;
// services/auth.service.ts
const client_1 = require("../../prisma/generated/client");
const password_utils_1 = require("../utils/password.utils");
const email_utils_1 = require("../utils/email.utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const registerUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, first_name, last_name, phone } = input;
    // Check if user exists
    const existingUser = yield prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    // Hash password
    const hashedPassword = yield (0, password_utils_1.hashPassword)(password);
    // Generate verification token
    const verifyToken = (0, email_utils_1.generateVerificationToken)();
    // Create user
    const user = yield prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            first_name,
            last_name,
            phone,
            role: client_1.Role.business,
            verify_token: verifyToken,
        },
    });
    // Send verification email
    yield (0, email_utils_1.sendVerificationEmail)(email, verifyToken);
    return user;
});
exports.registerUser = registerUser;
const loginUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = input;
    // Find user
    const user = yield prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    // Check if user is deleted
    if (user.deleted_at) {
        throw new Error("Account has been deleted");
    }
    // Check password
    if (!user.password) {
        throw new Error("Password not set for this account");
    }
    const isPasswordValid = yield (0, password_utils_1.comparePassword)(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }
    // Generate JWT token
    const token = jsonwebtoken_1.default.sign({ userId: user.user_id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return { user, token };
});
exports.loginUser = loginUser;
const verifyEmail = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // Find user by verification token
    const user = yield prisma.user.findFirst({
        where: { verify_token: token },
    });
    if (!user) {
        throw new Error("Invalid verification token");
    }
    // Update user
    const updatedUser = yield prisma.user.update({
        where: { user_id: user.user_id },
        data: {
            verified: true,
            verify_token: null,
        },
    });
    return updatedUser;
});
exports.verifyEmail = verifyEmail;
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // Find user
    const user = yield prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        // Don't reveal that the user doesn't exist for security reasons
        return;
    }
    // Generate reset token
    const resetToken = (0, email_utils_1.generateVerificationToken)();
    // Update user
    yield prisma.user.update({
        where: { user_id: user.user_id },
        data: {
            password_reset_token: resetToken,
        },
    });
    // Send password reset email
    yield (0, email_utils_1.sendPasswordResetEmail)(email, resetToken);
});
exports.forgotPassword = forgotPassword;
const resetPassword = (token, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    // Find user by reset token
    const user = yield prisma.user.findFirst({
        where: { password_reset_token: token },
    });
    if (!user) {
        throw new Error("Invalid reset token");
    }
    // Hash new password
    const hashedPassword = yield (0, password_utils_1.hashPassword)(newPassword);
    // Update user
    const updatedUser = yield prisma.user.update({
        where: { user_id: user.user_id },
        data: {
            password: hashedPassword,
            password_reset_token: null,
        },
    });
    return updatedUser;
});
exports.resetPassword = resetPassword;
const googleAuth = (googleData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, firstName, lastName } = googleData;
    // Check if user exists
    let user = yield prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        // Create new user
        user = yield prisma.user.create({
            data: {
                email,
                first_name: firstName,
                last_name: lastName,
                is_google: true,
                verified: true,
                role: client_1.Role.business,
            },
        });
    }
    else if (!user.is_google) {
        // If user exists but not with Google
        throw new Error("Email already in use with different authentication method");
    }
    // Generate JWT token
    const token = jsonwebtoken_1.default.sign({ userId: user.user_id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return { user, token };
});
exports.googleAuth = googleAuth;
