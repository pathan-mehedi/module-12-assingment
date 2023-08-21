/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Change to your protocol (http/https)
          hostname: 'roar.media', // Change to the hostname in your src prop
          port: '', // Leave empty if using default port, otherwise specify
          pathname: '/wp-content/uploads/**', // Change to your image path pattern
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  