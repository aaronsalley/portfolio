import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://medium.com/**'),
      new URL('https://mir-s3-cdn-cf.behance.net/**'),
    ],
  },
  allowedDevOrigins: ['localhost', 'aarons-macbook-pro.local'],
};

export default nextConfig;
