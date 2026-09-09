import Link from "next/link";
import { Cpu } from "lucide-react";

export default function SoftwareServicesSection() {
  return (
    <section id="software-services" style={{ background: "#fff", padding: "72px 0" }}>
      <div className="max-w-[1100px] mx-auto px-4">
        <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Cpu size={13} aria-hidden="true" /> Software &amp; digital services
        </span>
        <h2 className="section-title">
          Custom software for <em className="accent">institute operations</em>
        </h2>
        <p className="section-desc" style={{ maxWidth: 720 }}>
          Separate from Quran classes and the free tools: scoped admin systems, credit or quota control,
          and written handover. Online delivery. No invented client list or campus visit.
        </p>
        <Link href="/software-services" className="btn-primary-np">
          View software services
        </Link>
      </div>
    </section>
  );
}
