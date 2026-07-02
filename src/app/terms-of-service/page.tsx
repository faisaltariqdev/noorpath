import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NoorPath Academy terms of service — rules and conditions for using our online Quran education platform.",
  alternates: { canonical: "https://www.noorpath.online/terms-of-service" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <h1>Terms of Service</h1>
          <p>Last updated: January 2026</p>
        </div>
      </div>
      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>By using NoorPath Academy&apos;s website and services, you agree to these terms.</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", marginBottom: 12 }}>Use of Services</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>Our online Quran classes are for educational purposes. You agree to provide accurate information when booking and to attend scheduled classes or provide 24-hour notice for cancellations.</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", marginBottom: 12 }}>Payments & Cancellation</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>Subscriptions are billed monthly. Cancel anytime with 7 days notice before your billing date. No refunds for partial months, but you may use remaining sessions.</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", marginBottom: 12 }}>Contact</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Questions? Contact us at <Link href="mailto:info@noorpath.online" style={{ color: "var(--emerald)" }}>info@noorpath.online</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
