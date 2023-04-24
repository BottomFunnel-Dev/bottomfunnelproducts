import React from "react";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import { CentricBusiness } from "../../components/InsuranceSales/CentricBusiness/CentricBusiness";
import { InsuranceAgency } from "../../components/InsuranceSales/InsuranceAgency/InsuranceAgency";
import { InsuranceProductivity } from "../../components/InsuranceSales/InsuranceProductivity/InsuranceProductivity";
import { InsuranceSalesBanner } from "../../components/InsuranceSales/InsuranceSalesBanner/InsuranceSalesBanner";
import { InsuranceSalesData } from "../../components/InsuranceSales/InsuranceSalesData/InsuranceSalesData";
import { InsuranceSalesScreens } from "../../components/InsuranceSales/InsuranceSalesScreens/InsuranceSalesScreens";
import { MakeYourDeal } from "../../components/InsuranceSales/MakeYourDeal/MakeYourDeal";
import { SalesWorldwide } from "../../components/InsuranceSales/SalesWorldwide/SalesWorldwide";
import { Spacialized } from "../../components/InsuranceSales/Spacialized/Spacialized";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

export default function InsuranceSales() {
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

      <InsuranceSalesBanner />
      <CentricBusiness />
      <InsuranceProductivity />
      <Spacialized />
      <InsuranceSalesData />
      <InsuranceSalesScreens />
      <InsuranceAgency />
      {/* <SalesWorldwide />
      <MakeYourDeal /> */}

      <Trial/>
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted/>
      <LifeBottomFunnel/>
     <SalesFooter/>
      </div>
    </>
  );
}
