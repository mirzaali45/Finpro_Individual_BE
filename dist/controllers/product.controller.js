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
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
class ProductController {
    constructor() {
        /**
         * Get all products (with optional filter for archived products)
         */
        this.getAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { includeDeleted = false } = req.query;
                const userId = req.user.user_id;
                const products = yield this.productService.getAllProducts(userId, includeDeleted === "true");
                // Return in the format the frontend expects
                res.status(200).json({
                    products: products,
                });
            }
            catch (error) {
                console.error("Error fetching products:", error);
                res.status(500).json({ message: "Failed to fetch products", error });
            }
        });
        /**
         * Get a single product by ID
         */
        this.getProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userId = req.user.user_id;
                const product = yield this.productService.getProductById(Number(id), userId);
                if (!product) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Return in the format the frontend expects
                res.status(200).json({
                    product: product,
                });
            }
            catch (error) {
                console.error("Error fetching product:", error);
                res.status(500).json({ message: "Failed to fetch product", error });
            }
        });
        /**
         * Create a new product
         */
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.user.user_id;
                const productData = {
                    name: req.body.name,
                    description: req.body.description,
                    price: parseFloat(req.body.price),
                    unit: req.body.unit,
                    tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
                    category: req.body.category,
                };
                // Create product in database
                const newProduct = yield this.productService.createProduct(productData, userId);
                res.status(201).json(newProduct);
            }
            catch (error) {
                console.error("Error creating product:", error);
                res.status(500).json({ message: "Failed to create product", error });
            }
        });
        /**
         * Create a new product with image
         */
        this.createProductWithImage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.user.user_id;
                const productData = {
                    name: req.body.name,
                    description: req.body.description,
                    price: parseFloat(req.body.price),
                    unit: req.body.unit,
                    tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
                    category: req.body.category,
                };
                // Create product with image - use the file directly from req.file
                const newProduct = yield this.productService.createProductWithImage(productData, userId, req.file);
                res.status(201).json(newProduct);
            }
            catch (error) {
                console.error("Error creating product with image:", error);
                res.status(500).json({ message: "Failed to create product", error });
            }
        });
        /**
         * Update a product
         */
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userId = req.user.user_id;
                const productData = {
                    name: req.body.name,
                    description: req.body.description,
                    price: parseFloat(req.body.price),
                    unit: req.body.unit,
                    tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
                    category: req.body.category,
                };
                // Check if product exists and belongs to user
                const existingProduct = yield this.productService.getProductById(Number(id), userId);
                if (!existingProduct) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Don't allow editing archived products
                if (existingProduct.deleted_at) {
                    res.status(400).json({ message: "Cannot edit an archived product" });
                    return;
                }
                // Update product in database
                const updatedProduct = yield this.productService.updateProduct(Number(id), productData);
                res.status(200).json(updatedProduct);
            }
            catch (error) {
                console.error("Error updating product:", error);
                res.status(500).json({ message: "Failed to update product", error });
            }
        });
        this.updateProductWithImage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userId = req.user.user_id;
                const removeImage = req.body.removeImage === "true";
                const productData = {
                    name: req.body.name,
                    description: req.body.description,
                    price: parseFloat(req.body.price),
                    unit: req.body.unit,
                    tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
                    category: req.body.category,
                };
                // Check if product exists and belongs to user
                const existingProduct = yield this.productService.getProductById(Number(id), userId);
                if (!existingProduct) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Don't allow editing archived products
                if (existingProduct.deleted_at) {
                    res.status(400).json({ message: "Cannot edit an archived product" });
                    return;
                }
                // Update product with image - use the file directly from req.file
                const updatedProduct = yield this.productService.updateProductWithImage(Number(id), productData, userId, existingProduct.image, req.file, removeImage);
                res.status(200).json(updatedProduct);
            }
            catch (error) {
                console.error("Error updating product with image:", error);
                res.status(500).json({ message: "Failed to update product", error });
            }
        });
        /**
         * Delete a product (hard delete)
         */
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userId = req.user.user_id;
                // Check if product exists and belongs to user
                const existingProduct = yield this.productService.getProductById(Number(id), userId);
                if (!existingProduct) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Check if product is used in any invoices
                const isUsedInInvoices = yield this.productService.isProductUsedInInvoices(Number(id));
                if (isUsedInInvoices) {
                    res.status(400).json({
                        message: "Cannot delete product that is used in invoices. Archive it instead.",
                    });
                    return;
                }
                // Delete the product
                yield this.productService.deleteProduct(Number(id));
                res.status(200).json({ message: "Product deleted successfully" });
            }
            catch (error) {
                console.error("Error deleting product:", error);
                res.status(500).json({ message: "Failed to delete product", error });
            }
        });
        /**
         * Archive a product (soft delete)
         */
        this.archiveProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userId = req.user.user_id;
                // Check if product exists and belongs to user
                const existingProduct = yield this.productService.getProductById(Number(id), userId);
                if (!existingProduct) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Don't archive already archived products
                if (existingProduct.deleted_at) {
                    res.status(400).json({ message: "Product is already archived" });
                    return;
                }
                // Archive the product
                const archivedProduct = yield this.productService.archiveProduct(Number(id));
                res.status(200).json(archivedProduct);
            }
            catch (error) {
                console.error("Error archiving product:", error);
                res.status(500).json({ message: "Failed to archive product", error });
            }
        });
        /**
         * Restore an archived product
         */
        this.restoreProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userId = req.user.user_id;
                // Check if product exists and belongs to user
                const existingProduct = yield this.productService.getProductById(Number(id), userId);
                if (!existingProduct) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Don't restore products that aren't archived
                if (!existingProduct.deleted_at) {
                    res.status(400).json({ message: "Product is not archived" });
                    return;
                }
                // Restore the product
                const restoredProduct = yield this.productService.restoreProduct(Number(id));
                res.status(200).json(restoredProduct);
            }
            catch (error) {
                console.error("Error restoring product:", error);
                res.status(500).json({ message: "Failed to restore product", error });
            }
        });
        /**
         * Search products by name or description
         */
        this.searchProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { q } = req.query;
                const userId = req.user.user_id;
                if (!q) {
                    res.status(400).json({ message: "Search query is required" });
                    return;
                }
                const products = yield this.productService.searchProducts(String(q), userId);
                res.status(200).json(products);
            }
            catch (error) {
                console.error("Error searching products:", error);
                res.status(500).json({ message: "Failed to search products", error });
            }
        });
        /**
         * Get products by category
         */
        this.getProductsByCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { category } = req.params;
                const userId = req.user.user_id;
                const products = yield this.productService.getProductsByCategory(category, userId);
                res.status(200).json(products);
            }
            catch (error) {
                console.error("Error fetching products by category:", error);
                res
                    .status(500)
                    .json({ message: "Failed to fetch products by category", error });
            }
        });
        /**
         * Get product usage in invoices
         */
        this.getProductUsage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.params;
                const userId = req.user.user_id;
                // Get the product service (you may need to inject this in your constructor)
                const productService = new ProductService_1.ProductService();
                // Check if product exists and belongs to user
                const product = yield productService.getProductById(Number(productId), userId);
                if (!product) {
                    res.status(404).json({ message: "Product not found" });
                    return;
                }
                // Get product usage in invoices
                const usage = yield productService.getProductUsage(Number(productId));
                // Return in the format the frontend expects
                res.status(200).json(usage);
            }
            catch (error) {
                console.error("Error fetching product usage:", error);
                res.status(500).json({ message: "Failed to fetch product usage", error });
            }
        });
        this.productService = new ProductService_1.ProductService();
    }
}
exports.ProductController = ProductController;
