import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.antaranews.com",
      },
      { protocol: "https", hostname: "static.republika.co.id" },
      { protocol: "https", hostname: "*.okezone.com" },
      { protocol: "https", hostname: "img.okezone.com" },
    ],
  },
};

export default nextConfig;
