import https from "node:https";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const FORMSUBMIT_HOST = "formsubmit.co";
const FORMSUBMIT_PATH = "/ajax/info@noorpath.online";
const buckets = new Map<string, { count: number; reset: number }>();

/** Post via node:https so Origin/Referer are not stripped (undici fetch forbids them). */
function postFormSubmit(
  fields: Record<string, string>,
  formsubmitOrigin: string,
  formsubmitReferer: string,
): Promise<{ ok: boolean; body: string }> {
  const body = new URLSearchParams(fields).toString();
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: FORMSUBMIT_HOST,
        path: FORMSUBMIT_PATH,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(body),
          Origin: formsubmitOrigin,
          Referer: formsubmitReferer,
        },
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
        res.on("end", () => {
          resolve({ ok: (res.statusCode || 0) >= 200 && (res.statusCode || 0) < 300, body: Buffer.concat(chunks).toString("utf8") });
        });
      },
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

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
  const course = String(body.course || "").trim();
  const preferredTime = String(body.preferred_class_time || body.preferred_time || "").trim();
  const familyPlan = String(body.family_plan || "");
  const formVariant = String(body.form_variant || "standard");
  const landingPage = String(body.source_page || body.landing_page || "").trim();
  const source = String(body.utm_source || body.source || formVariant || "website");
  const medium = String(body.utm_medium || body.medium || "website");
  const campaign = String(body.utm_campaign || body.campaign || "").trim();

  // FormSubmit rejects server posts without a site Origin/Referer
  // ("browsed as HTML files"). Forward via node:https so headers stick.
  const formsubmitOrigin =
    origin && allowedOrigin(origin, host) ? origin : "https://www.noorpath.online";
  const formsubmitReferer = landingPage.startsWith("http")
    ? landingPage
    : `${formsubmitOrigin}/`;

  const fields: Record<string, string> = {
    name,
    email: email || "leads+whatsapp@noorpath.online",
    phone: phone || (email ? "Contact via email" : ""),
    contact,
    family_plan: familyPlan,
    source_page: landingPage,
    referrer: String(body.referrer || "Direct"),
    form_variant: formVariant,
    preferred_class_time: preferredTime,
    _template: "table",
    _captcha: "false",
  };
  if (country) fields.country = country;
  if (course) fields.course = course;

  let formsubmit = "failed";
  let formsubmitDetail = "";
  try {
    const res = await postFormSubmit(fields, formsubmitOrigin, formsubmitReferer);
    formsubmitDetail = res.body.slice(0, 240);
    const data = JSON.parse(res.body || "{}") as { success?: boolean | string };
    if (data?.success === true || data?.success === "true") formsubmit = "ok";
  } catch {
    formsubmit = "failed";
  }

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
        body: JSON.stringify({
          parent_name: name,
          email: email || undefined,
          whatsapp: phone || undefined,
          country: country || undefined,
          quran_level: course || undefined,
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

  if (formsubmit !== "ok" && intelligence !== "ok") {
    return NextResponse.json(
      {
        ok: false,
        error: "submit_failed",
        formsubmit,
        intelligence,
        ...(formsubmitDetail ? { formsubmit_detail: formsubmitDetail } : {}),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    formsubmit,
    intelligence,
  });
}
