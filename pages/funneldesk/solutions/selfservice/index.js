import React from "react";
import { AutomateOlly } from "../../../../components/funnelDeskSelfService/AutomateOlly/AutomateOlly";
import { SelfServiceBanner } from "../../../../components/funnelDeskSelfService/SelfServiceBanner/SelfServiceBanner";
import { SelfServiceContent } from "../../../../components/funnelDeskSelfService/SelfServiceContent/SelfServiceContent";
import { SelfServiceCustomerHelp } from "../../../../components/funnelDeskSelfService/SelfServiceCustomerHelp/SelfServiceCustomerHelp";
import { SelfServiceCustomerAnswer } from "../../../../components/funnelDeskSelfService/SelfServicesCustomerAnswers/SelfServiceCustomerAnswer";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { IntegrationFooter } from "../../../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";

export default function funnelDeskSelfService() {
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
      <SelfServiceBanner />
      <AutomateOlly />
      <SelfServiceCustomerAnswer />
      <SelfServiceContent />
      <SelfServiceCustomerHelp />
      <IntegrationFooter/>
      
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
