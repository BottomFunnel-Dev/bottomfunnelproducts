import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { NewsEventBanner } from "../../components/PressAndMedia/NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "../../components/PressAndMedia/NewsEventSection/NewsEventSection";
import { MediaSection } from "../../components/PressAndMedia/MediaSection/MediaSection";
import { NewsEventSlider } from "../../components/PressAndMedia/NewsEventSlider/NewsEventSlider";

import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function PressMedia() {
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
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <NewsEventBanner />
        <NewsEventSection />
        <MediaSection />
        {/* <NewsEventSlider /> */}

        {/* Other react required components  */}
        <StoriesSection />
        <TrustedBy />
        <LifeBottomFunnel />
        <GetStarted />
        <ProductsFooter />
      </main>
    </div>
  );
}
