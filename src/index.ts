import app from "./hono";

const server = Bun.serve({
  port: Bun.env.PORT || 5000,
  fetch: app.fetch,
  maxRequestBodySize: 1024 * 1024 * 128, // 128MB
});

console.log(`Server: http://localhost:${server.port}`);
