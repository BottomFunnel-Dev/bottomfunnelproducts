import React from "react";
import { AiWork } from "../../../../components/funnelDeskAutomation/aiWork/AiWork";
import { AutomationBanner } from "../../../../components/funnelDeskAutomation/automationBanner/AutomationBanner";
import { TicketAssignment } from "../../../../components/funnelDeskAutomation/ticketAssignment/TicketAssignment";
import { TopTickets } from "../../../../components/funnelDeskAutomation/topTickets/TopTickets";
import { WhyAutomation } from "../../../../components/funnelDeskAutomation/whyAutomation/WhyAutomation";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { CollaborationMidBanner } from "../../../../components/funnelDeskCollaboration/CollaborationMidBanner/CollaborationMidBanner";
import { DeskFooter } from "../../../../components/DeskFooter/DeskFooter";

export default function FunnelDeskAutomation() {
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
      <AutomationBanner />
      <TicketAssignment />
      <AiWork />
      <TopTickets />
      <WhyAutomation />

       <CollaborationMidBanner/>
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
