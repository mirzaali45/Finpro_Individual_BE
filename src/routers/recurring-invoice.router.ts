import { Router } from "express";
import { RecurringInvoiceController } from "../controllers/recurring-invoice.controller";
import { AuthMiddleware } from "../middleware/auth.verify";
import { Validation } from "../middleware/validation";

export class RecurringInvoiceRouter {
  private router: Router;
  private recurringInvoiceController: RecurringInvoiceController;
  private validation: Validation;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.recurringInvoiceController = new RecurringInvoiceController();
    this.validation = new Validation();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Apply authentication middleware to all routes once
    this.router.use(this.authMiddleware.verifyToken);

    // Recurring Invoice routes - removed duplicate verifyToken checks
    this.router.get("/", this.recurringInvoiceController.getRecurringInvoices);

    this.router.get(
      "/:id",
      this.recurringInvoiceController.getRecurringInvoice
    );

    this.router.post(
      "/",
      this.validation.validateCreateRecurringInvoice,
      this.recurringInvoiceController.createRecurringInvoice
    );

    this.router.put(
      "/:id",
      this.validation.validateUpdateRecurringInvoice,
      this.recurringInvoiceController.updateRecurringInvoice
    );

    this.router.delete(
      "/:id",
      this.recurringInvoiceController.deleteRecurringInvoice
    );

    this.router.patch(
      "/:id/activate",
      this.recurringInvoiceController.activateRecurringInvoice
    );

    this.router.patch(
      "/:id/deactivate",
      this.recurringInvoiceController.deactivateRecurringInvoice
    );

    this.router.get(
      "/:id/invoices",
      this.recurringInvoiceController.getGeneratedInvoices
    );

    this.router.post(
      "/:id/generate",
      this.recurringInvoiceController.generateInvoiceManually
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
