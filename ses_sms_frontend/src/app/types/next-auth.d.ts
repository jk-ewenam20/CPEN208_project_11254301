import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            firstName: string;
            lastName: string;
            otherNames: string;
            dOB: string;
            email: string;
        }
    }
    interface User {
        id: string;
        firstName: string;
        lastName: string;
        otherNames: string;
        dOB: string;
        email: string;
    }
}