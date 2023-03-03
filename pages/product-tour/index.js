import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { ProductTourBanner } from "../../components/ProductTour/ProductTourBanner/ProductTourBanner";
import { ProductTourTrail } from "../../components/ProductTour/ProductTourTrail/ProductTourTrail";
import { ProductTourVideos } from "../../components/ProductTour/ProductTourVideos/ProductTourVideos";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

const productData = {
  title: "Bottom Funnel Marketer",
  logo: "/Images/navbar/product/Market.png",
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
        path: "/",
      },
      {
        dropContent: "Guide to Shopify",
        path: "/guideToShopFy",
      },
    ],
  },
  pricing: "",
};

export default function ProductTour() {
  return (

    <>
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
        <ProductTourBanner/>
        <ProductTourVideos/>
        <ProductTourTrail/>

        <Testimonial/>
        <TrustedBy/>

        <ReadyStarted/>
        {/* <TalentProfiles/> */}
        <LifeBottomFunnel/>
        <ProductsFooter/>
      </div>
    </>
  );
}
