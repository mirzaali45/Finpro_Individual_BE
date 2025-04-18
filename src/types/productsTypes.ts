// Define Multer file type explicitly
export interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination?: string;
  filename?: string;
  path?: string;
  buffer: Buffer;
}

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  unit?: string;
  tax_rate?: number;
  category?: string;
}

// Product update DTO
export interface UpdateProductDto extends CreateProductDto {
  removeImage?: boolean;
}

// Error response structure
export interface ErrorResponse {
  message: string;
  statusCode: number;
  errors?: any[];
}

// Authentication payload for JWT
export interface AuthPayload {
  userId: number;
  email: string;
  role: string;
}

// Cloudinary upload result
export interface CloudinaryUploadResult {
  public_id: string;
  version: number;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  type: string;
  url: string;
  secure_url: string;
}
