"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Profile = async () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <div className="flex w-full mb-5">
          <div className="bg-blue-100 grid h-14 w-28 flex-grow place-items-center">
            STUDENT ID:
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="bg-white rounded-box grid h-14 w-28 flex-grow place-items-center">
            {session.user.id}
          </div>
        </div>
        <div className="flex w-full mb-5">
          <div className="bg-blue-100  grid h-14 w-28 flex-grow place-items-center">
            FIRST NAME:
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="bg-white rounded-box grid h-14 w-28 flex-grow place-items-center">
            {session.user.firstName}
          </div>
        </div>
        <div className="flex w-full mb-5">
          <div className="bg-blue-100  grid h-14 w-28 flex-grow place-items-center">
            OTHER NAMES:
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="bg-white rounded-box grid h-14 w-28 flex-grow place-items-center">
            {session.user.otherNames}
          </div>
        </div>
        <div className="flex w-full mb-5">
          <div className="bg-blue-100  grid h-14 w-28 flex-grow place-items-center">
            LAST NAMES:
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="bg-white rounded-box grid h-14 w-28 flex-grow place-items-center">
            {session.user.lastName}
          </div>
        </div>
        <div className="flex w-full mb-5">
          <div className="bg-blue-100  grid h-14 w-28 flex-grow place-items-center">
            EMAIL:
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="bg-white rounded-box grid h-14 w-28 flex-grow place-items-center">
            {session.user.email}
          </div>
        </div>
        <div className="flex w-full mb-5">
          <div className="bg-blue-100 grid h-14 w-28 flex-grow place-items-center">
            D.O.B:
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="bg-white rounded-box grid h-14 w-28 flex-grow place-items-center">
            {session.user.dOB}
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
