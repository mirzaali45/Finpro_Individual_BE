import { Router } from "express";
import { ClientsController } from "../controllers/clients.controller";
import { AuthMiddleware } from "../middleware/auth.verify";

export class ClientsRouter {
  private router: Router;
  private clientsController: ClientsController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.clientsController = new ClientsController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Get all clients
    this.router.get(
      "/",
      this.authMiddleware.verifyToken,
      this.clientsController.getAllClients.bind(this.clientsController)
    );

    // Get a single client by ID
    this.router.get(
      "/:id",
      this.authMiddleware.verifyToken,
      this.clientsController.getClientById.bind(this.clientsController)
    );

    // Create a new client
    this.router.post(
      "/",
      this.authMiddleware.verifyToken,
      this.clientsController.createClient.bind(this.clientsController)
    );

    // Update an existing client
    this.router.put(
      "/:id",
      this.authMiddleware.verifyToken,
      this.clientsController.updateClient.bind(this.clientsController)
    );

    // Delete a client
    this.router.delete(
      "/:id",
      this.authMiddleware.verifyToken,
      this.clientsController.deleteClient.bind(this.clientsController)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
