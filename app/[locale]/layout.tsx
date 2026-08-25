import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale, locales, type Locale } from "@/lib/i18n-config";
import { siteConfig } from "@/lib/seo-config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: LayoutParams;
}): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const url = `${siteConfig.url}/${locale}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "technology",
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en`,
        ar: `${siteConfig.url}/ar`,
        "x-default": `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: dict.seo.title,
      description: dict.seo.description,
      siteName: siteConfig.name,
      locale: locale === "ar" ? "ar_PS" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_PS",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#191d24" },
  ],
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  const jsonLd = [organizationJsonLd(locale), websiteJsonLd(locale, dict)];

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${tajawal.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>
              <a href="#main-content" className="skip-link">
                {dict.a11y.skipToContent}
              </a>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
