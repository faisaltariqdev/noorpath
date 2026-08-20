# NoorPath reusable AI SEO workflows

Paste sections from `WORKFLOWS.md` into Cursor Agent chat. Prefer MCP tools when green in **Settings → MCP**.

Base URL: `https://www.noorpath.online`

## Local FREE audits (no MCP keys)

```bash
nvm use 20
npm run seo:agent
npm run seo:schema
npm run seo:audit
npm run seo:lighthouse
npm run seo:all
npm run seo:hooks
```

Reports: `seo-reports/` (gitignored).  
Pre-commit automatically runs `seo:agent:staged`.

## Google / Firecrawl

Provide secrets listed in `/CREDENTIALS-REQUIRED.md`, then ask Agent to resume Google SEO automation.
