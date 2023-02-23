import React from "react";
import { ConversonalCrm } from "../../components/MarketerHomePage/ConversonalCrm/ConversonalCrm";
import { ForBusiness } from "../../components/MarketerHomePage/ForBusiness/ForBusiness";
import { MarketerHomePageBanner } from "../../components/MarketerHomePage/MarketerHomePageBanner/MarketerHomePageBanner";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";

const productData = {
  title: "Bottom Funnel Marketer",
  logo: "/Images/navbar/product/Market.png",
  width: "45%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/404" },
    position: { right: "43%" },
    products: [
      {
        dropContent: "Multichannel Engagement",
        path: "/404",
      },
      {
        dropContent: "Email & SMS",
        path: "/404",
      },
      {
        dropContent: "WhatsApp",
        path: "/404",
      },
      {
        dropContent: "Journeys",
        path: "/404",
      },
      {
        dropContent: "Landing Pages",
        path: "/404",
      },
      {
        dropContent: "Shopify Integration",
        path: "/404",
      },
    ],
  },
  list4: {
    title: "Resources",
    more: false,
    position: { right: "25%" },
    products: [
      {
        dropContent: "Product Tours",
        path: "/404",
      },
      {
        dropContent: "Case Studies",
        path: "/404",
      },
      {
        dropContent: "What's new",
        path: "/404",
      },
      {
        dropContent: "Guide to Shopify",
        path: "/404",
      },
    ],
  },
  pricing: "",
};

export default function MarketerHomePage() {
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
      <ProdNavbar data={productData} />
      <MarketerHomePageBanner />
      <ConversonalCrm />
      <ForBusiness />
    </div>
  );
}
