# Credentials required — Google Search Console connect

GSC MCP wiring is ready. **Connection is paused until you add one credential file.**

## Fastest path (OAuth — recommended)

Browser tabs should already be open for:
- Search Console API enable
- Google Cloud Credentials
- Google Search Console

### Do this now (5 minutes)

1. In Google Cloud, select/create a project (e.g. `noorpath-seo`).
2. Enable **Google Search Console API**.
3. **APIs & Services → Credentials → Create credentials → OAuth client ID**
   - If asked, configure OAuth consent screen (External / Internal) with your email.
   - Application type: **Desktop app**
   - Name: `NoorPath Cursor GSC`
4. Download the JSON file.
5. Save it exactly here:

```
/Users/mac/Downloads/noorpath/.credentials/gsc-oauth-client.json
```

6. Tell me in chat: **`gsc oauth ready`**

I will then run `npm run seo:gsc:enable`, and you reload Cursor MCP.  
First GSC question will open Google login — use the account that owns **noorpath.online** in Search Console.

Property used: `sc-domain:noorpath.online`  
(If you only have URL-prefix property, say so — we’ll switch to `https://www.noorpath.online/`)

## Alternative: Service account

1. Create service account → download JSON key → save as:
   `.credentials/gsc-service-account.json`
2. In GSC → Settings → Users → add that email with **Full** access.
3. Reply: **`gsc service account ready`**

## After connected

Ask:
> Run GSC site snapshot, quick wins, CTR opportunities, sitemap status, and write recommended fixes.

## Other (optional later)
- Firecrawl: `FIRECRAWL_API_KEY`
- GA4 / Sheets: see previous templates in `.env.seo.example`
