/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: "serverless",
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
  },
});
