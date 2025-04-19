"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRouter = void 0;
const express_1 = require("express");
const clients_controller_1 = require("../controllers/clients.controller");
const auth_verify_1 = require("../middleware/auth.verify");
class ClientsRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.clientsController = new clients_controller_1.ClientsController();
        this.authMiddleware = new auth_verify_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Get all clients
        this.router.get("/", this.authMiddleware.verifyToken, this.clientsController.getAllClients.bind(this.clientsController));
        // Get a single client by ID
        this.router.get("/:id", this.authMiddleware.verifyToken, this.clientsController.getClientById.bind(this.clientsController));
        // Create a new client
        this.router.post("/", this.authMiddleware.verifyToken, this.clientsController.createClient.bind(this.clientsController));
        // Update an existing client
        this.router.put("/:id", this.authMiddleware.verifyToken, this.clientsController.updateClient.bind(this.clientsController));
        // Delete a client
        this.router.delete("/:id", this.authMiddleware.verifyToken, this.clientsController.deleteClient.bind(this.clientsController));
    }
    getRouter() {
        return this.router;
    }
}
exports.ClientsRouter = ClientsRouter;
