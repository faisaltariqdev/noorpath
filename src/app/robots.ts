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
      { userAgent: "DeepSeek-R1", allow: "/" },
      // Kimi / Moonshot AI
      { userAgent: "KimiBot", allow: "/" },
      { userAgent: "MoonshotBot", allow: "/" },
      { userAgent: "Kimi-Research", allow: "/" },
      // ByteDance Doubao / TikTok
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "DoubaoBot", allow: "/" },
      // Alibaba Qwen / Tongyi
      { userAgent: "AliyunBot", allow: "/" },
      { userAgent: "Qwenbot", allow: "/" },
      { userAgent: "Timpibot", allow: "/" },
      // Baidu ERNIE / Baidu Search
      { userAgent: "Baiduspider", allow: "/" },
      { userAgent: "Baiduspider-render", allow: "/" },
      { userAgent: "ErnieBot", allow: "/" },
      // Tencent Hunyuan / Sogou
      { userAgent: "TencentBot", allow: "/" },
      { userAgent: "Sogou web spider", allow: "/" },
      { userAgent: "Sogou", allow: "/" },
      // Other popular China search / AI retrieval
      { userAgent: "360Spider", allow: "/" },
      { userAgent: "YisouSpider", allow: "/" },
      { userAgent: "PetalBot", allow: "/" },
      { userAgent: "HuaweiWebCatBot", allow: "/" },
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
      // Apple Intelligence
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // DuckDuckGo AI / Amazon
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
    ],
    sitemap: [
      "https://www.noorpath.online/sitemap.xml",
      "https://www.noorpath.online/holy-quran/sitemap.xml",
      "https://www.noorpath.online/tools/sitemap.xml",
    ],
    host: "https://www.noorpath.online",
  };
}
