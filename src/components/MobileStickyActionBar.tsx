"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CONTACT, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Sparkles } from "lucide-react";

export default function MobileStickyActionBar() {
  const router = useRouter();
  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_TRIAL_MESSAGE)}`;

  const handleTrialClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // 1. Look for form or CTA section on current page
    const targetElement = document.querySelector(
      "#cta, #trial-form, #quran-trial-form, .cta-section, .cta-form-wrap, form"
    );

    if (targetElement) {
      // Smoothly scroll straight down to the form
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Automatically focus the first input inside the form so keyboard pops up for user
      setTimeout(() => {
        const input = targetElement.querySelector<HTMLInputElement>(
          "input:not([type='hidden']), select"
        );
        if (input) {
          input.focus();
        }
      }, 500);
    } else {
      // 2. If no form on the current page, navigate directly to trial page with anchor
      router.push("/free-quran-classes-online#cta");
    }
  };

  return (
    <aside
      className="mobile-sticky-action-bar"
      aria-label="Quick enrollment actions"
    >
      <div className="mobile-sticky-inner">
        {/* Micro-incentive banner strip */}
        <div className="mobile-sticky-top-pill">
          <span className="mobile-sticky-badge">
            <Sparkles size={11} className="inline mr-1 text-[#f59e0b]" />
            Free 30-Min Trial • No Card Needed
          </span>
          <span className="mobile-sticky-subtext">
            1-on-1 Live Quran Tutoring
          </span>
        </div>

        {/* Action button row */}
        <div className="mobile-sticky-buttons">
          <WhatsAppLink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-sticky-btn mobile-sticky-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </WhatsAppLink>

          <button
            type="button"
            onClick={handleTrialClick}
            className="mobile-sticky-btn mobile-sticky-trial"
            aria-label="Navigate to booking trial form"
          >
            <span>⚡ Book Free Trial</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
