/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/horus/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/chixoy/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/alimentos/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/amm/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/colgate/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/guate_sur/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/samboro/*",
      },
      {
        protocol: "https",
        hostname: "d34wp28s47tr6p.cloudfront.net",
        pathname: "/visitas/san_antonio/*",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
