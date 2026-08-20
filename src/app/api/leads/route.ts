import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const buckets = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const row = buckets.get(ip);
  if (!row || now > row.reset) {
    buckets.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  row.count += 1;
  return row.count <= limit;
}

function allowedOrigin(origin: string | null, host: string | null) {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    const hostname = url.hostname;
    if (hostname === "www.noorpath.online" || hostname === "noorpath.online") return true;
    if (hostname === "localhost" || hostname === "127.0.0.1") return true;
    if (host && url.host === host) return true;
    return false;
  } catch {
    return false;
  }
}

function splitContact(contact: string): { email: string; phone: string } {
  const value = contact.trim();
  if (!value) return { email: "", phone: "" };
  if (value.includes("@")) return { email: value, phone: "" };
  return { email: "", phone: value };
}

function isValidContact(contact: string): boolean {
  const value = contact.trim();
  if (!value) return false;
  if (value.includes("@")) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

type LeadEmail = {
  name: string;
  contact: string;
  country: string;
  learnerType: string;
  learnerName: string;
  learnerAge: string;
  course: string;
  preferredTime: string;
  tutorPreference: string;
  landingPage: string;
  referrer: string;
  formVariant: string;
};

async function sendLeadEmail(lead: LeadEmail): Promise<"sent" | "not_configured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY || "";
  const from = process.env.LEAD_FROM_EMAIL || "";
  const to = process.env.LEAD_TO_EMAIL || "info@noorpath.online";
  if (!apiKey || !from || !to) return "not_configured";

  const text = [
    "New NoorPath trial request",
    "",
    `Parent / contact name: ${lead.name}`,
    `Contact: ${lead.contact}`,
    `Country: ${lead.country}`,
    `Learner type: ${lead.learnerType}`,
    `Learner name: ${lead.learnerName}`,
    `Learner age: ${lead.learnerAge}`,
    `Course: ${lead.course || "Free trial class"}`,
    `Preferred time: ${lead.preferredTime || "Not specified"}`,
    `Tutor preference: ${lead.tutorPreference || "Not specified"}`,
    `Form: ${lead.formVariant}`,
    `Landing page: ${lead.landingPage || "Not provided"}`,
    `Referrer: ${lead.referrer || "Direct"}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.contact.includes("@") ? lead.contact : undefined,
        subject: `Trial request — ${lead.country} — ${lead.name}`,
        text,
      }),
      signal: AbortSignal.timeout(8_000),
    });
    return res.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

/**
 * Validates trial leads, sends an owned transactional notification when
 * configured, and performs optional Intelligence CRM ingest.
 */
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!allowedOrigin(origin, host)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const ip = request.headers.get("x-forwarded-for") || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const honey = String(body._honey || body.website || "").trim();
  if (honey) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const name = String(body.name || body.parent_name || "").trim();
  const contact = String(body.contact || "").trim();
  const consent = String(body.contact_consent || body.consent_status || "").trim();
  const consentTimestamp = String(body.consent_timestamp || "").trim();
  if (!name || !isValidContact(contact)) {
    return NextResponse.json({ ok: false, error: "invalid_contact" }, { status: 400 });
  }
  if (!consent || consent === "false") {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }
  if (!consentTimestamp) {
    return NextResponse.json({ ok: false, error: "consent_timestamp_required" }, { status: 400 });
  }

  const { email, phone } = splitContact(contact);
  const country = String(body.country || "").trim();
  const learnerType = String(body.learner_type || "").trim();
  const childName = String(body.child_name || "").trim();
  const childAge = String(body.child_age || "").trim();
  const course = String(body.course || "").trim();
  const preferredTime = String(body.preferred_class_time || body.preferred_time || "").trim();
  const tutorPreference = String(body.tutor_preference || "").trim();
  if (!country || !learnerType || !childName || !childAge) {
    return NextResponse.json({ ok: false, error: "learner_details_required" }, { status: 400 });
  }
  const formVariant = String(body.form_variant || "standard");
  const landingPage = String(body.source_page || body.landing_page || "").trim();
  const referrer = String(body.referrer || "").trim();
  const source = String(body.utm_source || body.source || formVariant || "website");
  const medium = String(body.utm_medium || body.medium || "website");
  const campaign = String(body.utm_campaign || body.campaign || "").trim();
  const learnerNote =
    childName || childAge
      ? `Learner: ${childName || "n/a"}${childAge ? `, age ${childAge}` : ""} (${learnerType})`
      : "";

  const emailDeliveryPromise = sendLeadEmail({
    name,
    contact,
    country,
    learnerType,
    learnerName: childName,
    learnerAge: childAge,
    course,
    preferredTime,
    tutorPreference,
    landingPage,
    referrer,
    formVariant,
  });

  let intelligence = "skipped";
  const ingestUrl = process.env.INTELLIGENCE_INGEST_URL || "";
  const secret = process.env.LEAD_INGEST_SECRET || "";
  if (ingestUrl && secret) {
    try {
      const res = await fetch(ingestUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(5_000),
        body: JSON.stringify({
          parent_name: name,
          email: email || undefined,
          whatsapp: phone || undefined,
          country: country || undefined,
          child_name: childName || undefined,
          child_age: childAge || undefined,
          quran_level:
            [course, learnerNote, tutorPreference].filter(Boolean).join(" — ") || undefined,
          preferred_time: preferredTime || undefined,
          contact_method: email ? "email" : "whatsapp",
          consent_status: "granted",
          consent_timestamp: consentTimestamp,
          source,
          medium,
          campaign: campaign || undefined,
          landing_page: landingPage.startsWith("http") ? landingPage : undefined,
          _honey: "",
        }),
      });
      if (res.ok) intelligence = "ok";
      else if (res.status === 503) intelligence = "requires_auth";
      else intelligence = "failed";
    } catch {
      intelligence = "failed";
    }
  }

  const emailDelivery = await emailDeliveryPromise;
  return NextResponse.json({
    ok: true,
    email_delivery: emailDelivery,
    formsubmit_fallback_required: emailDelivery !== "sent",
    intelligence,
  });
}
