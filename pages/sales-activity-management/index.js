import React from "react";
import TopBannerWithBgImgNdBtn from "../../components/ReusableComponent/TopBannerWithBgImgNdBtn/TopBannerWithBgImgNdBtn";
import AdWithBgImgNdHeadingNdDesc from "../../components/ReusableComponent/AdWithBgImgNdHeadingNdDesc/AdWithBgImgNdHeadingNdDesc";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import BulkEmailFlexBoxRhtImg from "../../components/BulkEmail/BulkEmailFlexBoxRhtImg/BulkEmailFlexBoxRhtImg";
import BulkEmailFlexBoxLftImg from "../../components/BulkEmail/BulkEmailFlexBoxLftImg/BulkEmailFlexBoxLftImg";
import TopImageFlexBox from "../../components/ReusableComponent/TopImageFlexBox/TopImageFlexBox";
import GetStartedFooter from "../../components/ReusableComponent/GetStartedFooter/GetStartedFooter";
import {
  sales_activity_managementInfoCardFirstRow,
  sales_activity_managementInfoCardSecondRow,
} from "../../Data/sales_activity_managementInfo";
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

      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <TopBannerWithBgImgNdBtn
          title={"Track and manage your sales activities"}
          desc={
            "With default and custom sales activities, plan your engagements and appointments with customers, get reminders, and track your performance"
          }
          bgUrl={"/Images/Sales_Activity_Management/Group1000006833.png"}
          btntext={"Sign-up for Free"}
        />

        <div style={{ marginTop: "4rem" }}>
          <BulkEmailFlexBoxRhtImg
            src={"/Images/Sales_Activity_Management/Group1000006793.png"}
            title={"What are Sales Activities?"}
            desc={
              "Every salesperson plans multiple steps to engage with a prospect and convert them into a customer-the back-and-forth emails, phone calls, texts, lunches, meetings, etc. And, there's more. With Sales Activities, track every kind of activity you take to carry a deal forward. Link activities to contacts, sync appointments to your calendar, predict meeting outcomes and keep track of your performance."
            }
          />

          <AdWithBgImgNdHeadingNdDesc
            title={"Optimize your sales process with Sales Activities"}
            desc={
              "Start tracking sales activities and identify the ones that increase conversions with powerful reports. Get all the insights that you need to streamline your process and start closing deals faster than ever."
            }
            bgUrl={"/Images/Sales_Activity_Management//Group1000006777.png"}
          />

          <BulkEmailFlexBoxRhtImg
            src={"/Images/Sales_Activity_Management/Group1000006793.png"}
            title={"Tailor activities based on your sales process"}
            desc={
              "Add and track custom sales activities like events, training attendance, offline meetings, etc. according to your sales process. Spot the activities bringing in more conversions, and constantly improve your sales process for optimal performance."
            }
          />

          <BulkEmailFlexBoxLftImg
            src={"/Images/Sales_Activity_Management/Group1000006813.png"}
            title={"Work smarter with Al-based insights"}
            desc={
              "Leverage Freddy Al to accomplish sales tasks efficiently. Use Freddy's intelligent calendar suggestions based on your CRM data to set up sales activities. Know your prospects who aren't available with Out-Of-Office detection, and gain insights on the next best course of action."
            }
          />

          <BulkEmailFlexBoxRhtImg
            src={"/Images/Sales_Activity_Management/21051215.png"}
            title={"TIdentify key sales activities and replicate for success"}
            desc={
              "Create reports to track a sales activity and learn about its performance. If your sales process involves custom activities, you can use these reports and make decisions on optimizing the process. Managers and admins can obtain analytics on different sales activities and get a holistic perspective of their sales teams."
            }
          />

          <BulkEmailFlexBoxLftImg
            src={"/Images/Sales_Activity_Management/Group1000006701.png"}
            title={"Work smarter with Al-based insights"}
            desc={
              "Leverage Freddy Al to accomplish sales tasks efficiently. Use Freddy's intelligent calendar suggestions based on your CRM data to set up sales activities. Know your prospects who aren't available with Out-Of-Office detection, and gain insights on the next best course of action."
            }
            height={"75%"}
          />

          <>
            <h3 style={{ textAlign: "center", marginBottom: "9rem" }}>
              Track sales activities to boost sales success
            </h3>
            <TopImageFlexBox data={sales_activity_managementInfoCardFirstRow} />
            <TopImageFlexBox
              data={sales_activity_managementInfoCardSecondRow}
            />
          </>

          <div style={{ marginTop: "4rem" }}>
            <BulkEmailSuiteBox />
            <GetStartedFooter
              title={"Start tracking your sales activities today"}
              desc={"21-day free trial. Unrestricted access"}
              btntext={"GET STARTED"}
            />
          </div>
        </div>
      </div>
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
