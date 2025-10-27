import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";


const nextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'Register by fresh cart',
            authorize: async function (credentials, req) {
                const signInCall = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
                    method: 'post',
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const signInResponse = await signInCall.json();
                console.log('signInResponse', signInResponse);
                const decodedId = jwtDecode<{id:string}>(signInResponse.token);
                console.log('decodedId', decodedId);
                if (signInResponse.message === 'success') {
                    const { role, ...rest } = signInResponse.user;
                    console.log('signInResponse', signInResponse);
                    return {
                        id: decodedId?.id,
                        name: signInResponse.user.name,
                        email: signInResponse.user.email,
                        signInToken: signInResponse.token,
                    };
                }
                else {
                    return null;
                }
            },
            credentials: {
                email: {},
                password: {},
            }
        },
        )
    ],
    pages:{
        signIn:'/login',
        signOut:'/login',
    },
    callbacks: {
        jwt({ token, user }){
            if (user) {
                token.userId = user.id,
                token.signInToken = user.signInToken;
                console.log('paramsuser', user);
                console.log('paramstoken', token);
            }
            return token;
        },
        session({ session, token }) {
            console.log('sessionParams', token);
            session.user.id= token.userId;
            
            return session;
        },
        
    },
    session:{
        maxAge:60*60*24,
    },
}
const signInReq = NextAuth(nextAuthConfig);
export { signInReq as GET, signInReq as POST };

