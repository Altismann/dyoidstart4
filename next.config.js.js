/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

/** Restrict exports */

module.exports = {
    reactStrictMode: true,
  }
  
/** Redirects */

  module.exports = {
    async redirects() {
      return [
        {
          source: '/products2',
          destination: 'https://dyoid.webflow.io/category/all',
          permanent: true,
        },
      ]
    },
  }
