"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignIn = async (e: FieldValues) => {
    e.preventDefault();
    // Implement your sign-in logic here
    // const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      id: id,
      password: password,
      redirect: false,
    });
    console.log({ res });
    if (!res?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  };
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
              <label htmlFor="id" className="block text-sm font-serif">
                Student ID
              </label>
              <input
                type="number"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e) => setID(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-serif">
                Password
              </label>
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-info font-serif"
                type="submit"
                // onClick={() => router.push("/dashboard")}
              >
                Login
              </button>
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
