// import { v2 as cloudinary } from "cloudinary";
// import streamifier from "streamifier";
// import { CloudinaryUploadResult, MulterFile } from "../types/productsTypes";

// export class CloudinaryService {
//   constructor() {
//     // Initialize Cloudinary with environment variables
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
//       api_key: process.env.CLOUDINARY_API_KEY || "",
//       api_secret: process.env.CLOUDINARY_API_SECRET || "",
//       secure: true,
//     });
//   }

//   /**
//    * Upload image to Cloudinary
//    * @param file - The image file to upload
//    * @param folder - The folder to upload to (e.g., 'products')
//    * @param publicId - Optional custom public ID
//    * @returns The upload result containing URL and other details
//    */
//   public async uploadImage(
//     file: MulterFile,
//     folder: string,
//     publicId?: string
//   ): Promise<CloudinaryUploadResult> {
//     return new Promise((resolve, reject) => {
//       // Create upload stream
//       const uploadStream = cloudinary.uploader.upload_stream(
//         {
//           folder: folder,
//           public_id: publicId,
//           resource_type: "image",
//           format: this.getFileExtension(file.originalname),
//           overwrite: true,
//           transformation: [
//             { quality: "auto" }, // Auto-optimize quality
//             { fetch_format: "auto" }, // Auto-select best format
//           ],
//         },
//         (error, result) => {
//           if (error || !result)
//             return reject(error || new Error("Upload failed"));
//           resolve(result as CloudinaryUploadResult);
//         }
//       );

//       // Convert buffer to stream
//       streamifier.createReadStream(file.buffer).pipe(uploadStream);
//     });
//   }

//   /**
//    * Upload product image
//    * @param file - The image file to upload
//    * @param userId - User ID for organizing images
//    * @returns The secure URL of the uploaded image
//    */
//   public async uploadProductImage(
//     file: MulterFile,
//     userId: number
//   ): Promise<string> {
//     try {
//       // Validate image before uploading
//       this.validateImage(file);

//       // Generate folder path
//       const folder = `products/${userId}`;

//       // Upload to Cloudinary
//       const result = await this.uploadImage(file, folder);

//       // Return the secure URL
//       return result.secure_url;
//     } catch (error) {
//       console.error("Error uploading product image to Cloudinary:", error);
//       throw error;
//     }
//   }

//   /**
//    * Delete image from Cloudinary
//    * @param imageUrl - The URL of the image to delete
//    * @returns The deletion result
//    */
//   public async deleteImage(imageUrl: string): Promise<any> {
//     try {
//       // Extract public ID from URL
//       const publicId = this.getPublicIdFromUrl(imageUrl);

//       if (!publicId) {
//         throw new Error("Invalid Cloudinary URL");
//       }

//       // Delete from Cloudinary
//       return await cloudinary.uploader.destroy(publicId);
//     } catch (error) {
//       console.error("Error deleting image from Cloudinary:", error);
//       throw error;
//     }
//   }

//   /**
//    * Extract public ID from Cloudinary URL
//    * @param url - The Cloudinary URL
//    * @returns The public ID
//    */
//   private getPublicIdFromUrl(url: string): string | null {
//     try {
//       // Extract from URL like https://res.cloudinary.com/cloud-name/image/upload/folder/public_id.ext
//       const urlParts = new URL(url);
//       const pathParts = urlParts.pathname.split("/");

//       // Remove 'image/upload' and get the rest as public ID
//       const uploadIndex = pathParts.indexOf("upload");
//       if (uploadIndex === -1) return null;

//       const publicIdWithExt = pathParts.slice(uploadIndex + 1).join("/");

//       // Remove file extension
//       return publicIdWithExt.split(".")[0];
//     } catch (error) {
//       console.error("Error extracting public ID from URL:", error);
//       return null;
//     }
//   }

//   /**
//    * Get file extension from filename
//    * @param filename - The filename
//    * @returns The file extension
//    */
//   private getFileExtension(filename: string): string {
//     return filename.split(".").pop()?.toLowerCase() || "jpg";
//   }

//   /**
//    * Validate image file
//    * @param file - The file to validate
//    * @returns True if valid
//    */
//   private validateImage(file: MulterFile): boolean {
//     // Define allowed types and max size
//     const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
//     const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

//     // Check file exists
//     if (!file) {
//       throw new Error("No file uploaded");
//     }

//     // Check file type
//     if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
//       throw new Error("Invalid file type. Only JPG, PNG, and WebP are allowed");
//     }

//     // Check file size
//     if (file.size > MAX_FILE_SIZE) {
//       throw new Error("File size exceeds 2MB limit");
//     }

//     return true;
//   }
// }
// src/services/cloudinary.service.ts

import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import {
  initializeCloudinary,
  getPublicIdFromUrl,
  transformations,
} from "../config/cloudinary";

// Initialize Cloudinary from config
initializeCloudinary();

export class CloudinaryService {
  /**
   * Upload image file to Cloudinary
   * @param file - The image file to upload
   * @param folder - The folder to upload to
   * @param publicId - Optional custom public ID
   * @returns The upload result containing URL and other details
   */
  public async uploadImage(
    file: Express.Multer.File,
    folder: string,
    publicId?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      // Create upload stream
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folder,
          public_id: publicId,
          resource_type: "image",
          format: this.getFileExtension(file.originalname),
          overwrite: true,
          transformation: [
            { quality: "auto" }, // Auto-optimize quality
            { fetch_format: "auto" }, // Auto-select best format
          ],
        },
        (error, result) => {
          if (error || !result)
            return reject(error || new Error("Upload failed"));
          resolve(result);
        }
      );

      // Convert buffer to stream
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  /**
   * Upload base64 image to Cloudinary
   * @param base64String - Base64 encoded image string
   * @param folder - The folder to upload to
   * @returns The secure URL of the uploaded image
   */
  public async uploadBase64Image(
    base64String: string,
    folder: string
  ): Promise<string> {
    try {
      if (!base64String) return "";

      // Remove data URI prefix if present
      const base64Image = base64String.includes("base64,")
        ? base64String.split("base64,")[1]
        : base64String;

      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${base64Image}`,
        {
          folder,
          resource_type: "image",
          overwrite: true,
        }
      );

      return result.secure_url;
    } catch (error) {
      console.error("Error uploading base64 image to Cloudinary:", error);
      throw error;
    }
  }

  /**
   * Upload product image
   * @param file - The image file to upload
   * @param userId - User ID for organizing images
   * @returns The secure URL of the uploaded image
   */
  public async uploadProductImage(
    file: Express.Multer.File,
    userId: number
  ): Promise<string> {
    try {
      // Validate image before uploading
      this.validateImage(file);

      // Generate folder path
      const folder = `products/${userId}`;

      // Upload to Cloudinary
      const result = await this.uploadImage(file, folder);

      // Return the secure URL
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading product image:", error);
      throw error;
    }
  }

  /**
   * Upload user avatar
   * @param file - The image file to upload or base64 string
   * @param userId - User ID for organizing images
   * @returns The secure URL of the uploaded image
   */
  public async uploadUserAvatar(
    file: Express.Multer.File | string,
    userId: number
  ): Promise<string> {
    try {
      const folder = `users/${userId}/avatars`;

      if (typeof file === "string") {
        // Handle base64 string
        if (file.startsWith("data:")) {
          return await this.uploadBase64Image(file, folder);
        }
        return file; // Return as is if it's just a URL
      } else {
        // Handle file upload
        this.validateImage(file);
        const result = await this.uploadImage(file, folder);
        return result.secure_url;
      }
    } catch (error) {
      console.error("Error uploading user avatar:", error);
      throw error;
    }
  }

  /**
   * Upload company logo
   * @param file - The image file to upload or base64 string
   * @param userId - User ID for organizing images
   * @returns The secure URL of the uploaded image
   */
  public async uploadCompanyLogo(
    file: Express.Multer.File | string,
    userId: number
  ): Promise<string> {
    try {
      const folder = `users/${userId}/company`;

      if (typeof file === "string") {
        // Handle base64 string
        if (file.startsWith("data:")) {
          return await this.uploadBase64Image(file, folder);
        }
        return file; // Return as is if it's just a URL
      } else {
        // Handle file upload
        this.validateImage(file);
        const result = await this.uploadImage(file, folder);
        return result.secure_url;
      }
    } catch (error) {
      console.error("Error uploading company logo:", error);
      throw error;
    }
  }

  /**
   * Delete image from Cloudinary
   * @param imageUrl - The URL of the image to delete
   * @returns True if deletion was successful
   */
  public async deleteImage(imageUrl: string): Promise<boolean> {
    try {
      if (!imageUrl || !imageUrl.includes("cloudinary")) return true;

      // Extract public ID from URL
      const publicId = getPublicIdFromUrl(imageUrl);

      if (!publicId) {
        throw new Error("Invalid Cloudinary URL");
      }

      // Delete from Cloudinary
      await cloudinary.uploader.destroy(publicId);
      return true;
    } catch (error) {
      console.error("Error deleting image:", error);
      return false;
    }
  }

  /**
   * Get transformed URL for an image
   * @param url - Original image URL
   * @param transformation - Name of the transformation to apply
   * @returns Transformed image URL
   */
  public getTransformedUrl(url: string, transformation: string): string | null {
    if (!url) return null;

    if (!transformations[transformation as keyof typeof transformations]) {
      return url;
    }

    // Extract public ID
    const publicId = getPublicIdFromUrl(url);
    if (!publicId) return url;

    // Create transformed URL
    return cloudinary.url(publicId, {
      transformation:
        transformations[transformation as keyof typeof transformations],
    });
  }

  /**
   * Get file extension from filename
   * @param filename - The filename
   * @returns The file extension
   */
  private getFileExtension(filename: string): string {
    return filename.split(".").pop()?.toLowerCase() || "jpg";
  }

  /**
   * Validate image file
   * @param file - The file to validate
   * @returns True if valid
   */
  private validateImage(file: Express.Multer.File): boolean {
    // Define allowed types and max size
    const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

    // Check file exists
    if (!file) {
      throw new Error("No file uploaded");
    }

    // Check file type
    if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      throw new Error("Invalid file type. Only JPG, PNG, and WebP are allowed");
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      throw new Error("File size exceeds 2MB limit");
    }

    return true;
  }
}

// Export singleton instance
export const cloudinaryService = new CloudinaryService();
