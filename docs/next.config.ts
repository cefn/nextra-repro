import type { NextConfig } from "next";

import nextra from "nextra";

const BASE_PATH = process.env.BASE_PATH ?? "/standard";

const createNextraConfig = nextra({});

// You can include other Next.js configuration options here, in addition to Nextra settings:
const nextConfig: NextConfig = createNextraConfig({
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  distDir: "out",
  trailingSlash: true,
  webpack: (config) => {
    config.target = "node22";
    return config;
  },
});

export default nextConfig;
