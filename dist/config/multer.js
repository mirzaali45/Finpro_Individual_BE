"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//config/multer.ts
const multer_1 = __importDefault(require("multer"));
const errorHandler_1 = require("../utils/errorHandler");
// Multer configuration for memory storage (for Cloudinary upload)
const storage = multer_1.default.memoryStorage();
// Define allowed file types
const fileFilter = (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
        // Allow the file
        return cb(null, true);
    }
    // Reject file with error
    cb(new errorHandler_1.AppError('Only image files are allowed!', 400));
};
// Configure multer
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB max file size
    },
    fileFilter,
});
exports.default = upload;
