/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  target: "serverless",
  images: {
    domains: ["yeyak.seoul.go.kr"],
  },
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
  },
});
