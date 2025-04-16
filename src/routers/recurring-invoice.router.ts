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
    // Apply authentication middleware to all routes
    this.router.use(this.authMiddleware.verifyToken);

    // Recurring Invoice routes
    this.router.get(
      "/",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.getRecurringInvoices
    );

    this.router.get(
      "/:id",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.getRecurringInvoice
    );

    this.router.post(
      "/",
      this.authMiddleware.verifyToken,
      this.validation.validateCreateRecurringInvoice,
      this.recurringInvoiceController.createRecurringInvoice
    );

    this.router.put(
      "/:id",
      this.authMiddleware.verifyToken,
      this.validation.validateUpdateRecurringInvoice,
      this.recurringInvoiceController.updateRecurringInvoice
    );

    this.router.delete(
      "/:id",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.deleteRecurringInvoice
    );

    this.router.patch(
      "/:id/activate",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.activateRecurringInvoice
    );

    this.router.patch(
      "/:id/deactivate",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.deactivateRecurringInvoice
    );

    this.router.get(
      "/:id/invoices",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.getGeneratedInvoices
    );

    this.router.post(
      "/:id/generate",
      this.authMiddleware.verifyToken,
      this.recurringInvoiceController.generateInvoiceManually
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
