"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const client_1 = require("../../prisma/generated/client");
const cloudinary_1 = require("./cloudinary");
class ProductService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
        this.cloudinaryService = new cloudinary_1.CloudinaryService();
    }
    /**
     * Get all products for a user with optional filter for archived products
     */
    getAllProducts(userId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, includeDeleted = false) {
            // Build filter based on query params
            const filter = {
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
        });
    }
    /**
     * Get a single product by ID
     */
    getProductById(productId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.product.findFirst({
                where: {
                    product_id: productId,
                    user_id: userId,
                },
            });
        });
    }
    /**
     * Create a new product
     */
    createProduct(productData, userId) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Create a new product with image
     */
    createProductWithImage(productData, userId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            // Handle image upload to Cloudinary
            let imageUrl = null;
            if (file) {
                imageUrl = yield this.cloudinaryService.uploadProductImage(file, userId);
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
        });
    }
    /**
     * Update a product
     */
    updateProduct(productId, productData) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Update a product with image
     */
    updateProductWithImage(productId_1, productData_1, userId_1, currentImage_1, file_1) {
        return __awaiter(this, arguments, void 0, function* (productId, productData, userId, currentImage, file, removeImage = false) {
            // Handle image update with Cloudinary
            let imageUrl = currentImage;
            // Remove existing image if requested or if new image is provided
            if (removeImage || file) {
                if (currentImage) {
                    yield this.cloudinaryService.deleteImage(currentImage);
                }
                imageUrl = null;
            }
            // Upload new image if provided
            if (file) {
                imageUrl = yield this.cloudinaryService.uploadProductImage(file, userId);
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
        });
    }
    /**
     * Check if a product is used in any invoices
     */
    isProductUsedInInvoices(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const invoiceItems = yield this.prisma.invoiceItem.findMany({
                where: {
                    product_id: productId,
                },
                take: 1, // We only need to check if any exist
            });
            return invoiceItems.length > 0;
        });
    }
    /**
     * Get product usage in invoices
     * Returns a list of invoice items that contain the product
     */
    getProductUsage(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get all invoice items with this product
                const invoiceItems = yield this.prisma.invoiceItem.findMany({
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
            }
            catch (error) {
                console.error("Error getting product usage:", error);
                throw error;
            }
        });
    }
    /**
     * Delete a product (hard delete)
     */
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get product to check for image
            const product = yield this.prisma.product.findUnique({
                where: {
                    product_id: productId,
                },
            });
            // Delete product image from Cloudinary if exists
            if (product === null || product === void 0 ? void 0 : product.image) {
                yield this.cloudinaryService.deleteImage(product.image);
            }
            // Delete the product
            yield this.prisma.product.delete({
                where: {
                    product_id: productId,
                },
            });
        });
    }
    /**
     * Archive a product (soft delete)
     */
    archiveProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.product.update({
                where: {
                    product_id: productId,
                },
                data: {
                    deleted_at: new Date(),
                },
            });
        });
    }
    /**
     * Restore an archived product
     */
    restoreProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.product.update({
                where: {
                    product_id: productId,
                },
                data: {
                    deleted_at: null,
                },
            });
        });
    }
    /**
     * Search products by name or description
     */
    searchProducts(searchTerm, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.product.findMany({
                where: {
                    user_id: userId,
                    deleted_at: null, // Only search active products
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
                },
                orderBy: {
                    created_at: "desc",
                },
            });
        });
    }
    /**
     * Get products by category
     */
    getProductsByCategory(category, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.product.findMany({
                where: {
                    user_id: userId,
                    deleted_at: null, // Only get active products
                    category: category,
                },
                orderBy: {
                    created_at: "desc",
                },
            });
        });
    }
}
exports.ProductService = ProductService;
