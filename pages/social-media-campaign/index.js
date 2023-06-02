import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { SocialMediaCampaignAwareness } from "../../components/SocialMediaCampaign/SocialMediaCampaignAwareness/SocialMediaCampaignAwareness";
import { SocialMediaCampaignBanner } from "../../components/SocialMediaCampaign/SocialMediaCampaignBanner/SocialMediaCampaignBanner";
import { SocialMediaCampaignSolution } from "../../components/SocialMediaCampaign/SocialMediaCampaignSolution/SocialMediaCampaignSolution";
import { SocialMediaConnected } from "../../components/SocialMediaCampaign/SocialMediaConnected/SocialMediaConnected";

export default function SocialMediaCampaign() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <>
      <div style={{ color: "#393939" }}>
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

        <SalesNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />

        <SocialMediaCampaignBanner />
        <SocialMediaCampaignSolution />
        <SocialMediaCampaignAwareness />
        <SocialMediaConnected />
      </div>
    </>
  );
}
