import React from "react";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import ServicesBanner from "../../components/Services/ServicesBanner/ServicesBanner";
import ServicesPackages from "../../components/Services/ServicesPackages/ServicesPackages";
import ServicesSpecialized from "../../components/Services/ServicesSpecialized/ServicesSpecialized";
export default function Services() {
  return (
    <div>
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
      </div>
      <ServicesBanner/>
      <ServicesPackages/>
      <ServicesSpecialized/>
      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
