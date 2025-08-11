import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import { db } from "app/db";
import { signup } from "app/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { useAuth } from "../auth-context";
import { useEffect } from "react";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please enter both email and password" };
  }

  try {
    const users = await db.select().from(signup).where(eq(signup.email, email));
    if (users.length === 0) {
      return { error: "Invalid email or password" };
    }

    const validPassword = await bcrypt.compare(password, users[0].password);
    if (!validPassword) {
      return { error: "Invalid email or password" };
    }

    return {
      success: true,
      user: users[0],
      redirect: "/",
    };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "An error occurred during login" };
  }
}

export default function Login() {
  const actionData = useActionData<{
    error?: string;
    success?: boolean;
    user?: any;
    redirect?: string;
  }>();
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success && actionData.user) {
      login(actionData.user.email, actionData.user);
      if (actionData.redirect) {
        navigate(actionData.redirect);
      }
    }
  }, [actionData, login, navigate]);

  return (
    <Form method="post">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            Login
          </h2>

          {actionData?.error && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
              {actionData.error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
            >
              Login
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-700 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </Form>
  );
}
