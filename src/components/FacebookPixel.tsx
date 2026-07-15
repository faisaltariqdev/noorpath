"use client";

import { Suspense } from "react";
import { FacebookPixel as MetaPixel, PixelPageView } from "next-pixels";

/**
 * Loads Meta Pixel + tracks PageView on every App Router navigation.
 * Suspense wraps PixelPageView (uses useSearchParams) for lazy-safe hydration.
 */
export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <MetaPixel />
      <PixelPageView />
    </Suspense>
  );
}
