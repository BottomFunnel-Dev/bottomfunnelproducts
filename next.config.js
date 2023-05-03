/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  
  images: {
    reactStrictMode: true,
    domains: ["bottom-funnel-product.s3.ap-south-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bottom-funnel-product.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

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
        destination: "https://service.bottomfunnel.net/skills/mongodb",
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
      // {
      //   source: "/our-clients",
      //   destination: "https://service.bottomfunnel.net/our-clients",
      //   permanent: true,
      //   basePath: false,
      // },
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
        destination:
          "https://service.bottomfunnel.net/wearable-app-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/ecommerce",
        destination: "https://service.bottomfunnel.net/industries/ecommerce",
        permanent: true,
        basePath: false,
      },
      {
        source: "/neoadmin-center",
        destination: "/neo-admin-center",
        permanent: true,
        basePath: false,
      },
      {
        source: "/analyticsoffeatures",
        destination: "/data-and-analytics",
        permanent: true,
        basePath: false,
      },
      {
        source: "/unifiedcustomer",
        destination: "/unnified-customer",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk",
        destination: "/bottomfunnel-support-desk",
        permanent: true,
        basePath: false,
      },
      {
        source: "/marketer",
        destination: "/bottomfunnel-marketer",
        permanent: true,
        basePath: false,
      },
      {
        source: "/sales",
        destination: "/bottomfunnel-sales",
        permanent: true,
        basePath: false,
      },
      {
        source: "/bottomfunnelservice",
        destination: "/bottomfunnel-service",
        permanent: true,
        basePath: false,
      },
      {
        source: "/customersuccess",
        destination: "/bottomfunnel-customersuccess",
        permanent: true,
        basePath: false,
      },
      {
        source: "/contact-center",
        destination: "/bottomfunnel-contact-center",
        permanent: true,
        basePath: false,
      },
      {
        source: "/messagingchannel",
        destination: "/bottomfunnelchat/messagingchannel",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/ticketing",
        destination: "https://service.bottomfunnel.net/mernstack-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/collaboration",
        destination: "/bottomfunnel-support-desk/collaboration",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/automation",
        destination: "/bottomfunnel-support-desk/automation",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/helpwidget",
        destination: "/bottomfunnel-support-desk/helpwidget",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/reportandanalysis",
        destination: "/bottomfunnel-support-desk/reportandanalysis",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/security",
        destination: "/bottomfunnel-support-desk/security",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features/integration",
        destination: "/bottomfunnel-support-desk/integration",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features",
        destination: "/bottomfunnel-support-desk/features",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/features",
        destination: "/bottomfunnel-support-desk/features",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/solutions/enterprise",
        destination: "/bottomfunnel-support-desk/enterprise",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/solutions/smb",
        destination: "/bottomfunnel-support-desk/smb",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/solutions/selfservice",
        destination: "/bottomfunnel-support-desk/selfservice",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/solutions/fieldservicemanagement",
        destination: "/bottomfunnel-support-desk/fieldservicemanagement",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/solutions/retailandecommerce",
        destination: "/bottomfunnel-support-desk/retailandecommerce",
        permanent: true,
        basePath: false,
      },
      {
        source: "/funneldesk/solutions/travel-and-hospitality",
        destination: "/bottomfunnel-support-desk/travel-and-hospitality",
        permanent: true,
        basePath: false,
      },
      {
        source: "/team-inbox",
        destination: "/bottomfunnelchat/messagingchannel",
        permanent: true,
        basePath: false,
      },
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
