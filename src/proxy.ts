import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TEMPLATE_CITY_NOINDEX_SLUGS } from "@/data/cities";
import { holyQuranRedirects } from "@/data/holy-quran";
import { LEGACY_PATHS } from "@/data/legacyPaths";

const HOLY_QURAN_PATHS = holyQuranRedirects();

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (HOLY_QURAN_PATHS[pathname]) {
    const dest = new URL(HOLY_QURAN_PATHS[pathname], request.url);
    const res = NextResponse.redirect(dest, 301);
    res.headers.set("Link", `<${dest.href}>; rel="canonical"`);
    return res;
  }

  if (LEGACY_PATHS[pathname]) {
    const dest = new URL(LEGACY_PATHS[pathname], request.url);
    const res = NextResponse.redirect(dest, 301);
    res.headers.set("Link", `<${dest.href}>; rel="canonical"`);
    return res;
  }

  if (pathname.endsWith(".html")) {
    const withoutHtml = pathname.slice(0, -5);
    const target = LEGACY_PATHS[pathname] ?? LEGACY_PATHS[withoutHtml] ?? withoutHtml;
    const cleanTarget = target === "/index" || target === "" ? "/" : target;
    const dest = new URL(cleanTarget, request.url);
    const res = NextResponse.redirect(dest, 301);
    res.headers.set("Link", `<${dest.href}>; rel="canonical"`);
    return res;
  }

  // Stronger than meta alone: HTTP header for thin city templates excluded from indexing.
  const cityMatch = /^\/online-quran-classes\/([^/]+)\/?$/.exec(pathname);
  if (cityMatch && TEMPLATE_CITY_NOINDEX_SLUGS.has(cityMatch[1])) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, follow");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf)).*)",
  ],
};
