import type { MetadataRoute } from "next";
import { holyQuranSitemapEntries } from "@/data/holy-quran";

export default function sitemap(): MetadataRoute.Sitemap {
  return holyQuranSitemapEntries();
}
