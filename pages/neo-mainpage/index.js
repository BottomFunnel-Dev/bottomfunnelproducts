import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";
import { NeoMainpageBanner } from "../../components/NeoMainpage/NeoMainpageBanner/NeoMainpageBanner";
import { NeoMainpageCTE } from "../../components/NeoMainpage/NeoMainpageCTE/NeoMainpageCTE";
import { NeoMainpageFeature } from "../../components/NeoMainpage/NeoMainpageFeature/NeoMainpageFeature";
import { NeoMainpageCTEtwo } from "../../components/NeoMainpage/NeoMainpageCTEtwo/NeoMainpageCTEtwo";
import { NeoMainpageServices } from "../../components/NeoMainpage/NeoMainpageServices/NeoMainpageServices";

export default function neoMainpage() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <>
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

      <NeoMainpageBanner />
      <NeoMainpageCTE />
      <NeoMainpageFeature />
      <NeoMainpageCTEtwo />
      <NeoMainpageServices />

       
      <TrustedBy />
      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <SalesFooter />
    </>
  );
}
