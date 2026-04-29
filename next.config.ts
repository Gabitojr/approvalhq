import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://www.greenbridgecapital.com/partner/rgp",
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
