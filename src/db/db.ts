// db.ts

// You should not need to change this file

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import "dotenv/config";

let _db: ReturnType<typeof drizzle> | null = null;

function getDbUrl() {
  if (!process.env.DATABASE_URL && !process.env.DATABASE_URL_TEST) {
    // Use dotenv only if DATABASE_URL is missing (typically local dev)
    try {
      require("dotenv").config();
    } catch {
      console.warn("Could not load .env file");
    }
  }

  const dbUrl = process.env.DATABASE_URL || process.env.DATABASE_URL_TEST;
  if (!dbUrl) {
    throw new Error("Missing DATABASE_URL or DATABASE_URL_TEST in environment");
  }
  return dbUrl;
}

export function getDb() {
  if (!_db) {
    const dbUrl = getDbUrl();
    const sql = neon(dbUrl, {
      disableWarningInBrowsers: true,
    });
    _db = drizzle({ client: sql });
  }
  return _db;
}

// For backward compatibility, export db as a getter
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(target, prop) {
    return getDb()[prop as keyof ReturnType<typeof drizzle>];
  },
});
