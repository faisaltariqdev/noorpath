# NoorPath ko Cloudflare (Workers + Static Assets) par chalana

Ye guide Vercel se Cloudflare (free) par jane ke liye hai. Site static files ban kar Cloudflare par jati hai,
aur 3 chhote functions (form email, zakat prices, Meta events) ek Worker mein chalte hain (`worker/index.ts`, code `functions/api/` mein).
(Pages wale purane flow ke liye bhi `functions/` kaam karta hai, lekin dashboard ab Workers dikhata hai.)

**Vercel wala setup waisa hi rehta hai.** `scripts/cloudflare-build.mjs` sirf Cloudflare ke build mein chalta hai.

## Kya badal jata hai

| Cheez | Vercel | Cloudflare |
|---|---|---|
| Pages | Next.js server | Static HTML files (585 pages) |
| Form ki email | Hostinger SMTP | **Resend** (HTTP API) |
| Redirects / noindex headers | `proxy.ts`, `next.config.ts` | `_redirects` (1,323 rules), `_headers` (auto-generate) |
| Images | Vercel image optimizer (AVIF/WebP) | Jaisi hain waisi (optimizer nahi) |
| Bandwidth limit | Hobby: bohat tang | Static files par koi limit nahi |

## Part A: Test deploy (domain chhue baghair)

Dashboard ka naya flow **Workers** hai ("Set up your application"). Repo mein `wrangler.jsonc` aur `worker/index.ts` is ke liye hain.
Site ki saari files Cloudflare seedha serve karta hai (Worker nahi chalta), sirf `/api/*` Worker se guzarta hai.

1. **dash.cloudflare.com** -> **Workers & Pages** -> **Create application** -> **Import a repository** (GitHub).
2. Repo `faisaltariqdev/noorpath`, branch `main`. Project name: **`noorpath`** (`wrangler.jsonc` ke `name` se milna chahiye).
3. **Build settings**:
   - Build command: `node scripts/cloudflare-build.mjs`
   - Deploy command: `npx wrangler deploy` (jaisa hai waisa rehne dein)
   - **Enable Preview builds**: band (off) kar dein
4. **Build variables** (Settings -> Build -> **Variables and secrets**; ye site ke andar build ke waqt ban jati hain):

   | Naam | Value |
   |---|---|
   | `NODE_VERSION` | `22` |
   | `NEXT_PUBLIC_FB_PIXEL_ID` | Vercel se copy karein |
   | `NEXT_PUBLIC_GSC_VERIFICATION` | Vercel se copy karein (agar hai) |
   | `NEXT_PUBLIC_GA_ID` | Vercel se copy karein (agar hai) |
   | `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Vercel se copy karein (agar hai) |

5. **Runtime variables** (Worker -> Settings -> **Variables and Secrets**; ye form ki email wagaira ke liye hain):

   | Naam | Value | Type |
   |---|---|---|
   | `RESEND_API_KEY` | Resend ki key | **Secret** |
   | `LEAD_TO_EMAIL` | `info@noorpath.online` (Part B se pehle apna Resend-account email) | Text |
   | `LEAD_FROM_EMAIL` | `NoorPath Leads <leads@noorpath.online>` (Part B ke baad; pehle `onboarding@resend.dev`) | Text |
   | `FB_PIXEL_ACCESS_TOKEN` | Vercel se (sirf agar wahan laga hai) | **Secret** |
   | `NEXT_PUBLIC_FB_PIXEL_ID` | wahi jo upar | Text |

6. **Deploy**. Build 3-5 minute leta hai. Phir `https://noorpath.<aapka-subdomain>.workers.dev` milega.
7. Test (neeche checklist).

### Test checklist (workers.dev par)
- Homepage, ek city page, ek blog, `/holy-quran`, `/tools/zakat-calculator` khulte hain.
- `/quran` -> `/holy-quran` par redirect hota hai.
- Form bharein (Accept cookie, number bina country code ke). Email aati hai: subject `[TikTok ad]` ya `New trial request`, number `+92 ...`.
- Thank-you page ka URL sirf `?submitted=1` hai.
- Zakat calculator mein gold/silver price aate hain.

## Part B: Resend domain verify (form email ke liye)

Jab tak domain verify nahi hota, Resend sirf aap ke apne Resend-account email par bhej sakta hai. Us waqt `LEAD_TO_EMAIL`
mein wahi email rakhein, aur `LEAD_FROM_EMAIL` = `onboarding@resend.dev`.

1. resend.com -> **Domains** -> **Add Domain** -> `noorpath.online`.
2. Resend DNS records dikhata hai (SPF/DKIM/MX, aam taur par `send.` subdomain par). Part C ke baad ye Cloudflare DNS mein add karein.
3. **Verify** dabayein. Phir `LEAD_FROM_EMAIL` / `LEAD_TO_EMAIL` upar wali values par kar ke dobara deploy karein.

## Part C: Domain Cloudflare par le jana

**Dhyan:** `info@noorpath.online` Hostinger par hai. Mail wale records (MX, SPF, DKIM, autodiscover) kisi surat zaya na hon.

1. Cloudflare -> **Add a domain** -> `noorpath.online` -> **Free** plan.
2. Cloudflare purane DNS records khud scan karta hai. **Har record** purane DNS se milakar dekhein, khas kar:
   - `MX` (mail), `TXT` (SPF, DKIM, verification), `CNAME` (autodiscover, dkim).
   - **Mail se related records ko "DNS only" (grey cloud) rakhein.**
   - `admin` record (admin panel, Vercel par): `CNAME admin -> cname.vercel-dns.com`, **DNS only**.
3. Registrar (jahan se domain khareeda) par **nameservers** Cloudflare wale kar dein. Activate hone mein kuch minute se kuch ghante lagte hain.
4. Worker `noorpath` -> **Settings** -> **Domains & Routes** -> **Add** -> **Custom domain** -> `www.noorpath.online` (record khud ban jata hai).
5. Apex ko www par bhejna: Cloudflare -> **Rules** -> **Redirect Rules** -> naya rule:
   - When: Hostname equals `noorpath.online`
   - Then: Dynamic redirect, `concat("https://www.noorpath.online", http.request.uri.path)` aur query preserve, status **301**.
6. Purane Vercel wale `www` / apex records hata dein (A `76.76.21.21`, `cname.vercel-dns.com` sirf `admin` ke liye rahe).
7. Part B ke Resend records yahan add karein aur verify karein.

### DNS badalne ke baad check
```bash
curl -sI https://www.noorpath.online/ | head -5
curl -sI https://noorpath.online/ | grep -i location
curl -sI https://www.noorpath.online/quran | grep -i location
```
Mail bhi test karein: kisi dusre email se `info@noorpath.online` par mail bhejein, aur form se test lead bhejein.

## Rollback (agar kuch ghalat ho)
Nameservers wapas purane par kar dein. Vercel par site tabhi chalegi jab Vercel ka pause khatam ho ya Pro ho; isliye cutover se pehle Part A ke saare tests pass honay chahiye.

## Local test (developer)
```bash
node scripts/cloudflare-build.mjs         # temp copy mein build, repo ko nahi chhoota
cd "$TMPDIR/noorpath-cf-build"
printf 'RESEND_API_KEY=test\n' > .dev.vars
npx wrangler@4.20.0 dev                   # Node 20 ke liye; naya wrangler Node 22+ mangta hai
```

## Maloom hadood
- Image optimizer nahi hai: images original size mein jati hain. Bari images (khas kar `public/marketing/ads/` wali PNGs aur `og-image.png`) chhoti karna behtar hoga.
- TikTok Events API (server side) kabhi configure nahi tha, to Cloudflare par bhi nahi hai.
- Admin panel (`noorpath-admin`) is guide mein shamil nahi hai. Wo alag Next.js + Supabase app hai.
