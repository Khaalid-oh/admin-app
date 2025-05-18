"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      className="mx-auto h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/portal_bg.png")' }}
    >
      <div className="flex flex-col gap-2 items-start mt-16 top-0 left-16 absolute">
        <Image src="/tech1m_org.png" alt="logo" width={100} height={33} />
        <p className="text-white text-xl font-medium">Administrative Portal</p>
      </div>
      <div className="flex flex-col gap-8 items-center backdrop-blur-sm bg-white/30 p-8 rounded-2xl translate-x-96">
        <div className="text-center">
          <h2 className="text-4xl text-white font-semibold mb-4">
            Welcome back!
          </h2>
          <p className="text-white max-w-md">
            Please login to your account to continue
          </p>
          <form className="w-full max-w-md mx-auto mt-8 text-white">
            <div className="mb-4">
              <label htmlFor="email" className="text-start block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-start block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-white">
                  Remember for 30 days
                </label>
              </div>
              <button
                type="submit"
                className="text-white/80 text-sm pl-4 rounded-md hover:bg-chat-blue/90 transition"
              >
                Forgot Password?
              </button>
            </div>
            <Link
              href="/dashboard"
              className="bg-[#0B6CF4] text-white w-full flex justify-center px-4 py-2 mt-6 rounded-md hover:bg-[#0B6CF4]/90 transition"
            >
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
