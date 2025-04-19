"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringInvoiceRouter = void 0;
const express_1 = require("express");
const recurring_invoice_controller_1 = require("../controllers/recurring-invoice.controller");
const auth_verify_1 = require("../middleware/auth.verify");
const validation_1 = require("../middleware/validation");
class RecurringInvoiceRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.recurringInvoiceController = new recurring_invoice_controller_1.RecurringInvoiceController();
        this.validation = new validation_1.Validation();
        this.authMiddleware = new auth_verify_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Apply authentication middleware to all routes once
        this.router.use(this.authMiddleware.verifyToken);
        // Recurring Invoice routes - removed duplicate verifyToken checks
        this.router.get("/", this.recurringInvoiceController.getRecurringInvoices);
        this.router.get("/:id", this.recurringInvoiceController.getRecurringInvoice);
        this.router.post("/", this.validation.validateCreateRecurringInvoice, this.recurringInvoiceController.createRecurringInvoice);
        this.router.put("/:id", this.validation.validateUpdateRecurringInvoice, this.recurringInvoiceController.updateRecurringInvoice);
        this.router.delete("/:id", this.recurringInvoiceController.deleteRecurringInvoice);
        this.router.patch("/:id/activate", this.recurringInvoiceController.activateRecurringInvoice);
        this.router.patch("/:id/deactivate", this.recurringInvoiceController.deactivateRecurringInvoice);
        this.router.get("/:id/invoices", this.recurringInvoiceController.getGeneratedInvoices);
        this.router.post("/:id/generate", this.recurringInvoiceController.generateInvoiceManually);
    }
    getRouter() {
        return this.router;
    }
}
exports.RecurringInvoiceRouter = RecurringInvoiceRouter;
