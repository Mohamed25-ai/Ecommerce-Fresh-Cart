import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getAuthenticatedToken() {
    const userCookie = await cookies();
    const tokenEnv=process.env.NODE_ENV==="production"?'__Secure-next-auth.session-token':'next-auth.session-token';
    const userToken = userCookie.get(tokenEnv)?.value;
    const decodedUserToken = await decode({ token: userToken, secret: process.env.NEXTAUTH_SECRET || '' });
    return decodedUserToken?.signInToken;
}
