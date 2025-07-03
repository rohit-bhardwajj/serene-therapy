import type { NextConfig } from "next";
import path from 'path';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Point @ to src folder
    return config;
  },
};

export default nextConfig;
