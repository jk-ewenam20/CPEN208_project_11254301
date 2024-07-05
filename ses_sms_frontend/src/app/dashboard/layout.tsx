import Sidebar from "../components/sidebar/sidebar";
import { getServerSession } from "next-auth";
import NavBar from "../components/navbar";

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <div className="custom-layout">
      {!!session && (
        <div className="flex h-screen w-full bg-gray-200">
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-64 p-4">
            <NavBar/>
            <main>{children}</main>
          </div>
        </div>
      )}

      {!session && <span>Something Went wrong</span>}
    </div>
  );
};
export default CustomLayout;
