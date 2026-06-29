import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Old static-site paths → current Next.js routes */
const LEGACY_PATHS: Record<string, string> = {
  "/learn-quran-online": "/online-quran-classes",
  "/best-online-quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/online-quran-for-kids": "/online-quran-classes-for-kids",
  "/quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/online-quran-teaching-jobs": "/our-tutors",
  "/free-resources": "/islamic-resources",
  "/free-resources.html": "/islamic-resources",
  "/about.html": "/about",
  "/index.html": "/",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (LEGACY_PATHS[pathname]) {
    return NextResponse.redirect(new URL(LEGACY_PATHS[pathname], request.url), 301);
  }

  if (pathname.endsWith(".html")) {
    const withoutHtml = pathname.slice(0, -5);
    const target = LEGACY_PATHS[withoutHtml] ?? LEGACY_PATHS[pathname] ?? withoutHtml;
    return NextResponse.redirect(new URL(target || "/", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf)).*)",
  ],
};
