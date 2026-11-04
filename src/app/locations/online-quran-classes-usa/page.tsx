import CountryLandingPage, { countryLandingMetadata } from "@/components/country/CountryLandingPage";

export const revalidate = false;

const SLUG = "online-quran-classes-usa";

export const metadata = countryLandingMetadata(SLUG);

export default function Page() {
  return <CountryLandingPage slug={SLUG} />;
}
