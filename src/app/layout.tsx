import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import TrackingConsent from "@/components/TrackingConsent";

// Enforce build-time prerendering across the App Router.
// Any server-only dynamic usage will now fail fast during build.
export const dynamic = "error";

export const viewport: Viewport = {
  themeColor: "#0a6e4f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

// ─── Fonts: self-hosted at build time — removes render-blocking Google CDN request ───
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
  preload: false, // Arabic font: not needed for initial paint
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noorpath.online"),
  title: {
    default: "Learn Quran Online | NoorPath Academy — Free Trial for Kids & Families",
    template: "%s | NoorPath Academy",
  },
  description:
    "Join NoorPath Academy for live 1-on-1 online Quran classes: Noorani Qaida, Tajweed, Hifz, Arabic and Islamic studies. Free 30-min trial.",
  keywords: [
    "learn quran online","online quran classes","quran tutor online",
    "online quran academy","quran classes for kids","tajweed classes online",
    "hifz program online","noorani qaida online","arabic language online",
    "islamic studies online","daily duas for kids","female quran tutor",
    "family quran classes","online quran lessons",
    "learn quran from home","online quran teacher","quran learning online",
    "online islamic education","1 on 1 quran classes","free quran classes online",
  ],
  authors: [{ name: "Faisal Tariq", url: "https://www.noorpath.online/founder" }],
  creator: "NoorPath Academy",
  publisher: "NoorPath Academy",
  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.noorpath.online",
    siteName: "NoorPath Academy",
    title: "Learn Quran Online | NoorPath Academy — Free Trial",
    description: "Live one-to-one online Quran classes for kids and adults — Qaida, Tajweed, Hifz, Arabic and Islamic studies. Request a free 30-minute trial.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Academy — Online Quran Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NoorPathAcademy",
    title: "Learn Quran Online | NoorPath Academy — Free 30-Min Trial",
    description: "Online Quran classes for kids and adults. Tajweed, Hifz, Qaida, Arabic, family plans and a free trial.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      // favicon.ico (src/app/favicon.ico) is auto-injected by Next and contains
      // 16/32/48/256 — the 48px size Google Search prefers. These add modern + hi-res.
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // ── Replace the empty string with your Google Search Console verification token ──
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <head>
        <meta name="msapplication-TileColor" content="#0a6e4f" />
        {/* Preconnect for faster Google Fonts DNS resolution */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//formsubmit.co" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
      </head>
      <body>
        <OrganizationJsonLd />
        <Navbar />
        {/* padding-top accounts for fixed Navbar + promo bar height */}
        <main id="main-content" style={{ paddingTop: 0 }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <TrackingConsent />
      </body>
    </html>
  );
}
