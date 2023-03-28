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

export default function AboutUS() {
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
        <OurAchievements />
        <WorkLifeBalance />
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
