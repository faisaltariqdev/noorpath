import { getOrganizationJsonLd } from "@/lib/organizationSchema";

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
    />
  );
}
