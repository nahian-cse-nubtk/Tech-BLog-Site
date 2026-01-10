import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.freepik.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/v2/resize:fit:1400/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
