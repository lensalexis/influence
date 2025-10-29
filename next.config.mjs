// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Don't add anything, just return Next's default config
    return config
  },
}

export default nextConfig