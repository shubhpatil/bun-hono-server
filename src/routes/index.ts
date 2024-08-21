import { Hono } from "hono";

// Import Routes
import user from "./user";

const router = new Hono();

// API Routes
router.route("/v1/user", user);

export default router;
