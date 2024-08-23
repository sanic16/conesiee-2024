/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/visitas/horus/*",
      },
    ],
  },
};

export default nextConfig;
