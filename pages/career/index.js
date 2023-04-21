import React from "react";

import { CareerBanner } from "../../components/CareerPage/CareerBanner/CareerBanner";
import { CareerMain } from "../../components/CareerPage/CareerMain/CareerMain";
import { CareerReferral } from "../../components/CareerPage/CareerReferral/CareerReferral";
import { CarrerMidBanner } from "../../components/CareerPage/CarrerMidBanner/CarrerMidBanner";

import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import { CareerReason } from "../../components/CareerPage/CareerReason/CareerReason";
import { HirringProcess } from "../../components/CareerPage/HirringProcess/HirringProcess";

const index = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <CareerBanner />
      <CarrerMidBanner />
      <HirringProcess />
      {/* <CareerReason/> */}
      {/* <CareerMain /> */}

      {/* Other react required components  */}

      <div style={{ marginTop: "5%" }}>
        <CareerReferral />
        <StoriesSection />
        <TrustedBy />
        <LifeBottomFunnel />
        <GetStarted />
        <ProductsFooter />
      </div>
    </div>
  );
};

export default index;
