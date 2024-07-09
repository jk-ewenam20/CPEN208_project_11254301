"use client";
import React from "react";
// import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import bcrypt from "bcryptjs";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  ID: z.number({ required_error: "ID is required" }).min(8).max(8),
  firstName: z.string({ required_error: "First name is required" }),
  lastname: z.string({ required_error: "Last name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dob: z.date(),
  othernames: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e: FieldValues) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      student_id: formData.get("ID") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastname") as string,
      other_names: formData.get("othernames") as string,
      d_o_b: formData.get("dOB") as string,
      email: formData.get("email") as string,
      phone: null,
      address: null,
      password: formData.get("password") as string,
    };
    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    try {
      const response = await axios.post(
        "http://localhost:20201/api/students",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            foo: "bar",
          },
        }
      );

      if (response.status === 201) {
        window.location.href = "/signIn";
        // reset();
      } else {
        return <span>Error creating account (User)</span>;
      }
    } catch (e) {}
  };
  const {
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src="/undraw_profile_details_re_ch9r.svg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-1">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="form-control">
                <label className="label" htmlFor="ID">
                  <span className="label-text">Student ID</span>
                </label>
                <input
                  {...register("ID")}
                  type="number"
                  id="ID"
                  placeholder="ID"
                  className="input input-bordered"
                />
                {errors.ID && <p>{errors.ID.message}</p>}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="firstName">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered"
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="otherNames">
                  <span className="label-text">Other Names</span>
                </label>
                <input
                  {...register("othernames")}
                  type="text"
                  id="otherNames"
                  placeholder="Other Names"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="lastName">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  {...register("lastname")}
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered"
                />
                {errors.lastname && <p>{errors.lastname.message}</p>}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="dOB">
                  <span className="label-text">D.O.B</span>
                </label>
                <input
                  {...register("dob")}
                  type="date"
                  id="dOB"
                  placeholder="D.O.B"
                  className="input input-bordered"
                />
                {errors.dob && <p>{errors.dob.message}</p>}
              </div>
              <label
                className="input input-bordered flex items-center gap-2 mt-5"
                htmlFor="email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>

                <input
                  {...register("email")}
                  type="text"
                  className="grow"
                  placeholder="Email"
                  id="email"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </label>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-800">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info font-serif" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
