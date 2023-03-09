/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  async redirects() {
    return [
      {
        source: "/django",
        destination: "https://service.bottomfunnel.net/skills/django",
        permanent: true,
        basePath: false,
      },
      {
        source: "/Logistics",
        destination: "https://service.bottomfunnel.net/industries/logistics",
        permanent: true,
        basePath: false,
      },
      {
        source: "/pharmacy",
        destination: "https://service.bottomfunnel.net/pharmacy",
        permanent: true,
        basePath: false,
      },
      {
        source: "/mongodb",
        destination:"https://service.bottomfunnel.net/skills/mongodb",
        permanent: true,
        basePath: false,
      },
      {
        source: "/Social-Media",
        destination: "https://service.bottomfunnel.net/industries/social_media",
        permanent: true,
        basePath: false,
      },
      {
        source: "/user-interface",
        destination: "https://service.bottomfunnel.net/user-interface",
        permanent: true,
        basePath: false,
      },
      {
        source: "/mern-stack",
        destination: "https://service.bottomfunnel.net/mernstack-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/cannabis",
        destination: "https://service.bottomfunnel.net/cannabis",
        permanent: true,
        basePath: false,
      },
      {
        source: "/education",
        destination: "https://service.bottomfunnel.net/industries/education",
        permanent: true,
        basePath: false,
      },
      {
        source: "/marketplace",
        destination: "https://service.bottomfunnel.net/marketplace",
        permanent: true,
        basePath: false,
      },
      {
        source: "/web-development",
        destination: "https://service.bottomfunnel.net/web-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/food-delivery",
        destination: "https://service.bottomfunnel.net/food-delivery-app",
        permanent: true,
        basePath: false,
      },
      {
        source: "/local-seo",
        destination: "https://service.bottomfunnel.net/local-seo-services",
        permanent: true,
        basePath: false,
      },
      {
        source: "/our-clients",
        destination: "https://service.bottomfunnel.net/our-clients",
        permanent: true,
        basePath: false,
      },
      {
        source: "/website-builder-app",
        destination: "https://service.bottomfunnel.net/website-builder-app",
        permanent: true,
        basePath: false,
      },
      {
        source: "/mobile-app-development",
        destination: "https://service.bottomfunnel.net/mobile-app-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/wearable-app-development",
        destination: "https://service.bottomfunnel.net/wearable-app-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/ecommerce",
        destination: "https://service.bottomfunnel.net/industries/ecommerce",
        permanent: true,
        basePath: false,
      }
    ];
  },
};

module.exports = nextConfig;

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   distDir: "build",

//   async redirects() {
//     return [
//       {
//         source: "/django",
//         destination: "https://service.bottomfunnel.net/skills/django",
//         permanent: true,
//         basePath: false,
//       },
//       {
//         source: "/pharmacy",
//         destination: "https://service.bottomfunnel.net/pharmacy",
//         permanent: false,
//         basePath: false,
//       },
//       {
//         source: "/wearable-app-development",
//         destination:"https://service.bottomfunnel.net/wearable-app-development",
//         permanent: false,
//         basePath: false,
//       },
//     ];
//   },
// });
