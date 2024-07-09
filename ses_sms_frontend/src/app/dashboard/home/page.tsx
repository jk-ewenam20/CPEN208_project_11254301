"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Welcome {session.user.firstName}</p>;
  }

  // return <a href="/api/auth/signin">Sign in</a>;
};

export default Home;
