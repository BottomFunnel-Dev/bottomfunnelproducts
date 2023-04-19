import React from "react";
import MultipleSalesBanner from "../../components/MultipleSalesPipeline/MultipleSalesBanner/MultipleSalesBanner";
import MultiplesSalesAd from "../../components/MultipleSalesPipeline/MultiplesSalesAd/MultiplesSalesAd";
import MultipleSalesInfo from "../../components/MultipleSalesPipeline/MultipleSalesInfo/MultipleSalesInfo";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import MultiSalesPipelineFooter from "../../components/MultipleSalesPipeline/MultiSalesPipelineFooter/MultiSalesPipelineFooter";

const index = () => {
  return (
    <>
      <MultipleSalesBanner />
      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <MultiplesSalesAd />
        <MultipleSalesInfo />
        <div style={{ marginTop: "4rem" }}>
          <BulkEmailSuiteBox />
        </div>
      </div>
      <MultiSalesPipelineFooter />
    </>
  );
};

export default index;
