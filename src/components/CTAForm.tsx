"use client";
import { useState } from "react";
import Link from "next/link";
import { CONTACT, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";
import { useTrialFormSubmit } from "@/hooks/useTrialFormSubmit";
import WhatsAppLink from "@/components/WhatsAppLink";

const countries = [
  "United Kingdom","United States","United Arab Emirates","Canada","Australia",
  "Germany","Qatar","Kuwait","Saudi Arabia","Pakistan","France","Malaysia",
  "Indonesia","Turkey","South Africa","India","Bangladesh","Other",
];

const coursesOptions = [
  "Family Plan — Multiple Siblings",
  "All-in-One Kids (Qaida + Duas + Hadith)",
  "Quran Recitation (Beginner)",
  "Tajweed Rules","Hifz Program","Arabic Language",
  "Islamic Studies","Kids Quran Program","Daily Duas for Kids",
];

const classTimes = ["Morning", "Afternoon", "Evening", "Flexible"];

type Props = {
  /** Visual variant for compact embeds */
  compact?: boolean;
  formVariant?: string;
  /** Prefix for input ids when multiple forms share a page */
  idPrefix?: string;
};

export default function CTAForm({ compact = false, formVariant = "standard", idPrefix = "trial" }: Props) {
  const [familyPlan, setFamilyPlan] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { status, msg, handleSubmit } = useTrialFormSubmit({ familyPlan, formVariant });
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? "cta-form-compact" : undefined}>
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

      <label className="sr-only" htmlFor={id("name")}>Your full name</label>
      <input className="cta-input" type="text" name="name" id={id("name")} placeholder="Your Full Name" required autoComplete="name" />

      <label className="sr-only" htmlFor={id("contact")}>WhatsApp number or email</label>
      <input
        className="cta-input"
        type="text"
        name="contact"
        id={id("contact")}
        placeholder="WhatsApp number or email"
        required
        autoComplete="tel"
        inputMode="text"
      />

      <label className="sr-only" htmlFor={id("classTime")}>Preferred class time</label>
      <select className="cta-input" name="preferred_class_time" id={id("classTime")} required style={{ cursor: "pointer" }} defaultValue="">
        <option value="" disabled>Preferred class time</option>
        {classTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      {!compact && (
        <div style={{ marginBottom: 12 }}>
          <button
            type="button"
            onClick={() => setMoreOpen((o) => !o)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,.25)",
              color: "rgba(255,255,255,.88)",
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: ".82rem",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
            }}
            aria-expanded={moreOpen}
          >
            {moreOpen ? "Hide optional details ▲" : "Tell us more (optional) ▼"}
          </button>
          {moreOpen && (
            <div style={{ marginTop: 12 }}>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".72rem", marginBottom: 10 }}>
                Optional — helps us match a tutor faster. You can skip this.
              </p>
              <label className="sr-only" htmlFor={id("country")}>Select your country</label>
              <select className="cta-input" name="country" id={id("country")} style={{ cursor: "pointer" }} defaultValue="">
                <option value="">Country (optional)</option>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <label className="sr-only" htmlFor={id("learners")}>Who will attend?</label>
              <select className="cta-input" name="learners" id={id("learners")} style={{ cursor: "pointer" }} defaultValue="">
                <option value="">Who will attend? (optional)</option>
                {["1 child","2 siblings","3 siblings","4 siblings","5+ siblings","1 adult","More than 1 adult"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.82)", fontSize: ".88rem", marginBottom: 12, cursor: "pointer" }}>
                <input type="checkbox" checked={familyPlan} onChange={(e) => setFamilyPlan(e.target.checked)} />
                <span>Enrolling 2 or more siblings (family plan)</span>
              </label>
              <label className="sr-only" htmlFor={id("course")}>Select a course</label>
              <select className="cta-input" name="course" id={id("course")} style={{ cursor: "pointer" }} defaultValue="">
                <option value="">Course interest (optional)</option>
                {coursesOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <label className="sr-only" htmlFor={id("timezone")}>Your timezone</label>
              <input className="cta-input" type="text" name="timezone" id={id("timezone")} placeholder="Timezone (optional)" />
              <label className="sr-only" htmlFor={id("tutorPreference")}>Tutor preference</label>
              <select className="cta-input" name="tutor_preference" id={id("tutorPreference")} style={{ cursor: "pointer" }} defaultValue="">
                <option value="">Tutor preference (optional)</option>
                <option value="No preference">No preference</option>
                <option value="Female tutor requested">Female tutor requested</option>
                <option value="Male tutor requested">Male tutor requested</option>
              </select>
            </div>
          )}
        </div>
      )}

      {compact && (
        <>
          <input type="hidden" name="course" value="Trial — from article/course CTA" />
          <input type="hidden" name="tutor_preference" value="No preference" />
        </>
      )}

      <label style={{ display: "flex", alignItems: "flex-start", gap: 8, color: compact ? "var(--muted)" : "rgba(255,255,255,.82)", fontSize: ".78rem", lineHeight: 1.5, marginBottom: 14, cursor: "pointer" }}>
        <input type="checkbox" name="contact_consent" value="Agreed" required style={{ marginTop: 3 }} />
        <span>
          I agree that NoorPath may contact me by email, phone or WhatsApp about this trial request. I have read the{" "}
          <Link href="/privacy-policy" style={{ color: compact ? "var(--emerald)" : "var(--gold-lt)" }}>Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms-of-service" style={{ color: compact ? "var(--emerald)" : "var(--gold-lt)" }}>Terms of Service</Link>.
        </span>
      </label>

      <button type="submit" className="btn-cta-submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Book My Free Class"}
      </button>

      {msg && (
        <p style={{ color: status === "success" ? "var(--gold-lt)" : compact ? "#b91c1c" : "#ffb4b4", fontSize: ".82rem", textAlign: "center", marginTop: 10 }}>
          {msg}{" "}
          {status === "error" && (
            <WhatsAppLink
              href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_TRIAL_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: compact ? "var(--emerald)" : "var(--gold-lt)", fontWeight: 700 }}
            >
              Open WhatsApp
            </WhatsAppLink>
          )}
        </p>
      )}
      <p style={{ color: compact ? "var(--muted)" : "rgba(255,255,255,.72)", fontSize: ".72rem", textAlign: "center", marginTop: 12 }}>
        No credit card is required. Tutor availability is confirmed after your request.
      </p>
    </form>
  );
}
