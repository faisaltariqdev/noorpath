import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable trailing slash for clean URLs
  trailingSlash: false,
  // Performance: compress assets
  compress: true,
  // Power by header remove for security
  poweredByHeader: false,
  // Images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
