import { NextResponse } from "next/server";

export function middleware(request) {
  const authCookie = request.cookies.get(
    "school_owner_auth"
  );

  const isAuthenticated =
    authCookie?.value === "authenticated";

  if (!isAuthenticated) {
    return NextResponse.redirect(
      new URL("/owner-login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/accounts/:path*"],
};