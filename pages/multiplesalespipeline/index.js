import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import MultipleSalesBanner from "../../components/MultipleSalesPipeline/MultipleSalesBanner/MultipleSalesBanner";
import MultiplesSalesAd from "../../components/MultipleSalesPipeline/MultiplesSalesAd/MultiplesSalesAd";
import MultipleSalesInfo from "../../components/MultipleSalesPipeline/MultipleSalesInfo/MultipleSalesInfo";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import GetStartedFooter from "../../components/ReusableComponent/GetStartedFooter/GetStartedFooter";

const index = () => {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <>
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
      <MultipleSalesBanner />
      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <MultiplesSalesAd />
        <MultipleSalesInfo />
        <div style={{ marginTop: "4rem" }}>
          <BulkEmailSuiteBox />
        </div>
      </div>
      <GetStartedFooter
        title={"Reduce your manual efforts and focus on selling"}
        desc={"21-day free trial. Unrestricted access"}
        btntext={"GET STARTED"}
      />

       
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </>
  );
};

export default index;
