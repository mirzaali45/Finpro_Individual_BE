"use strict";
// //config/multer.ts
// import multer from 'multer';
// import { Request } from 'express';
// import { AppError } from '../utils/errorHandler';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // Multer configuration for memory storage (for Cloudinary upload)
// const storage = multer.memoryStorage();
// // Define allowed file types
// const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
//   // Accept only image files
//   if (file.mimetype.startsWith('image/')) {
//     // Allow the file
//     return cb(null, true);
//   }
//   // Reject file with error
//   cb(new AppError('Only image files are allowed!', 400));
// };
// // Configure multer
// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 2 * 1024 * 1024, // 2MB max file size
//   },
//   fileFilter,
// });
// export default upload;
//config/multer.ts
const multer_1 = __importDefault(require("multer"));
const errorHandler_1 = require("../utils/errorHandler");
// Multer configuration for memory storage (for Cloudinary/Supabase upload)
const storage = multer_1.default.memoryStorage();
// Define allowed file types
const fileFilter = (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith("image/")) {
        return cb(null, true);
    }
    // Reject file with error
    cb(new errorHandler_1.AppError("Only image files are allowed!", 400));
};
// Configure multer
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB max file size
        fieldSize: 10 * 1024 * 1024, // 10MB max field size (INI YANG PENTING!)
        fieldNameSize: 255, // Max 255 chars for field name
        fields: 20, // Max 20 non-file fields
        files: 10, // Max 10 files
    },
    fileFilter,
});
exports.default = upload;
