/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bidfax.info'],
  },
  webpack: (config) => {
    config.plugins.push(
      require('unplugin-auto-import/webpack')({
        imports: [
          'react',
          {
            clsx: ['clsx'],
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
