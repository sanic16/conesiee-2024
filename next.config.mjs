/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/horus/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/chixoy/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/alimentos/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/amm/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/colgate/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/guate_sur/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/samboro/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/san_antonio/*",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
