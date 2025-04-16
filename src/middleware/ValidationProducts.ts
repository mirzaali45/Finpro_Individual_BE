import { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';

export class ValidationMiddleware {
  /**
   * Validate product creation/update data
   */
   validateProduct = [
    // Name validation
    body('name')
      .notEmpty().withMessage('Product name is required')
      .isLength({ max: 100 }).withMessage('Product name cannot exceed 100 characters'),
      
    // Price validation
    body('price')
      .notEmpty().withMessage('Price is required')
      .isFloat({ min: 0 }).withMessage('Price must be a positive number'),
      
    // Tax rate validation (optional)
    body('tax_rate')
      .optional()
      .isFloat({ min: 0, max: 100 }).withMessage('Tax rate must be between 0 and 100'),
      
    // Unit validation (optional)
    body('unit')
      .optional()
      .isLength({ max: 20 }).withMessage('Unit cannot exceed 20 characters'),
      
    // Category validation (optional)
    body('category')
      .optional()
      .isLength({ max: 50 }).withMessage('Category cannot exceed 50 characters'),
      
    // Description validation (optional)
    body('description')
      .optional()
      .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
      
    // Handle validation errors
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
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
  public validateProductId = [
    param('id')
      .isInt({ min: 1 }).withMessage('Invalid product ID'),
      
    // Handle validation errors
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
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
  public validateSearchQuery = [
    query('q')
      .notEmpty().withMessage('Search query is required')
      .isLength({ min: 1 }).withMessage('Search query must not be empty'),
      
    // Handle validation errors
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
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
  public validateCategory = [
    param('category')
      .notEmpty().withMessage('Category parameter is required')
      .isLength({ max: 50 }).withMessage('Category parameter is too long'),
      
    // Handle validation errors
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
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