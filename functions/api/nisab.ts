/**
 * Cloudflare Pages Function: GET /api/nisab
 *
 * Cloudflare version of src/app/api/nisab/route.ts. Live gold/silver per-gram prices for the
 * zakat calculator. Only a currency code is ever received; all zakat maths runs in the browser.
 * Primary source: xaus.com free spot API. Fallback: nisab.tahababa.com open JSON (USD).
 */

const SUPPORTED = new Set([
  "USD", "GBP", "EUR", "CAD", "AUD", "PKR", "INR", "AED", "SAR", "QAR",
  "KWD", "MYR", "SGD", "ZAR", "BDT", "TRY", "NOK", "SEK", "DKK", "NZD",
]);

const GRAMS_PER_TROY_OZ = 31.1034768;
const TTL_MS = 6 * 60 * 60 * 1000;

interface PriceSnapshot {
  goldPerGram: number;
  silverPerGram: number;
  currency: string;
  asOf: string;
  source: string;
}

const cache = new Map<string, { data: PriceSnapshot; expires: number }>();

async function fetchJson(url: string, timeoutMs = 8000): Promise<Record<string, unknown>> {
  const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`upstream ${res.status}`);
  return (await res.json()) as Record<string, unknown>;
}

async function fromXaus(currency: string): Promise<PriceSnapshot> {
  const data = await fetchJson(`https://xaus.com/api/v1/spot?currency=${currency}&unit=gram`);
  const xau = data.xau as { price?: number } | undefined;
  const goldPerGram = Number(xau?.price);
  const silverUsdOz = Number(data.silver_usd_oz);
  const fxRate = Number(data.fx_rate);
  if (!(goldPerGram > 0) || !(silverUsdOz > 0) || !(fxRate > 0)) throw new Error("xaus: unexpected shape");
  return {
    goldPerGram,
    silverPerGram: (silverUsdOz / GRAMS_PER_TROY_OZ) * fxRate,
    currency,
    asOf: typeof data.updated_at === "string" ? data.updated_at : new Date().toISOString(),
    source: "xaus.com",
  };
}

async function fromTahababa(): Promise<PriceSnapshot> {
  const data = await fetchJson("https://nisab.tahababa.com/nisab.json");
  const prices = data.prices as { gold?: { per_gram?: number }; silver?: { per_gram?: number } } | undefined;
  const goldPerGram = Number(prices?.gold?.per_gram);
  const silverPerGram = Number(prices?.silver?.per_gram);
  if (!(goldPerGram > 0) || !(silverPerGram > 0)) throw new Error("tahababa: unexpected shape");
  const meta = data.meta as { generated_at?: string } | undefined;
  return {
    goldPerGram,
    silverPerGram,
    currency: "USD",
    asOf: meta?.generated_at ?? new Date().toISOString(),
    source: "nisab.tahababa.com",
  };
}

function json(data: unknown, cacheControl: string, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": cacheControl },
  });
}

export async function onRequestGet({ request }: { request: Request }): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const requested = (searchParams.get("currency") ?? "USD").toUpperCase();
  const currency = SUPPORTED.has(requested) ? requested : "USD";

  const cached = cache.get(currency);
  if (cached && cached.expires > Date.now()) {
    return json(cached.data, "public, s-maxage=21600, stale-while-revalidate=86400");
  }

  let snapshot: PriceSnapshot | null = null;
  try {
    snapshot = await fromXaus(currency);
  } catch {
    try {
      snapshot = await fromTahababa();
    } catch {
      snapshot = null;
    }
  }

  if (!snapshot) {
    if (cached) return json(cached.data, "public, s-maxage=300");
    return json({ error: "Live metal prices are temporarily unavailable." }, "no-store", 503);
  }

  cache.set(currency, { data: snapshot, expires: Date.now() + TTL_MS });
  return json(snapshot, "public, s-maxage=21600, stale-while-revalidate=86400");
}
