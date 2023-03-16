/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },

};


module.exports = nextConfig;