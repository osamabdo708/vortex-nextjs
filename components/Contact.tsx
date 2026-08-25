import Image from "next/image";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { siteConfig } from "@/lib/seo-config";
import type { Dictionary } from "@/lib/dictionaries";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold">{dict.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{dict.contact.subtitle}</p>
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <Image src={whatsappIcon} alt="" aria-hidden="true" className="mr-2 h-5 w-5" />
                {dict.contact.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
