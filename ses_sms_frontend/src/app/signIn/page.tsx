import React from "react";
import SignIn from "./signin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if(session) {
    redirect("/dashboard")
  }
  return <div><SignIn/></div>
};

export default page;
