import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/lib/seo-config";
import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Image src={logo} alt="VORTEX" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">{dict.footer.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.servicesHeading}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors">
                {dict.services.softwareDev.title}
              </li>
              <li className="hover:text-foreground transition-colors">
                {dict.services.webDesign.title}
              </li>
              <li className="hover:text-foreground transition-colors">
                {dict.services.mobileSolutions.title}
              </li>
              <li className="hover:text-foreground transition-colors">
                {dict.services.cloudDevOps.title}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.moreServicesHeading}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors">
                {dict.services.itConsulting.title}
              </li>
              <li className="hover:text-foreground transition-colors">
                {dict.services.aiData.title}
              </li>
              <li className="hover:text-foreground transition-colors">
                {dict.services.erpCrm.title}
              </li>
              <li className="hover:text-foreground transition-colors">
                {dict.services.integration.title}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.contactHeading}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="rtl:direction-ltr rtl:text-right">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-foreground transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={siteConfig.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.sameAs[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
