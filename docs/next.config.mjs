/**
 * @typedef {import("next").NextConfig} NextConfig
 */

import nextra from "nextra";

const BASE_PATH = process.env.BASE_PATH || "/standard";

const createNextraConfig = nextra({});

/** @type {NextConfig} */
const nextConfig = createNextraConfig({
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  distDir: "out/standard",
  trailingSlash: true,
  webpack: (config) => {
    config.target = "node22";
    return config;
  },
});

export default nextConfig;
