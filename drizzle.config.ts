import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Only load .env if DATABASE_URL is not already set (for build environments)
if (!process.env.DATABASE_URL) {
  config({ path: ".env" });
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://placeholder",
  },
});
