import { RequestHandler, Router } from "express";
import { InvoiceController } from "../controllers/invoice.controller";
import { AuthMiddleware } from "../middleware/auth.verify";
import { Validation } from "../middleware/validation";

export class InvoiceRouter {
  private router: Router;
  private invoiceController: InvoiceController;
  private validation: Validation;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.invoiceController = new InvoiceController();
    this.validation = new Validation();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Apply authentication middleware to all routes once
    this.router.use(this.authMiddleware.verifyToken as unknown as RequestHandler);

    // Invoice routes - removed duplicate verifyToken checks
    this.router.get(
      "/",
      this.invoiceController.getInvoices
    );

    this.router.get(
      "/:id",
      this.invoiceController.getInvoice
    );

    this.router.post(
      "/",
      this.validation.validateCreateInvoice,
      this.invoiceController.createInvoice
    );

    this.router.put(
      "/:id",
      this.validation.validateUpdateInvoice,
      this.invoiceController.updateInvoice
    );

    this.router.delete(
      "/:id",
      this.invoiceController.deleteInvoice
    );

    this.router.patch(
      "/:id/status",
      this.invoiceController.changeStatus
    );
    this.router.get(
      "/:id/payments",
      this.invoiceController.getInvoicePayments
    );

    // Payment routes
    this.router.post(
      "/payments",
      this.validation.validateCreatePayment,
      this.invoiceController.addPayment
    );

    // Product usage in invoices endpoint
    this.router.get(
      "/product-usage/:productId",
      this.invoiceController.getProductUsage
    );

    // Tambahkan ke initializeRoutes() di InvoiceRouter
    this.router.post(
      "/:id/send",
      this.invoiceController.sendInvoiceEmail
    );

    this.router.post(
      "/:id/remind",
      this.invoiceController.sendReminderEmail
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
