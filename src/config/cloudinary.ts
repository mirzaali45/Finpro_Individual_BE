// // congig/cloudinary
// import { v2 as cloudinary } from "cloudinary";

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
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Initialize Cloudinary
export const initializeCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
    secure: true,
  });
};

// Define transformations
export const transformations = {
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
export const getTransformedUrl = (url: string, transformation: string) => {
  if (!url) return null;

  if (!transformations[transformation as keyof typeof transformations]) {
    return url;
  }

  // Extract public ID from URL
  const publicId = getPublicIdFromUrl(url);
  if (!publicId) return url;

  // Create URL with transformation
  return cloudinary.url(publicId, {
    transformation:
      transformations[transformation as keyof typeof transformations],
  });
};

// Extract public ID from URL
export const getPublicIdFromUrl = (url: string): string | null => {
  try {
    const urlParts = new URL(url);
    const pathParts = urlParts.pathname.split("/");

    const uploadIndex = pathParts.indexOf("upload");
    if (uploadIndex === -1) return null;

    const publicIdWithExt = pathParts.slice(uploadIndex + 1).join("/");
    return publicIdWithExt.split(".")[0];
  } catch (error) {
    console.error("Error extracting public ID from URL:", error);
    return null;
  }
};

// Upload image from file
export const uploadFile = (
  file: Express.Multer.File,
  folder: string,
  publicId?: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        resource_type: "image",
        overwrite: true,
        transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
      },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Upload failed"));
        }
        resolve(result);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};

// Upload base64 image
export const uploadBase64Image = async (
  base64String: string,
  folder: string
): Promise<string> => {
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
    console.error("Error uploading base64 image:", error);
    throw error;
  }
};

// Delete image
export const deleteImage = async (imageUrl: string): Promise<boolean> => {
  try {
    if (!imageUrl || !imageUrl.includes("cloudinary")) return true;

    const publicId = getPublicIdFromUrl(imageUrl);
    if (!publicId) return false;

    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};
