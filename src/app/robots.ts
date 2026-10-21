import type { MetadataRoute } from "next";

// A crawler obeys only its most specific group, so every named group repeats these.
const PRIVATE_PATHS = ["/api/", "/thank-you"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE_PATHS,
      },
      // ── Real-Time AI Search Engines & Answer Attribution Bots (Priority Allow) ──
      // ChatGPT / OpenAI Search
      { userAgent: "OAI-SearchBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "ChatGPT-User", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "GPTBot", allow: "/", disallow: PRIVATE_PATHS },
      // Anthropic Claude
      { userAgent: "ClaudeBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "Claude-Web", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "anthropic-ai", allow: "/", disallow: PRIVATE_PATHS },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/", disallow: PRIVATE_PATHS },
      // Google Search & Gemini
      { userAgent: "Googlebot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "Google-Extended", allow: "/", disallow: PRIVATE_PATHS },
      // Apple Intelligence & Siri
      { userAgent: "Applebot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "Applebot-Extended", allow: "/", disallow: PRIVATE_PATHS },
      // Microsoft Copilot & Bing
      { userAgent: "bingbot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "BingPreview", allow: "/", disallow: PRIVATE_PATHS },
      // Meta AI Search
      { userAgent: "meta-externalagent", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "FacebookBot", allow: "/", disallow: PRIVATE_PATHS },
      // Other AI Search & Answers
      { userAgent: "Bravebot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "DuckAssistBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "YouBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "Cohere-ai", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "Amazonbot", allow: "/", disallow: PRIVATE_PATHS },
      // Regional & Specialised AI Retrieval Engines
      { userAgent: "GrokBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "xAI", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "DeepSeekBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "DeepSeek-R1", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "KimiBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "MoonshotBot", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "Qwenbot", allow: "/", disallow: PRIVATE_PATHS },
      // ── Aggressive Unattributed Training Scrapers (Disallowed) ──
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
    ],
    sitemap: [
      "https://www.noorpath.online/sitemap.xml",
      "https://www.noorpath.online/holy-quran/sitemap.xml",
      "https://www.noorpath.online/tools/sitemap.xml",
    ],
    host: "https://www.noorpath.online",
  };
}
