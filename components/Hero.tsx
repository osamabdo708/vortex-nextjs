import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { siteConfig } from "@/lib/seo-config";
import type { Dictionary } from "@/lib/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{dict.hero.eyebrow}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {dict.hero.title}
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {dict.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <Image src={whatsappIcon} alt="" aria-hidden="true" className="mr-2 h-5 w-5" />
                {dict.hero.cta}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 hover:bg-muted">
              <a href="#services">{dict.hero.learnMore}</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
