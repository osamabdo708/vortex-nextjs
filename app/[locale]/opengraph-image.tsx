import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo-config";

// NOTE: rendered with Latin text only (regardless of locale) because the
// default OG image renderer does not ship Arabic glyph support without an
// extra font fetch. The brand name is Latin either way, so this keeps the
// social preview reliable for both /en and /ar.
export const runtime = "edge";
export const alt = "VORTEX - Software Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #191d24 0%, #1f2a33 55%, #0f83bd 130%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ec6d13, #f2984a)",
            }}
          />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#ffffff" }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            maxWidth: 980,
            lineHeight: 1.15,
          }}
        >
          Transform Your Business with Cutting-Edge Software Solutions
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#cbd5e1",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Web · Mobile · Cloud · AI · IT Consulting
        </div>
      </div>
    ),
    { ...size },
  );
}
