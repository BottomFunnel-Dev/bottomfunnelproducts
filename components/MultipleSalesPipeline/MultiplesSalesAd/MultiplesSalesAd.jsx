import React from "react";
import styles from "./MultiplesSalesAd.module.css";
import BulkEmailFlexBoxRhtImg from "../../BulkEmail/BulkEmailFlexBoxRhtImg/BulkEmailFlexBoxRhtImg";
import BulkEmailFlexBoxLftImg from "../../BulkEmail/BulkEmailFlexBoxLftImg/BulkEmailFlexBoxLftImg";

const MultiplesSalesAd = () => {
  return (
    <div>
      <div className={styles.multipleSalesImgDiv}>
        <div className={styles.multipleSalesContentDiv}>
          <h2>
            Stay on top of deals and predict revenue based on sales pipelines
          </h2>
        </div>
      </div>

      <BulkEmailFlexBoxRhtImg
        src={"/Images/MultipleSalesPipeline/Groupww.png"}
        title={"What is a sales pipeline?"}
        desc={
          "A sales pipeline helps you visualize your sales process and identify the stages where deals are stalled. With it, you can break down your entire sales process into actionable tasks and track them effortlessly. Multiple Sales Pipelines help you set up processes for different sales teams across regions and industries."
        }
      />
      <BulkEmailFlexBoxLftImg
        src={"/Images/MultipleSalesPipeline/Grouprt.png"}
        title={"When do you need multiple sales pipelines?"}
        desc={`Multiple Sales Pipelines help you capture a deal's journey, with all its nuance, across different markets and products. With Multiple Sales Pipelines, you can track all your deals based on the internal processes that you follow.
Say you have different sales processes for inbound and outbound sales, or for direct deals and partnership deals. You can create separate pipelines, with different deal stages for each pipeline.`}
      />

      <BulkEmailFlexBoxRhtImg
        src={"/Images/MultipleSalesPipeline/Grouptg.png"}
        title={"How do Multiple Sales Pipelines work?"}
        desc={
          "Freshsales comes with a default pipeline that is customizable. Build multiple pipelines with customized stages and probabilities based on your sales process. Create custom views for the pipelines that you set up and track each pipelines' status separately."
        }
      />
    </div>
  );
};

export default MultiplesSalesAd;
