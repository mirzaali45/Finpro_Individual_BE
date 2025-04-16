import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";
import {
  CreateProductDto,
  UpdateProductDto,
  MulterFile,
} from "../types/productsTypes";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  /**
   * Get all products (with optional filter for archived products)
   */
  public getAllProducts = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { includeDeleted = false } = req.query;
      const userId = req.user!.user_id;

      const products = await this.productService.getAllProducts(
        userId,
        includeDeleted === "true"
      );

      // Return in the format the frontend expects
      res.status(200).json({
        products: products,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products", error });
    }
  };

  /**
   * Get a single product by ID
   */
  public getProductById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.user_id;

      const product = await this.productService.getProductById(
        Number(id),
        userId
      );

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      // Return in the format the frontend expects
      res.status(200).json({
        product: product,
      });
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Failed to fetch product", error });
    }
  };

  /**
   * Create a new product
   */
  public createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user!.user_id;
      const productData: CreateProductDto = {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        unit: req.body.unit,
        tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
        category: req.body.category,
      };

      // Create product in database
      const newProduct = await this.productService.createProduct(
        productData,
        userId
      );

      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Failed to create product", error });
    }
  };

  /**
   * Create a new product with image
   */
  public createProductWithImage = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.user!.user_id;
      const productData: CreateProductDto = {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        unit: req.body.unit,
        tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
        category: req.body.category,
      };

      // Create product with image - use the file directly from req.file
      const newProduct = await this.productService.createProductWithImage(
        productData,
        userId,
        req.file as Express.Multer.File
      );

      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error creating product with image:", error);
      res.status(500).json({ message: "Failed to create product", error });
    }
  };
  /**
   * Update a product
   */
  public updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.user_id;
      const productData: UpdateProductDto = {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        unit: req.body.unit,
        tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
        category: req.body.category,
      };

      // Check if product exists and belongs to user
      const existingProduct = await this.productService.getProductById(
        Number(id),
        userId
      );

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
      const updatedProduct = await this.productService.updateProduct(
        Number(id),
        productData
      );

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Failed to update product", error });
    }
  };

  public updateProductWithImage = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.user_id;
      const removeImage = req.body.removeImage === "true";

      const productData: UpdateProductDto = {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        unit: req.body.unit,
        tax_rate: req.body.tax_rate ? parseFloat(req.body.tax_rate) : undefined,
        category: req.body.category,
      };

      // Check if product exists and belongs to user
      const existingProduct = await this.productService.getProductById(
        Number(id),
        userId
      );

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
      const updatedProduct = await this.productService.updateProductWithImage(
        Number(id),
        productData,
        userId,
        existingProduct.image,
        req.file as Express.Multer.File,
        removeImage
      );

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product with image:", error);
      res.status(500).json({ message: "Failed to update product", error });
    }
  };

  /**
   * Delete a product (hard delete)
   */
  public deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.user_id;

      // Check if product exists and belongs to user
      const existingProduct = await this.productService.getProductById(
        Number(id),
        userId
      );

      if (!existingProduct) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      // Check if product is used in any invoices
      const isUsedInInvoices =
        await this.productService.isProductUsedInInvoices(Number(id));

      if (isUsedInInvoices) {
        res.status(400).json({
          message:
            "Cannot delete product that is used in invoices. Archive it instead.",
        });
        return;
      }

      // Delete the product
      await this.productService.deleteProduct(Number(id));

      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Failed to delete product", error });
    }
  };

  /**
   * Archive a product (soft delete)
   */
  public archiveProduct = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.user_id;

      // Check if product exists and belongs to user
      const existingProduct = await this.productService.getProductById(
        Number(id),
        userId
      );

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
      const archivedProduct = await this.productService.archiveProduct(
        Number(id)
      );

      res.status(200).json(archivedProduct);
    } catch (error) {
      console.error("Error archiving product:", error);
      res.status(500).json({ message: "Failed to archive product", error });
    }
  };

  /**
   * Restore an archived product
   */
  public restoreProduct = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.user_id;

      // Check if product exists and belongs to user
      const existingProduct = await this.productService.getProductById(
        Number(id),
        userId
      );

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
      const restoredProduct = await this.productService.restoreProduct(
        Number(id)
      );

      res.status(200).json(restoredProduct);
    } catch (error) {
      console.error("Error restoring product:", error);
      res.status(500).json({ message: "Failed to restore product", error });
    }
  };

  /**
   * Search products by name or description
   */
  public searchProducts = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { q } = req.query;
      const userId = req.user!.user_id;

      if (!q) {
        res.status(400).json({ message: "Search query is required" });
        return;
      }

      const products = await this.productService.searchProducts(
        String(q),
        userId
      );

      res.status(200).json(products);
    } catch (error) {
      console.error("Error searching products:", error);
      res.status(500).json({ message: "Failed to search products", error });
    }
  };

  /**
   * Get products by category
   */
  public getProductsByCategory = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { category } = req.params;
      const userId = req.user!.user_id;

      const products = await this.productService.getProductsByCategory(
        category,
        userId
      );

      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      res
        .status(500)
        .json({ message: "Failed to fetch products by category", error });
    }
  };

  /**
   * Get product usage in invoices
   */
  public getProductUsage = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { productId } = req.params;
      const userId = req.user!.user_id;

      // Get the product service (you may need to inject this in your constructor)
      const productService = new ProductService();

      // Check if product exists and belongs to user
      const product = await productService.getProductById(
        Number(productId),
        userId
      );

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      // Get product usage in invoices
      const usage = await productService.getProductUsage(Number(productId));

      // Return in the format the frontend expects
      res.status(200).json(usage);
    } catch (error) {
      console.error("Error fetching product usage:", error);
      res.status(500).json({ message: "Failed to fetch product usage", error });
    }
  };
}
