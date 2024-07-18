import React from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const Profile = async () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    const endpoint = `http://localhost:20201/api/students/${session?.user.id}`;
    const response = axios.get(endpoint);
    const userInfo = {
      id: (await response).data.student_id,
      email: (await response).data.email,
      firstName: (await response).data.firstName,
      lastName: (await response).data.lastName,
      otherNames: (await response).data.other_names,
      
    };
    return <div>

    </div>;
  }
};

export default Profile;
