import { getServerSession } from "next-auth";
import RegisterForm from "./registerform";
import { redirect } from "next/navigation";

export default async function signUp() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return <RegisterForm />;
}
