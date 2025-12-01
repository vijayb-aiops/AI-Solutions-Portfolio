/** @type {import('next').NextConfig} */

const REPO_NAME = "AI-Solutions-Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? `/${REPO_NAME}` : undefined,
  assetPrefix: isProd ? `/${REPO_NAME}/` : undefined,
  output: "export",
  trailingSlash: true,
  turbopack: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  allowedDevOrigins: ["*.theopenbuilder.com"],
};

export default nextConfig;
