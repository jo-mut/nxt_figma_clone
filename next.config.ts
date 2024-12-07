import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add support for routing with .cljs files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'cljs'],

  // Add other configuration options here if needed
};

export default nextConfig;
