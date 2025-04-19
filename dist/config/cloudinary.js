"use strict";
// // congig/cloudinary
// import { v2 as cloudinary } from "cloudinary";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.uploadBase64Image = exports.uploadFile = exports.getPublicIdFromUrl = exports.getTransformedUrl = exports.transformations = exports.initializeCloudinary = void 0;
// // Konfigurasi dasar Cloudinary
// export const initializeCloudinary = () => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
//     api_key: process.env.CLOUDINARY_API_KEY || "",
//     api_secret: process.env.CLOUDINARY_API_SECRET || "",
//     secure: true,
//   });
// };
// // Jenis transformasi gambar yang umum digunakan
// export const transformations = {
//   // Thumbnail untuk daftar produk
//   productThumbnail: {
//     width: 300,
//     height: 300,
//     crop: "fill",
//     gravity: "auto",
//     quality: "auto",
//     format: "auto",
//   },
//   // Gambar detail produk
//   productDetail: {
//     width: 800,
//     height: 800,
//     crop: "limit",
//     quality: "auto",
//     format: "auto",
//   },
//   // Gambar untuk invoice PDF
//   invoiceImage: {
//     width: 200,
//     height: 200,
//     crop: "fit",
//     quality: "auto",
//     format: "auto",
//   },
// };
// // Helper untuk mendapatkan URL dengan transformasi tertentu
// export const getTransformedUrl = (url: string, transformation: string) => {
//   if (!url) return null;
//   if (!transformations[transformation as keyof typeof transformations]) {
//     return url;
//   }
//   // Ekstrak public ID dari URL
//   const publicId = getPublicIdFromUrl(url);
//   if (!publicId) return url;
//   // Buat URL dengan transformasi
//   return cloudinary.url(publicId, {
//     transformation:
//       transformations[transformation as keyof typeof transformations],
//   });
// };
// // Ekstrak public ID dari URL
// const getPublicIdFromUrl = (url: string): string | null => {
//   try {
//     const urlParts = new URL(url);
//     const pathParts = urlParts.pathname.split("/");
//     const uploadIndex = pathParts.indexOf("upload");
//     if (uploadIndex === -1) return null;
//     const publicIdWithExt = pathParts.slice(uploadIndex + 1).join("/");
//     return publicIdWithExt.split(".")[0];
//   } catch (error) {
//     console.error("Error extracting public ID from URL:", error);
//     return null;
//   }
// };
// src/config/cloudinary.ts
const cloudinary_1 = require("cloudinary");
const streamifier_1 = __importDefault(require("streamifier"));
// Initialize Cloudinary
const initializeCloudinary = () => {
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
        api_key: process.env.CLOUDINARY_API_KEY || "",
        api_secret: process.env.CLOUDINARY_API_SECRET || "",
        secure: true,
    });
};
exports.initializeCloudinary = initializeCloudinary;
// Define transformations
exports.transformations = {
    // Thumbnail for product listings
    productThumbnail: {
        width: 300,
        height: 300,
        crop: "fill",
        gravity: "auto",
        quality: "auto",
        format: "auto",
    },
    // Detailed product image
    productDetail: {
        width: 800,
        height: 800,
        crop: "limit",
        quality: "auto",
        format: "auto",
    },
    // Image for invoice PDF
    invoiceImage: {
        width: 200,
        height: 200,
        crop: "fit",
        quality: "auto",
        format: "auto",
    },
    // User avatar
    userAvatar: {
        width: 250,
        height: 250,
        crop: "fill",
        gravity: "face",
        quality: "auto",
        format: "auto",
    },
    // Company logo
    companyLogo: {
        width: 400,
        height: 400,
        crop: "fit",
        quality: "auto",
        format: "auto",
    },
};
// Get transformed URL helper
const getTransformedUrl = (url, transformation) => {
    if (!url)
        return null;
    if (!exports.transformations[transformation]) {
        return url;
    }
    // Extract public ID from URL
    const publicId = (0, exports.getPublicIdFromUrl)(url);
    if (!publicId)
        return url;
    // Create URL with transformation
    return cloudinary_1.v2.url(publicId, {
        transformation: exports.transformations[transformation],
    });
};
exports.getTransformedUrl = getTransformedUrl;
// Extract public ID from URL
const getPublicIdFromUrl = (url) => {
    try {
        const urlParts = new URL(url);
        const pathParts = urlParts.pathname.split("/");
        const uploadIndex = pathParts.indexOf("upload");
        if (uploadIndex === -1)
            return null;
        const publicIdWithExt = pathParts.slice(uploadIndex + 1).join("/");
        return publicIdWithExt.split(".")[0];
    }
    catch (error) {
        console.error("Error extracting public ID from URL:", error);
        return null;
    }
};
exports.getPublicIdFromUrl = getPublicIdFromUrl;
// Upload image from file
const uploadFile = (file, folder, publicId) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary_1.v2.uploader.upload_stream({
            folder,
            public_id: publicId,
            resource_type: "image",
            overwrite: true,
            transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
        }, (error, result) => {
            if (error || !result) {
                return reject(error || new Error("Upload failed"));
            }
            resolve(result);
        });
        streamifier_1.default.createReadStream(file.buffer).pipe(uploadStream);
    });
};
exports.uploadFile = uploadFile;
// Upload base64 image
const uploadBase64Image = (base64String, folder) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!base64String)
            return "";
        // Remove data URI prefix if present
        const base64Image = base64String.includes("base64,")
            ? base64String.split("base64,")[1]
            : base64String;
        const result = yield cloudinary_1.v2.uploader.upload(`data:image/png;base64,${base64Image}`, {
            folder,
            resource_type: "image",
            overwrite: true,
        });
        return result.secure_url;
    }
    catch (error) {
        console.error("Error uploading base64 image:", error);
        throw error;
    }
});
exports.uploadBase64Image = uploadBase64Image;
// Delete image
const deleteImage = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!imageUrl || !imageUrl.includes("cloudinary"))
            return true;
        const publicId = (0, exports.getPublicIdFromUrl)(imageUrl);
        if (!publicId)
            return false;
        yield cloudinary_1.v2.uploader.destroy(publicId);
        return true;
    }
    catch (error) {
        console.error("Error deleting image:", error);
        return false;
    }
});
exports.deleteImage = deleteImage;
