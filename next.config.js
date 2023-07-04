/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  
  images: {
    reactStrictMode: true,
    domains: ["d3op2l77j7wnti.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3op2l77j7wnti.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },


  async redirects() {
    return [
      {
        source: "/django",
        destination: "https://bottomfunnel.netskills/django",
        permanent: true,
        basePath: false,
      },
      {
        source: "/Logistics",
        destination: "https://bottomfunnel.netindustries/logistics",
        permanent: true,
        basePath: false,
      },
      {
        source: "/pharmacy",
        destination: "https://bottomfunnel.netpharmacy",
        permanent: true,
        basePath: false,
      },
      {
        source: "/mongodb",
        destination: "https://bottomfunnel.netskills/mongodb",
        permanent: true,
        basePath: false,
      },
      {
        source: "/Social-Media",
        destination: "https://bottomfunnel.netindustries/social_media",
        permanent: true,
        basePath: false,
      },
      {
        source: "/user-interface",
        destination: "https://bottomfunnel.netuser-interface",
        permanent: true,
        basePath: false,
      },
      {
        source: "/mern-stack",
        destination: "https://bottomfunnel.netmernstack-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/cannabis",
        destination: "https://bottomfunnel.netcannabis",
        permanent: true,
        basePath: false,
      },
      {
        source: "/education",
        destination: "https://bottomfunnel.netindustries/education",
        permanent: true,
        basePath: false,
      },
      {
        source: "/marketplace",
        destination: "https://bottomfunnel.netmarketplace",
        permanent: true,
        basePath: false,
      },
      {
        source: "/web-development",
        destination: "https://bottomfunnel.netweb-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/food-delivery",
        destination: "https://bottomfunnel.netfood-delivery-app",
        permanent: true,
        basePath: false,
      },
      {
        source: "/local-seo",
        destination: "https://bottomfunnel.netlocal-seo-services",
        permanent: true,
        basePath: false,
      },
      // {
      //   source: "/our-clients",
      //   destination: "https://bottomfunnel.netour-clients",
      //   permanent: true,
      //   basePath: false,
      // },
      {
        source: "/website-builder-app",
        destination: "https://bottomfunnel.netwebsite-builder-app",
        permanent: true,
        basePath: false,
      },
      {
        source: "/mobile-app-development",
        destination: "https://bottomfunnel.netmobile-app-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/wearable-app-development",
        destination:
          "https://bottomfunnel.netwearable-app-development",
        permanent: true,
        basePath: false,
      },
      {
        source: "/ecommerce",
        destination: "https://bottomfunnel.netindustries/ecommerce",
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
        destination: "/bottomfunnel-support-desk/ticketing",
        permanent: true,
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
//         destination: "https://bottomfunnel.netskills/django",
//         permanent: true,
//         basePath: false,
//       },
//       {
//         source: "/pharmacy",
//         destination: "https://bottomfunnel.netpharmacy",
//         permanent: false,
//         basePath: false,
//       },
//       {
//         source: "/wearable-app-development",
//         destination:"https://bottomfunnel.netwearable-app-development",
//         permanent: false,
//         basePath: false,
//       },
//     ];
//   },
// });
