/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow HMR from local hosts used during development (fixes blocked cross-origin dev requests)
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    qualities: [90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/website-development",
        destination: "/services/full-stack",
        permanent: false,
      },
      {
        source: "/services/web-development",
        destination: "/services/full-stack",
        permanent: false,
      },
      {
        source: "/services/digital-marketing",
        destination: "/services/digital-solutions",
        permanent: false,
      },
      {
        source: "/services/cloud-solutions",
        destination: "/services/digital-solutions",
        permanent: false,
      },
      {
        source: "/services/cloud-devops",
        destination: "/services/digital-solutions",
        permanent: false,
      },
      {
        source: "/services/branding",
        destination: "/services/ui-ux-design",
        permanent: false,
      },
      {
        source: "/services/web-design",
        destination: "/services/ui-ux-design",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

