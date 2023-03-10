import React from "react";
import { RetailEcommerceBanner } from "../../../../components/funnelDeskRetailEcommerce/RetailEcommerceBanner";
import { RetailInsights } from "../../../../components/funnelDeskRetailEcommerce/RetailInsights";
import { RetailRedefine } from "../../../../components/funnelDeskRetailEcommerce/RetailRedefine";
import { RetailsCustomer } from "../../../../components/funnelDeskRetailEcommerce/RetailsCustomer";
import { RetailShopers } from "../../../../components/funnelDeskRetailEcommerce/RetailShopers";
import { RetailTeam } from "../../../../components/funnelDeskRetailEcommerce/RetailTeam";
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

export default function funnelDeskRetailEcommerce() {
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

      <RetailEcommerceBanner />
      <RetailShopers />
      <RetailRedefine />
      <RetailsCustomer />
      <RetailTeam />
      <RetailInsights />
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
