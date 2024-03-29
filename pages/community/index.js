import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import CommunityBanner from "../../components/Community/CommunityBanner/CommunityBanner";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import CommunityContentCategories from "../../components/Community/CommunityContentCategories/CommunityContentCategories";
import CommunityUserNetwork from "../../components/Community/CommunityUserNetwork/CommunityUserNetwork";
import CommunityHelp from "../../components/Community/CommunityHelp/CommunityHelp";
import CommunityConversation from "../../components/Community/CommunityConversation/CommunityConversation";
import { CommunityConnections } from "../../components/Community/CommunityConnections/CommunityConnections";

export default function Community() {
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

      <CommunityBanner />
      <CommunityConnections />
      <CommunityContentCategories />
      <CommunityConversation />
      <CommunityUserNetwork />
      <CommunityHelp />
       
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
