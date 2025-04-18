//config/multer.ts
import multer from 'multer';
import { Request } from 'express';
import { AppError } from '../utils/errorHandler';

// Multer configuration for memory storage (for Cloudinary upload)
const storage = multer.memoryStorage();

// Define allowed file types
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    // Allow the file
    return cb(null, true);
  }
  
  // Reject file with error
  cb(new AppError('Only image files are allowed!', 400));
};

// Configure multer
const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB max file size
  },
  fileFilter,
});

export default upload;