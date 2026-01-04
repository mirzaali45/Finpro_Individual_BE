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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const auth_router_1 = require("./routers/auth.router");
const invoice_router_1 = require("./routers/invoice.router");
const client_1 = require("../prisma/generated/client");
const invoice_utils_1 = require("./utils/invoice.utils");
const node_cron_1 = __importDefault(require("node-cron"));
const clients_router_1 = require("./routers/clients.router");
const recurring_invoice_router_1 = require("./routers/recurring-invoice.router");
const product_router_1 = require("./routers/product.router");
const prisma = new client_1.PrismaClient();
const PORT = 8000;
const base_url_fe = process.env.BASE_URL_FE;
const allowedOrigins = [
    base_url_fe,
    "http://localhost:3000",
    "https://invoice-pro-ruby.vercel.app",
];
// Initialize express app
const app = (0, express_1.default)();
// Apply middleware
app.use((0, helmet_1.default)());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "10mb" }));
app.use((0, cookie_parser_1.default)());
// app.use(
//   cors({
//     origin: base_url_fe,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl requests)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = "The CORS policy for this site does not allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
// Apply rate limiting
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
// Initialize routers
const authRouter = new auth_router_1.AuthRouter();
const invoiceRouter = new invoice_router_1.InvoiceRouter();
const recurringinvoiceRouter = new recurring_invoice_router_1.RecurringInvoiceRouter();
const clientsRouter = new clients_router_1.ClientsRouter();
const productRouter = new product_router_1.ProductRouter();
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
    node_cron_1.default.schedule("0 0 * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Running scheduled task: Update overdue invoices");
        try {
            yield (0, invoice_utils_1.updateOverdueInvoices)();
            console.log("Overdue invoices updated successfully");
        }
        catch (error) {
            console.error("Error updating overdue invoices:", error);
        }
    }));
    // Generate recurring invoices daily at 1 AM
    node_cron_1.default.schedule("0 1 * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Running scheduled task: Generate recurring invoices");
        try {
            yield (0, invoice_utils_1.generateRecurringInvoices)();
            console.log("Recurring invoices generated successfully");
        }
        catch (error) {
            console.error("Error generating recurring invoices:", error);
        }
    }));
});
// Handle graceful shutdown
process.on("SIGTERM", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("SIGTERM signal received. Closing HTTP server and database connections.");
    server.close(() => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.$disconnect();
        console.log("HTTP server closed and database connections disconnected.");
        process.exit(0);
    }));
}));
exports.default = app;
