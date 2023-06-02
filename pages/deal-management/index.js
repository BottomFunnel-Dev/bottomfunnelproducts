import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { DealBusinesshealth } from "../../components/DealManagement/DealBusinesshealth";
import { DealManagementBanner } from "../../components/DealManagement/DealManagementBanner";
import { DealManagementHandle } from "../../components/DealManagement/DealManagementHandle";
import { DealManagementLowerbanner } from "../../components/DealManagement/DealManagementLowerbanner";
import { DealManagementperformance } from "../../components/DealManagement/DealManagementperformance";
import { DealManagementTrack } from "../../components/DealManagement/DealManagementTrack";
import { DealManagementVisiability } from "../../components/DealManagement/DealManagementVisiability";
import { PipelineManagement } from "../../components/DealManagement/PipelineManagement";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";

export default function dealmanagement() {
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
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />

      <DealManagementBanner />
      <PipelineManagement />
      <DealBusinesshealth />
      <DealManagementHandle />
      <DealManagementperformance />
      <DealManagementTrack />
      <DealManagementVisiability />
      <DealManagementLowerbanner />

      <TrustedBy />
      <Testimonial />
      <ReadyStarted />
      <LifeBottomFunnel />
      {/* added footer of sales in place of product footer */}
      <SalesFooter />
    </div>
  );
}
