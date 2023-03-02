import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Shopifybanner } from "../../components/Shopify/Shopifybanner/Shopifybanner";
import { Shopifyframes } from "../../components/Shopify/ShopifyFrames/Shopifyframes";
import { ShopifyIntigration } from "../../components/Shopify/ShopifyIntigration/ShopifyIntigration";
import { Shopifylowerbanner } from "../../components/Shopify/Shopifylowerbanner/Shopifylowerbanner";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";

export default function Shopify() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <Shopifybanner />
      <ShopifyIntigration />
      <Shopifyframes />
      <Shopifylowerbanner />

      <TrustedBy />
    <Testimonial />
    <ReadyStarted />
    <LifeBottomFunnel />
    <ProductsFooter />
    </div>
  );
}
