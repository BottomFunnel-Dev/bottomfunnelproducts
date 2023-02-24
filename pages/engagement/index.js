import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { EngagementBanner } from "../../components/EngagementPage/EngagementBanner/EngagementBanner";
import { EngagementProcess } from "../../components/EngagementPage/EngagementProcess/EngagementProcess";
import { EngagementRanges } from "../../components/EngagementPage/EngagementRanges/EngagementRanges";
import { EngagementQuery } from "../../components/EngagementPage/EngagementQuery/EngagementQuery";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function EngagementModel() {
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
      <EngagementBanner />
      <EngagementProcess />
      <EngagementRanges />
      <EngagementQuery />

      {/* Other react required components  */}
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
