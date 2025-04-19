"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = void 0;
const responseError = (res, error) => {
    console.error("Error:", error);
    if (error instanceof Error) {
        return res.status(400).json({
            status: "Error",
            message: error.message,
        });
    }
    return res.status(400).json({
        status: "Error",
        message: error,
    });
};
exports.responseError = responseError;
