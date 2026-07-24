"use client";

import { track } from "next-pixels";
import { hasAnalyticsConsent } from "@/components/TrackingConsent";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

/**
 * Fire GA4 + Meta WhatsApp click events without blocking navigation.
 * Safe to call from click handlers before the browser opens wa.me.
 */
export function trackWhatsAppClick(pagePath?: string): void {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  const w = window as AnalyticsWindow;
  const page =
    pagePath ||
    `${w.location.pathname}${w.location.search}` ||
    "/";

  try {
    w.gtag?.("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: page,
    });
  } catch {
    /* ignore */
  }

  try {
    w.fbq?.("trackCustom", "WhatsAppClick", { page });
  } catch {
    /* ignore */
  }

  try {
    // Pixel + server CAPI via next-pixels (same path as Lead)
    void track({
      eventName: "WhatsAppClick",
      data: {
        content_name: "WhatsApp Click",
        content_category: "engagement",
        page,
      },
      apiRoute: "/api/fb-events",
    });
  } catch {
    /* ignore */
  }
}
