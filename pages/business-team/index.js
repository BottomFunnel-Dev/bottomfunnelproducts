import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { BusinessTeamBanner } from "../../components/BusinessTeam/BusinessTeamBanner/BusinessTeamBanner";
import { BusinessTeamcards } from "../../components/BusinessTeam/BusinessTeamcards/BusinessTeamcards";
import { BusinessTeamEnterprise } from "../../components/BusinessTeam/BusinessTeamEnterprise/BusinessTeamEnterprise";
import { BusinessTeamexplore } from "../../components/BusinessTeam/BusinessTeamexplore/BusinessTeamexplore";
import { BusinessTeamForrestor } from "../../components/BusinessTeam/BusinessTeamForrestor/BusinessTeamForrestor";
import { BusinessTeamPortal } from "../../components/BusinessTeam/BusinessTeamPortal/BusinessTeamPortal";
import { BusinessTeamTrail } from "../../components/BusinessTeam/BusinessTeamTrail/BusinessTeamTrail";

export default function BusinessTeam() {
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

      <BusinessTeamBanner />
      <BusinessTeamForrestor />
      <BusinessTeamPortal />
      <BusinessTeamEnterprise />
      <BusinessTeamcards />
      <BusinessTeamexplore />
      <BusinessTeamTrail />
    </div>
  );
}
