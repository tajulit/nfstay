/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 's3-alpha-sig.figma.com',
      
    },
    {
      protocol:"https",
      hostname:"flagsapi.com"
    }
    ], // Add domains you want to allow images from

  },
};

export default nextConfig;
