// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   distDir: "build",
// };

// module.exports = nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  distDir: "build",

  async redirects() {
    return [
      {
        source: "/django",
        destination: "https://service.bottomfunnel.net/skills/django",
        permanent: true,
      },
      {
        source: "/pharmacy",
        destination: "https://service.bottomfunnel.net/pharmacy",
        permanent: true,
        basePath: false,
      },
      {
        source: "/wearable-app-development",
        destination:"https://service.bottomfunnel.net/wearable-app-development",
        permanent: true,
        basePath: false,
      },
    ];
  },
});
