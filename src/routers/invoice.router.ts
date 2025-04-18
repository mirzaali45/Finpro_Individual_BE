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
    this.router.use(
      this.authMiddleware.verifyToken as unknown as RequestHandler
    );

    // Invoice routes - removed duplicate verifyToken checks
    this.router.get(
      "/",
      this.invoiceController.getInvoices.bind(this.invoiceController)
    );

    this.router.get(
      "/:id",
      this.invoiceController.getInvoice.bind(this.invoiceController)
    );

    this.router.post(
      "/",
      this.validation.validateCreateInvoice,
      this.invoiceController.createInvoice.bind(this.invoiceController)
    );

    this.router.put(
      "/:id",
      this.validation.validateUpdateInvoice,
      this.invoiceController.updateInvoice.bind(this.invoiceController)
    );

    this.router.delete(
      "/:id",
      this.invoiceController.deleteInvoice.bind(this.invoiceController)
    );

    this.router.patch(
      "/:id/status",
      this.invoiceController.changeStatus.bind(this.invoiceController)
    );

    this.router.get(
      "/:id/payments",
      this.invoiceController.getInvoicePayments.bind(this.invoiceController)
    );

    // Payment routes
    this.router.post(
      "/payments",
      this.validation.validateCreatePayment,
      this.invoiceController.addPayment.bind(this.invoiceController)
    );

    // Product usage in invoices endpoint
    this.router.get(
      "/product-usage/:productId",
      this.invoiceController.getProductUsage.bind(this.invoiceController)
    );

    // Email routes
    this.router.post(
      "/:id/send",
      this.invoiceController.sendInvoiceEmail.bind(this.invoiceController)
    );

    this.router.post(
      "/:id/remind",
      this.invoiceController.sendReminderEmail.bind(this.invoiceController)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
