import React from "react";

const RegisterCourses = () => {
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
                  <th></th>
                  <th>Course code</th>
                  <th>Course Title</th>
                  <th>Credit Hours</th>
                  <th>Lecturer</th>
                  <th>Teaching Assistant</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCourses;
