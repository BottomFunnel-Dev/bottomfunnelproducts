import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import { EliteLast } from "../../components/funnelDeskCom/EliteLast";
import { EliteServices } from "../../components/funnelDeskCom/EliteServices";
import { FunnelDeskBanner } from "../../components/funnelDeskCom/FunnelDeskBanner";
import { FunnelSupport } from "../../components/funnelDeskCom/FunnelSupport";
import { IndustryExperts } from "../../components/funnelDeskCom/IndustryExperts";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { IntegrationFooter } from "../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";

export default function FunnelDesk() {
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

      <FunnelDeskBanner />
      <FunnelSupport />
      <EliteServices />
      <EliteLast />
      <IndustryExperts />
      <IntegrationFooter />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />

      <LifeBottomFunnel />
      {/* <GetStarted /> */}
      <ProductsFooter />
    </div>
  );
}
