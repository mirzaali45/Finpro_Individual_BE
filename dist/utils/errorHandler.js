"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorResponse = exports.asyncHandler = exports.AppError = void 0;
/**
 * Custom error class with status code
 */
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        // Capture stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
/**
 * Async error handler wrapper to avoid try/catch repetition
 * @param fn Function to wrap
 * @returns Wrapped function that catches errors
 */
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
/**
 * Create a standardized error response
 * @param message Error message
 * @param statusCode HTTP status code
 * @param errors Additional error details
 * @returns Error response object
 */
const createErrorResponse = (message, statusCode = 500, errors) => {
    return {
        message,
        statusCode,
        errors,
    };
};
exports.createErrorResponse = createErrorResponse;
