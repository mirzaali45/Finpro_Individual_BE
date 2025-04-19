"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRouter = void 0;
const express_1 = require("express");
const invoice_controller_1 = require("../controllers/invoice.controller");
const auth_verify_1 = require("../middleware/auth.verify");
const validation_1 = require("../middleware/validation");
class InvoiceRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.invoiceController = new invoice_controller_1.InvoiceController();
        this.validation = new validation_1.Validation();
        this.authMiddleware = new auth_verify_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Apply authentication middleware to all routes once
        this.router.use(this.authMiddleware.verifyToken);
        // Invoice routes - removed duplicate verifyToken checks
        this.router.get("/", this.invoiceController.getInvoices.bind(this.invoiceController));
        this.router.get("/:id", this.invoiceController.getInvoice.bind(this.invoiceController));
        this.router.post("/", this.validation.validateCreateInvoice, this.invoiceController.createInvoice.bind(this.invoiceController));
        this.router.put("/:id", this.validation.validateUpdateInvoice, this.invoiceController.updateInvoice.bind(this.invoiceController));
        this.router.delete("/:id", this.invoiceController.deleteInvoice.bind(this.invoiceController));
        this.router.patch("/:id/status", this.invoiceController.changeStatus.bind(this.invoiceController));
        this.router.get("/:id/payments", this.invoiceController.getInvoicePayments.bind(this.invoiceController));
        // Payment routes
        this.router.post("/payments", this.validation.validateCreatePayment, this.invoiceController.addPayment.bind(this.invoiceController));
        // Product usage in invoices endpoint
        this.router.get("/product-usage/:productId", this.invoiceController.getProductUsage.bind(this.invoiceController));
        // Email routes
        this.router.post("/:id/send", this.invoiceController.sendInvoiceEmail.bind(this.invoiceController));
        this.router.post("/:id/remind", this.invoiceController.sendReminderEmail.bind(this.invoiceController));
    }
    getRouter() {
        return this.router;
    }
}
exports.InvoiceRouter = InvoiceRouter;
