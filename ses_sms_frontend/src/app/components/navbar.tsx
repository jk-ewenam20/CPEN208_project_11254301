"use client";

import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const NavBar = () => {
  const handleClick = () => {
    signOut();
  };
  return (
    <div className="navbar">
      <div className="flex-1"></div>
      <div className="flex-none">
        <button className="icon-button btn-ghost btn" onClick={handleClick}>
          <LogOutIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
