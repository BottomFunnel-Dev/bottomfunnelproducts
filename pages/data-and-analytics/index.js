import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { Advantages } from "../../components/AnalyticsofFeature/Advantages/Advantages";
import { AnalyticsofFeatureBanner } from "../../components/AnalyticsofFeature/AnalyticsofFeatureBanner/AnalyticsofFeatureBanner";
import { Insight } from "../../components/AnalyticsofFeature/Insight/Insight";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Head from "next/head";

export default function AnalyticsofFeature() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div>
      <HeadSeo
        title={pageMeta[0]?.title}
        description={pageMeta[0]?.description}
        cannonicalpost={pageMeta[0]?.cannonicalpost}
      />

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
