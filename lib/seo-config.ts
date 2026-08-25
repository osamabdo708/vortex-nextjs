export const siteConfig = {
  name: "VORTEX",
  legalName: "VORTEX Software Solutions",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vortex.ps").replace(/\/$/, ""),
  email: "info@vortex.ps",
  phone: "+972535444287",
  phoneDisplay: "+972 53-544-4287",
  whatsapp: "https://wa.me/972535444287",
  sameAs: [
    "https://www.facebook.com/vortexsoftsol/",
    "https://instagram.com/vortexsoftsol",
  ],
  addressCountry: "PS",
};

export type SiteConfig = typeof siteConfig;
