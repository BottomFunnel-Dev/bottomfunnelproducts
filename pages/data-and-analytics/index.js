import React from "react";
import { Advantages } from "../../components/AnalyticsofFeature/Advantages/Advantages";
import { AnalyticsofFeatureBanner } from "../../components/AnalyticsofFeature/AnalyticsofFeatureBanner/AnalyticsofFeatureBanner";
import { Insight } from "../../components/AnalyticsofFeature/Insight/Insight";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Head from "next/head";

export default function AnalyticsofFeature() {
  return (
    <div>
      <Head>
        <title> SaaS based data and analytics services| Bottom Funnel </title>
        <meta
          name="description"
          content="Looking to get your business ahead of the competition with data and analytics services? Our range of SaaS based data and analytics services are designed to meet your needs"
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
        {/* <ProdNavbar data={productData} /> */}
        <AnalyticsofFeatureBanner />
        <Advantages />
        <Insight />
        <Trial />
        <ProductsFooter />
      </main>
    </div>
  );
}
