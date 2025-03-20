/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'i.pravatar.cc',
      'placeholder.svg'
    ],
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

