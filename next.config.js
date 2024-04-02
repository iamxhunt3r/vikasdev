/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // Replace the domains array with remotePatterns
    remotePatterns: [
      "https://www.googletagmanager.com/*", // Example domain pattern
    ],
  },
}
