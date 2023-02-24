import React from "react";
import styles from "./ContactUS.module.css";

import { ContactUSBanner } from "../../components/ContactUS/ContactUSBanner/ContactUSBanner";
import { ContactUSForm } from "../../components/ContactUS/ContactUSForm/ContactUSForm";

import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function ContactUs() {
  return (
    <div className={styles.ContactUScontainer}>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <ContactUSBanner />
      {/* --------------- Contact form from home page and other pages will come here ----------- */}
      <ContactUSForm />

      {/* Other react required components  */}
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
