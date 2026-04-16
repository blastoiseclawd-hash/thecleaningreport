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
          background: "#16212a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f6fbf8",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#b8c7b2",
            marginTop: 24,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8a9f96",
            marginTop: 40,
            textAlign: "center",
            maxWidth: 840,
          }}
        >
          Independent buying guides with transparent editorial desks and clear tradeoffs.
        </div>
      </div>
    ),
    { ...size },
  );
}
