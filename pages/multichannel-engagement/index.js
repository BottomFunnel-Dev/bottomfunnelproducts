import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { MultichannelEngagementBanner } from "../../components/MultichannelEngagement/MultichannelEngagementBanner/MultichannelEngagementBanner";
import { MultichannelEngagementPersonalise } from "../../components/MultichannelEngagement/MultichannelEngagementPersonalise/MultichannelEngagementPersonalise";
import { MarketerNavbar } from "../../components/MarketerNavbar";

const productData = {
  title: "Bottom Funnel Marketer",
  logo: "https://d3op2l77j7wnti.cloudfront.net/Images/navbar/product/Market.png",
  width: "45%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/404" },
    position: { right: "35%" },

    products: [
      {
        dropContent: "Multichannel Engagement",
        path: "/multichannel-engagement",
      },
      {
        dropContent: "Email & SMS",
        path: "/",
      },
      {
        dropContent: "WhatsApp",
        path: "/whatsapp",
      },
      {
        dropContent: "Journeys",
        path: "/journey",
      },
      {
        dropContent: "Landing Pages",
        path: "/landing-pages",
      },
      {
        dropContent: "Shopify Integration",
        path: "/shopify",
      },
    ],
  },
  list4: {
    title: "Resources",
    more: false,
    position: { right: "20%" },
    products: [
      {
        dropContent: "Product Tours",
        path: "/product-tour",
      },
      {
        dropContent: "Case Studies",
        path: "/",
      },
      {
        dropContent: "What's new",
        path: "/whatsnew",
      },
      {
        dropContent: "Guide to Shopify",
        path: "/guideToShopFy",
      },
    ],
  },
  pricing: "/pricing",
};

export default function MultichannelEngagement() {
  return (
    <div style={{ color: "#393939" }}>
      <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <MarketerNavbar data={productData} />
      <MultichannelEngagementBanner />
      <MultichannelEngagementPersonalise />
    </div>
  );
}
