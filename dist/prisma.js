"use strict";
// import { PrismaClient } from "../prisma/generated/client";
Object.defineProperty(exports, "__esModule", { value: true });
// export default new PrismaClient({ log: ["query", "error", "info", "warn"] });
const client_1 = require("../prisma/generated/client");
// Konfigurasi PrismaClient untuk seluruh aplikasi
const prisma = new client_1.PrismaClient({
    log: ["query", "error", "info", "warn"],
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});
exports.default = prisma;
