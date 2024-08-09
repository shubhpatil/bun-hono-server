import { test, expect, describe } from "bun:test";
import app from "../hono";

describe("Bun Hono Server", () => {
  test("GET / route", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ message: "Hello! Bun + Hono" });
  });
});
