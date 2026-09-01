import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // ChatGPT / OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Google Gemini / Bard
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      // Anthropic Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      // Grok (xAI)
      { userAgent: "Grok", allow: "/" },
      { userAgent: "xAI-Bot", allow: "/" },
      // DeepSeek
      { userAgent: "DeepSeek", allow: "/" },
      { userAgent: "DeepSeekBot", allow: "/" },
      // Meta AI / Llama
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      // Microsoft Copilot / Bing
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "BingPreview", allow: "/" },
      // Other AI search & retrieval bots
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "Cohere-ai", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      // Kimi / Moonshot AI
      { userAgent: "KimiBot", allow: "/" },
      { userAgent: "MoonshotBot", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // DuckDuckGo AI / ByteDance / Amazon
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
    ],
    sitemap: "https://www.noorpath.online/sitemap.xml",
    host: "https://www.noorpath.online",
  };
}
