'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

import { FieldValues,useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().nonempty('Name is required'),
  lastname: z.string().min(3, {message: ''}),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters').nonempty('Password is required'),
  dob: z.date(),
  othernames: z.string().optional()
});

type FormData = z.infer<typeof schema>;

const signUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src="/undraw_profile_details_re_ch9r.svg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-1">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <div className="form-control">
                <label className="label" htmlFor="ID">
                  <span className="label-text">Student ID</span>
                </label>
                <input
                  type="number"
                  id="ID"
                  placeholder="ID"
                  className="input input-bordered"

                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="firstName">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered"

                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="otherNames">
                  <span className="label-text">Other Names</span>
                </label>
                <input
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
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered"

                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="dOB">
                  <span className="label-text">D.O.B</span>
                </label>
                <input
                  type="date"
                  id="dOB"
                  placeholder="D.O.B"
                  className="input input-bordered"

                />
              </div>
              <label className="input input-bordered flex items-center gap-2 mt-5" htmlFor="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                
                <input type="text" className="grow" placeholder="Email" id="email"/>
              </label>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info font-serif">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUp;
