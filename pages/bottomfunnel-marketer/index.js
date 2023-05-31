import React from "react";
import { MarketerFooter } from "../../components/MarketerFooter/Marketer";
import { ConversonalCrm } from "../../components/MarketerHomePage/ConversonalCrm/ConversonalCrm";
import { ForBusiness } from "../../components/MarketerHomePage/ForBusiness/ForBusiness";
import { MarketerHomePageBanner } from "../../components/MarketerHomePage/MarketerHomePageBanner/MarketerHomePageBanner";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
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
        path: "/",
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
        path: "/",
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

      <MarketerNavbar data={productData} />
      <MarketerHomePageBanner />
      <ConversonalCrm />
      <ForBusiness />

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      {/* <TalentProfiles /> */}
      <LifeBottomFunnel />
      <MarketerFooter />
    </div>
  );
}
