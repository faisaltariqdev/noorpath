/**
 * Cloudflare Pages Function: POST /api/fb-events
 *
 * Cloudflare version of src/app/api/fb-events/route.ts (next-pixels handler). Forwards the
 * browser's Lead event to the Meta Conversions API (server side) with hashed email/phone/name.
 *
 * Environment variables:
 *   NEXT_PUBLIC_FB_PIXEL_ID   Meta pixel id (public)
 *   FB_PIXEL_ACCESS_TOKEN     secret; if either is missing the endpoint just answers OK and sends nothing
 *   FB_TEST_EVENT_CODE        optional, Meta "Test events" code
 *
 * TikTok's Events API is not forwarded here (it was never configured on Vercel either).
 */

type Env = {
  NEXT_PUBLIC_FB_PIXEL_ID?: string;
  FB_PIXEL_ACCESS_TOKEN?: string;
  FB_TEST_EVENT_CODE?: string;
};

type EventData = {
  eventName?: string;
  eventId?: string;
  emails?: string[];
  phones?: string[];
  firstName?: string;
  lastName?: string;
  userAgent?: string;
  sourceUrl?: string;
  fbp?: string;
  fbc?: string;
  value?: number;
  currency?: string;
  testEventCode?: string;
};

const GRAPH_URL = "https://graph.facebook.com/v21.0";

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value.toLowerCase().trim());
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }): Promise<Response> {
  const pixelId = env.NEXT_PUBLIC_FB_PIXEL_ID;
  const token = env.FB_PIXEL_ACCESS_TOKEN;
  const data = (await request.json().catch(() => null)) as EventData | null;
  if (!data?.eventName || !data.eventId) return json({ error: "Failed to send event" }, 400);

  if (!pixelId || !token) {
    return json({ success: true, message: "Meta server events are not configured; skipped." });
  }

  const hasCustomerData =
    (data.emails?.length ?? 0) > 0 || (data.phones?.length ?? 0) > 0 || (data.firstName && data.lastName) || data.fbp || data.fbc;
  if (!hasCustomerData) return json({ success: true, message: "No customer data; skipped." });

  const userData: Record<string, unknown> = {};
  if (data.emails?.length) userData.em = await Promise.all(data.emails.map(sha256));
  if (data.phones?.length) userData.ph = await Promise.all(data.phones.map((p) => sha256(p.replace(/[^0-9]/g, ""))));
  if (data.firstName) userData.fn = await sha256(data.firstName);
  if (data.lastName) userData.ln = await sha256(data.lastName);
  userData.client_user_agent = data.userAgent || request.headers.get("user-agent") || undefined;
  const ip = request.headers.get("cf-connecting-ip");
  if (ip) userData.client_ip_address = ip;
  if (data.fbp) userData.fbp = data.fbp;
  if (data.fbc) userData.fbc = data.fbc;

  const customData: Record<string, unknown> = {};
  if (data.value) customData.value = data.value;
  if (data.currency) customData.currency = data.currency;
  if (data.sourceUrl) customData.source_url = data.sourceUrl;

  const payload = {
    data: [
      {
        event_name: data.eventName,
        event_id: data.eventId,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: data.sourceUrl,
        user_data: userData,
        custom_data: customData,
      },
    ],
    access_token: token,
    ...((data.testEventCode || env.FB_TEST_EVENT_CODE) && { test_event_code: data.testEventCode || env.FB_TEST_EVENT_CODE }),
  };

  try {
    const res = await fetch(`${GRAPH_URL}/${pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) {
      console.error("Meta CAPI error:", res.status, await res.text().catch(() => ""));
      return json({ error: "Failed to send event" }, 502);
    }
    return json({ success: true, message: "Event forwarded to Meta" });
  } catch (err) {
    console.error("Meta CAPI request failed:", err);
    return json({ error: "Failed to send event" }, 502);
  }
}

export async function onRequest(): Promise<Response> {
  return json({ error: "method_not_allowed" }, 405);
}
