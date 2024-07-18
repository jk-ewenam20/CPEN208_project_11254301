"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import SlideCard from "@/app/components/slideCard";

const Home = () => {
  const { data: session, status } = useSession();
  const [value] = useState(new Date());

  if (status === "authenticated") {
    return (
      <div>
        <p className="font-normal font-mono text-4xl">
          Welcome {session.user.firstName}!
        </p>
        <div className="flex w-full flex-col">
          <div className="flex w-full">
            <div className="bg-blue-200 rounded-box grid h-72 w-80 flex-grow place-items-center shadow-lg">
              content
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="bg-yellow-300 rounded-box grid h-60 flex-grow place-items-center shadow-md">
              content
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex w-full pt-10">
            <div className="bg-white rounded-box grid h-96 w-fit place-items-stretch shadow-lg">
              <Calendar value={value} />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="bg-green-300 rounded-box grid w-52 flex-grow place-items-center shadow-md"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-40 pl-60 pr-40">
      <div role="alert" className="alert alert-error items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span
          style={{
            alignItems: "center",
            fontFamily: "Georgia",
            fontWeight: "normal",
            fontSize: "20px",
          }}
        >
          Something went wrong. Navigate to{" "}
          <a href="/signIn" className="link link-neutral">
            Sign In
          </a>{" "}
          page to log in again.
        </span>
      </div>
      <center>
        <span className="loading loading-ring loading-lg mt-40"></span>
      </center>
    </div>
  );
};

export default Home;
