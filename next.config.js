const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: { domains: ["images.dog.ceo"] },
  sassOptions: { includePaths: [path.join(__dirname, "styles")] }
};

module.exports = nextConfig;
