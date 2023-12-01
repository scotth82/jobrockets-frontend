import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("request host = ", request.headers.get("host"));
  console.log("request pathname = ", request.nextUrl.pathname);

  let subdomain: string | null = request.headers.get("host");
  let path: string | null = request.nextUrl.pathname;

  if (subdomain!.startsWith("test.")) {
    return NextResponse.rewrite(new URL("/test", request.url));
  }

  if (subdomain!.startsWith("users.")) {
    return NextResponse.rewrite(new URL("/users" + path, request.url));
  }
}
