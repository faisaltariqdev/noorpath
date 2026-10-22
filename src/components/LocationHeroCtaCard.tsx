import Link from "next/link";
import { MessageCircle, Zap } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, PRICING_PLANS, TRIAL, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";

interface Props {
  whatsappText?: string;
}

export default function LocationHeroCtaCard({ whatsappText }: Props) {
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
      </div>
      <div className="location-hero-cta-buttons">
        <Link href="/free-quran-classes-online" className="btn-primary-np">
          <Zap size={15} aria-hidden="true" />
          Book Free Trial
        </Link>
        <WhatsAppLink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-np location-hero-cta-whatsapp"
        >
          <MessageCircle size={15} aria-hidden="true" />
          WhatsApp Us
        </WhatsAppLink>
      </div>
    </div>
  );
}
