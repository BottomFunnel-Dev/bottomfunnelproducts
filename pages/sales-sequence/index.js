import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import TopBannerWithBgImgNdBtn from "../../components/ReusableComponent/TopBannerWithBgImgNdBtn/TopBannerWithBgImgNdBtn";
import BulkEmailFlexBoxRhtImg from "../../components/BulkEmail/BulkEmailFlexBoxRhtImg/BulkEmailFlexBoxRhtImg";
import AdWithBgImgNdHeadingNdDesc from "../../components/ReusableComponent/AdWithBgImgNdHeadingNdDesc/AdWithBgImgNdHeadingNdDesc";
import TopImageFlexBox from "../../components/ReusableComponent/TopImageFlexBox/TopImageFlexBox";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import GetStartedFooter from "../../components/ReusableComponent/GetStartedFooter/GetStartedFooter";
import {
  sales_sequenceInfoCardFirstRow,
  sales_sequenceInfoCardSecondRow,
} from "../../Data/sales_sequence";

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

      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <TopBannerWithBgImgNdBtn
          title={"Drive deeper engagement with targeted outreach"}
          desc={
            "With Sales Sequences, enable salespeople to engage with prospects and customers with a series of automated, personalized touchpoints, and improve conversions."
          }
          bgUrl={"/Images/sales-sequence/Group1000006846.png"}
          btntext={"Sign-up for Free"}
        />

        <div style={{ marginTop: "4rem" }}>
          <BulkEmailFlexBoxRhtImg
            src={"/Images/sales-sequence/Group1000006845.png"}
            title={"What are Sales Sequences?"}
            desc={
              "Sales Sequences are automated workflows that help your salespeople manage their outreach better. They comprise a scheduled series of sales touchpoints like emails, phone calls, SMS, and reminders. With Sales Sequences, create, send, and track perfect, personalized outbound campaigns that kickstart meaningful conversations with your customers."
            }
          />

          <AdWithBgImgNdHeadingNdDesc
            title={"Automate sales activities and free your salespeople's time"}
            desc={
              "Use Sales Sequences to automate sales activities and enable your teams to focus on selling. Measure every sales touchpoint and never let a contact go cold. Define your prospect(s) based on certain characteristics, and choose between activity-based smart sequences and time-bound classic sequences. Pick the email to be sent from a list of templates, and set up delivery timelines, and start closing more deals."
            }
            bgUrl={"/Images/sales-sequence/rt.png"}
          />

          <>
            <h3 style={{ textAlign: "center", marginBottom: "9rem" }}>
              Track sales activities to boost sales success
            </h3>
            <TopImageFlexBox data={sales_sequenceInfoCardFirstRow} />
            <TopImageFlexBox data={sales_sequenceInfoCardSecondRow} />
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
       
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </>
  );
};

export default index;
