import React from "react";
import styles from "./OurDevPage.module.css";
import { OurDevBanner } from "../../components/OurDevPage/OurDevBanner/OurDevBanner";
import { OurDevProcess } from "../../components/OurDevPage/OurDevProcess/OurDevProcess";
import { OurWholeDev } from "../../components/OurDevPage/OurWholeDev/OurWholeDev";
import { OurDevQuery } from "../../components/OurDevPage/OurDevQuery/OurDevQuery";

import Head from "next/head";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function OurDevelopment() {
  return (
    <div>
      <Head>
        <title>
          Our Development Process and Working Methodology | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel has evolved from a humble beginning as an IT service provider to a leading global software company with widespread presence across the globe."
        />
      </Head>

      <main>
      <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />

        <OurDevBanner />
        <OurDevProcess />
        <OurWholeDev />
        <OurDevQuery />
        <ProductsFooter />
      </main>
    </div>
  );
}
