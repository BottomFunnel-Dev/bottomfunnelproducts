import React from "react";
import styles from "./AboutUS.module.css";

import { AboutusBanner } from "../../components/aboutUs/AboutusBanner/AboutusBanner";
import { OurAchievements } from "../../components/aboutUs/OurAchievements/OurAchievements";
import { OurBlogs } from "../../components/aboutUs/OurBlogs/OurBlogs";
import { OurProcess } from "../../components/aboutUs/OurProcess/OurProcess";
import { WorkLifeBalance } from "../../components/aboutUs/WorkLifeBalance/WorkLifeBalance";

import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import { Location } from "../../components/aboutUs/Location/Location";
import CTAFrom from "../../components/aboutUs/CTAFrom/CTAFrom";

export default function AboutUS() {
  const formdata={
    heading:"Lets Build Great things Together",
    subHeading:"Fill Up form our team will get back to you withing 24hrs",
    image:"/Images/aboutusImage/aerial-view-business-team 1.webp",
    color:"#ef4c23"
  }
  return (
    <div className={styles.AboutUSmain}>
      <Head>
        <title>About us | Bottom Funnel</title>
        <meta
          name="description"
          content="Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field."
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <AboutusBanner />
        <OurProcess />
      <Location/>
        <OurAchievements />
        <WorkLifeBalance />
        <CTAFrom formdata={formdata}/>
        {/* <OurBlogs /> */}

        {/* Other react required components  */}
        {/* <StoriesSection /> */}
        {/* <TrustedBy /> */}
        {/* <LifeBottomFunnel /> */}
        {/* <GetStarted /> */}
        <ProductsFooter />
        
      </main>
    </div>
  );
}
