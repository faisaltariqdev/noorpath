"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CONTACT, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";

const countries = [
  "Pakistan","United States","United Kingdom","Canada","Australia",
  "United Arab Emirates","Saudi Arabia","Germany","France","Malaysia",
  "Indonesia","Turkey","South Africa","India","Bangladesh","Other",
];

const coursesOptions = [
  "Family Plan — Multiple Siblings",
  "All-in-One Kids (Qaida + Duas + Hadith)",
  "Quran Recitation (Beginner)",
  "Tajweed Rules","Hifz Program","Arabic Language",
  "Islamic Studies","Kids Quran Program","Daily Duas for Kids",
];

export default function CTAForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [msg, setMsg] = useState("");
  const [familyPlan, setFamilyPlan] = useState(false);

  // When the user hits "Back" after submitting, the browser restores this page
  // from the bfcache with its old JS state — leaving the button stuck on
  // "Sending...". Reset the form state whenever the page is restored.
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) { setStatus("idle"); setMsg(""); }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus("loading");
    try {
      const fd = new FormData(form);
      fd.set("family_plan", familyPlan ? "Yes — family plan" : "No");
      fd.set("source_page", window.location.href);
      fd.set("referrer", document.referrer || "Direct");
      const res = await fetch("https://formsubmit.co/ajax/info@noorpath.online", {
        method: "POST", body: fd, headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (data.success === true || data.success === "true") {
        form.reset();
        // Full-page navigation (not client-side) so the Google Ads tag fires a
        // fresh page_view on /thank-you — required for the URL-based
        // "Free Trial Booked" conversion to register.
        window.location.href = "/thank-you?submitted=1";
      } else {
        setStatus("error");
        setMsg(data.message || "Could not send. Please WhatsApp us.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please WhatsApp us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
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
      <label className="sr-only" htmlFor="trialName">Your full name</label>
      <input className="cta-input" type="text" name="name" id="trialName" placeholder="Your Full Name" required />
      <label className="sr-only" htmlFor="trialEmail">Email address</label>
      <input className="cta-input" type="email" name="email" id="trialEmail" placeholder="Email Address" required />
      <label className="sr-only" htmlFor="trialPhone">WhatsApp or phone number</label>
      <input className="cta-input" type="tel" name="phone" id="trialPhone" placeholder="WhatsApp / Phone Number" required />
      <label className="sr-only" htmlFor="trialCountry">Select your country</label>
      <select className="cta-input" name="country" id="trialCountry" required style={{ cursor: "pointer" }}>
        <option value="" disabled>Select Your Country</option>
        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <label className="sr-only" htmlFor="learners">Who will attend?</label>
      <select className="cta-input" name="learners" id="learners" required style={{ cursor: "pointer" }}>
        <option value="" disabled>Who will attend?</option>
        {["1 child","2 siblings","3 siblings","4 siblings","5+ siblings","1 adult","More than 1 adult"].map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <label style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.82)", fontSize: ".88rem", marginBottom: 12, cursor: "pointer" }}>
        <input type="checkbox" checked={familyPlan} onChange={(e) => setFamilyPlan(e.target.checked)} />
        <span>Enrolling 2 or more siblings (family plan)</span>
      </label>
      <label className="sr-only" htmlFor="trialCourse">Select a course</label>
      <select className="cta-input" name="course" id="trialCourse" required style={{ cursor: "pointer" }}>
        <option value="" disabled>Select a Course</option>
        {coursesOptions.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <label className="sr-only" htmlFor="trialTimezone">Your timezone or preferred class time</label>
      <input className="cta-input" type="text" name="timezone" id="trialTimezone" placeholder="Timezone / Preferred Class Time" required />

      <label className="sr-only" htmlFor="tutorPreference">Tutor preference</label>
      <select className="cta-input" name="tutor_preference" id="tutorPreference" required style={{ cursor: "pointer" }}>
        <option value="" disabled>Tutor Preference</option>
        <option value="No preference">No preference</option>
        <option value="Female tutor requested">Female tutor requested</option>
        <option value="Male tutor requested">Male tutor requested</option>
      </select>

      <label style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(255,255,255,.82)", fontSize: ".78rem", lineHeight: 1.5, marginBottom: 14, cursor: "pointer" }}>
        <input type="checkbox" name="contact_consent" value="Agreed" required style={{ marginTop: 3 }} />
        <span>
          I agree that NoorPath may contact me by email, phone or WhatsApp about this trial request. I have read the{" "}
          <Link href="/privacy-policy" style={{ color: "var(--gold-lt)" }}>Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms-of-service" style={{ color: "var(--gold-lt)" }}>Terms of Service</Link>.
        </span>
      </label>

      <button type="submit" className="btn-cta-submit" disabled={status === "loading"}>
        {status === "loading" ? "⏳ Sending..." : "🕌 Book My Free Class"}
      </button>

      {msg && (
        <p style={{ color: status === "success" ? "var(--gold-lt)" : "#ffb4b4", fontSize: ".82rem", textAlign: "center", marginTop: 10 }}>
          {msg}{" "}
          {status === "error" && (
            <a
              href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_TRIAL_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold-lt)", fontWeight: 700 }}
            >
              Open WhatsApp
            </a>
          )}
        </p>
      )}
      <p style={{ color: "rgba(255,255,255,.72)", fontSize: ".72rem", textAlign: "center", marginTop: 12 }}>
        No credit card is required. Tutor availability is confirmed after your request.
      </p>
    </form>
  );
}
