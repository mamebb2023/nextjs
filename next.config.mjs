/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias.tinymce = "tinymce/tinymce";
    return config;
  },
};

export default nextConfig;
