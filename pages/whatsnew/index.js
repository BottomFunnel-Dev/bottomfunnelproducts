import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import WhatsNewBanner from "../../components/WhatsNew/WhatsNewBanner/WhatsNewBanner";
import WhatsNewDetails from "../../components/WhatsNew/WhatsNewDetails/WhatsNewDetails";
import WhatsNewMonth from "../../components/WhatsNew/WhatsNewMonth/WhatsNewMonth";

export default function WhatsNew() {
  const productData = {
    title: "Bottom Funnel Marketer",
    logo: "/Images/navbar/product/Market.png",
    width: "45%",
    list1: {
      title: "Features",
      more: { title: "View more features", path: "/" },
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
          path: "/",
        },
        {
          dropContent: "Journeys",
          path: "/",
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
    pricing: "",
  };
  return (
    <div>
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

      <WhatsNewBanner />
      <WhatsNewMonth />
      <WhatsNewDetails />

      <TrustedBy />
      <Testimonial />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
