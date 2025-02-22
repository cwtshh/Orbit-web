import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true, // Define se é um redirecionamento permanente (301)
      },
    ];
  },
};

export default nextConfig;
