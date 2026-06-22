import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NoorPath Academy privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.noorpath.online/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </div>
      </div>
      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
              NoorPath Academy (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you use our website and services.
            </p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", marginBottom: 12 }}>Information We Collect</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>We collect information you provide when booking a trial class — including name, email, phone number, and country. We use this only to contact you about your classes.</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", marginBottom: 12 }}>How We Use Your Information</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>Your information is used solely to: schedule your classes, send progress reports, and provide customer support. We never sell your data to third parties.</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", marginBottom: 12 }}>Contact</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              For privacy questions, contact us at <Link href="mailto:info@noorpath.online" style={{ color: "var(--emerald)" }}>info@noorpath.online</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
