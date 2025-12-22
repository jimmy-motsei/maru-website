
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled temporarily
  async redirects() {
    return [
      {
        source: '/:path((?!_next|static|favicon.ico|icon.png).+)',
        destination: '/',
        permanent: false,
      },
    ]
  },
};


export default nextConfig;
