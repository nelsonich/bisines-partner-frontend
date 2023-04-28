/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  i18n: {
    locales: ['en-us', 'ru-ru', 'hy-am'],
    defaultLocale: 'ru-ru',
    localeDetection: false,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mov|eot|ttf|woff|woff2|mp4|pdf|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: /\.jsx?$/,
    });

    return config;
  },
};

module.exports = nextConfig;
