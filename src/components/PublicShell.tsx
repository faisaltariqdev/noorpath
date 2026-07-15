"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import TrackingConsent from "./TrackingConsent";
import OrganizationJsonLd from "./OrganizationJsonLd";

const PRIVATE_PATHS = ["/noorani-qaida", "/academy", "/kids-learning"];

function isPrivatePath(pathname: string) {
  return PRIVATE_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export default function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (isPrivatePath(pathname)) {
    // Private module: render children only, no public chrome
    return <>{children}</>;
  }

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <OrganizationJsonLd />
      <Navbar />
      <main id="main-content" style={{ paddingTop: 0 }}>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <TrackingConsent />
    </>
  );
}
