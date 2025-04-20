// import { PrismaClient } from "../prisma/generated/client";

// export default new PrismaClient({ log: ["query", "error", "info", "warn"] });
import { PrismaClient } from "../prisma/generated/client";

// Konfigurasi PrismaClient untuk seluruh aplikasi
const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
