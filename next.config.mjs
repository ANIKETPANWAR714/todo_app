/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/todo_app",
  assetPrefix: "/todo_app/",
};

export default nextConfig;
