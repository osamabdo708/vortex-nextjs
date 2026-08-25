import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description:
      "Custom software, web, mobile, cloud and AI solutions for businesses worldwide.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e07a2d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
