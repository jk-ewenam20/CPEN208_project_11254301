import Sidebar from "../components/sidebar/sidebar";
import { getServerSession } from "next-auth";
import NavBar from "../components/navbar";
import SessionProviderClientComponent from "./Providers";

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <div className="custom-layout">
      {!!session && (
        <SessionProviderClientComponent session={session}>
          <div className="flex h-screen w-full bg-gray-200">
            <div className="flex flex-col w-full h-full p-4">
              <Sidebar />
              {/* <NavBar /> */}
              <main>{children}</main>
            </div>
          </div>
        </SessionProviderClientComponent>
      )}

      {!session && (
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
              Something went wrong. Seems you don't have an account or you've
              been signed out. Navigate to{" "}
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
      )}
    </div>
  );
};
export default CustomLayout;
