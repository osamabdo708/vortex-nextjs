import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n-config";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/structured-data";

export default function Home({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  const jsonLd = [servicesJsonLd(locale, dict), breadcrumbJsonLd(locale, dict)];

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dict={dict} locale={locale} />
      <main id="main-content">
        <Hero dict={dict} />
        <Services dict={dict} />
        <Features dict={dict} />
        <Clients dict={dict} locale={locale} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
