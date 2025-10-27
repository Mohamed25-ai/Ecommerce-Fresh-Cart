import NextAuth from "next-auth"

declare module "next-auth" {
    interface User extends DefaultUser {
        id?: string;
        signInToken?: string;
    }

    interface Session {
        user: {
            id?: string;
            signInToken?: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userId?: string;
        signInToken?: string;
    }
}
