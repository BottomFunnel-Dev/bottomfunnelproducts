import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import MultiCurrency_MultiLanguageAd from "../../components/Multi-currency&Multi-language/MultiCurrency_MultiLanguageAd/MultiCurrency_MultiLanguageAd";
import MultiCurrency_MultiLanguageInfo from "../../components/Multi-currency&Multi-language/MultiCurrency_MultiLanguageInfo/MultiCurrency_MultiLanguageInfo";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import TopBannerWithBgImgNdBtn from "../../components/ReusableComponent/TopBannerWithBgImgNdBtn/TopBannerWithBgImgNdBtn";
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
      <TopBannerWithBgImgNdBtn
        title={"Sell globally with a multi-currency and multi-language CRM"}
        desc={
          "Customize your CRM to speak your business language and choose from multiple currencies based on where your opportunities lie."
        }
        btntext={"Sign-up for free"}
        bgUrl={"/Images/Multi-currency&Multi-language/Group1000006778.png"}
      />

      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <MultiCurrency_MultiLanguageAd />

        <MultiCurrency_MultiLanguageInfo />
        <div style={{ marginTop: "4rem" }}>
          <BulkEmailSuiteBox />
        </div>
      </div>
      <GetStartedFooter
        title={"Make Bottom Funnel sales your own"}
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
