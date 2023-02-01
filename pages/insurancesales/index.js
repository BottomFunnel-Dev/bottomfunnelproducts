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

export default function InsuranceSales() {
  return (
    <>
      <InsuranceSalesBanner />
      <CentricBusiness />
      <InsuranceProductivity />
      <Spacialized />
      <InsuranceSalesData />
      <InsuranceSalesScreens />
      <InsuranceAgency />
      <SalesWorldwide />
      <MakeYourDeal />
    </>
  );
}
