"use client";

import { useSession } from "next-auth/react";

interface RegistrationInfo {
  registration_id: number;
  course_code: string;
  course_title: string;
  credits: number;
}

const RegisterCourses = async () => {
  const { data: session, status } = useSession();

  {
    ("use server");
  }
  const response = await fetch(
    `http://localhost:20201/api/st_reg_courses/${session?.user.id}`
  );
  const dataList: RegistrationInfo[] = await response.json();

  if (status === "authenticated") {
    return (
      <div>
        <div className="flex w-full flex-col">
          <div className=" bg-base-300 rounded-box grid h-72 place-items-center">
            content
          </div>
          <div className="divider"></div>
          <p className="font-serif font-semibold p-7">Registered Courses</p>
          <div className="bg-base-300 rounded-box grid place-items-stretch">
            <div className="overflow-x-auto">
              <table className="table table-zebra table-pin-rows">
                {/* head */}
                <thead>
                  <tr>
                    <th>Registration Id</th>
                    <th>Course code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Lecturer</th>
                    <th>Teaching Assistant</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {dataList.map((dataList) => (
                    <tr key={dataList.registration_id}>
                      <td>{dataList.registration_id}</td>
                      <td> {dataList.course_code} </td>
                      <td> {dataList.course_title} </td>
                      <td> {dataList.credits} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RegisterCourses;
