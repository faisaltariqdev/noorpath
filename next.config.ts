import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Country hubs live at /locations/online-quran-classes-{country}. Read the slugs from the
// country data so every hub also answers its short forms (/locations/denmark, etc.).
const COUNTRY_SHORT_NAMES = [
  ...readFileSync(join(process.cwd(), "src/data/countryMarkets.ts"), "utf8").matchAll(/"online-quran-classes-([a-z-]+)": \{/g),
].map((match) => match[1]);

// Other names people type for a country; the value must be one of COUNTRY_SHORT_NAMES.
const COUNTRY_ALIASES: Record<string, string> = {
  "united-kingdom": "uk", england: "uk", britain: "uk", "great-britain": "uk", scotland: "uk", wales: "uk",
  "united-states": "usa", america: "usa", us: "usa",
  "united-arab-emirates": "uae", emirates: "uae",
  saudi: "saudi-arabia", ksa: "saudi-arabia",
  hongkong: "hong-kong", nz: "new-zealand", "newzealand": "new-zealand", turkiye: "turkey", holland: "netherlands",
};

function countryShortFormRedirects() {
  const names: [string, string][] = [
    ...COUNTRY_SHORT_NAMES.map((name): [string, string] => [name, name]),
    ...Object.entries(COUNTRY_ALIASES).filter(([, target]) => COUNTRY_SHORT_NAMES.includes(target)),
  ];
  return names.flatMap(([from, to]) => {
    const destination = `/locations/online-quran-classes-${to}`;
    const sources = [`/locations/${from}`, `/online-quran-classes/${from}`, `/online-quran-classes-${from}`];
    if (from !== to) sources.push(`/locations/online-quran-classes-${from}`);
    return sources.map((source) => ({ source, destination, permanent: true }));
  });
}

const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,

  env: {
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA ?? "",
    NEXT_PUBLIC_BUILD_DATE: process.env.VERCEL_GIT_COMMIT_SHA
      ? new Date().toISOString().split("T")[0]
      : "",
  },

  // Image optimization: prefer avif then webp, serve from /public
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [],
  },

  // Belt-and-suspenders host canonicalization (also configure in Vercel → Domains).
  // Apex → www. HTTPS is primarily enforced by Vercel + HSTS below.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "noorpath.online" }],
        destination: "https://www.noorpath.online/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.noorpath.online" }, { type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://www.noorpath.online/:path*",
        permanent: true,
      },
      {
        source: "/software-services",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/custom-software",
        destination: "/courses",
        permanent: true,
      },
      // ── Typo URL 301 redirect ───────────────────────────────────────────────
      {
        source: "/free-or-quran-classes-online",
        destination: "/free-quran-classes-online",
        permanent: true,
      },
      {
        source: "/free-or-quran-classes-online.html",
        destination: "/free-quran-classes-online",
        permanent: true,
      },
      // ── Root / directory index .html redirects ──────────────────────────────
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/index.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/index",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/courses/index.html",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/locations/index.html",
        destination: "/locations",
        permanent: true,
      },
      // ── Country hub short forms → canonical hub URL ─────────────────────────
      ...countryShortFormRedirects(),
      // ── Global 301 redirect for all .html URLs to their clean versions ───────
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // ── Security headers on all routes ────────────────────────────────────────
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // ── Long cache for public images, fonts, icons ────────────────────────────
      // Note: /_next/static is managed automatically by Next.js (immutable cache)
      {
        source: "/:file(.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, stale-while-revalidate=86400" },
        ],
      },
      // ── Moderate cache for HTML pages ──────────────────────────────────────────
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
