/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.clerk.com'],
  },
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
