import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import OllyAiAdvantage from "../../components/OllyAi/OllyAiAdvantage/OllyAiAdvantage";
import OllyAiBanner from "../../components/OllyAi/OllyAiBanner/OllyAiBanner";
import OllyAiCTA from "../../components/OllyAi/OllyAiCTA/OllyAiCTA";
import OllyAiFeatures from "../../components/OllyAi/OllyAiFeatures/OllyAiFeatures";
import OllyAiTeams from "../../components/OllyAi/OllyAiTeams/OllyAiTeams";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function OllyAi() {
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

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <OllyAiBanner />
      <OllyAiAdvantage />
      <OllyAiTeams />
      <OllyAiFeatures />
      <OllyAiCTA />
       
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
