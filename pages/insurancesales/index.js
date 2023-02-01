import React from "react";
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
      <SalesWorldwide />
      <MakeYourDeal />
      </div>
    </>
  );
}
