import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const jwt=await getToken({req});
    console.log('reqqq',req)
    console.log('jwt',jwt);
    if(jwt?.signInToken){
        return NextResponse.next();
    }
    else{
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`);
    }
}
export const config = {
    matcher: ['/payment','/allorders','/cart', '/categories', '/products','/products/:path*', '/brands', '/wishlist', '/user', '/allorders,/categoryDetails/:path*'],
}


