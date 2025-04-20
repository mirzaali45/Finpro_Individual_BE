// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { AuthRouter } from "./routers/user.router";
// import { InvoiceRouter } from "./routers/invoice.router";
// // import { AuthRouter } from "./routers/auth.router";

// const PORT: number = 8000;
// const base_url_fe = process.env.BASE_URL_FE;

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: base_url_fe,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// const authRouter = new AuthRouter();
// const invoiceRouter = new InvoiceRouter

// app.use("/api/auth", authRouter.getRouter());
// app.use("/api/invoices", invoiceRouter.getRouter() );

// app.get("/api", (req, res) => {
//   res.send("Welcome to the API!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on -> http://localhost:${PORT}/api`);
// });

// export default app;
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { AuthRouter } from "./routers/auth.router";
import { InvoiceRouter } from "./routers/invoice.router";
import { PrismaClient } from "../prisma/generated/client";
import {
  updateOverdueInvoices,
  generateRecurringInvoices,
} from "./utils/invoice.utils";
import cron from "node-cron";
import { ClientsRouter } from "./routers/clients.router";
import { RecurringInvoiceRouter } from "./routers/recurring-invoice.router";
import { ProductRouter } from "./routers/product.router";

const prisma = new PrismaClient();

const PORT: number = 8000;
const base_url_fe = process.env.BASE_URL_FE || "http://localhost:3000";
const allowedOrigins = [
  base_url_fe, // Keep your existing environment variable
  "https://invoicepro-five.vercel.app",
  // "https://invoice-pro-ten.vercel.app",
  // Add any other domains that need access
];

// Initialize express app
const app = express();

// Apply middleware
app.use(helmet());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// app.use(
//   cors({
//     origin: base_url_fe,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// Use a function to check if the request origin is allowed
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // The origin is allowed
      } else {
        callback(new Error("Not allowed by CORS")); // The origin is not allowed
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Initialize routers
const authRouter = new AuthRouter();
const invoiceRouter = new InvoiceRouter();
const recurringinvoiceRouter = new RecurringInvoiceRouter();
const clientsRouter = new ClientsRouter();
const productRouter = new ProductRouter();

// Apply routes
app.use("/api/auth", authRouter.getRouter());
app.use("/api/invoices", invoiceRouter.getRouter());
app.use("/api/recurring-invoices", recurringinvoiceRouter.getRouter());
app.use("/api/clients", clientsRouter.getRouter());
app.use("/api/products", productRouter.getRouter());

// Health check endpoint
app.get("/api", (req, res) => {
  res.status(200).json({ status: "ok", message: "Welcome to the API!" });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on -> http://localhost:${PORT}/api`);

  // Set up cron jobs for invoice automation

  // Check for overdue invoices daily at midnight
  cron.schedule("0 0 * * *", async () => {
    console.log("Running scheduled task: Update overdue invoices");
    try {
      await updateOverdueInvoices();
      console.log("Overdue invoices updated successfully");
    } catch (error) {
      console.error("Error updating overdue invoices:", error);
    }
  });

  // Generate recurring invoices daily at 1 AM
  cron.schedule("0 1 * * *", async () => {
    console.log("Running scheduled task: Generate recurring invoices");
    try {
      await generateRecurringInvoices();
      console.log("Recurring invoices generated successfully");
    } catch (error) {
      console.error("Error generating recurring invoices:", error);
    }
  });
});

// Handle graceful shutdown
process.on("SIGTERM", async () => {
  console.log(
    "SIGTERM signal received. Closing HTTP server and database connections."
  );
  server.close(async () => {
    await prisma.$disconnect();
    console.log("HTTP server closed and database connections disconnected.");
    process.exit(0);
  });
});

export default app;
