"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function ForgotPasswordSuccess() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          Check Your Email
        </h1>
        <p className="text-gray-700 mb-6">
          We&apos;ve sent a confirmation link to{" "}
          <span className="font-semibold">{email}</span>. Please check your
          inbox and follow the instructions to reset your password.
        </p>
        <Link
          href="/login"
          className="px-4 py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
