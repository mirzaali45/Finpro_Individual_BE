"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMiddleware = void 0;
const express_validator_1 = require("express-validator");
class ValidationMiddleware {
    constructor() {
        /**
         * Validate product creation/update data
         */
        this.validateProduct = [
            // Name validation
            (0, express_validator_1.body)('name')
                .notEmpty().withMessage('Product name is required')
                .isLength({ max: 100 }).withMessage('Product name cannot exceed 100 characters'),
            // Price validation
            (0, express_validator_1.body)('price')
                .notEmpty().withMessage('Price is required')
                .isFloat({ min: 0 }).withMessage('Price must be a positive number'),
            // Tax rate validation (optional)
            (0, express_validator_1.body)('tax_rate')
                .optional()
                .isFloat({ min: 0, max: 100 }).withMessage('Tax rate must be between 0 and 100'),
            // Unit validation (optional)
            (0, express_validator_1.body)('unit')
                .optional()
                .isLength({ max: 20 }).withMessage('Unit cannot exceed 20 characters'),
            // Category validation (optional)
            (0, express_validator_1.body)('category')
                .optional()
                .isLength({ max: 50 }).withMessage('Category cannot exceed 50 characters'),
            // Description validation (optional)
            (0, express_validator_1.body)('description')
                .optional()
                .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
            // Handle validation errors
            (req, res, next) => {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        message: 'Validation failed',
                        errors: errors.array()
                    });
                }
                next();
            }
        ];
        /**
         * Validate product ID parameter
         */
        this.validateProductId = [
            (0, express_validator_1.param)('id')
                .isInt({ min: 1 }).withMessage('Invalid product ID'),
            // Handle validation errors
            (req, res, next) => {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        message: 'Invalid product ID',
                        errors: errors.array()
                    });
                }
                next();
            }
        ];
        /**
         * Validate search query
         */
        this.validateSearchQuery = [
            (0, express_validator_1.query)('q')
                .notEmpty().withMessage('Search query is required')
                .isLength({ min: 1 }).withMessage('Search query must not be empty'),
            // Handle validation errors
            (req, res, next) => {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        message: 'Invalid search query',
                        errors: errors.array()
                    });
                }
                next();
            }
        ];
        /**
         * Validate category parameter
         */
        this.validateCategory = [
            (0, express_validator_1.param)('category')
                .notEmpty().withMessage('Category parameter is required')
                .isLength({ max: 50 }).withMessage('Category parameter is too long'),
            // Handle validation errors
            (req, res, next) => {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        message: 'Invalid category parameter',
                        errors: errors.array()
                    });
                }
                next();
            }
        ];
    }
}
exports.ValidationMiddleware = ValidationMiddleware;
