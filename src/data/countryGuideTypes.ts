export interface CountryGuideTable {
  headers: [string, string];
  rows: Array<[string, string]>;
}

export interface CountryGuideSection {
  id: string;
  heading: string;
  directAnswer?: string;
  paragraphs: string[];
  bullets?: string[];
  table?: CountryGuideTable;
}

export interface CountryGuideContent {
  country: string;
  title: string;
  description: string;
  reviewedDate: string;
  sections: CountryGuideSection[];
}

export interface CityGuideContent {
  city: string;
  country: string;
  title: string;
  description: string;
  reviewedDate: string;
  sections: CountryGuideSection[];
}
