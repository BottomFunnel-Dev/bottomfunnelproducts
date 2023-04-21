import React from "react";
import BulkEmailFlexBoxRhtImg from "../BulkEmailFlexBoxRhtImg/BulkEmailFlexBoxRhtImg";
import BulkEmailFlexBoxLftImg from "../BulkEmailFlexBoxLftImg/BulkEmailFlexBoxLftImg";
import styles from "./BulkEmailInfo.module.css"
const BulkEmailInfo = () => {
  return (
    <div>
    <div className={styles.bulkEmailInfoBannerImgDiv}>
    <div className={styles.bulkEmailInfoBannerContentDiv}>
          <h2>Spend less time creating emails</h2>
          <p>
          Emails are the go-to medium for outbound campaigns. It can, however, get mundane to draft the same email to every customer in your email list. Leverage the power of bulk emails to reach a large audience in a single click with personalized emails.
          </p>
        </div>
    </div>

      <BulkEmailFlexBoxRhtImg
        src={"/Images/BulkEmail/01.png"}
        title={"Provide contextual engagement with customized templates"}
        desc={
          "Cretitleate commonly used emails as templates to save time. Track the performance of your templates and share the best-performing ones with your team."
        }
      />
      <BulkEmailFlexBoxLftImg src={"/Images/BulkEmail/02.png"} title={"Personalize bulk emails for better engagement"} desc={"Tailor emails with targeted content to specific prospects with bulk email customization. Personalize your emails with custom placeholders to improve open and click-through rates."}/>
      <BulkEmailFlexBoxRhtImg src={"/Images/BulkEmail/03.png"} title={"Track emails within the CRM"} desc={"Track email opens and link clicks using in-built tracking options. Get real-time email notifications when your recipients interact with your emails."}/>
      <BulkEmailFlexBoxLftImg src={"/Images/BulkEmail/04.png"} title={"Deliver emails at the right time"} desc={"Schedule bulk emails at a specific date and time. Choose the time zone of your choice, to enable better customer engagement. Ensure compliance with email regulations by adding an unsubscribe link in your bulk emails."}/>
      <BulkEmailFlexBoxRhtImg src={"/Images/BulkEmail/05.png"} title={"Analyze email performance with insightful metrics"} desc={"View metrics like the number of opens, clicks, and replies, and optimize your bulk emails. Set up follow-up emails and also drill down into metrics related to specific leads or contacts and gauge your campaigns' performance."}/>
    </div>
  );
};

export default BulkEmailInfo;
