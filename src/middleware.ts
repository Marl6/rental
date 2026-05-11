import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function hasSupabaseAuthCookie(request: NextRequest) {
  const cookies = request.cookies.getAll();
  return cookies.some(
    (cookie) => cookie.name.startsWith("sb-") && cookie.name.endsWith("-auth-token"),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAuthRoute =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/reset-password";
  const isAuthenticated = hasSupabaseAuthCookie(request);

  if (isAdminRoute && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirectedFrom", pathname);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register", "/reset-password"],
};
