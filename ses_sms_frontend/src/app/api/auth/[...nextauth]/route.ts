import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import axios from "axios";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signIn",
    signOut: "/signIn"
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        id: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log({ credentials });
        const endpoint = `http://localhost:20201/api/students/${credentials?.id}`;
        const response = axios.get(endpoint);
        const rawPassword = (await credentials?.password) || "";
        // const hashed = await bcrypt.hash(rawPassword || "", 10);
        const match = await bcrypt.compare(
          rawPassword,
          (
            await response
          ).data.password
        );
        console.log((await response).data.password);
        console.log(rawPassword);
        console.log({ match });
        if (match) {
          return {
            id: (await response).data.id,
            email: (await response).data.email,
          };
        }
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()

        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
