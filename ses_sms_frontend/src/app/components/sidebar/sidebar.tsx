"use client";

import React from "react";

import {
  LayoutDashboard,
  CircleUser,
  Wallet,
  Book,
  LucideIcon,
  LogOutIcon,
} from "lucide-react";
import Sidebaritem from "./item";
import SidebarItem from "./item";
import { signOut } from "next-auth/react";

interface Sidebaritem {
  name: string;
  icon: LucideIcon;
  path: string;
  // onClick: VoidFunction;
}

interface SubItem {
  name: string;
  path: string;
}

const items: Sidebaritem[] = [
  {
    name: "Home",
    path: "/dashboard/home",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: CircleUser,
  },
  {
    name: "Finance info",
    path: "/dashboard/financial_info",
    icon: Wallet,
  },
  {
    name: "Register Courses",
    path: "/dashboard/register_courses",
    icon: Book,
  },
];
const Sidebar = () => {
  const handleClick = () => {
    signOut({ callbackUrl: "http://localhost3000/signIn" });
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div></div>
          </div>
          <div className="mx-2 flex-1 px-2"></div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {items.map((item) => (
                <SidebarItem key={item.path} item={item} />
              ))}
              <button
                className="icon-button btn-ghost btn"
                onClick={handleClick}
              >
                <LogOutIcon />
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu fixed top-0 h-screen w-64 bg-white shadow-lg z-10 p-6">
          {/* Sidebar content here */}
          <li>
            {items.map((item) => (
              <SidebarItem key={item.path} item={item} />
            ))}
            <button className="icon-button btn-ghost btn" onClick={handleClick}>
              <LogOutIcon />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
