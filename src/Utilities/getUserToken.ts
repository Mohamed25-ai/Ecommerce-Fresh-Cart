import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getAuthenticatedToken() {
    const userCookie = await cookies();
    const userToken = userCookie.get('next-auth.session-token')?.value;
    const decodedUserToken = await decode({ token: userToken, secret: process.env.NEXTAUTH_SECRET || '' });
    console.log('tokkkkkkkkkk',decodedUserToken);
    return decodedUserToken?.signInToken;
}
