const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages.
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    // No image optimization server in static export; renders served as-is.
    unoptimized: true,
  },
}

module.exports = nextConfig
