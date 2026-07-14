import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CONTACT, TRIAL } from "@/lib/academyFacts";

export const metadata: Metadata = {
  title: "Thank You — Trial Request Received | NoorPath Academy",
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
          <a
            href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Assalamu Alaikum. I just submitted a free trial request on NoorPath Academy. Please confirm tutor and schedule availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: "1rem", textDecoration: "none", marginBottom: 20 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Message Us on WhatsApp
          </a>

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
