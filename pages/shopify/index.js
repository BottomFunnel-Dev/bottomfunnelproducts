import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

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
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div>
      <HeadSeo
        title={pageMeta[0]?.title}
        description={pageMeta[0]?.description}
        cannonicalpost={pageMeta[0]?.cannonicalpost}
      />

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
       
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
