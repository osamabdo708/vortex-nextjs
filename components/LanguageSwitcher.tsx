"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, localeNames, type Locale } from "@/lib/i18n-config";

function localizedHref(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = targetLocale;
  return segments.join("/") || `/${targetLocale}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-muted" aria-label="Change language">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card z-50">
        {locales.map((code) => (
          <DropdownMenuItem key={code} asChild disabled={code === locale}>
            <Link
              href={localizedHref(pathname, code)}
              hrefLang={code}
              className="w-full cursor-pointer"
              aria-current={code === locale ? "true" : undefined}
            >
              {localeNames[code]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
