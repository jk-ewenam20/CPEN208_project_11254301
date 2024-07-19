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
  },
  callbacks: {
    async jwt({token, user}) {
      if(user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.otherNames = user.otherNames;
        token.dOB = user.dOB;
        token.email = user.email
      }
      return token;

    },
    async session({session, token}) {
      if(session.user) {
        session.user.id = token.id as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.otherNames = token.otherNames as string;
        session.user.dOB = token.dOB as string;
        session.user.email = token.email as string;
      }
      console.log(session);
      return session;
      
    }
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
        console.log((await response).data)
        console.log(rawPassword);
        console.log({ match });
        if (match) {
          return {
            id: (await response).data.student_id,
            email: (await response).data.email,
            firstName: (await response).data.firstName,
            lastName: (await response).data.lastName,
            otherNames: (await response).data.other_names,
            dOB: (await response).data.d_o_b,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
