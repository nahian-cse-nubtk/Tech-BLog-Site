"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/", // change if needed
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md  backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-black text-center mb-2">
          Welcome to Daily Tech Blog 👋
        </h1>
        <p className="text-black text-center mb-6">
          Sign in to explore the latest tech insights and stories.
        </p>

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-600" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="grow h-px bg-gray-600" />
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 transition text-gray-800 font-semibold"
        >
          <Image width={400} height={300}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
        <p className="mt-6 text-center text-gray-400 text-sm">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-blue-400 hover:underline">
                    Register
                  </Link>
                </p>
      </div>
    </div>
  );
}
