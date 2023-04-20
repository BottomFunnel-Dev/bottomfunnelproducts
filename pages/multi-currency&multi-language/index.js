import React from "react";
import MultiCurrency_MultiLanguageBanner from "../../components/Multi-currency&Multi-language/MultiCurrency_MultiLanguageBanner/MultiCurrency_MultiLanguageBanner";
import MultiCurrency_MultiLanguageAd from "../../components/Multi-currency&Multi-language/MultiCurrency_MultiLanguageAd/MultiCurrency_MultiLanguageAd";
import MultiCurrency_MultiLanguageInfo from "../../components/Multi-currency&Multi-language/MultiCurrency_MultiLanguageInfo/MultiCurrency_MultiLanguageInfo";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import MultiSalesPipelineFooter from "../../components/MultipleSalesPipeline/MultiSalesPipelineFooter/MultiSalesPipelineFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return (
    <>
    <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <MultiCurrency_MultiLanguageBanner />
      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <MultiCurrency_MultiLanguageAd />

        <MultiCurrency_MultiLanguageInfo />
        <div style={{ marginTop: "4rem" }}>
          <BulkEmailSuiteBox />
        </div>
      </div>
      <MultiSalesPipelineFooter
        title={"Make Bottom Funnel sales your own"}
        desc={"21-day free trial. Unrestricted access"}
        btntext={"GET STARTED"}
      />

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </>
  );
};

export default index;
