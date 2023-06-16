import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { ResourcesCasestudiesBanner } from "../../components/ResourcesCasestudies/ResourcesCasestudiesBanner/ResourcesCasestudiesBanner";
import { ResourcesCasestudiesCTE } from "../../components/ResourcesCasestudies/ResourcesCasestudiesCTE/ResourcesCasestudiesCTE";
import { ResourcesCasestudiesSupport } from "../../components/ResourcesCasestudies/ResourcesCasestudiesSupport/ResourcesCasestudiesSupport";
import { ResourcescasestudiesStories } from "../../components/ResourcesCasestudies/ResourcescasestudiesStories/ResourcescasestudiesStories";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function ResourcesCasestudies() {
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
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />

      <ResourcesCasestudiesBanner />
      <ResourcescasestudiesStories />
      <ResourcesCasestudiesCTE />
      <ResourcesCasestudiesSupport />

       
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
    </div>
  );
}
