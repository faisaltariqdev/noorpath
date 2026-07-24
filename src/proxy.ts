import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Old and consolidated paths → current canonical owners */
const LEGACY_PATHS: Record<string, string> = {
  "/best-online-quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/online-quran-academy": "/online-quran-classes",
  "/quran-lesson-online": "/online-quran-classes",
  "/studying-quran-online": "/learn-quran-online",
  "/courses/quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/courses/tajweed-classes-online": "/learn-tajweed-online",
  "/courses/hifz-program-online": "/hifz-quran-online",
  "/online-quran-learning": "/learn-quran-online",
  "/quran-teaching": "/quran-teacher-online",
  "/quran-teaching-online": "/learn-quran-online",
  "/learn-quran-online.html": "/learn-quran-online",
  "/online-quran-for-kids": "/online-quran-classes-for-kids",
  "/quran-classes-for-kids": "/online-quran-classes-for-kids",
  "/online-quran-teaching-jobs": "/our-tutors",
  "/free-resources": "/islamic-resources",
  "/free-resources.html": "/islamic-resources",
  "/about.html": "/about",
  "/index.html": "/",
  // Legacy blog/*.html (audit §1.1) — also covered by generic .html strip below
  "/blog/index.html": "/blog",
  "/blog/index": "/blog",
  "/blog/99-names-of-allah-asmaul-husna.html": "/blog/99-names-of-allah-asmaul-husna",
  "/blog/alhamdulillah-meaning-in-english.html": "/blog/alhamdulillah-meaning-in-english",
  "/blog/astaghfirullah-meaning.html": "/blog/astaghfirullah-meaning",
  "/blog/ayatul-kursi-arabic-english-benefits.html": "/blog/ayatul-kursi-arabic-english-benefits",
  "/blog/mashallah-meaning.html": "/blog/mashallah-meaning",
  "/blog/noorani-qaida-complete-guide.html": "/blog/noorani-qaida-complete-guide",
  "/blog/surah-yaseen-arabic-english.html": "/blog/surah-yaseen-arabic-english",
  "/blog/tajweed-rules-complete-guide.html": "/blog/tajweed-rules-complete-guide",
  "/blog/best-age-to-start-quran-learning.html": "/blog/best-age-to-start-quran-learning",
  "/blog/how-to-memorize-quran-faster.html": "/blog/how-to-memorize-quran-faster",
  "/blog/dua-e-qunoot-arabic-english.html": "/blog/dua-e-qunoot-arabic-english",
  "/blog/benefits-of-online-quran-classes.html": "/blog/benefits-of-online-quran-classes",
  "/blog/duas-for-kids-to-memorize.html": "/blog/duas-for-kids-to-memorize",
  "/blog/how-to-teach-quran-to-kids.html": "/blog/how-to-teach-quran-to-kids",
  "/blog/how-to-pray-salah-step-by-step.html": "/blog/how-to-pray-salah-step-by-step",
  "/blog/islamic-baby-names-2026.html": "/blog/islamic-baby-names-2026",
  "/blog/islamic-dream-interpretation.html": "/blog/islamic-dream-interpretation",
  "/blog/signs-of-qiyamah.html": "/blog/signs-of-qiyamah",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (LEGACY_PATHS[pathname]) {
    return NextResponse.redirect(new URL(LEGACY_PATHS[pathname], request.url), 301);
  }

  if (pathname.endsWith(".html")) {
    const withoutHtml = pathname.slice(0, -5);
    const target = LEGACY_PATHS[withoutHtml] ?? LEGACY_PATHS[pathname] ?? withoutHtml;
    return NextResponse.redirect(new URL(target || "/", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf)).*)",
  ],
};
