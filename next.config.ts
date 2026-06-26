import type { NextConfig } from "next";

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
