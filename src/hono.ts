import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { jwt } from "hono/jwt";
// import { compress } from "hono/compress";
import { swaggerUI } from "@hono/swagger-ui";
import rateLimiter from "./middleware/ratelimiter";
import router from "./routes/index";

// Hono instance
const app = new Hono();

// CORS middleware
app.use(cors());

// Compression middleware (*Bun Not Supported)
// app.use(compress());

// Logger middleware
app.use(logger());

// Rate limiter
app.use(rateLimiter);

// Serve static files
app.use("/public/*", serveStatic({ root: "./" }));

// Swagger
app.get("/swagger", swaggerUI({ url: Bun.env.SWAGGER_URL }));

// JWT Auth
app.use("/api/v1/*", jwt({ secret: Bun.env.JWT_SECRET! }));

// API Router
app.get("/", (ctx) => ctx.json({ message: "Hello! Bun + Hono" }));
app.route("/", router);

export default app;
