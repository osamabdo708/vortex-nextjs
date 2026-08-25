import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n-config";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .find((lang) => lang?.startsWith("ar"));

  return preferred ? "ar" : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url,
  );
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  // Skip Next.js internals, API routes and anything that looks like a static file
  // (has a file extension), so images/robots/sitemap/etc are never redirected.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
