import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

// ─── Replace with your Google Analytics 4 Measurement ID ───────────────────────────
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noorpath.online"),
  title: {
    default: "Learn Quran Online | NoorPath Academy — Free Trial for Kids & Families",
    template: "%s | NoorPath Academy",
  },
  description:
    "NoorPath Academy — #1 online Quran academy for families worldwide. Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies & daily duas for kids. Certified tutors. Family plans. Free 30-min trial.",
  keywords: [
    "learn quran online","online quran classes","quran tutor online",
    "online quran academy","quran classes for kids","tajweed classes online",
    "hifz program online","noorani qaida online","arabic language online",
    "islamic studies online","daily duas for kids","online quran uk",
    "online quran usa","online quran canada","online quran australia",
    "female quran tutor","family quran classes",
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
    locale: "en_US",
    url: "https://www.noorpath.online",
    siteName: "NoorPath Academy",
    title: "Learn Quran Online | NoorPath Academy — Free Trial",
    description: "Join 12,000+ students worldwide. Quran classes for kids & adults — Qaida, Tajweed, Hifz, Arabic. Certified tutors. Family plans. Free 30-min trial.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "NoorPath Academy — Online Quran Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NoorPathAcademy",
    title: "Learn Quran Online | NoorPath Academy — Free 30-Min Trial",
    description: "Online Quran classes for kids & adults. Tajweed, Hifz, Qaida, Arabic. Family plans. Certified tutors. Free trial.",
    images: ["/og-image.svg"],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/og-image.svg" sizes="any" />
        <meta name="theme-color" content="#0a6e4f" />
        <meta name="msapplication-TileColor" content="#0a6e4f" />
        {/* Preconnect for faster Google Fonts DNS resolution */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//formsubmit.co" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body>
        <Navbar />
        {/* padding-top accounts for fixed Navbar + promo bar height */}
        <main id="main-content" style={{ paddingTop: 0 }}>{children}</main>
        <Footer />
        <WhatsAppFloat />

        {/* ── Google Analytics 4 — strategy="afterInteractive" loads after page is interactive ── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
