import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
