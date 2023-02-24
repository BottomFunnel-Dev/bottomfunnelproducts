import React from "react";

import { ClientBanner } from "./ClientBanner/ClientBanner";
import { ClientSlider } from "./ClientSlider/ClientSlider";
import "./OurClient.css";
import { OurClientbrand } from "./OurClientbrand/OurClientbrand";
import {
  branddata,
  startupdata,
  enterprisedata,
  imageData,
} from "../../Data/OurClient";
import Head from "next/head";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export const OurClient = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Our Client | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is such a transparent name for them. It has become the
          synonym of trust when it comes to buying and selling products online.
          Bottom Funnel becomes the first choice of customers in this digital
          age."
        />
      </Head>
      <ClientBanner />
      <ClientSlider data={imageData} />
      <OurClientbrand data={branddata} />
      <OurClientbrand data={startupdata} />
      <OurClientbrand data={enterprisedata} />
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
};
