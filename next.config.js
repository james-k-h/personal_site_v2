/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: '3kkrq3j76r.ufs.sh',
        // port: '',
        // pathname: '/f/**',
      },
    ],
  },
};

module.exports = nextConfig;
