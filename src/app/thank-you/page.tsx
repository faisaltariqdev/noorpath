import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { TRIAL } from "@/lib/academyFacts";
import { absolutePageTitle } from "@/lib/pageTitle";
import ThankYouWhatsAppButton from "@/components/ThankYouWhatsAppButton";

export const metadata: Metadata = {
  title: absolutePageTitle("Thank You — Trial Request Received | NoorPath Academy"),
  description: "NoorPath Academy has received your free-trial request and will contact you to confirm tutor and schedule availability.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      {/* ── Google Ads page_view + GA4 generate_lead (only after real form submit) ── */}
      <Script id="google-ads-thankyou-pageview" strategy="afterInteractive">
        {`
          (function () {
            var GA_ID = '${process.env.NEXT_PUBLIC_GA_ID ?? "G-CTEG1YPKCT"}';
            var tries = 0;
            function fire() {
              if (typeof window.gtag !== 'function') {
                if (tries++ < 100) { setTimeout(fire, 100); }
                return;
              }
              window.gtag('config', 'AW-18212142815', { page_path: '/thank-you' });
              var params = new URLSearchParams(window.location.search);
              var fromForm = params.get('submitted') === '1';
              var alreadyTracked = sessionStorage.getItem('np_lead_tracked') === '1';
              if (fromForm && !alreadyTracked) {
                window.gtag('event', 'generate_lead', {
                  send_to: GA_ID,
                  event_category: 'engagement',
                  event_label: 'free_trial_booking',
                  value: 1,
                  currency: 'USD',
                });
                sessionStorage.setItem('np_lead_tracked', '1');
              }
            }
            fire();
          })();
        `}
      </Script>

      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a3d28 0%, #0d5436 50%, #063d2c 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
        <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>

          {/* Icon */}
          <div style={{ fontSize: "4rem", marginBottom: 24 }}>🕌</div>

          {/* Heading */}
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: 16, lineHeight: 1.3 }}>
            JazakAllah Khair!<br />Your Trial Request Is Received
          </h1>

          {/* Sub */}
          <p style={{ color: "rgba(255,255,255,.82)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 32 }}>
            We have received your request. Our team will contact you on WhatsApp
            or email to confirm tutor and schedule availability for your free{" "}
            <strong style={{ color: "#f0c040" }}>{TRIAL.durationMinutes}-minute trial</strong>.
          </p>

          {/* Info card */}
          <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 16, padding: "24px 28px", marginBottom: 32, textAlign: "left" }}>
            <h2 style={{ color: "#f0c040", fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: 16 }}>
              What happens next?
            </h2>
            {[
              { step: "1", text: "We will contact you to confirm an available tutor and class time in your timezone" },
              { step: "2", text: `After confirmation, you will receive joining details for the ${TRIAL.durationMinutes}-minute online session` },
              { step: "3", text: "The learner attends the trial before deciding whether to enrol in a paid plan" },
            ].map(({ step, text }) => (
              <div key={step} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0a6e4f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: ".85rem", flexShrink: 0 }}>
                  {step}
                </div>
                <p style={{ color: "rgba(255,255,255,.85)", fontSize: ".92rem", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <Suspense fallback={<div style={{ color: "#fff", padding: "14px 28px" }}>Loading WhatsApp Fast-Track…</div>}>
            <ThankYouWhatsAppButton />
          </Suspense>

          <br />

          <Link
            href="/"
            style={{ color: "rgba(255,255,255,.6)", fontSize: ".88rem", textDecoration: "underline" }}
          >
            ← Back to NoorPath Academy
          </Link>
        </div>
      </div>
    </>
  );
}
