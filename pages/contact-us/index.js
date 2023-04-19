import React from "react";
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

export default function ContactUs() {
  const formdata = {
    heading: "Lets Build Great things Together",
    subHeading: "Fill Up form our team will get back to you withing 24hrs",
    image: "/Images/form.png",
    color: "#e4fadd",
  };

  return (
    <div className={styles.ContactUScontainer}>
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
      <ContactForm formdata={formdata} bgcolor={"#e4fadd"} />
      <ContactUsMap />
      {/* <GetStarted /> */}
      <ProductsFooter />
    </div>
  );
}
