import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { EngagementBanner } from "../../components/EngagementPage/EngagementBanner/EngagementBanner";
import { EngagementProcess } from "../../components/EngagementPage/EngagementProcess/EngagementProcess";
import { EngagementRanges } from "../../components/EngagementPage/EngagementRanges/EngagementRanges";
import { EngagementQuery } from "../../components/EngagementPage/EngagementQuery/EngagementQuery";
import Head from "next/head";

export default function EngagementModel() {
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
        {/* <Navbar
          productMount={{
            navMount: true,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        /> */}
        <EngagementBanner />
        <EngagementProcess />
        <EngagementRanges />
        <EngagementQuery />
      </main>
    </div>
  );
}
