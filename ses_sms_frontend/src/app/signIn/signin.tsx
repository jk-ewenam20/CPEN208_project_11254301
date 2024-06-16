"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

const handleSignIn = (e: any) => {
  e.preventDefault();
  // Implement your sign-in logic here

};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(password, email);

  return (
    <div
      className="content-stretch"
      style={{
        backgroundImage: 'url("/logo.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen flex items-center justify-center hero-overlay">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-serif mb-4">Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-serif">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-serif">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6 items-center">
              <Link href="/dashboard">
                <button className="btn btn-wide btn-info font-serif" type="submit">
                  Login
                </button>
              </Link>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover font-serif">
                Forgot password?
              </a>
            </label>
          </form>
          <p className="mt-4 font-serif">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
