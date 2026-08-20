import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NoorPath Academy — Online Quran Classes",
    short_name: "NoorPath",
    description:
      "Live 1-on-1 online Quran classes for kids & families. Tajweed, Hifz, Noorani Qaida, Arabic. Free 30-min trial.",
    start_url: "/",
    display: "standalone",
    background_color: "#041f14",
    theme_color: "#0a6e4f",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["education", "religion"],
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
