import { config as authConfig } from "./auth";
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // const isLoggedIn = !!req.auth;
  // console.log("ROUTE: ", req.nextUrl.pathname)
  // console.log("IS LOGGED IN: ", isLoggedIn)
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log("NEXT URL: ", nextUrl.pathname);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  console.log("IS API AUTH ROUTE: ", isApiAuthRoute);
  console.log("IS PUBLIC ROUTE: ", isPublicRoute);
  console.log("IS AUTH ROUTE: ", isAuthRoute);
  console.log("IS LOGGED IN: ", isLoggedIn);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    console.log("REDIRECTING TO SIGN IN");
    return Response.redirect(new URL("/api/auth/signin", nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
