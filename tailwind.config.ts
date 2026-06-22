import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#0a6e4f",
          mid: "#0f8f66",
          lt: "#14b882",
        },
        gold: {
          DEFAULT: "#c9922a",
          lt: "#e8b84b",
        },
        cream: "#fdf8f0",
        ivory: "#f7f2e8",
        charcoal: "#1a1a2e",
        "np-slate": "#2d3748",
        muted: "#6b7280",
        border: "rgba(10,110,79,.12)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        arabic: ["Amiri", "serif"],
      },
      boxShadow: {
        sm: "0 2px 12px rgba(10,110,79,.08)",
        md: "0 8px 32px rgba(10,110,79,.14)",
        lg: "0 20px 60px rgba(10,110,79,.18)",
      },
      borderRadius: {
        np: "16px",
        "np-lg": "24px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #041f14 0%, #0a3d28 40%, #0a6e4f 100%)",
        "footer-gradient":
          "linear-gradient(135deg,#0d2b1e 0%,#0a1f16 100%)",
        "page-hero-gradient":
          "linear-gradient(135deg, #0a3d28 0%, #0d5436 60%, #0a4a30 100%)",
        "cta-gradient":
          "linear-gradient(135deg,#0a3d28 0%,#0d4a31 50%,#0a3d28 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
