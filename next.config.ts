import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/hakkimizda",
        permanent: true,
      },
      {
        source: "/rooms",
        destination: "/odalar",
        permanent: true,
      },
      {
        source: "/rooms/standart",
        destination: "/odalar/standart-oda",
        permanent: true,
      },
      {
        source: "/rooms/suite-oda",
        destination: "/odalar/suit-oda",
        permanent: true,
      },
      {
        source: "/rooms/:slug",
        destination: "/odalar/:slug",
        permanent: true,
      },
      {
        source: "/odalar/standart",
        destination: "/odalar/standart-oda",
        permanent: true,
      },
      {
        source: "/odalar/suite-oda",
        destination: "/odalar/suit-oda",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/deneyim",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/iletisim",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
