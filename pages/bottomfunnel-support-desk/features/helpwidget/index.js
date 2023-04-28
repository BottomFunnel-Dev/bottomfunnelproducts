import React from "react";

import { HelpDeskBanner } from "../../../../components/funnelDeskHelpWidget/HelpDeskBanner";
import { HelpDeskLowerBanner } from "../../../../components/funnelDeskHelpWidget/HelpDeskLowerBanner";
import { HelpWidget } from "../../../../components/funnelDeskHelpWidget/HelpWidget";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { DeskFooter } from "../../../../components/DeskFooter/DeskFooter";

export default function funnelDeskHelpWidget() {
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
      <HelpDeskBanner />
      <HelpWidget />
      <HelpDeskLowerBanner />

       <Testimonial/>
       <TrustedBy/>
       <ReadyStarted/>
      {/* <TalentProfiles/> */}
       <LifeBottomFunnel />
       <DeskFooter/>
       {/* <ProductsFooter /> */}
    </div>
  );
}
