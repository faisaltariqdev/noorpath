import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Old and consolidated paths → current canonical owners */
const LEGACY_PATHS: Record<string, string> = {
  "/best-online-quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/online-quran-academy": "/online-quran-classes",
  "/quran-lesson-online": "/online-quran-classes",
  "/studying-quran-online": "/learn-quran-online",
  "/courses/quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/courses/tajweed-classes-online": "/learn-tajweed-online",
  "/courses/hifz-program-online": "/hifz-quran-online",
  "/online-quran-learning": "/learn-quran-online",
  "/quran-teaching": "/quran-teacher-online",
  "/quran-teaching-online": "/learn-quran-online",
  "/learn-quran-online.html": "/learn-quran-online",
  "/online-quran-for-kids": "/online-quran-classes-for-kids",
  "/quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/online-quran-teaching-jobs": "/our-tutors",
  "/free-resources": "/islamic-resources",
  "/free-resources.html": "/islamic-resources",
  "/about.html": "/about",
  "/index.html": "/",
};

export function proxy(request: NextRequest) {
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
