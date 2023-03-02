import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function funnelDeskReportAndAnalysis() {
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
      />
      
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
