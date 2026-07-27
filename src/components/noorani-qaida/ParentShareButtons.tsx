"use client";

import { useCallback, useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { CONTACT } from "@/lib/academyFacts";

type Props = {
  label?: string;
  shareText: string;
  shareUrl: string;
  className?: string;
};

export default function ParentShareButtons({
  label = "Share this with another parent",
  shareText,
  shareUrl,
  className,
}: Props) {
  const [copied, setCopied] = useState(false);
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;

  const handleNativeShare = useCallback(async () => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: "NoorPath Noorani Qaida", text: shareText, url: shareUrl });
        return;
      } catch {
        // User cancelled or share failed — fall through to copy.
      }
    }
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — WhatsApp link remains as primary path.
    }
  }, [shareText, shareUrl]);

  return (
    <div className={className ?? "qaida-share-row"}>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary-np"
      >
        <Share2 size={16} aria-hidden="true" /> {label}
      </a>
      <button type="button" className="btn-outline-np" onClick={handleNativeShare}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? "Link copied" : "Copy or share link"}
      </button>
      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-np"
        aria-label="Message NoorPath on WhatsApp"
      >
        Ask NoorPath on WhatsApp
      </a>
    </div>
  );
}
