"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_verify_1 = require("../middleware/auth.verify");
const ValidationProducts_1 = require("../middleware/ValidationProducts");
const multer_1 = __importDefault(require("../config/multer"));
class ProductRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.productController = new product_controller_1.ProductController();
        this.validationMiddleware = new ValidationProducts_1.ValidationMiddleware();
        this.authMiddleware = new auth_verify_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Apply authentication middleware to all product routes
        this.router.use(this.authMiddleware.verifyToken);
        // GET routes
        this.router.get("/", this.productController.getAllProducts);
        this.router.get("/search", this.validationMiddleware.validateSearchQuery, this.productController.searchProducts);
        this.router.get("/category/:category", this.validationMiddleware.validateCategory, this.productController.getProductsByCategory);
        this.router.get("/:id", this.validationMiddleware.validateProductId, this.productController.getProductById);
        // POST routes
        this.router.post("/", this.validationMiddleware.validateProduct, this.productController.createProduct);
        this.router.post("/with-image", multer_1.default.single("image"), this.validationMiddleware.validateProduct, this.productController.createProductWithImage);
        this.router.post("/:id/archive", this.validationMiddleware.validateProductId, this.productController.archiveProduct);
        this.router.post("/:id/restore", this.validationMiddleware.validateProductId, this.productController.restoreProduct);
        // PUT routes
        this.router.put("/:id", this.validationMiddleware.validateProductId, this.validationMiddleware.validateProduct, this.productController.updateProduct);
        this.router.put("/:id/with-image", this.validationMiddleware.validateProductId, multer_1.default.single("image"), this.validationMiddleware.validateProduct, this.productController.updateProductWithImage);
        // DELETE routes
        this.router.delete("/:id", this.validationMiddleware.validateProductId, this.productController.deleteProduct);
    }
    getRouter() {
        return this.router;
    }
}
exports.ProductRouter = ProductRouter;
