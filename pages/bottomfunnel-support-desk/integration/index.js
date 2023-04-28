import React from "react";
import { FeaturedIntegration } from "../../../components/FeaturedIntegrationPage/FeaturedIntegration/FeaturedIntegration";
import { FeatureList } from "../../../components/FeaturedIntegrationPage/FeatureList/FeatureList";
import { IntegrationBanner } from "../../../components/FeaturedIntegrationPage/IntegrationBanner/IntegrationBanner";
import { IntegrationFooter } from "../../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";
import Navbar from "../../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { DeskFooter } from "../../../components/DeskFooter/DeskFooter";

const index = () => {
  return (
    <div>
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
      ></ProductsNavbar>
      
      <IntegrationBanner />
      <FeaturedIntegration />
      <FeatureList />
      <IntegrationFooter />

      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <DeskFooter/>
      {/* <ProductsFooter /> */}
    </div>
  );
};
export default index;
