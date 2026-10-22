"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Zap } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";

interface Props {
  whatsappText?: string;
}

export default function LocationConversionBar({ whatsappText }: Props) {
  useEffect(() => {
    document.body.classList.add("has-location-conversion-bar");
    return () => document.body.classList.remove("has-location-conversion-bar");
  }, []);

  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    whatsappText ?? WHATSAPP_TRIAL_MESSAGE,
  )}`;

  return (
    <aside className="location-conversion-bar" aria-label="Book a free Quran trial">
      <div className="location-conversion-inner">
        <Link
          href="/free-quran-classes-online"
          className="location-conversion-btn location-conversion-trial"
        >
          <Zap size={16} aria-hidden="true" />
          <span>Book Free Trial</span>
        </Link>
        <WhatsAppLink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-conversion-btn location-conversion-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span>WhatsApp Us</span>
        </WhatsAppLink>
      </div>
    </aside>
  );
}
