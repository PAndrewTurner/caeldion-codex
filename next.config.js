/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local-only deployment; source renders are large and served as-is.
    unoptimized: true,
  },
}

module.exports = nextConfig
