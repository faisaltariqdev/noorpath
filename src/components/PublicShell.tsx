import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import TrackingConsent from "./TrackingConsent";
import OrganizationJsonLd from "./OrganizationJsonLd";

export default function PublicShell({ children }: { children: React.ReactNode }) {
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
