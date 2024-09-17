import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
  path: [".env", ".env.local"],
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  driver: "turso",
  dialect: "sqlite",
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
});
