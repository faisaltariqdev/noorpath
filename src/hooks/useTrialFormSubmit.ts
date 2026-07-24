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
      // FormSubmit expects an email field; use a routing alias when WhatsApp-only.
      fd.set("email", email || "leads+whatsapp@noorpath.online");
      fd.set("phone", phone || (email ? "Contact via email" : ""));
      fd.set("contact", contactRaw);
      fd.set("family_plan", familyPlan ? "Yes — family plan" : "No");
      fd.set("source_page", window.location.href);
      fd.set("referrer", document.referrer || "Direct");
      fd.set("form_variant", formVariant);

      setStatus("loading");
      try {
        const res = await fetch("https://formsubmit.co/ajax/info@noorpath.online", {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        if (data.success === true || data.success === "true") {
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
          setMsg(data.message || "Could not send. Please WhatsApp us.");
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
