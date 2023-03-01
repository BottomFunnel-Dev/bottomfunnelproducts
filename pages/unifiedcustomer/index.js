import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { Unifiedcustomerbanner } from "../../components/Unifiedcustomerdata/Unifiedcustomerbanner";
import { UnifiedPersonalized } from "../../components/Unifiedcustomerdata/UnifiedPersonalized";
import { Unifiedsystem } from "../../components/Unifiedcustomerdata/Unifiedsystem";
import { UnifiedUCRaction } from "../../components/Unifiedcustomerdata/UnifiedUCRaction";

export default function Unifiedcustomerdata() {
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
      <Unifiedcustomerbanner />
      <UnifiedPersonalized />
      <Unifiedsystem />
      <UnifiedUCRaction />
      <TrustedBy />
      <Testimonial />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
