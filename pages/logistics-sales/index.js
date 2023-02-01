import React from "react";
import { CRMLogistics } from "../../components/LogisticSales/CRMLogistics/CRMLogistics";
import { DigitalTransformation } from "../../components/LogisticSales/DigitalTransformation/DigitalTransformation";
import { Engagement } from "../../components/LogisticSales/Engagement/Engagement";
import { LogisticSalesBanner } from "../../components/LogisticSales/LogisticSalesBanner/LogisticSalesBanner";
import { LogisticsContain } from "../../components/LogisticSales/LogisticsContain/LogisticsContain";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";

export default function Logistic() {
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

      <LogisticSalesBanner />

      <LogisticsContain />
      <DigitalTransformation />
      <CRMLogistics />
      <Engagement />

      </div>
    </>
  );
}
