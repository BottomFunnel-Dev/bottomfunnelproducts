import React from "react";
import { OurTeamBanner } from "../../components/OurTeam/OurTeamBanner/OurTeamBanner";
import Navbar from "../../components/Navbar/Navbar";
import OurTeamCardsMain from "../../components/OurTeam/MainOurTeamCards/MainOurTeamCards";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

const index = () => {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />

      <OurTeamBanner />
      <OurTeamCardsMain />

      {/* Other react required components  */}
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
};

export default index;
