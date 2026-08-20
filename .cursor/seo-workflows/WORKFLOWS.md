# Enterprise SEO workflow prompts (NoorPath)

Copy a section into Agent chat. Use live tools when available (Chrome DevTools MCP, Playwright MCP, Lighthouse MCP, Firecrawl, GSC).

Site: `https://www.noorpath.online`

---

## 1) Technical SEO audit
```
Run a full technical SEO audit of https://www.noorpath.online.
Check: HTTPS, robots.txt, sitemap.xml, status codes for top templates (home, pricing, kids classes, blog index, 5 blog posts, 2 location pages), redirects, canonical consistency, indexability, crawl traps.
Also run: npm run seo:audit
Return severity-ranked findings + exact file fixes in this Next.js repo.
```

## 2) Metadata audit
```
Audit title/description/canonical for home, /online-quran-classes-for-kids, /pricing, /free-quran-classes-online, and 5 newest blogs.
Flag: missing, duplicated, too long/short, keyword stuffing, title doubling with layout template.
Propose concrete generateMetadata changes.
```

## 3) Open Graph audit
```
Validate og:title, og:description, og:image, og:url, og:type on key URLs.
Ensure absolute https image URLs and brand-safe previews. Fix gaps in layout/page metadata.
```

## 4) Twitter Card audit
```
Validate twitter:card, twitter:title, twitter:description, twitter:image on key URLs. Align with OG where possible.
```

## 5) Structured Data validation
```
Extract all JSON-LD on home, course, blog post, and location pages.
Validate Organization/Course/FAQPage/Article/BreadcrumbList against Schema.org + Google rich-result eligibility.
Reject invented AggregateRating or campus LocalBusiness. Keep Trustpilot truth only.
```

## 6) Robots.txt validation
```
Fetch /robots.txt. Confirm AI bots allowlist intent, /api/ disallow, sitemap URL correctness. Diff against src/app/robots.ts.
```

## 7) Sitemap validation
```
Fetch /sitemap.xml. Check count, https-only, lastmod honesty, commercial/high-traffic blog priorities from src/app/sitemap.ts, and that new blog slugs are present.
```

## 8) Canonical validation
```
For sample URLs, compare HTML canonical, sitemap loc, and internal links. Flag parameter duplicates and http/https mismatches.
```

## 9) Internal linking audit
```
Map hub → spoke links for kids classes, pricing, free trial, Gulf/UAE locations, and newest commercial blogs. Suggest missing contextual links without spam.
```

## 10) Broken links audit
```
Use Playwright or fetch to check in-content hrefs on home + 10 blogs for 4xx/5xx. Report broken URLs with source files.
```

## 11) Redirect audit
```
List redirects for renamed courses/blogs. Ensure single-hop https, no chains, and sitemap uses final URLs.
```

## 12) Image SEO audit
```
Sample pages for missing alt, oversized heroes, missing width/height, and LCP image candidates. Prefer next/image patterns already in repo.
```

## 13) Core Web Vitals audit
```
Using Chrome DevTools MCP performance trace (or Lighthouse), measure LCP/INP/CLS on home + kids classes mobile. Propose code-level fixes only.
```

## 14) Lighthouse automation
```
Run lighthouse_audit (Chrome DevTools MCP) and/or npm run seo:lighthouse on home + /online-quran-classes-for-kids (mobile + desktop). Summarize SEO/a11y/BP/perf with top 5 fixes.
```

## 15) Mobile SEO audit
```
Emulate mobile viewport. Check tap targets, font scaling, horizontal overflow, and mobile title/description rendering.
```

## 16) International SEO audit
```
Review hreflang / locale clusters in geoSeo, UAE/Saudi/UK/US location pages, and timezone copy honesty (online-only). No fake local NAP.
```

## 17) EEAT checks
```
Audit author pages, editorial policy, about/founder, Trustpilot truthfulness, contact clarity, and experience signals on commercial pages. No fabricated credentials.
```

## 18) Google Search Console analysis
```
(Requires GSC MCP credentials.) Pull last 28 days queries/pages. Find position 8–20 CTR opportunities, soft-404 candidates, and video “not on watch page” noise vs real index issues.
```

## 19) Keyword opportunity analysis
```
From GSC (if available) + existing blog inventory in src/data/blog.ts, list gaps vs high-intent parent/Islamic queries. Propose only non-duplicate slugs.
```

## 20) Content optimization
```
Rewrite/improve one URL for helpfulness: answer-first, clear H2s, FAQ alignment, internal links, honest CTAs using academyFacts.
```

## 21) Schema generation
```
Generate valid JSON-LD for a given page type without false ratings/campuses. Wire into existing schema helpers where present.
```

## 22) Next.js SEO validation
```
Review App Router metadata, sitemap.ts, robots.ts, absolute titles, and client-only content that may hide critical SEO text from HTML.
```

## 23) AI Overview optimization
```
Ensure key pages have concise factual answers, unique angles, citations to on-site sources, and no thin doorway patterns.
```

## 24) AI Search optimization
```
Check robots allow for major AI crawlers, llms-friendly clarity, entity consistency (NoorPath Academy, online-only), and FAQ/schema usefulness for answer engines.
```
