import React, {useState, useEffect} from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import styles from "./AboutUS.module.css";

import { AboutusBanner } from "../../components/aboutUs/AboutusBanner/AboutusBanner";
import { OurAchievements } from "../../components/aboutUs/OurAchievements/OurAchievements";
import { OurBlogs } from "../../components/aboutUs/OurBlogs/OurBlogs";
import { OurProcess } from "../../components/aboutUs/OurProcess/OurProcess";
import { WorkLifeBalance } from "../../components/aboutUs/WorkLifeBalance/WorkLifeBalance";

import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import { Location } from "../../components/aboutUs/Location/Location";
import CTAFrom from "../../components/aboutUs/CTAFrom/CTAFrom";

export default function AboutUS() {
  const formdata = {
    heading: "Lets Build Great things Together",
    subHeading: "Fill Up form our team will get back to you withing 24hrs",
    image: "/Images/aboutusImage/aerial-view-business-team 1.webp",
    color: "#ef4c23",
  };

  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div className={styles.AboutUSmain}>
      <HeadSeo
        title={pageMeta[0]?.title}
        description={pageMeta[0]?.description}
        cannonicalpost={pageMeta[0]?.cannonicalpost}
      />

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
        <Location />
        <OurAchievements />
        <WorkLifeBalance />
        <CTAFrom formdata={formdata} />
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
