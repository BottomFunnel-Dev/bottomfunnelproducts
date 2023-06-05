import React, { useState, useEffect } from "react";
import HeadSeo from "../../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../../Data/MeatdataData";

import Navbar from "../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";

import { ReportAndAnalysisBanner } from "../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisBanner/ReportAndAnalysisBanner";
import { ReportAndAnalysisTransform } from "../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisTransform/ReportAndAnalysisTransform";
import ReportAndAnalysisReports from "../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisReports/ReportAndAnalysisReports";
import ReportAndAnalysisLower from "../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisLower/ReportAndAnalysisLower";
import ReportAndAnalysisCards from "../../../components/funnelDeskReportAndAnalysis/ReportAndAnalysisCards/ReportAndAnalysisCards";
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { IntegrationFooter } from "../../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";
import { DeskFooter } from "../../../components/DeskFooter/DeskFooter";

export default function funnelDeskReportAndAnalysis() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div>
      <HeadSeo
        title={pageMeta[0]?.title}
        description={pageMeta[0]?.description}
        cannonicalpost={pageMeta[0]?.cannonicalpost}
      />

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
      <ReportAndAnalysisBanner />
      <ReportAndAnalysisTransform />
      <ReportAndAnalysisReports />
      <ReportAndAnalysisCards />
      <IntegrationFooter />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <DeskFooter />
      {/* <ProductsFooter /> */}
    </div>
  );
}
