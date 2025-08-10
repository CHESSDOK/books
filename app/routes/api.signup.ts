import type { ActionFunctionArgs } from "react-router";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { users } from "../db/schema";
import * as dotenv from "dotenv";

dotenv.config();

// Create MySQL connection
const connection = await mysql.createConnection(process.env.DATABASE_URL!);
const db = drizzle(connection);

// POST request handler
export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Hash password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into MySQL
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      {
        status: 500,
      }
    );
  }
}
