// auth.router.ts
import { Router } from "express";
import { RequestHandler } from "express-serve-static-core";
import { AuthController } from "../controllers/auth.controller";
import { AuthMiddleware } from "../middleware/auth.verify";
import upload from "../config/multer";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Google authentication
    this.router.post(
      "/google",
      this.authController.googleRegister as unknown as RequestHandler
    );

    // Regular registration - now only one type of registration
    this.router.post(
      "/register",
      this.authController.registerBusiness as unknown as RequestHandler
    );

    // Verification with file upload
    this.router.post(
      "/verification",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      upload.single("avatar") as unknown as RequestHandler,
      this.authController.verifyAccount as unknown as RequestHandler
    );

    // Password reset
    this.router.post(
      "/reset-password",
      this.authController.resetPassword as unknown as RequestHandler
    );

    this.router.post(
      "/verify/reset-password",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authController.verifyResetPassword as unknown as RequestHandler
    );

    // Login
    this.router.post(
      "/login",
      this.authController.loginAny as unknown as RequestHandler
    );

    // Token checks
    this.router.get(
      "/check-email-token/:token",
      this.authController.checkExpTokenEmailVerif as unknown as RequestHandler
    );

    this.router.get(
      "/cek-token",
      this.authMiddleware.verifyExpiredToken as unknown as RequestHandler
    );

    // Email change
    this.router.post(
      "/request-change-email",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authController.requestChangeEmail as unknown as RequestHandler
    );

    this.router.post(
      "/verify-change-email",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authController.verifyChangeEmail as unknown as RequestHandler
    );

    // Profile management with file uploads
    this.router.get(
      "/profile",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authController.getProfile as unknown as RequestHandler
    );

    this.router.put(
      "/profile",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "logo", maxCount: 1 },
      ]) as unknown as RequestHandler,
      this.authController.updateProfile as unknown as RequestHandler
    );

    // Bank account routes
    this.router.post(
      "/bank-accounts",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authController.addBankAccount as unknown as RequestHandler
    );

    this.router.put(
      "/bank-accounts/:id",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authMiddleware.checkBankAccountOwner as unknown as RequestHandler,
      this.authController.updateBankAccount as unknown as RequestHandler
    );

    this.router.delete(
      "/bank-accounts/:id",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authMiddleware.checkBankAccountOwner as unknown as RequestHandler,
      this.authController.deleteBankAccount as unknown as RequestHandler
    );

    // E-wallet routes
    this.router.post(
      "/e-wallets",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authController.addEWallet as unknown as RequestHandler
    );

    this.router.put(
      "/e-wallets/:id",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authMiddleware.checkEWalletOwner as unknown as RequestHandler,
      this.authController.updateEWallet as unknown as RequestHandler
    );

    this.router.delete(
      "/e-wallets/:id",
      this.authMiddleware.verifyToken as unknown as RequestHandler,
      this.authMiddleware.checkEWalletOwner as unknown as RequestHandler,
      this.authController.deleteEWallet as unknown as RequestHandler
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
