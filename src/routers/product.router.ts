import { RequestHandler, Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { AuthMiddleware } from "../middleware/auth.verify";
import { ValidationMiddleware } from "../middleware/ValidationProducts";
import upload from "../config/multer";

export class ProductRouter {
  private router: Router;
  private productController: ProductController;
  private validationMiddleware: ValidationMiddleware;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.validationMiddleware = new ValidationMiddleware();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    // Apply authentication middleware to all product routes
    this.router.use(this.authMiddleware.verifyToken);

    // GET routes
    this.router.get("/", this.productController.getAllProducts);
    this.router.get(
      "/search",
      this.validationMiddleware.validateSearchQuery as any[],
      this.productController.searchProducts
    );
    this.router.get(
      "/category/:category",
      this.validationMiddleware.validateCategory as any[],
      this.productController.getProductsByCategory
    );
    this.router.get(
      "/:id",
      this.validationMiddleware.validateProductId as RequestHandler[],
      this.productController.getProductById
    );

    // POST routes
    this.router.post(
      "/",
      this.validationMiddleware.validateProduct as RequestHandler[],
      this.productController.createProduct
    );
    this.router.post(
      "/with-image",
      upload.single("image"),
      this.validationMiddleware.validateProduct as RequestHandler[],
      this.productController.createProductWithImage
    );
    this.router.post(
      "/:id/archive",
      this.validationMiddleware.validateProductId as RequestHandler[],
      this.productController.archiveProduct
    );
    this.router.post(
      "/:id/restore",
      this.validationMiddleware.validateProductId as RequestHandler[],
      this.productController.restoreProduct
    );

    // PUT routes
    this.router.put(
      "/:id",
      this.validationMiddleware.validateProductId as RequestHandler[],
      this.validationMiddleware.validateProduct as RequestHandler[],
      this.productController.updateProduct
    );
    this.router.put(
      "/:id/with-image",
      this.validationMiddleware.validateProductId as RequestHandler[],
      upload.single("image"),
      this.validationMiddleware.validateProduct as RequestHandler[],
      this.productController.updateProductWithImage
    );

    // DELETE routes
    this.router.delete(
      "/:id",
      this.validationMiddleware.validateProductId as RequestHandler[],
      this.productController.deleteProduct
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
