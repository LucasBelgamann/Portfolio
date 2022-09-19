/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'https://cdn.clickwallpapers.net/',
      'https://images.unsplash.com/'
    ],
  },
}

module.exports = nextConfig
