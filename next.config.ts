import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
    ],
  },
  async redirects() {
    return [
      // Temporarily hide the Rewards page. Remove this entry (and restore the
      // Rewards nav link in Header.tsx + the /rewards sitemap entry) to re-enable it.
      {
        source: "/rewards",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
