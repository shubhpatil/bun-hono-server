import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validation/user";
import { PrismaClient } from "@prisma/client";

const user = new Hono();
const prisma = new PrismaClient();

/**
 * ctx -> Context (Request & Response) Object
 */
user.get("/", async (ctx) => {
  const data = await prisma.user.findMany();
  return ctx.json({ success: true, message: "All users fetched", data }, 200);
});

// Post Request
user.post("/", zValidator("json", userSchema), (ctx) => {
  const body = ctx.req.valid("json");
  return ctx.json({ success: true, message: `User ${body.name} created` }, 201);
});

export default user;
