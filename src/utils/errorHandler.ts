import { ErrorResponse } from "../types/productsTypes";

/**
 * Custom error class with status code
 */
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Async error handler wrapper to avoid try/catch repetition
 * @param fn Function to wrap
 * @returns Wrapped function that catches errors
 */
export const asyncHandler = <T>(
  fn: (req: any, res: any, next: any) => Promise<T>
) => {
  return (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Create a standardized error response
 * @param message Error message
 * @param statusCode HTTP status code
 * @param errors Additional error details
 * @returns Error response object
 */
export const createErrorResponse = (
  message: string,
  statusCode: number = 500,
  errors?: any
): ErrorResponse => {
  return {
    message,
    statusCode,
    errors,
  };
};
