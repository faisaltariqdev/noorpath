"use client";

import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, ENROLLED_STUDENTS_DISPLAY, TRIAL, TRUSTPILOT } from "@/lib/academyFacts";

const topLocations = [
  { flag: "🇺🇸", country: "United States", href: "/locations/online-quran-classes-usa" },
  { flag: "🇬🇧", country: "United Kingdom", href: "/locations/online-quran-classes-uk" },
  { flag: "🇨🇦", country: "Canada", href: "/locations/online-quran-classes-canada" },
  { flag: "🇦🇺", country: "Australia", href: "/locations/online-quran-classes-australia" },
  { flag: "🇩🇪", country: "Germany", href: "/locations/online-quran-classes-germany" },
  { flag: "🇫🇷", country: "France", href: "/locations/online-quran-classes-france" },
  { flag: "🇳🇿", country: "New Zealand", href: "/locations/online-quran-classes-new-zealand" },
  { flag: "🇩🇰", country: "Denmark", href: "/locations/online-quran-classes-denmark" },
  { flag: "🇫🇮", country: "Finland", href: "/locations/online-quran-classes-finland" },
  { flag: "🇸🇪", country: "Sweden", href: "/locations/online-quran-classes-sweden" },
  { flag: "🇳🇴", country: "Norway", href: "/locations/online-quran-classes-norway" },
  { flag: "🇮🇪", country: "Ireland", href: "/locations/online-quran-classes-ireland" },
  { flag: "🇦🇪", country: "UAE", href: "/locations/online-quran-classes-uae" },
  { flag: "🇶🇦", country: "Qatar", href: "/locations/online-quran-classes-qatar" },
  { flag: "🇸🇦", country: "Saudi Arabia", href: "/locations/online-quran-classes-saudi-arabia" },
  { flag: "🇳🇱", country: "Netherlands", href: "/locations/online-quran-classes-netherlands" },
  { flag: "🇸🇬", country: "Singapore", href: "/locations/online-quran-classes-singapore" },
  { flag: "🇳🇬", country: "Nigeria", href: "/locations/online-quran-classes-nigeria" },
];

const topCities = [
  { name: "London", href: "/online-quran-classes/london" },
  { name: "Birmingham", href: "/online-quran-classes/birmingham" },
  { name: "Manchester", href: "/online-quran-classes/manchester" },
  { name: "New York", href: "/online-quran-classes-usa" },
  { name: "Houston", href: "/online-quran-classes-usa" },
  { name: "Toronto", href: "/online-quran-classes-canada" },
  { name: "Sydney", href: "/online-quran-classes-australia" },
];

type Props = {
  title?: string;
  contextName?: string;
};

export default function QuranCountryStudentCTA({
  title = "Learn Holy Quran with Proper Tajweed & Makharij",
  contextName = "Holy Quran Reader",
}: Props) {
  const whatsappMsg = `Assalamu Alaikum! I am currently reading the ${contextName} on NoorPath Academy and would like to book a free 30-minute 1-on-1 trial class with a live tutor.`;

  return (
    <section
      className="quran-country-cta"
      style={{
        marginTop: 40,
        marginBottom: 40,
        background: "linear-gradient(145deg, #093926 0%, #0d5436 60%, #062e1f 100%)",
        borderRadius: 24,
        padding: "36px 28px",
        color: "#fff",
        boxShadow: "0 14px 40px rgba(10, 61, 40, 0.25)",
        border: "1px solid rgba(240, 192, 64, 0.25)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start" }}>

          {/* Left Column: Information & Fast Track Links */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(240, 192, 64, 0.15)",
                border: "1px solid rgba(240, 192, 64, 0.35)",
                color: "#f0c040",
                fontSize: ".75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                borderRadius: 50,
                padding: "5px 14px",
                marginBottom: 12,
              }}
            >
              ✨ Live 1-on-1 Online Quran Classes
            </span>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                lineHeight: 1.25,
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              {title}
            </h2>

            <p style={{ color: "rgba(255,255,255,.88)", fontSize: ".96rem", lineHeight: 1.7, margin: "0 0 20px" }}>
              Master Arabic pronunciation, Noorani Qaida, Tajweed rules, or Hifz memorization with dedicated male or female tutors. Flexible schedules tailored to your timezone for kids and adults.
            </p>

            {/* Trust Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {[
                `👨‍👩‍👧 ${ENROLLED_STUDENTS_DISPLAY} Enrolled Students`,
                `★ ${TRUSTPILOT.score}/5 Trustpilot Rated`,
                `🎁 Free ${TRIAL.durationMinutes}-Min Trial Class`,
                "✓ Male & Female Tutors",
              ].map((pill) => (
                <span
                  key={pill}
                  style={{
                    background: "rgba(255,255,255,.1)",
                    border: "1px solid rgba(255,255,255,.18)",
                    borderRadius: 50,
                    padding: "4px 12px",
                    fontSize: ".76rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,.95)",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Country Selector Fast Track */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: ".82rem", fontWeight: 700, color: "#f0c040", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".05em" }}>
                🌍 Select Your Country for Local Timezone Matching:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {topLocations.map((loc) => (
                  <Link
                    key={loc.country}
                    href={loc.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,.08)",
                      border: "1px solid rgba(255,255,255,.18)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: ".78rem",
                      color: "#fff",
                      textDecoration: "none",
                      transition: "all .2s ease",
                    }}
                  >
                    <span>{loc.flag}</span> <span>{loc.country}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* City Links */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: ".82rem", fontWeight: 700, color: "rgba(255,255,255,.7)", margin: "0 0 8px" }}>
                Popular Cities:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {topCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    style={{
                      fontSize: ".75rem",
                      color: "rgba(255,255,255,.8)",
                      textDecoration: "underline",
                    }}
                  >
                    {city.name} Quran Classes
                  </Link>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div>
              <WhatsAppLink
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#25D366",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: 50,
                  fontWeight: 800,
                  fontSize: ".94rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(37,211,102,.35)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Instant WhatsApp Trial Request →
              </WhatsAppLink>
            </div>
          </div>

          {/* Right Column: Embedded Trial Form Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: 20,
              padding: "24px 20px",
              boxShadow: "0 8px 30px rgba(0,0,0,.15)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.2rem",
                color: "#f0c040",
                margin: "0 0 6px",
                textAlign: "center",
              }}
            >
              Book a Free 30-Min Trial Class
            </h3>
            <p style={{ color: "rgba(255,255,255,.8)", fontSize: ".84rem", textAlign: "center", margin: "0 0 16px" }}>
              No credit card required. We match your schedule in 24 hours.
            </p>
            <CTAForm compact formVariant="quran-reader-bottom" idPrefix="quran-cta" />
          </div>

        </div>
      </div>
    </section>
  );
}
