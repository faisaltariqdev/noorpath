"use client";

import { useCallback, useEffect, useState } from "react";
import { track } from "next-pixels";
import { hasAnalyticsConsent } from "@/components/TrackingConsent";

export type TrialFormStatus = "idle" | "loading" | "success" | "error";

const FORMSUBMIT = "https://formsubmit.co/ajax/info@noorpath.online";

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
  formVariant?: string;
};

export function useTrialFormSubmit(options: Options = {}) {
  const { formVariant = "standard" } = options;
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

      const consent = String(fd.get("contact_consent") || "").trim();
      if (!consent) {
        setStatus("error");
        setMsg("Please agree to be contacted about this trial request.");
        return;
      }

      const { email, phone } = splitContactField(contactRaw);
      const name = String(fd.get("name") || "").trim();
      const country = String(fd.get("country") || "").trim();
      const childName = String(fd.get("child_name") || "").trim();
      const childAge = String(fd.get("child_age") || "").trim();
      const learnerType = String(fd.get("learner_type") || "").trim();
      const preferredTime = String(fd.get("preferred_class_time") || "").trim();
      const tutorPreference = String(fd.get("tutor_preference") || "").trim();
      const course = String(fd.get("course") || "Free trial class").trim();
      if (!country || !learnerType || !childName || !childAge) {
        setStatus("error");
        setMsg("Please add the country and learner details.");
        return;
      }
      const consentTimestamp = new Date().toISOString();
      const sourcePage = window.location.href;
      const referrer = document.referrer || "Direct";
      const params = new URLSearchParams(window.location.search);

      setStatus("loading");
      try {
        const leadRes = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name,
            contact: contactRaw,
            country,
            learner_type: learnerType,
            child_name: childName,
            child_age: childAge,
            preferred_class_time: preferredTime,
            tutor_preference: tutorPreference,
            course,
            form_variant: formVariant,
            source_page: sourcePage,
            referrer,
            contact_consent: consent,
            consent_timestamp: consentTimestamp,
            _honey: String(fd.get("_honey") || ""),
            utm_source: params.get("utm_source") || "",
            utm_medium: params.get("utm_medium") || "",
            utm_campaign: params.get("utm_campaign") || "",
          }),
        });
        const leadData = (await leadRes.json().catch(() => null)) as
          | {
              ok?: boolean;
              email_delivery?: "sent" | "not_configured" | "failed";
              formsubmit_fallback_required?: boolean;
            }
          | null;

        if (!leadRes.ok || !leadData?.ok) {
          setStatus("error");
          setMsg("Could not save your request. Please WhatsApp us.");
          return;
        }

        let mailOk = leadData.email_delivery === "sent";
        if (!mailOk && leadData.formsubmit_fallback_required) {
          // Temporary fallback until the owned transactional email provider is configured.
          const mailFd = new FormData();
          mailFd.set("name", name);
          mailFd.set("email", email || "leads+whatsapp@noorpath.online");
          mailFd.set("phone", phone || (email ? "Contact via email" : ""));
          mailFd.set("contact", contactRaw);
          mailFd.set("country", country);
          mailFd.set("learner_type", learnerType);
          mailFd.set("child_name", childName);
          mailFd.set("child_age", childAge);
          mailFd.set("preferred_class_time", preferredTime || "Not specified");
          mailFd.set("tutor_preference", tutorPreference || "Not specified");
          mailFd.set("course", course);
          mailFd.set("source_page", sourcePage);
          mailFd.set("referrer", referrer);
          mailFd.set("form_variant", formVariant);
          mailFd.set("_template", "table");
          mailFd.set("_captcha", "false");
          mailFd.set("_honey", String(fd.get("_honey") || ""));

          const mailRes = await fetch(FORMSUBMIT, {
            method: "POST",
            body: mailFd,
            headers: { Accept: "application/json" },
          });
          const mailData = (await mailRes.json().catch(() => null)) as
            | { success?: boolean | string }
            | null;
          mailOk = mailData?.success === true || mailData?.success === "true";
        }
        if (!mailOk) {
          setStatus("error");
          setMsg("Could not send the email. Please WhatsApp us.");
          return;
        }

        const nameParts = name.split(/\s+/);
        if (hasAnalyticsConsent()) {
          track({
            eventName: "Lead",
            emails: email ? [email] : undefined,
            phones: phone ? [phone] : undefined,
            firstName: nameParts[0] || undefined,
            lastName: nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined,
            data: {
              content_name: "Free Trial Booking",
              content_category: course || "trial",
              status: true,
            },
            apiRoute: "/api/fb-events",
          });
        }

        setStatus("success");
        setMsg("JazakAllah Khair! Your trial request has been received. We'll confirm your tutor and class time via WhatsApp or email shortly — usually within 24 hours. BarakAllahu Feekum!");
        form.reset();
        await new Promise((r) => setTimeout(r, hasAnalyticsConsent() ? 1800 : 1500));
        window.location.href = "/thank-you?submitted=1";
      } catch {
        setStatus("error");
        setMsg("Network error. Please WhatsApp us directly.");
      }
    },
    [formVariant],
  );

  return { status, msg, handleSubmit };
}
