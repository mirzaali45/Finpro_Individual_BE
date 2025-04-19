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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const express_validator_1 = require("express-validator");
const client_1 = require("../../prisma/generated/client");
class Validation {
    constructor() {
        // Handle validation errors middleware
        this.handleValidationErrors = (req, res, next) => {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    message: "Validation error",
                    errors: errors.array(),
                });
                return;
            }
            next();
        };
    }
    // Helper method to run validations and check results
    runValidation(validations) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Run all validations
                yield Promise.all(validations.map((validation) => validation.run(req)));
                // Check for validation errors
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({
                        message: "Validation error",
                        errors: errors.array(),
                    });
                    return;
                }
                next();
            }
            catch (err) {
                console.error("Validation error:", err);
                res.status(500).json({ message: "Validation failed" });
            }
        });
    }
    get validateCreateInvoice() {
        const validations = [
            (0, express_validator_1.body)("client_id").isInt().withMessage("Client ID must be an integer"),
            (0, express_validator_1.body)("issue_date")
                .isISO8601()
                .withMessage("Issue date must be a valid date"),
            (0, express_validator_1.body)("due_date")
                .isISO8601()
                .withMessage("Due date must be a valid date")
                .custom((value, { req }) => {
                // Custom validation to ensure due date is after issue date
                const issueDate = new Date(req.body.issue_date);
                const dueDate = new Date(value);
                if (dueDate <= issueDate) {
                    throw new Error("Due date must be after issue date");
                }
                return true;
            }),
            (0, express_validator_1.body)("items")
                .isArray({ min: 1 })
                .withMessage("At least one item is required"),
            (0, express_validator_1.body)("items.*.product_id")
                .isInt()
                .withMessage("Product ID must be an integer"),
            (0, express_validator_1.body)("items.*.quantity")
                .isInt({ min: 1 })
                .withMessage("Quantity must be a positive integer"),
            (0, express_validator_1.body)("discount_amount")
                .optional()
                .isFloat({ min: 0 })
                .withMessage("Discount amount must be a positive number"),
            (0, express_validator_1.body)("is_recurring")
                .optional()
                .isBoolean()
                .withMessage("Is recurring must be a boolean"),
            (0, express_validator_1.body)("recurring_pattern")
                .optional()
                .custom((value, { req }) => {
                // Only validate if is_recurring is true
                if (req.body.is_recurring) {
                    if (!Object.values(client_1.RecurringPattern).includes(value)) {
                        throw new Error("Invalid recurring pattern");
                    }
                }
                return true;
            }),
        ];
        return this.runValidation(validations);
    }
    get validateUpdateInvoice() {
        const validations = [
            (0, express_validator_1.body)("client_id")
                .optional()
                .isInt()
                .withMessage("Client ID must be an integer"),
            (0, express_validator_1.body)("issue_date")
                .optional()
                .isISO8601()
                .withMessage("Issue date must be a valid date"),
            (0, express_validator_1.body)("due_date")
                .optional()
                .isISO8601()
                .withMessage("Due date must be a valid date")
                .custom((value, { req }) => {
                // Only validate if both dates are provided
                if (req.body.issue_date && value) {
                    const issueDate = new Date(req.body.issue_date);
                    const dueDate = new Date(value);
                    if (dueDate <= issueDate) {
                        throw new Error("Due date must be after issue date");
                    }
                }
                return true;
            }),
            (0, express_validator_1.body)("items").optional().isArray().withMessage("Items must be an array"),
            (0, express_validator_1.body)("items.*.product_id")
                .optional()
                .isInt()
                .withMessage("Product ID must be an integer"),
            (0, express_validator_1.body)("items.*.quantity")
                .optional()
                .isInt({ min: 1 })
                .withMessage("Quantity must be a positive integer"),
            (0, express_validator_1.body)("discount_amount")
                .optional()
                .isFloat({ min: 0 })
                .withMessage("Discount amount must be a positive number"),
            (0, express_validator_1.body)("is_recurring")
                .optional()
                .isBoolean()
                .withMessage("Is recurring must be a boolean"),
            (0, express_validator_1.body)("recurring_pattern")
                .optional()
                .custom((value, { req }) => {
                // Only validate if is_recurring is true
                if (req.body.is_recurring) {
                    if (!Object.values(client_1.RecurringPattern).includes(value)) {
                        throw new Error("Invalid recurring pattern");
                    }
                }
                return true;
            }),
        ];
        return this.runValidation(validations);
    }
    // Validate create payment request
    get validateCreatePayment() {
        const validations = [
            (0, express_validator_1.body)("invoice_id").isInt().withMessage("Invoice ID must be an integer"),
            (0, express_validator_1.body)("amount")
                .isFloat({ min: 0.01 })
                .withMessage("Amount must be a positive number"),
            (0, express_validator_1.body)("payment_date")
                .isISO8601()
                .withMessage("Payment date must be a valid date"),
            (0, express_validator_1.body)("payment_method")
                .isIn(Object.values(client_1.PaymentMethod))
                .withMessage("Invalid payment method"),
        ];
        return this.runValidation(validations);
    }
    // Validate create recurring invoice request
    get validateCreateRecurringInvoice() {
        const validations = [
            (0, express_validator_1.body)("client_id").isInt().withMessage("Client ID must be an integer"),
            (0, express_validator_1.body)("pattern")
                .isIn(Object.values(client_1.RecurringPattern))
                .withMessage("Invalid recurring pattern"),
            (0, express_validator_1.body)("next_invoice_date")
                .isISO8601()
                .withMessage("Next invoice date must be a valid date"),
            (0, express_validator_1.body)("items")
                .isArray({ min: 1 })
                .withMessage("At least one item is required"),
            (0, express_validator_1.body)("items.*.product_id")
                .isInt()
                .withMessage("Product ID must be an integer"),
            (0, express_validator_1.body)("items.*.quantity")
                .isInt({ min: 1 })
                .withMessage("Quantity must be a positive integer"),
            (0, express_validator_1.body)("source_invoice_id")
                .optional()
                .isInt()
                .withMessage("Source invoice ID must be an integer"),
        ];
        return this.runValidation(validations);
    }
    // Validate update recurring invoice request
    get validateUpdateRecurringInvoice() {
        const validations = [
            (0, express_validator_1.body)("pattern")
                .optional()
                .isIn(Object.values(client_1.RecurringPattern))
                .withMessage("Invalid recurring pattern"),
            (0, express_validator_1.body)("next_invoice_date")
                .optional()
                .isISO8601()
                .withMessage("Next invoice date must be a valid date"),
            (0, express_validator_1.body)("is_active")
                .optional()
                .isBoolean()
                .withMessage("Is active must be a boolean"),
            (0, express_validator_1.body)("items").optional().isArray().withMessage("Items must be an array"),
            (0, express_validator_1.body)("items.*.product_id")
                .optional()
                .isInt()
                .withMessage("Product ID must be an integer"),
            (0, express_validator_1.body)("items.*.quantity")
                .optional()
                .isInt({ min: 1 })
                .withMessage("Quantity must be a positive integer"),
        ];
        return this.runValidation(validations);
    }
}
exports.Validation = Validation;
