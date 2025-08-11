import { Form, useActionData, redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { db } from "app/db";
import { signup } from "app/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!name || !email || !password || !confirmPassword) {
    return { error: "Fill up all the fields" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const existingUser = await db
    .select()
    .from(signup)
    .where(eq(signup.email, email));
  if (existingUser.length > 0) {
    return { error: "Email already registered" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.insert(signup).values({
      name,
      email,
      password: hashedPassword,
    });

    return redirect("/");
  } catch (err) {
    console.error(err);
    return { error: "Error signing up" };
  }
}

export default function Signup() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <Form method="post">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            Sign Up
          </h2>

          {/* Error Alert */}
          {actionData?.error && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
              {actionData.error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

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

            <div>
              <label className="block text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Re-enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
            >
              Create Account
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-green-700 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </Form>
  );
}
