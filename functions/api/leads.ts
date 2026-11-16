/**
 * Cloudflare Pages Function: POST /api/leads
 *
 * Cloudflare version of src/app/api/leads/route.ts (the Vercel route). Workers cannot open SMTP
 * connections, so the team notification goes out through the Resend HTTP API. Validation, phone
 * normalisation and the email template are shared with the Vercel route (src/lib).
 *
 * Environment variables (Cloudflare Pages -> Settings -> Variables and Secrets):
 *   RESEND_API_KEY     secret, required
 *   LEAD_FROM_EMAIL    e.g. NoorPath Leads <leads@noorpath.online> (domain must be verified in Resend)
 *   LEAD_TO_EMAIL      defaults to info@noorpath.online
 *   RESEND_API_URL     optional, for tests only
 *   INTELLIGENCE_INGEST_URL / LEAD_INGEST_SECRET   optional CRM ingest (same as Vercel)
 */
import { leadEmailHtml, leadEmailSubject, leadEmailText, type LeadEmail } from "../../src/lib/leadEmail";
import { normalisePhone } from "../../src/lib/phone";

type Env = {
  RESEND_API_KEY?: string;
  LEAD_FROM_EMAIL?: string;
  LEAD_TO_EMAIL?: string;
  RESEND_API_URL?: string;
  INTELLIGENCE_INGEST_URL?: string;
  LEAD_INGEST_SECRET?: string;
};

type Context = { request: Request; env: Env };

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
  if (!origin) return true;
  try {
    const url = new URL(origin);
    const hostname = url.hostname;
    if (hostname === "www.noorpath.online" || hostname === "noorpath.online") return true;
    if (hostname === "localhost" || hostname === "127.0.0.1") return true;
    if (hostname.endsWith(".pages.dev") || hostname.endsWith(".workers.dev")) return true;
    if (host && (url.host === host || url.hostname === host)) return true;
    return false;
  } catch {
    return true;
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function isValidContact(contact: string): boolean {
  const value = contact.trim();
  if (!value) return false;
  if (value.includes("@")) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function splitContact(contact: string): { email: string; phone: string } {
  const value = contact.trim();
  if (!value) return { email: "", phone: "" };
  if (value.includes("@")) return { email: value, phone: "" };
  return { email: "", phone: value };
}

async function sendLeadEmail(lead: LeadEmail, env: Env): Promise<"sent" | "not_configured" | "failed"> {
  // Keep the lead in the function log so it is never lost if email fails.
  console.log("=== NEW NOORPATH TRIAL LEAD RECEIVED ===");
  console.log(JSON.stringify(lead));

  const apiKey = env.RESEND_API_KEY || "";
  if (!apiKey) return "not_configured";

  const now = new Date();
  try {
    const res = await fetch(env.RESEND_API_URL || "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.LEAD_FROM_EMAIL || "NoorPath Leads <leads@noorpath.online>",
        to: [env.LEAD_TO_EMAIL || "info@noorpath.online"],
        reply_to: lead.contact.includes("@") ? lead.contact : undefined,
        subject: leadEmailSubject(lead),
        text: leadEmailText(lead, now),
        html: leadEmailHtml(lead, now),
      }),
      signal: AbortSignal.timeout(8_000),
    });
    if (res.ok) return "sent";
    console.error("Resend email dispatch failed:", res.status, await res.text().catch(() => ""));
  } catch (err) {
    console.error("Resend email dispatch error:", err);
  }
  return "failed";
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!allowedOrigin(origin, host)) return json({ ok: false, error: "forbidden" }, 403);

  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "local";
  if (!rateLimit(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return json({ ok: false, error: "invalid" }, 400);

  const honey = String(body._honey || body.website || "").trim();
  if (honey) return json({ ok: true, ignored: true });

  const name = String(body.name || body.parent_name || "").trim();
  const contact = String(body.contact || "").trim();
  const consent = String(body.contact_consent || body.consent_status || "").trim();
  const consentTimestamp = String(body.consent_timestamp || "").trim();
  if (!name || !isValidContact(contact)) return json({ ok: false, error: "invalid_contact" }, 400);
  if (!consent || consent === "false") return json({ ok: false, error: "consent_required" }, 400);
  if (!consentTimestamp) return json({ ok: false, error: "consent_timestamp_required" }, 400);

  const { email, phone } = splitContact(contact);
  const country = String(body.country || "").trim();
  const learnerType = String(body.learner_type || "").trim();
  const childName = String(body.child_name || "").trim() || name;
  const childAge = String(body.child_age || "").trim();
  const course = String(body.course || "").trim();
  const preferredTime = String(body.preferred_class_time || body.preferred_time || "").trim();
  const tutorPreference = String(body.tutor_preference || "").trim();
  const learnerNotes = String(body.learner_notes || "").trim().slice(0, 600);
  if (!country || !learnerType || !childAge) return json({ ok: false, error: "learner_details_required" }, 400);

  const formVariant = String(body.form_variant || "standard");
  const landingPage = String(body.source_page || body.landing_page || "").trim();
  const referrer = String(body.referrer || "").trim();
  const source = String(body.utm_source || body.source || formVariant || "website");
  const medium = String(body.utm_medium || body.medium || "website");
  const campaign = String(body.utm_campaign || body.campaign || "").trim();
  const learnerNote = childName || childAge ? `Learner: ${childName || "n/a"}${childAge ? `, age ${childAge}` : ""} (${learnerType})` : "";

  // Add the country code the parent left out so the team can message them on WhatsApp.
  const phoneInfo = phone ? normalisePhone(phone, country) : null;
  const dialablePhone = phoneInfo?.international || phone;

  const emailDeliveryPromise = sendLeadEmail(
    {
      contactTyped: phoneInfo && dialablePhone !== contact ? contact : "",
      phoneStatus: phoneInfo?.status,
      utmSource: String(body.utm_source || "").trim().slice(0, 150),
      utmMedium: medium === "website" ? "" : medium.slice(0, 150),
      utmCampaign: campaign.slice(0, 150),
      utmContent: String(body.utm_content || "").trim().slice(0, 150),
      ttclid: String(body.ttclid || "").trim().slice(0, 200),
      firstLanding: String(body.first_landing || "").trim().slice(0, 200),
      name,
      contact: phoneInfo ? dialablePhone : contact,
      country,
      learnerType,
      learnerName: childName,
      learnerAge: childAge,
      course,
      preferredTime,
      tutorPreference,
      learnerNotes,
      landingPage,
      referrer,
      formVariant,
    },
    env,
  );

  let intelligence = "skipped";
  if (env.INTELLIGENCE_INGEST_URL && env.LEAD_INGEST_SECRET) {
    try {
      const res = await fetch(env.INTELLIGENCE_INGEST_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${env.LEAD_INGEST_SECRET}`, "Content-Type": "application/json" },
        signal: AbortSignal.timeout(5_000),
        body: JSON.stringify({
          parent_name: name,
          email: email || undefined,
          whatsapp: dialablePhone || undefined,
          country: country || undefined,
          child_name: childName || undefined,
          child_age: childAge || undefined,
          quran_level: [course, learnerNote, tutorPreference, learnerNotes].filter(Boolean).join(" — ") || undefined,
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
      intelligence = res.ok ? "ok" : res.status === 503 ? "requires_auth" : "failed";
    } catch {
      intelligence = "failed";
    }
  }

  const emailDelivery = await emailDeliveryPromise;
  return json({
    ok: true,
    email_delivery: emailDelivery,
    formsubmit_fallback_required: emailDelivery !== "sent",
    intelligence,
  });
}

/** Anything other than POST. */
export async function onRequest(): Promise<Response> {
  return json({ ok: false, error: "method_not_allowed" }, 405);
}
