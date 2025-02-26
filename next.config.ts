/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'https://ybtlpepmbpfsyrekgznu.supabase.co'],
  },
  // Enable static exports if needed
  // output: 'export',
  // Disable server components for specific paths if needed
  // experimental: {
  //   serverComponentsExternalPackages: [],
  // },
};

module.exports = nextConfig;