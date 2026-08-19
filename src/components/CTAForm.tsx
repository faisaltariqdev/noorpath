"use client";
import Link from "next/link";
import { CONTACT, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";
import { useTrialFormSubmit } from "@/hooks/useTrialFormSubmit";
import WhatsAppLink from "@/components/WhatsAppLink";

const countries = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Germany",
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
};

export default function CTAForm({ compact = false, formVariant = "standard", idPrefix = "trial" }: Props) {
  const { status, msg, handleSubmit } = useTrialFormSubmit({ formVariant });
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
        defaultValue=""
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

      <label className="sr-only" htmlFor={id("childName")}>Child&apos;s name</label>
      <input
        className="cta-input"
        type="text"
        name="child_name"
        id={id("childName")}
        placeholder="Child's name"
        required
        autoComplete="off"
      />

      <label className="sr-only" htmlFor={id("childAge")}>Child&apos;s age</label>
      <input
        className="cta-input"
        type="number"
        name="child_age"
        id={id("childAge")}
        placeholder="Child's age"
        required
        min={3}
        max={80}
        inputMode="numeric"
      />

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

      <button type="submit" className="btn-cta-submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Book My Free Class"}
      </button>

      {msg && (
        <p
          style={{
            color: status === "success" ? "var(--gold-lt)" : compact ? "#b91c1c" : "#ffb4b4",
            fontSize: ".82rem",
            textAlign: "center",
            marginTop: 10,
          }}
        >
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
      <p
        style={{
          color: compact ? "var(--muted)" : "rgba(255,255,255,.72)",
          fontSize: ".72rem",
          textAlign: "center",
          marginTop: 12,
        }}
      >
        No credit card. We confirm your class time on WhatsApp.
      </p>
    </form>
  );
}
