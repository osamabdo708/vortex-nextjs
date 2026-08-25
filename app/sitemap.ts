import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n-config";
import { siteConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteConfig.url}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
