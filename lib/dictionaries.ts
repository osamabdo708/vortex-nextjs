import "server-only";
import type { Locale } from "@/lib/i18n-config";
import en from "@/lib/dictionaries/en.json";
import ar from "@/lib/dictionaries/ar.json";

const dictionaries = { en, ar };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
