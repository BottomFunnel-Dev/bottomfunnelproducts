import React from "react";

import { AwardsBanner } from "./AwardsBanner/AwardsBanner";
import "./AwardsPage.css";
import { AwardsSection } from "./AwardsSection/AwardsSection";

// ----- Other requried react components -----
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { Helmet } from "react-helmet";

export const AwardsPage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Awards and Memberships | Bottom Funnel</title>
        <meta
          name="description"
          content="Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field."
        />
      </Helmet>
      <AwardsBanner />
      <AwardsSection />
      {/* Other react required components */}
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
};
