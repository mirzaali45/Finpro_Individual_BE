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
exports.ClientsController = void 0;
const client_1 = require("../../prisma/generated/client");
const responseError_1 = require("../helpers/responseError");
const prisma = new client_1.PrismaClient();
// Get all clients for the logged-in user
class ClientsController {
    getAllClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                // Use the user ID from the authenticated request
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    throw new Error("User not authenticated");
                }
                const clients = yield prisma.client.findMany({
                    where: {
                        user_id: userId,
                        deleted_at: null, // Only get non-deleted clients
                    },
                    orderBy: {
                        created_at: "desc",
                    },
                });
                res.status(200).json({
                    status: "Success",
                    clients: clients, // Changed to match frontend expectation
                });
                return;
            }
            catch (error) {
                console.error("Error fetching clients:", error);
                (0, responseError_1.responseError)(res, error);
                return;
            }
        });
    }
    // Get a single client by ID
    getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id } = req.params;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    throw new Error("User not authenticated");
                }
                const client = yield prisma.client.findFirst({
                    where: {
                        client_id: parseInt(id),
                        user_id: userId,
                        deleted_at: null,
                    },
                });
                if (!client) {
                    throw new Error("Client not found");
                }
                res.status(200).json({
                    status: "Success",
                    client: client,
                });
                return;
            }
            catch (error) {
                console.error("Error fetching client:", error);
                (0, responseError_1.responseError)(res, error);
                return;
            }
        });
    }
    // Create a new client
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                console.log("Creating client with user ID:", userId);
                console.log("Request body:", req.body);
                if (!userId) {
                    throw new Error("User not authenticated");
                }
                const { name, email, phone, company_name, address, city, state, postal_code, country, payment_preference, notes, } = req.body;
                // Validate required fields
                if (!name || !email) {
                    throw new Error("Name and email are required");
                }
                const client = yield prisma.client.create({
                    data: {
                        user_id: userId,
                        name,
                        email,
                        phone,
                        company_name,
                        address,
                        city,
                        state,
                        postal_code,
                        country,
                        payment_preference,
                        notes,
                    },
                });
                res.status(201).json({
                    status: "Success",
                    client: client,
                });
                return;
            }
            catch (error) {
                console.error("Error creating client:", error);
                (0, responseError_1.responseError)(res, error);
                return;
            }
        });
    }
    // Update an existing client
    updateClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id } = req.params;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    throw new Error("User not authenticated");
                }
                const { name, email, phone, company_name, address, city, state, postal_code, country, payment_preference, notes, } = req.body;
                // Validate required fields
                if (!name || !email) {
                    throw new Error("Name and email are required");
                }
                // Check if the client exists and belongs to the user
                const existingClient = yield prisma.client.findFirst({
                    where: {
                        client_id: parseInt(id),
                        user_id: userId,
                        deleted_at: null,
                    },
                });
                if (!existingClient) {
                    throw new Error("Client not found");
                }
                const updatedClient = yield prisma.client.update({
                    where: {
                        client_id: parseInt(id),
                    },
                    data: {
                        name,
                        email,
                        phone,
                        company_name,
                        address,
                        city,
                        state,
                        postal_code,
                        country,
                        payment_preference,
                        notes,
                        updated_at: new Date(),
                    },
                });
                res.status(200).json({
                    status: "Success",
                    client: updatedClient,
                });
                return;
            }
            catch (error) {
                console.error("Error updating client:", error);
                (0, responseError_1.responseError)(res, error);
                return;
            }
        });
    }
    // Delete a client (soft delete)
    deleteClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id } = req.params;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_id;
                if (!userId) {
                    throw new Error("User not authenticated");
                }
                // Check if the client exists and belongs to the user
                const client = yield prisma.client.findFirst({
                    where: {
                        client_id: parseInt(id),
                        user_id: userId,
                        deleted_at: null,
                    },
                });
                if (!client) {
                    throw new Error("Client not found");
                }
                // Check if client has any invoices
                const invoiceCount = yield prisma.invoice.count({
                    where: {
                        client_id: parseInt(id),
                        deleted_at: null,
                    },
                });
                if (invoiceCount > 0) {
                    throw new Error("Cannot delete client with existing invoices. Delete the invoices first or archive the client instead.");
                }
                // Perform soft delete
                yield prisma.client.update({
                    where: {
                        client_id: parseInt(id),
                    },
                    data: {
                        deleted_at: new Date(),
                    },
                });
                res.status(200).json({
                    status: "Success",
                    message: "Client deleted successfully",
                });
                return;
            }
            catch (error) {
                console.error("Error deleting client:", error);
                (0, responseError_1.responseError)(res, error);
                return;
            }
        });
    }
}
exports.ClientsController = ClientsController;
