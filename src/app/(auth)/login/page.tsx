"use client";

import React from "react";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left - Form Side */}
      <div className="w-full md:w-[30%] flex flex-col justify-start p-8 bg-white">
        <LoginForm />
      </div>

      {/* Right - Illustration Side */}
      <div className="hidden md:block md:w-[70%] relative bg-[#F5F3FF]">
        <Image
          src="/assets/portfolio-bg.png"
          alt="Kreatorpay Illustration"
          fill
          className="object-cover opacity-80"
        />

        {/* Text Overlay */}
        <div className="absolute top-8 left-0 w-full flex flex-col justify-start px-20 text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kreatorpay 3.0 is here
          </h1>
          <p className="text-lg max-w-lg leading-relaxed">
            Up to 32% higher throughput, improved horizontal scaling, enhanced security, and a fresh new dashboard experience.
          </p>
          <a
            href="#"
            className="mt-6 underline underline-offset-4 font-medium hover:text-purple-300 transition"
          >
            See everything that’s new →
          </a>
        </div>
      </div>
    </div>
  );
}
