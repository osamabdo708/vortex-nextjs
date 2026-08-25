"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import razanovaLogo from "@/assets/clients/razanova-logo.png";
import palmartLogo from "@/assets/clients/palmart-logo.png";
import teletelLogo from "@/assets/clients/teletel-logo.png";
import reiaLogo from "@/assets/clients/reia-logo.png";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n-config";

const clientLogos = [
  { name: "Razanova", logo: razanovaLogo, url: "https://razanova.co" },
  { name: "Palmart", logo: palmartLogo, url: "https://palmart.ps" },
  { name: "Teletel", logo: teletelLogo, url: "https://chat.teletel.io" },
  { name: "Reia Clinic", logo: reiaLogo, url: "https://reiaclinic.ps" },
];

export function Clients({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const isRTL = locale === "ar";

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {dict.clients.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {dict.clients.subtitle}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: isRTL ? "rtl" : "ltr",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              playOnInit: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className={isRTL ? "-mr-4" : "-ml-4"}>
            {clientLogos.map((client) => (
              <CarouselItem
                key={client.name}
                className={`md:basis-1/3 lg:basis-1/3 ${isRTL ? "pr-4" : "pl-4"}`}
              >
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                  <Card className="p-8 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center justify-center h-32">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
