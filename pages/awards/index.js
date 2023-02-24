import React from "react";

import { AwardsBanner } from "../../components/AwardsPage/AwardsBanner/AwardsBanner";
import { AwardsSection } from "../../components/AwardsPage/AwardsSection/AwardsSection";

import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Awards() {
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
      <AwardsBanner />
      <AwardsSection />

      {/* Other react required components  */}
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
