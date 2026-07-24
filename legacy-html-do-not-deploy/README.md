# Legacy HTML — do not deploy

Static blog HTML files formerly at repo-root `blog/*.html`.

They are kept for reference only. Next.js App Router serves clean URLs under `/blog/[slug]`. Production 301s for `*.html` paths are handled in `src/proxy.ts`.

Do **not** move these files into `public/` or any Vercel-served static path.
