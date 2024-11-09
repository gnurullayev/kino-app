/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
    remotePatterns: [
      {
        hostname: "api.infocom.uz",
      },
      {
        hostname: "infokom.napaautomotive.uz",
      },
      {
        hostname: "176.96.243.40",
      },
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "157.230.91.245",
      },
      {
        hostname: "topmovie.uz",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "via.placeholder.com",
      },
    ],
  },
};

module.exports = nextConfig;
