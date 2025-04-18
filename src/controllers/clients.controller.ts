import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { responseError } from "../helpers/responseError";

const prisma = new PrismaClient();

// Get all clients for the logged-in user
export class ClientsController {
  async getAllClients(req: Request, res: Response): Promise<void> {
    try {
      // Use the user ID from the authenticated request
      const userId = req.user?.user_id;

      if (!userId) {
        throw new Error("User not authenticated");
      }

      const clients = await prisma.client.findMany({
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
    } catch (error) {
      console.error("Error fetching clients:", error);
      responseError(res, error);
      return;
    }
  }

  // Get a single client by ID
  async getClientById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = req.user?.user_id;

      if (!userId) {
        throw new Error("User not authenticated");
      }

      const client = await prisma.client.findFirst({
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
    } catch (error) {
      console.error("Error fetching client:", error);
      responseError(res, error);
      return;
    }
  }

  // Create a new client
  async createClient(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.user_id;

      console.log("Creating client with user ID:", userId);
      console.log("Request body:", req.body);

      if (!userId) {
        throw new Error("User not authenticated");
      }

      const {
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
      } = req.body;

      // Validate required fields
      if (!name || !email) {
        throw new Error("Name and email are required");
      }

      const client = await prisma.client.create({
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
    } catch (error) {
      console.error("Error creating client:", error);
      responseError(res, error);
      return;
    }
  }

  // Update an existing client
  async updateClient(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = req.user?.user_id;

      if (!userId) {
        throw new Error("User not authenticated");
      }

      const {
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
      } = req.body;

      // Validate required fields
      if (!name || !email) {
        throw new Error("Name and email are required");
      }

      // Check if the client exists and belongs to the user
      const existingClient = await prisma.client.findFirst({
        where: {
          client_id: parseInt(id),
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!existingClient) {
        throw new Error("Client not found");
      }

      const updatedClient = await prisma.client.update({
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
    } catch (error) {
      console.error("Error updating client:", error);
      responseError(res, error);
      return;
    }
  }

  // Delete a client (soft delete)
  async deleteClient(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = req.user?.user_id;

      if (!userId) {
        throw new Error("User not authenticated");
      }

      // Check if the client exists and belongs to the user
      const client = await prisma.client.findFirst({
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
      const invoiceCount = await prisma.invoice.count({
        where: {
          client_id: parseInt(id),
          deleted_at: null,
        },
      });

      if (invoiceCount > 0) {
        throw new Error(
          "Cannot delete client with existing invoices. Delete the invoices first or archive the client instead."
        );
      }

      // Perform soft delete
      await prisma.client.update({
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
    } catch (error) {
      console.error("Error deleting client:", error);
      responseError(res, error);
      return;
    }
  }
}
