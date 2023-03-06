
     {/* <CRMLogistics/> */}

import React from "react";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import { CRMLogistics } from "../../components/LogisticSales/CRMLogistics/CRMLogistics";
import { DigitalTransformation } from "../../components/LogisticSales/DigitalTransformation/DigitalTransformation";
import { Engagement } from "../../components/LogisticSales/Engagement/Engagement";
import { LogisticSalesBanner } from "../../components/LogisticSales/LogisticSalesBanner/LogisticSalesBanner";
import { LogisticsContain } from "../../components/LogisticSales/LogisticsContain/LogisticsContain";
import { Screens } from "../../components/LogisticSales/Screens/Screens";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function logisticsales() {
  return (
    <>
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
          <SalesNavbar  navproductredux={{
              color: "black",
              logo: false,
            }}/> 

            <LogisticSalesBanner/>
            <LogisticsContain/>

      
       <DigitalTransformation/>
       <CRMLogistics/>
       <Screens/>
        <Engagement/>

        <Trial/>
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
      </div>
    </>
  );
}
