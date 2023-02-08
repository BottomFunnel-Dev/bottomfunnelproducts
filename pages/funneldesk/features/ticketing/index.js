import React from "react";
import { SimplifiedTicketting } from "../../../../components/funnelDeksTicketing/SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "../../../../components/funnelDeksTicketing/TicketingBanner/TicketingBanner";
import { TicketingServices } from "../../../../components/funnelDeksTicketing/TicketingServices/TicketingServices";
import { TickettingInbox } from "../../../../components/funnelDeksTicketing/TickettingInbox/TickettingInbox";
import { TickettingStartTrials } from "../../../../components/funnelDeksTicketing/TickettingStartTrials/TickettingStartTrials";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function funnelDeskTicketing() {
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
      <TicketingBanner />
      <SimplifiedTicketting />
      <TickettingInbox />
      <TicketingServices />
      <TickettingStartTrials />

      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
