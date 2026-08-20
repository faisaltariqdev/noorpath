"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lazy-loads both the video source AND starts with shouldLoad=false on both
 * server and client to prevent a hydration mismatch.
 *
 * Previously, the initialiser `() => typeof IntersectionObserver === "undefined"`
 * evaluated to `true` on the server (Node has no IntersectionObserver), so the
 * SSR HTML included `src="..."` — causing every browser to immediately fetch the
 * full MP4 (~2.3 MB) on page load before any interaction.
 *
 * Fix: always start false; set true inside useEffect (client-only).
 * The poster PNG renders immediately so the section never looks empty.
 */
export default function LazyPreviewVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  // Always false on first render (server + client) — no hydration mismatch.
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for environments without IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    // Attaching src after mount does not always retrigger autoplay.
    ref.current?.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    />
  );
}
