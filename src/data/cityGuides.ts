import { cityGuidesUkPrimary } from "@/data/cityGuidesUkPrimary";
import { cityGuidesUkSecondary } from "@/data/cityGuidesUkSecondary";
import { cityGuidesUsPrimary } from "@/data/cityGuidesUsPrimary";
import { cityGuidesUsSecondary } from "@/data/cityGuidesUsSecondary";
import type { CityGuideContent } from "@/data/countryGuideTypes";

const CITY_GUIDES: Record<string, CityGuideContent> = {
  ...cityGuidesUkPrimary,
  ...cityGuidesUkSecondary,
  ...cityGuidesUsPrimary,
  ...cityGuidesUsSecondary,
};

export function getCityGuide(slug: string): CityGuideContent | undefined {
  return CITY_GUIDES[slug];
}
