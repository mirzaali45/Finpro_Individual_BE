import { PrismaClient, Product } from "../../prisma/generated/client";
import { CloudinaryService } from "./cloudinary";
import {
  CreateProductDto,
  UpdateProductDto,
  MulterFile,
} from "../types/productsTypes";

export class ProductService {
  private prisma: PrismaClient;
  private cloudinaryService: CloudinaryService;

  constructor() {
    this.prisma = new PrismaClient();
    this.cloudinaryService = new CloudinaryService();
  }

  /**
   * Get all products for a user with optional filter for archived products
   */
  async getAllProducts(
    userId: number,
    includeDeleted: boolean = false
  ): Promise<Product[]> {
    // Build filter based on query params
    const filter: any = {
      user_id: userId,
    };

    // Only include non-deleted products unless explicitly requested
    if (!includeDeleted) {
      filter.deleted_at = null;
    }

    return this.prisma.product.findMany({
      where: filter,
      orderBy: {
        created_at: "desc",
      },
    });
  }

  /**
   * Get a single product by ID
   */
  async getProductById(
    productId: number,
    userId: number
  ): Promise<Product | null> {
    return this.prisma.product.findFirst({
      where: {
        product_id: productId,
        user_id: userId,
      },
    });
  }

  /**
   * Create a new product
   */
  async createProduct(
    productData: CreateProductDto,
    userId: number
  ): Promise<Product> {
    return this.prisma.product.create({
      data: {
        user_id: userId,
        name: productData.name,
        description: productData.description || null,
        price: productData.price,
        unit: productData.unit || null,
        tax_rate: productData.tax_rate || null,
        category: productData.category || null,
      },
    });
  }

  /**
   * Create a new product with image
   */
  async createProductWithImage(
    productData: CreateProductDto,
    userId: number,
    file?: Express.Multer.File
  ): Promise<Product> {
    // Handle image upload to Cloudinary
    let imageUrl = null;
    if (file) {
      imageUrl = await this.cloudinaryService.uploadProductImage(file, userId);
    }

    return this.prisma.product.create({
      data: {
        user_id: userId,
        name: productData.name,
        description: productData.description || null,
        price: productData.price,
        unit: productData.unit || null,
        tax_rate: productData.tax_rate || null,
        category: productData.category || null,
        image: imageUrl,
      },
    });
  }

  /**
   * Update a product
   */
  async updateProduct(
    productId: number,
    productData: UpdateProductDto
  ): Promise<Product> {
    return this.prisma.product.update({
      where: {
        product_id: productId,
      },
      data: {
        name: productData.name,
        description: productData.description || null,
        price: productData.price,
        unit: productData.unit || null,
        tax_rate: productData.tax_rate || null,
        category: productData.category || null,
        updated_at: new Date(),
      },
    });
  }

  /**
   * Update a product with image
   */
  async updateProductWithImage(
    productId: number,
    productData: UpdateProductDto,
    userId: number,
    currentImage: string | null,
    file?: Express.Multer.File,
    removeImage: boolean = false
  ): Promise<Product> {
    // Handle image update with Cloudinary
    let imageUrl = currentImage;

    // Remove existing image if requested or if new image is provided
    if (removeImage || file) {
      if (currentImage) {
        await this.cloudinaryService.deleteImage(currentImage);
      }
      imageUrl = null;
    }

    // Upload new image if provided
    if (file) {
      imageUrl = await this.cloudinaryService.uploadProductImage(file, userId);
    }

    return this.prisma.product.update({
      where: {
        product_id: productId,
      },
      data: {
        name: productData.name,
        description: productData.description || null,
        price: productData.price,
        unit: productData.unit || null,
        tax_rate: productData.tax_rate || null,
        category: productData.category || null,
        image: imageUrl,
        updated_at: new Date(),
      },
    });
  }

  /**
   * Check if a product is used in any invoices
   */
  async isProductUsedInInvoices(productId: number): Promise<boolean> {
    const invoiceItems = await this.prisma.invoiceItem.findMany({
      where: {
        product_id: productId,
      },
      take: 1, // We only need to check if any exist
    });

    return invoiceItems.length > 0;
  }

  /**
   * Get product usage in invoices
   * Returns a list of invoice items that contain the product
   */
  async getProductUsage(productId: number): Promise<any[]> {
    try {
      // Get all invoice items with this product
      const invoiceItems = await this.prisma.invoiceItem.findMany({
        where: {
          product_id: productId,
        },
        include: {
          invoice: {
            include: {
              client: {
                select: {
                  client_id: true,
                  name: true,
                },
              },
            },
          },
        },
        orderBy: {
          invoice: {
            issue_date: "desc",
          },
        },
      });

      // Format the results to match what the frontend expects
      return invoiceItems.map((item) => ({
        item_id: item.item_id,
        invoice_id: item.invoice_id,
        product_id: item.product_id,
        description: item.description,
        quantity: item.quantity,
        unit_price: item.unit_price,
        amount: item.amount,
        invoice: item.invoice
          ? {
              invoice_id: item.invoice.invoice_id,
              invoice_number: item.invoice.invoice_number,
              status: item.invoice.status,
              client: item.invoice.client
                ? {
                    client_id: item.invoice.client.client_id,
                    name: item.invoice.client.name,
                  }
                : null,
            }
          : null,
      }));
    } catch (error) {
      console.error("Error getting product usage:", error);
      throw error;
    }
  }

  /**
   * Delete a product (hard delete)
   */
  async deleteProduct(productId: number): Promise<void> {
    // Get product to check for image
    const product = await this.prisma.product.findUnique({
      where: {
        product_id: productId,
      },
    });

    // Delete product image from Cloudinary if exists
    if (product?.image) {
      await this.cloudinaryService.deleteImage(product.image);
    }

    // Delete the product
    await this.prisma.product.delete({
      where: {
        product_id: productId,
      },
    });
  }

  /**
   * Archive a product (soft delete)
   */
  async archiveProduct(productId: number): Promise<Product> {
    return this.prisma.product.update({
      where: {
        product_id: productId,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }

  /**
   * Restore an archived product
   */
  async restoreProduct(productId: number): Promise<Product> {
    return this.prisma.product.update({
      where: {
        product_id: productId,
      },
      data: {
        deleted_at: null,
      },
    });
  }

  /**
   * Search products by name or description
   */
  // Di ProductService.ts, revisi searchProducts
  async searchProducts(
    searchTerm: string,
    userId: number,
    includeDeleted: boolean = false
  ): Promise<Product[]> {
    const filter: any = {
      user_id: userId,
      OR: [
        {
          name: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    };

    // Hanya filter berdasarkan deleted_at jika includeDeleted adalah false
    if (!includeDeleted) {
      filter.deleted_at = null;
    }

    return this.prisma.product.findMany({
      where: filter,
      orderBy: {
        created_at: "desc",
      },
    });
  }

  // Revisi juga untuk getProductsByCategory
  async getProductsByCategory(
    category: string,
    userId: number,
    includeDeleted: boolean = false
  ): Promise<Product[]> {
    const filter: any = {
      user_id: userId,
      category: category,
    };

    // Hanya filter berdasarkan deleted_at jika includeDeleted adalah false
    if (!includeDeleted) {
      filter.deleted_at = null;
    }

    return this.prisma.product.findMany({
      where: filter,
      orderBy: {
        created_at: "desc",
      },
    });
  }
}
