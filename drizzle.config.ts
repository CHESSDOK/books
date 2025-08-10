import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

export default {
  schema: "./app/db/schema.ts", // where your table definitions will go
  out: "./drizzle", // folder for migration files
  driver: "mysql2", // Drizzle driver for MySQL
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // from .env
  },
} satisfies Config;
