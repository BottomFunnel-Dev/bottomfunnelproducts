import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import { BottomFunnelOmnichannelBanner } from "../../components/BottomFunnelOmnichannel/BottomFunnelOmnichannelBanner/BottomFunnelOmnichannelBanner";
import { OmnichannelSolution } from "../../components/BottomFunnelOmnichannel/OmnichannelSolution/OmnichannelSolution";
import { OmniChannelSlids } from "../../components/BottomFunnelOmnichannel/OmniChannelSlids/OmniChannelSlids";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { DeskFooter } from "../../components/DeskFooter/DeskFooter";
import { Omnichannel } from "../../components/Navbar/Omnichannel/Omnichannel";

export default function BottomFunnelOmnichannel() {
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
      <Omnichannel
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />

      <BottomFunnelOmnichannelBanner />
      <OmnichannelSolution />
      {/* <TrustedBy/> */}
      <OmniChannelSlids />

      {/* <StoriesSection/> */}

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      {/* <GetStarted/> */}

      <DeskFooter />
    </div>
  );
}
