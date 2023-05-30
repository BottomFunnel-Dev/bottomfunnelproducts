import React from "react";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import RealEstateSales from "../../components/RealEstateSales";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

export default function realestatesales() {
  return (
    <div>
      <RealEstateSales />
      <Trial />
      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      {/* added footer of sales in place of product footer */}
      <SalesFooter />
    </div>
  );
}
