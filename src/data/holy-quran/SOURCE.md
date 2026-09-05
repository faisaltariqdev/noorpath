# Holy Quran dataset

- **Script:** Uthmani (الرسم العثماني)
- **Verified source:** [Tanzil.net](https://tanzil.net)
- **Imported edition:** Al Quran Cloud `quran-uthmani`
- **Import URL:** https://api.alquran.cloud/v1/quran/quran-uthmani
- **Counts:** 114 Surahs · 30 Juz/Paras · 6236 ayahs
- **Rule:** Arabic text is stored exactly as downloaded. Do not type, generate, or reconstruct verses.

Re-import in **noorpath-admin** (does not invent text), then sync here:

```bash
cd ../noorpath-admin && npm run import:holy-quran
cd ../noorpath && npm run sync:holy-quran
```
