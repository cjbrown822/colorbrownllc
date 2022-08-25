/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
])
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'top-left'
  },
  compiler: {
    styledComponents : true
  }
}
module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc'
    };
    return config;
  }
});

module.exports = nextConfig
