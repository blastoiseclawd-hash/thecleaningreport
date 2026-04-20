import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} open graph image`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#102027",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(45,107,115,0.45), transparent 36%), radial-gradient(circle at 82% 78%, rgba(196,138,73,0.14), transparent 28%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#b8c7b2",
            fontSize: 20,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 42,
              height: 2,
              background: "#8ea087",
              marginRight: 18,
            }}
          />
          Independent indoor-cleaning buying guides
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              color: "#f7fbf8",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              maxWidth: 1020,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#dbe4de",
              marginTop: 28,
              lineHeight: 1.25,
              maxWidth: 920,
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#8a9f96",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ maxWidth: 620, lineHeight: 1.35 }}>
            Robot vacuums &middot; cordless vacuums &middot; steam mops &middot; carpet cleaners &middot; pet-mess cleanup
          </div>
          <div style={{ textAlign: "right", color: "#c6b89b" }}>
            thecleaningreport.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
