// import { PrismaClient } from "../prisma/generated/client";

// export default new PrismaClient({ log: ["query", "error", "info", "warn"] });
import { PrismaClient } from "../prisma/generated/client";

// Add logging to Prisma Client
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["query", "error", "info", "warn"],
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
