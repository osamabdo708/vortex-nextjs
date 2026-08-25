import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";
import { siteConfig } from "@/lib/seo-config";

const serviceKeys = [
  "softwareDev",
  "webDesign",
  "mobileSolutions",
  "cloudDevOps",
  "itConsulting",
  "aiData",
  "erpCrm",
  "integration",
] as const;

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/${locale}`,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };
}

export function websiteJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/${locale}`,
    name: siteConfig.name,
    description: dict.seo.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function servicesJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/${locale}/#services`,
    name: dict.services.title,
    itemListElement: serviceKeys.map((key, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: dict.services[key].title,
        description: dict.services[key].description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Worldwide",
      },
    })),
  };
}

export function breadcrumbJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.nav.home,
        item: `${siteConfig.url}/${locale}`,
      },
    ],
  };
}
