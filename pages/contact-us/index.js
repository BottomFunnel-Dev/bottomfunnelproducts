import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import styles from "./ContactUS.module.css";

import { ContactUSBanner } from "../../components/ContactUS/ContactUSBanner/ContactUSBanner";
// import { ContactUSForm } from "../../components/ContactUS/ContactUSForm/ContactUSForm";

import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "../../components/ContactUS/ContactForm/ContactForm";
import ContactUsMap from "../../components/ContactUS/ContactUsMap/ContactUsMap";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import ContactNewForm from "../../components/ContactUS/ContactNewForm/ContactNewForm";

export default function ContactUs() {
  const formdata = {
    heading: "Lets Build Great things Together",
    subHeading: "Fill Up form our team will get back to you withing 24hrs",
    image: "/Images/form.png",
    color: "#e4fadd",
  };

  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div className={styles.ContactUScontainer}>
      <HeadSeo
        title={pageMeta[0]?.title}
        description={pageMeta[0]?.description}
        cannonicalpost={pageMeta[0]?.cannonicalpost}
      />

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <ContactUSBanner />
      {/* --------------- Contact form from home page and other pages will come here ----------- */}
      {/* <ContactUSForm /> */}
      <TrustedBy />
      <LifeBottomFunnel />
      <ReadyStarted />
      {/* Other react required components  */}
      <StoriesSection />
      <ContactNewForm formdata={formdata} bgcolor={"#F8C431"} />
      <ContactUsMap />
      {/* <GetStarted /> */}
      <ProductsFooter />
    </div>
  );
}
