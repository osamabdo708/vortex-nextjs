import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n-config";

// Next.js does not currently pass `params` to a nested not-found.tsx, so we
// render a locale-neutral (English + Arabic) message that works regardless
// of which locale segment the visitor was under.
export default function NotFound() {
  const en = getDictionary("en" as Locale);
  const ar = getDictionary("ar" as Locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-4 text-center">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">404</p>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">{en.notFound.title}</h1>
        <p className="text-muted-foreground">{en.notFound.description}</p>
        <Link href="/en" className="inline-block text-primary underline hover:text-primary/80">
          {en.notFound.cta}
        </Link>
      </div>

      <div className="space-y-3" dir="rtl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">{ar.notFound.title}</h2>
        <p className="text-muted-foreground">{ar.notFound.description}</p>
        <Link href="/ar" className="inline-block text-primary underline hover:text-primary/80">
          {ar.notFound.cta}
        </Link>
      </div>
    </div>
  );
}
