import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence workspace root warning (parent dir has another lockfile)
  outputFileTracingRoot: process.cwd(),
  // Add any production config here if needed (e.g. images, redirects)
};

export default nextConfig;
