import React from "react";
import { FeaturedIntegration } from "../../components/FeaturedIntegrationPage/FeaturedIntegration/FeaturedIntegration";
import { FeatureList } from "../../components/FeaturedIntegrationPage/FeatureList/FeatureList";
import { IntegrationBanner } from "../../components/FeaturedIntegrationPage/IntegrationBanner/IntegrationBanner";
import { IntegrationFooter } from "../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

const index = () => {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <IntegrationBanner />
      <FeaturedIntegration />
      <FeatureList />
      <IntegrationFooter />

      {/* <Testimonial /> */}
      <TrustedBy />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
};
export default index;
