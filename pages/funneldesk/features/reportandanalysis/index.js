import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { ReportAndAnalysisBanner } from "../../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisBanner/ReportAndAnalysisBanner";
import { ReportAndAnalysisTransform } from "../../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisTransform/ReportAndAnalysisTransform";
import ReportAndAnalysisReports from "../../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisReports/ReportAndAnalysisReports";
import ReportAndAnalysisLower from "../../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisLower/ReportAndAnalysisLower";
import ReportAndAnalysisCards from "../../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisCards/ReportAndAnalysisCards";

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
      <ReportAndAnalysisBanner/>
      <ReportAndAnalysisTransform/>
      <ReportAndAnalysisReports/>
      <ReportAndAnalysisCards/>
      <ReportAndAnalysisLower/>
      
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
