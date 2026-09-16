import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
      // ── Real-Time AI Search Engines & Answer Attribution Bots (Priority Allow) ──
      // ChatGPT / OpenAI Search
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      // Anthropic Claude
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      // Google Search & Gemini
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      // Apple Intelligence & Siri
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Microsoft Copilot & Bing
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "BingPreview", allow: "/" },
      // Meta AI Search
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      // Other AI Search & Answers
      { userAgent: "Bravebot", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "Cohere-ai", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      // Regional AI Retrieval Engines
      { userAgent: "DeepSeekBot", allow: "/" },
      { userAgent: "DeepSeek-R1", allow: "/" },
      { userAgent: "KimiBot", allow: "/" },
      { userAgent: "MoonshotBot", allow: "/" },
      { userAgent: "Qwenbot", allow: "/" },
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
