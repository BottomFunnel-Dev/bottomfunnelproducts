import React from "react";
import { CRMLogistics } from "../../components/LogisticSales/CRMLogistics/CRMLogistics";
import { DigitalTransformation } from "../../components/LogisticSales/DigitalTransformation/DigitalTransformation";
import { Engagement } from "../../components/LogisticSales/Engagement/Engagement";
import { LogisticSalesBanner } from "../../components/LogisticSales/LogisticSalesBanner/LogisticSalesBanner";
import { LogisticsContain } from "../../components/LogisticSales/LogisticsContain/LogisticsContain";

export default function Logistic() {
  return (
    <>
      <LogisticSalesBanner />

      <LogisticsContain />
      <DigitalTransformation />
      <CRMLogistics />
      <Engagement />
    </>
  );
}
