/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
