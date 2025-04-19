"use strict";
// import { PrismaClient } from "../prisma/generated/client";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// export default new PrismaClient({ log: ["query", "error", "info", "warn"] });
const client_1 = require("../prisma/generated/client");
// Add logging to Prisma Client
const prismaClientSingleton = () => {
    return new client_1.PrismaClient({
        log: ["query", "error", "info", "warn"],
    });
};
const globalForPrisma = globalThis;
const prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : prismaClientSingleton();
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;
exports.default = prisma;
