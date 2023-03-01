import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { CustomBenefit } from "../../components/CustomObject/CustomBenefit/CustomBenefit";
import { CustomObjectSupport } from "../../components/CustomObject/CustomerObjectSupport/CustomerObjectSupport";
import { CustomObjectBanner } from "../../components/CustomObject/CustomObjectBanner/CustomObjectBanner";
import { WhatCustomObject } from "../../components/CustomObject/WhatCustomObject/WhatCustomObject";

export default function Custom() {
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
      <CustomObjectBanner />
      <WhatCustomObject />
      <CustomBenefit />
      <CustomObjectSupport />
      <TrustedBy />
      <Testimonial />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
