/**
 * Cloudflare Worker entry (Workers + Static Assets).
 *
 * The static site in out/ is served directly by Cloudflare (free, no Worker invocation).
 * Only /api/* requests reach this Worker (see "run_worker_first" in wrangler.jsonc); the handlers
 * are the same ones used as Cloudflare Pages Functions in functions/api/.
 */
import { onRequestPost as leadsPost } from "../functions/api/leads";
import { onRequestGet as nisabGet } from "../functions/api/nisab";
import { onRequestPost as fbEventsPost } from "../functions/api/fb-events";

type Env = { ASSETS: { fetch(request: Request): Promise<Response> } } & Record<string, unknown>;

function methodNotAllowed(): Response {
  return new Response(JSON.stringify({ ok: false, error: "method_not_allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const ctx = { request, env: env as never };

    if (path === "/api/leads") return request.method === "POST" ? leadsPost(ctx) : methodNotAllowed();
    if (path === "/api/fb-events") return request.method === "POST" ? fbEventsPost(ctx) : methodNotAllowed();
    if (path === "/api/nisab") return request.method === "GET" ? nisabGet(ctx) : methodNotAllowed();

    return env.ASSETS.fetch(request);
  },
};
