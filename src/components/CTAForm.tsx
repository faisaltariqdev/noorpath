"use client";
import { useState } from "react";

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus("loading");
    try {
      const fd = new FormData(form);
      fd.set("family_plan", familyPlan ? "Yes — family plan" : "No");
      const res = await fetch("https://formsubmit.co/ajax/info@noorpath.online", {
        method: "POST", body: fd, headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (data.success === true || data.success === "true") {
        setStatus("success");
        setMsg("Thank you! We will contact you within 24 hours.");
        form.reset();
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
      <label className="sr-only" htmlFor="numChildren">How many children?</label>
      <select className="cta-input" name="children" id="numChildren" required style={{ cursor: "pointer" }}>
        <option value="" disabled>How many children to enroll?</option>
        {["1 child","2 siblings","3 siblings","4 siblings","5+ siblings"].map((c) => (
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

      <button type="submit" className="btn-cta-submit" disabled={status === "loading"}>
        {status === "loading" ? "⏳ Sending..." : "🕌 Book My Free Class"}
      </button>

      {msg && (
        <p style={{ color: status === "success" ? "var(--gold-lt)" : "#ffb4b4", fontSize: ".82rem", textAlign: "center", marginTop: 10 }}>
          {msg}
        </p>
      )}
      <p style={{ color: "rgba(255,255,255,.72)", fontSize: ".72rem", textAlign: "center", marginTop: 12 }}>
        🔒 Your information is 100% private and secure.
      </p>
    </form>
  );
}
