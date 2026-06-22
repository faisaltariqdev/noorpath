import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
  authors: [{ name: "NoorPath Academy", url: "https://www.noorpath.online" }],
  creator: "NoorPath Academy",
  publisher: "NoorPath Academy",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.noorpath.online",
    siteName: "NoorPath Academy",
    title: "Learn Quran Online | NoorPath Academy — Free Trial",
    description: "Join 12,000+ students worldwide. Quran classes for kids & adults — Qaida, Tajweed, Hifz, Arabic. Certified tutors. Family plans. Free 30-min trial.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NoorPathAcademy",
    title: "Learn Quran Online | NoorPath Academy — Free 30-Min Trial",
    description: "Online Quran classes for kids & adults. Tajweed, Hifz, Qaida, Arabic. Family plans. Certified tutors. Free trial.",
    images: ["/og-image.svg"],
  },
  verification: { google: "" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/og-image.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
