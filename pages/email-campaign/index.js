import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { EmailCampaignBanner } from "../../components/EmailCampaign/EmailCampaignBanner/EmailCampaignBanner";
import { EmailCampaignDelever } from "../../components/EmailCampaign/EmailCampaignDelever/EmailCampaignDelever";
import { EmailCampaignExplore } from "../../components/EmailCampaign/EmailCampaignExplore/EmailCampaignExplore";
import { EmailCampaignLearn } from "../../components/EmailCampaign/EmailCampaignLearn/EmailCampaignLearn";
import { EmailCampaignTrail } from "../../components/EmailCampaign/EmailCampaignTrail/EmailCampaignTrail";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function EmailCampaign() {
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
      <EmailCampaignBanner />
      <EmailCampaignDelever />
      <EmailCampaignExplore />
      <EmailCampaignLearn />
      <EmailCampaignTrail />
      <ProductsFooter />
    </div>
  );
}
