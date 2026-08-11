"use client";

import { useEffect, useRef, useState } from "react";

/**
 * `autoPlay` forces a download no matter what `preload` says, so the source is
 * attached only once the element is near the viewport. The poster renders
 * immediately either way, so the section never looks empty.
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
  const [shouldLoad, setShouldLoad] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (shouldLoad) return;

    const el = ref.current;
    if (!el) return;

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
  }, [shouldLoad]);

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
