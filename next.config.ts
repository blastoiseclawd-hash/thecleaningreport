import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.dreametech.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "us.roborock.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "us.store.tapo.com",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
};

export default nextConfig;
