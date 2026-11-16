# NoorPath ko Cloudflare Pages par chalana

Ye guide Vercel se Cloudflare Pages (free) par jane ke liye hai. Site static files ban kar Cloudflare par jati hai,
aur 3 chhote functions (form email, zakat prices, Meta events) `functions/api/` mein chalte hain.

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

1. **dash.cloudflare.com** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. GitHub authorize karein, repo `faisaltariqdev/noorpath` chunein. Project name: `noorpath`. Production branch: `main`.
3. **Build settings**:
   - Framework preset: **None**
   - Build command: `node scripts/cloudflare-build.mjs`
   - Build output directory: `out`
   - Root directory: khali
4. **Environment variables** (Production aur Preview dono):

   | Naam | Value | Type |
   |---|---|---|
   | `NODE_VERSION` | `22` | Text |
   | `NEXT_PUBLIC_FB_PIXEL_ID` | Vercel se copy karein | Text |
   | `NEXT_PUBLIC_GSC_VERIFICATION` | Vercel se copy karein (agar hai) | Text |
   | `NEXT_PUBLIC_GA_ID` | Vercel se copy karein (agar hai, warna chhod dein) | Text |
   | `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Vercel se copy karein (agar hai) | Text |
   | `RESEND_API_KEY` | Resend ki key | **Secret** |
   | `LEAD_TO_EMAIL` | `info@noorpath.online` | Text |
   | `LEAD_FROM_EMAIL` | `NoorPath Leads <leads@noorpath.online>` (Part B ke baad) | Text |
   | `FB_PIXEL_ACCESS_TOKEN` | Vercel se (sirf agar wahan laga hai) | **Secret** |

   `NEXT_PUBLIC_*` wali values build ke waqt site mein ban jati hain, in ko badalne ke baad dobara deploy karna padta hai.
5. **Save and Deploy**. Build 3-5 minute leta hai. Phir `https://noorpath.pages.dev` milega.
6. Test (nichay checklist).

### Test checklist (pages.dev par)
- Homepage, ek city page, ek blog, `/holy-quran`, `/tools/zakat-calculator` khulte hain.
- `https://noorpath.pages.dev/quran` -> `/holy-quran` par redirect hota hai.
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
4. Pages project -> **Custom domains** -> `www.noorpath.online` add karein (record khud ban jata hai).
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
npx wrangler@3.114.0 pages dev out        # Node 20; naya wrangler Node 22+ mangta hai
```

## Maloom hadood
- Image optimizer nahi hai: images original size mein jati hain. Bari images (khas kar `public/marketing/ads/` wali PNGs aur `og-image.png`) chhoti karna behtar hoga.
- TikTok Events API (server side) kabhi configure nahi tha, to Cloudflare par bhi nahi hai.
- Admin panel (`noorpath-admin`) is guide mein shamil nahi hai. Wo alag Next.js + Supabase app hai.
