import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NoorPath Academy — Online Quran Classes",
    short_name: "NoorPath",
    description:
      "Certified 1-on-1 online Quran classes for kids & families. Tajweed, Hifz, Noorani Qaida, Arabic. Free 30-min trial.",
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
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/og-image.png",
        sizes: "1200x630",
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
