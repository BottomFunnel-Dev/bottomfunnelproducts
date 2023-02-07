import React from "react";

import { CollaboratinTeamwork } from "../../../../components/funnelDeskCollaboration/CollaboratinTeamwork/CollaboratinTeamwork";
import { CollaborationAbout } from "../../../../components/funnelDeskCollaboration/CollaborationAbout/CollaborationAbout";
import { CollaborationBanner } from "../../../../components/funnelDeskCollaboration/CollaborationBanner/CollaborationBanner";
import { CollaborationMidBanner } from "../../../../components/funnelDeskCollaboration/CollaborationMidBanner/CollaborationMidBanner";
import { CollaborationOffers } from "../../../../components/funnelDeskCollaboration/CollaborationOffers/CollaborationOffers";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function funnelDeskCollaboration() {
  return (
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
      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <CollaborationBanner />
      <CollaboratinTeamwork />
      <CollaborationAbout />
      <CollaborationOffers />
      <CollaborationMidBanner />

      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
