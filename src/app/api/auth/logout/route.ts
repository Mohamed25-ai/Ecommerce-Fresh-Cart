import { NextResponse } from "next/server";


export async function GET() {
    const response = NextResponse.redirect('/login');
    response.cookies.delete('next-auth.csrf-token');
    return response;
}
