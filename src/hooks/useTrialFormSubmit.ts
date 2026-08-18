"use client";

import { useCallback, useEffect, useState } from "react";
import { track } from "next-pixels";
import { hasAnalyticsConsent } from "@/components/TrackingConsent";

export type TrialFormStatus = "idle" | "loading" | "success" | "error";

/** Split a single contact field into email and/or phone for tracking + CRM. */
export function splitContactField(contact: string): { email: string; phone: string } {
  const value = contact.trim();
  if (!value) return { email: "", phone: "" };
  if (value.includes("@")) return { email: value, phone: "" };
  return { email: "", phone: value };
}

export function isValidContact(contact: string): boolean {
  const value = contact.trim();
  if (!value) return false;
  if (value.includes("@")) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

type Options = {
  familyPlan?: boolean;
  formVariant?: string;
};

export function useTrialFormSubmit(options: Options = {}) {
  const { familyPlan = false, formVariant = "standard" } = options;
  const [status, setStatus] = useState<TrialFormStatus>("idle");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setStatus("idle");
        setMsg("");
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const fd = new FormData(form);
      const contactRaw = String(fd.get("contact") || "").trim();
      if (!isValidContact(contactRaw)) {
        setStatus("error");
        setMsg("Enter a valid email or WhatsApp number (with country code).");
        return;
      }

      const { email, phone } = splitContactField(contactRaw);
      const params = new URLSearchParams(window.location.search);
      const consent = String(fd.get("contact_consent") || "").trim();
      if (!consent) {
        setStatus("error");
        setMsg("Please agree to be contacted about this trial request.");
        return;
      }

      setStatus("loading");
      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: String(fd.get("name") || "").trim(),
            contact: contactRaw,
            country: String(fd.get("country") || "").trim(),
            course: String(fd.get("course") || "").trim(),
            preferred_class_time: String(fd.get("preferred_class_time") || "").trim(),
            family_plan: familyPlan ? "Yes — family plan" : "No",
            form_variant: formVariant,
            source_page: window.location.href,
            referrer: document.referrer || "Direct",
            contact_consent: consent,
            consent_timestamp: new Date().toISOString(),
            _honey: String(fd.get("_honey") || ""),
            utm_source: params.get("utm_source") || "",
            utm_medium: params.get("utm_medium") || "",
            utm_campaign: params.get("utm_campaign") || "",
          }),
        });
        const data = await res.json().catch(() => null);
        if (data?.ok === true) {
          const fullName = String(fd.get("name") || "").trim();
          const nameParts = fullName.split(/\s+/);
          const firstName = nameParts[0] || undefined;
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;

          if (hasAnalyticsConsent()) {
            track({
              eventName: "Lead",
              emails: email ? [email] : undefined,
              phones: phone ? [phone] : undefined,
              firstName,
              lastName,
              data: {
                content_name: "Free Trial Booking",
                content_category: String(fd.get("course") || "trial"),
                status: true,
              },
              apiRoute: "/api/fb-events",
            });
          }

          form.reset();
          if (hasAnalyticsConsent()) {
            await new Promise((r) => setTimeout(r, 300));
          }
          window.location.href = "/thank-you?submitted=1";
        } else {
          setStatus("error");
          setMsg(data?.error === "consent_required" ? "Please agree to be contacted about this trial request." : "Could not send. Please WhatsApp us.");
        }
      } catch {
        setStatus("error");
        setMsg("Network error. Please WhatsApp us directly.");
      }
    },
    [familyPlan, formVariant],
  );

  return { status, msg, handleSubmit };
}
