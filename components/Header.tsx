import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n-config";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <Image src={logo} alt="VORTEX" className="h-8 w-auto" priority />
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {dict.nav.home}
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {dict.nav.services}
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {dict.nav.about}
          </a>
          <a
            href="#clients"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {dict.nav.companies}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher locale={locale} />
          <Button
            asChild
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="#contact">{dict.nav.contact}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
