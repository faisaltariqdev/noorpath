import Link from "next/link";
import { MessageCircle, Zap, Phone, MessageSquare } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, PRICING_PLANS, TRIAL, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";

interface Props {
  whatsappText?: string;
  isNorthAmerica?: boolean;
}

export default function LocationHeroCtaCard({ whatsappText, isNorthAmerica }: Props) {
  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    whatsappText ?? WHATSAPP_TRIAL_MESSAGE,
  )}`;

  return (
    <div className="location-hero-cta-card">
      <div className="location-hero-cta-text">
        <span className="location-hero-cta-pill">
          {TRIAL.classes} Free Trial Classes
        </span>
        <span className="location-hero-cta-divider" aria-hidden="true">·</span>
        <span>No Credit Card</span>
        <span className="location-hero-cta-divider" aria-hidden="true">·</span>
        <span>From ${PRICING_PLANS[0].monthlyPriceUsd}/month</span>
        {isNorthAmerica && (
          <>
            <span className="location-hero-cta-divider" aria-hidden="true">·</span>
            <span style={{ color: "var(--gold-lt)", fontWeight: 700 }}>
              🇺🇸 🇨🇦 Call &amp; SMS: {CONTACT.usaPhoneDisplay}
            </span>
          </>
        )}
      </div>
      <div className="location-hero-cta-buttons" style={{ flexWrap: "wrap", gap: 8 }}>
        <Link href="/free-quran-classes-online" className="btn-primary-np">
          <Zap size={15} aria-hidden="true" />
          Book Free Trial
        </Link>
        {isNorthAmerica ? (
          <>
            <a
              href={CONTACT.usaCallUrl}
              className="btn-outline-np"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#fff",
                borderColor: "rgba(255,255,255,.45)",
                textDecoration: "none",
              }}
              title={`Call ${CONTACT.usaPhoneDisplay}`}
            >
              <Phone size={14} aria-hidden="true" />
              Call US Line
            </a>
            <a
              href={CONTACT.usaSmsUrl}
              className="btn-outline-np"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--gold-lt)",
                borderColor: "rgba(201,146,42,.6)",
                textDecoration: "none",
              }}
              title="Text / SMS us directly from your phone"
            >
              <MessageSquare size={14} aria-hidden="true" />
              Text / SMS
            </a>
            <WhatsAppLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np location-hero-cta-whatsapp"
              style={{ padding: "8px 12px", fontSize: ".8rem" }}
            >
              <MessageCircle size={14} aria-hidden="true" />
              WhatsApp
            </WhatsAppLink>
          </>
        ) : (
          <WhatsAppLink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-np location-hero-cta-whatsapp"
          >
            <MessageCircle size={15} aria-hidden="true" />
            WhatsApp Us
          </WhatsAppLink>
        )}
      </div>
    </div>
  );
}
