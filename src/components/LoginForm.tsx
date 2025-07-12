"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!showPassword) {
      setShowPassword(true);
      return;
    }

    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    toast.success("Login successful!");
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-purple-600">Kreatorpay</h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">Log in to your account</h2>

      {/* Signup prompt */}
      <p className="text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-purple-600 font-medium hover:underline">
          Sign Up
        </Link>
      </p>

      {/* Social Login buttons */}
      <div className="space-y-3">
        <button className="flex items-center justify-center w-full px-4 py-3 border rounded-lg hover:bg-gray-50 transition">
          Google
        </button>
        <button className="flex items-center justify-center w-full px-4 py-3 border rounded-lg hover:bg-gray-50 transition">
          GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm text-gray-500">Or with email and password</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Email input */}
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
      />

      {/* Password + Forgot Password */}
      {showPassword && (
        <div className="space-y-2">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        {showPassword ? "Login" : "Next"}
      </button>
    </div>
  );
}
