"use client";

import { useEffect, useRef } from "react";

const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-6672180310891209";

type Props = {
  /** AdSense ad unit slot ID (from AdSense → Ads → By ad unit). */
  slot?: string;
  /** Optional label shown above the ad for transparency. */
  label?: string;
  /** Extra spacing around the ad block. */
  style?: React.CSSProperties;
};

/**
 * Renders a single AdSense display unit. It stays dormant (renders nothing)
 * until a slot ID is supplied via prop or NEXT_PUBLIC_ADSENSE_SLOT, so nothing
 * broken appears while the site is still under AdSense review.
 */
export default function AdUnit({ slot, label = "Advertisement", style }: Props) {
  const resolvedSlot = slot || process.env.NEXT_PUBLIC_ADSENSE_SLOT || "";
  const pushed = useRef(false);

  useEffect(() => {
    if (!resolvedSlot || pushed.current) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blocker or script not yet loaded — safe to ignore.
    }
  }, [resolvedSlot]);

  if (!resolvedSlot) return null;

  return (
    <div
      style={{
        margin: "28px 0",
        textAlign: "center",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          color: "var(--muted)",
          fontSize: ".68rem",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={resolvedSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
