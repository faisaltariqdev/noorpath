"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/trackWhatsAppClick";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * WhatsApp anchor that fires GA4 + Meta click tracking without delaying navigation.
 */
export default function WhatsAppLink({ href, children, onClick, ...rest }: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackWhatsAppClick();
    onClick?.(e);
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
