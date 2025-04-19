"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
// auth.router.ts
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_verify_1 = require("../middleware/auth.verify");
const multer_1 = __importDefault(require("../config/multer"));
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.AuthController();
        this.authMiddleware = new auth_verify_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Google authentication
        this.router.post("/google", this.authController.googleRegister);
        // Regular registration - now only one type of registration
        this.router.post("/register", this.authController.registerBusiness);
        // Verification with file upload
        this.router.post("/verification", this.authMiddleware.verifyToken, multer_1.default.single("avatar"), this.authController.verifyAccount);
        // Password reset
        this.router.post("/reset-password", this.authController.resetPassword);
        this.router.post("/verify/reset-password", this.authMiddleware.verifyToken, this.authController.verifyResetPassword);
        // Login
        this.router.post("/login", this.authController.loginAny);
        // Token checks
        this.router.get("/check-email-token/:token", this.authController.checkExpTokenEmailVerif);
        this.router.get("/cek-token", this.authMiddleware.verifyExpiredToken);
        // Email change
        this.router.post("/request-change-email", this.authMiddleware.verifyToken, this.authController.requestChangeEmail);
        this.router.post("/verify-change-email", this.authMiddleware.verifyToken, this.authController.verifyChangeEmail);
        // Profile management with file uploads
        this.router.get("/profile", this.authMiddleware.verifyToken, this.authController.getProfile);
        this.router.put("/profile", this.authMiddleware.verifyToken, multer_1.default.fields([
            { name: "avatar", maxCount: 1 },
            { name: "logo", maxCount: 1 },
        ]), this.authController.updateProfile);
        // Bank account routes
        this.router.post("/bank-accounts", this.authMiddleware.verifyToken, this.authController.addBankAccount);
        this.router.put("/bank-accounts/:id", this.authMiddleware.verifyToken, this.authMiddleware.checkBankAccountOwner, this.authController.updateBankAccount);
        this.router.delete("/bank-accounts/:id", this.authMiddleware.verifyToken, this.authMiddleware.checkBankAccountOwner, this.authController.deleteBankAccount);
        // E-wallet routes
        this.router.post("/e-wallets", this.authMiddleware.verifyToken, this.authController.addEWallet);
        this.router.put("/e-wallets/:id", this.authMiddleware.verifyToken, this.authMiddleware.checkEWalletOwner, this.authController.updateEWallet);
        this.router.delete("/e-wallets/:id", this.authMiddleware.verifyToken, this.authMiddleware.checkEWalletOwner, this.authController.deleteEWallet);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
