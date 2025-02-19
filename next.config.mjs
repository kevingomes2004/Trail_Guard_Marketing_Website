let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build', // Add this to specify the build directory
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

// Remove assetPrefix for Vercel deployment
// If you need it for GitHub Pages, you can add it conditionally:
// if (process.env.GITHUB_PAGES) {
//   nextConfig.assetPrefix = '/Trail_Guard_Marketing_Website/'
// }

function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return baseConfig // Return the base config if no user config
  }

  const mergedConfig = { ...baseConfig }

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key])
    ) {
      mergedConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      }
    } else {
      mergedConfig[key] = userConfig[key]
    }
  }

  return mergedConfig
}

export default mergeConfig(nextConfig, userConfig)