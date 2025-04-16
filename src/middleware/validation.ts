import { Request, Response, NextFunction, RequestHandler } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
import { RecurringPattern, PaymentMethod } from "../../prisma/generated/client";

export class Validation {
  // Handle validation errors middleware
  handleValidationErrors: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        message: "Validation error",
        errors: errors.array(),
      });
      return;
    }
    next();
  };

  // Helper method to run validations and check results
  private runValidation(validations: ValidationChain[]): RequestHandler {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      try {
        // Run all validations
        await Promise.all(validations.map((validation) => validation.run(req)));

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(400).json({
            message: "Validation error",
            errors: errors.array(),
          });
          return;
        }
        next();
      } catch (err) {
        console.error("Validation error:", err);
        res.status(500).json({ message: "Validation failed" });
      }
    };
  }

  // Validate create invoice request
  get validateCreateInvoice(): RequestHandler {
    const validations = [
      body("client_id").isInt().withMessage("Client ID must be an integer"),

      body("issue_date")
        .isISO8601()
        .withMessage("Issue date must be a valid date"),

      body("due_date").isISO8601().withMessage("Due date must be a valid date"),

      body("items")
        .isArray({ min: 1 })
        .withMessage("At least one item is required"),

      body("items.*.product_id")
        .isInt()
        .withMessage("Product ID must be an integer"),

      body("items.*.quantity")
        .isInt({ min: 1 })
        .withMessage("Quantity must be a positive integer"),

      body("is_recurring")
        .optional()
        .isBoolean()
        .withMessage("Is recurring must be a boolean"),

      body("recurring_pattern")
        .optional()
        .isIn(Object.values(RecurringPattern))
        .withMessage("Invalid recurring pattern"),
    ];

    return this.runValidation(validations);
  }

  // Validate update invoice request
  get validateUpdateInvoice(): RequestHandler {
    const validations = [
      body("client_id")
        .optional()
        .isInt()
        .withMessage("Client ID must be an integer"),

      body("issue_date")
        .optional()
        .isISO8601()
        .withMessage("Issue date must be a valid date"),

      body("due_date")
        .optional()
        .isISO8601()
        .withMessage("Due date must be a valid date"),

      body("items").optional().isArray().withMessage("Items must be an array"),

      body("items.*.product_id")
        .optional()
        .isInt()
        .withMessage("Product ID must be an integer"),

      body("items.*.quantity")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Quantity must be a positive integer"),

      body("is_recurring")
        .optional()
        .isBoolean()
        .withMessage("Is recurring must be a boolean"),

      body("recurring_pattern")
        .optional()
        .isIn(Object.values(RecurringPattern))
        .withMessage("Invalid recurring pattern"),
    ];

    return this.runValidation(validations);
  }

  // Validate create payment request
  get validateCreatePayment(): RequestHandler {
    const validations = [
      body("invoice_id").isInt().withMessage("Invoice ID must be an integer"),

      body("amount")
        .isFloat({ min: 0.01 })
        .withMessage("Amount must be a positive number"),

      body("payment_date")
        .isISO8601()
        .withMessage("Payment date must be a valid date"),

      body("payment_method")
        .isIn(Object.values(PaymentMethod))
        .withMessage("Invalid payment method"),
    ];

    return this.runValidation(validations);
  }

  // Validate create recurring invoice request
  get validateCreateRecurringInvoice(): RequestHandler {
    const validations = [
      body("client_id").isInt().withMessage("Client ID must be an integer"),

      body("pattern")
        .isIn(Object.values(RecurringPattern))
        .withMessage("Invalid recurring pattern"),

      body("next_invoice_date")
        .isISO8601()
        .withMessage("Next invoice date must be a valid date"),

      body("items")
        .isArray({ min: 1 })
        .withMessage("At least one item is required"),

      body("items.*.product_id")
        .isInt()
        .withMessage("Product ID must be an integer"),

      body("items.*.quantity")
        .isInt({ min: 1 })
        .withMessage("Quantity must be a positive integer"),

      body("source_invoice_id")
        .optional()
        .isInt()
        .withMessage("Source invoice ID must be an integer"),
    ];

    return this.runValidation(validations);
  }

  // Validate update recurring invoice request
  get validateUpdateRecurringInvoice(): RequestHandler {
    const validations = [
      body("pattern")
        .optional()
        .isIn(Object.values(RecurringPattern))
        .withMessage("Invalid recurring pattern"),

      body("next_invoice_date")
        .optional()
        .isISO8601()
        .withMessage("Next invoice date must be a valid date"),

      body("is_active")
        .optional()
        .isBoolean()
        .withMessage("Is active must be a boolean"),

      body("items").optional().isArray().withMessage("Items must be an array"),

      body("items.*.product_id")
        .optional()
        .isInt()
        .withMessage("Product ID must be an integer"),

      body("items.*.quantity")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Quantity must be a positive integer"),
    ];

    return this.runValidation(validations);
  }
}
