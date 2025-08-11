"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    setTimeout(() => {
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex justify-center mb-6">
        <h1 className="text-2xl font-bold text-purple-600">Kreatorpay</h1>
      </div>

      <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
        Forgot Password?
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Reset Password
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-purple-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
