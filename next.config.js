/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'bidfax.info',
      'storage.prod.alpha-analytics.dev',
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      require('unplugin-auto-import/webpack')({
        imports: [
          'react',
          {
            'tailwind-merge': ['twMerge'],
          },
        ],
        eslintrc: {
          enabled: true,
        },
        dts: true,
      }),
    )
    return config
  },
}

module.exports = nextConfig
