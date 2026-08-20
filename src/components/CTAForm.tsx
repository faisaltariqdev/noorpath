"use client";
import Link from "next/link";
import { CONTACT, ENROLLED_STUDENTS_DISPLAY, TRIAL, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";
import { useTrialFormSubmit } from "@/hooks/useTrialFormSubmit";
import WhatsAppLink from "@/components/WhatsAppLink";

const countries = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Germany",
  "Nigeria",
  "Qatar",
  "Kuwait",
  "Saudi Arabia",
  "Pakistan",
  "France",
  "Malaysia",
  "Indonesia",
  "Turkey",
  "South Africa",
  "India",
  "Bangladesh",
  "Ireland",
  "Netherlands",
  "Sweden",
  "Norway",
  "Finland",
  "Denmark",
  "New Zealand",
  "Singapore",
  "Other",
];

type Props = {
  /** Visual variant for compact embeds */
  compact?: boolean;
  formVariant?: string;
  /** Prefix for input ids when multiple forms share a page */
  idPrefix?: string;
  /** Preselect the country when the form appears on a country landing page */
  defaultCountry?: string;
};

export default function CTAForm({
  compact = false,
  formVariant = "standard",
  idPrefix = "trial",
  defaultCountry = "",
}: Props) {
  const { status, msg, handleSubmit } = useTrialFormSubmit({ formVariant });
  const id = (name: string) => `${idPrefix}-${name}`;

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: compact ? "18px 8px" : "24px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ fontSize: "2.6rem", lineHeight: 1 }}>🎉</div>
        <div
          style={{
            color: compact ? "var(--emerald)" : "var(--gold-lt)",
            fontWeight: 800,
            fontSize: "1.1rem",
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.3,
          }}
        >
          JazakAllah Khair — you&apos;re all set!
        </div>
        <p
          style={{
            color: compact ? "var(--slate)" : "rgba(255,255,255,.85)",
            fontSize: ".88rem",
            lineHeight: 1.7,
            maxWidth: 340,
            margin: 0,
          }}
        >
          {msg}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          {["✓ Request confirmed", "✓ No credit card taken", "✓ Reply within 24 hrs"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: ".73rem",
                fontWeight: 700,
                color: compact ? "var(--emerald)" : "#4ade80",
                background: compact ? "rgba(10,110,79,.08)" : "rgba(74,222,128,.1)",
                border: `1px solid ${compact ? "rgba(10,110,79,.18)" : "rgba(74,222,128,.25)"}`,
                borderRadius: 50,
                padding: "4px 12px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

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
      <input type="hidden" name="course" value={compact ? "Trial — from article/course CTA" : "Free trial class"} />

      <label className="sr-only" htmlFor={id("name")}>Parent / your full name</label>
      <input
        className="cta-input"
        type="text"
        name="name"
        id={id("name")}
        placeholder="Parent / your full name"
        required
        autoComplete="name"
      />

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

      <label className="sr-only" htmlFor={id("country")}>Country</label>
      <select
        className="cta-input"
        name="country"
        id={id("country")}
        required
        style={{ cursor: "pointer" }}
        defaultValue={countries.includes(defaultCountry) ? defaultCountry : ""}
      >
        <option value="" disabled>
          Select your country
        </option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <label className="sr-only" htmlFor={id("learnerType")}>Who will take the class?</label>
      <select
        className="cta-input"
        name="learner_type"
        id={id("learnerType")}
        required
        defaultValue=""
        style={{ cursor: "pointer" }}
      >
        <option value="" disabled>Who will take the class?</option>
        <option value="child">My child</option>
        <option value="self">Me</option>
        <option value="other">Another family member</option>
      </select>

      <label className="sr-only" htmlFor={id("childName")}>Learner&apos;s name</label>
      <input
        className="cta-input"
        type="text"
        name="child_name"
        id={id("childName")}
        placeholder="Learner's name"
        required
        autoComplete="off"
      />

      <label className="sr-only" htmlFor={id("childAge")}>Learner&apos;s age</label>
      <input
        className="cta-input"
        type="number"
        name="child_age"
        id={id("childAge")}
        placeholder="Learner's age"
        required
        min={3}
        max={100}
        inputMode="numeric"
      />

      <label className="sr-only" htmlFor={id("preferredTime")}>Preferred lesson time</label>
      <select
        className="cta-input"
        name="preferred_class_time"
        id={id("preferredTime")}
        defaultValue=""
        style={{ cursor: "pointer" }}
      >
        <option value="">Preferred time (optional)</option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
        <option value="Weekend">Weekend</option>
        <option value="Flexible">Flexible</option>
      </select>

      <label className="sr-only" htmlFor={id("tutorPreference")}>Tutor preference</label>
      <select
        className="cta-input"
        name="tutor_preference"
        id={id("tutorPreference")}
        defaultValue=""
        style={{ cursor: "pointer" }}
      >
        <option value="">Tutor preference (optional)</option>
        <option value="Female tutor requested">Female tutor requested</option>
        <option value="Male tutor requested">Male tutor requested</option>
        <option value="No preference">No preference</option>
      </select>

      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 8,
          color: compact ? "var(--muted)" : "rgba(255,255,255,.82)",
          fontSize: ".78rem",
          lineHeight: 1.5,
          marginBottom: 14,
          cursor: "pointer",
        }}
      >
        <input type="checkbox" name="contact_consent" value="Agreed" required style={{ marginTop: 3 }} />
        <span>
          I agree that NoorPath may contact me about this free trial.{" "}
          <Link href="/privacy-policy" style={{ color: compact ? "var(--emerald)" : "var(--gold-lt)" }}>
            Privacy
          </Link>
          {" · "}
          <Link href="/terms-of-service" style={{ color: compact ? "var(--emerald)" : "var(--gold-lt)" }}>
            Terms
          </Link>
        </span>
      </label>

      {/* Trust micro-copy — above the submit button */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: compact ? 6 : 8,
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        {[
          `✓ Join ${ENROLLED_STUDENTS_DISPLAY} students`,
          "✓ No credit card required",
          `✓ Free ${TRIAL.durationMinutes}-min class`,
        ].map((item) => (
          <span
            key={item}
            style={{
              fontSize: ".7rem",
              fontWeight: 700,
              color: compact ? "var(--emerald)" : "rgba(255,255,255,.8)",
              letterSpacing: ".01em",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <button type="submit" className="btn-cta-submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{
              width: 16, height: 16, border: "2.5px solid rgba(255,255,255,.35)",
              borderTopColor: "#fff", borderRadius: "50%",
              display: "inline-block", animation: "spin 0.7s linear infinite",
            }} />
            Sending your request…
          </span>
        ) : "Book My Free Class →"}
      </button>

      {msg && status === "error" && (
        <p
          style={{
            color: compact ? "#b91c1c" : "#ffb4b4",
            fontSize: ".82rem",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {msg}{" "}
          <WhatsAppLink
            href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_TRIAL_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: compact ? "var(--emerald)" : "var(--gold-lt)", fontWeight: 700 }}
          >
            Open WhatsApp
          </WhatsAppLink>
        </p>
      )}

      <p
        style={{
          color: compact ? "var(--muted)" : "rgba(255,255,255,.6)",
          fontSize: ".72rem",
          textAlign: "center",
          marginTop: 12,
          lineHeight: 1.6,
        }}
      >
        We confirm your class time on WhatsApp or email — usually within 24 hours.
      </p>
    </form>
  );
}
