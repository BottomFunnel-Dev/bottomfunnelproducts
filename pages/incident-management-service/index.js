import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { IncidentManageServicesBanner } from "../../components/IncidentManageServices/IncidentManageServicesBanner/IncidentManageServicesBanner";
import { IncidentManageServicesCatarories } from "../../components/IncidentManageServices/IncidentManageServicesCatarories/IncidentManageServicesCatarories";
import { IncidentManageServicesDemo } from "../../components/IncidentManageServices/IncidentManageServicesDemo/IncidentManageServicesDemo";
import { IncidentManageServicesFeature } from "../../components/IncidentManageServices/IncidentManageServicesFeature/IncidentManageServicesFeature";
import { IncidentManageServicesIncident } from "../../components/IncidentManageServices/IncidentManageServicesIncident/IncidentManageServicesIncident";
import { IncidentManageServicesSupport } from "../../components/IncidentManageServices/IncidentManageServicesSupport/IncidentManageServicesSupport";

export default function IncidentManagementService() {
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

      <IncidentManageServicesBanner />
      <IncidentManageServicesSupport />
      <IncidentManageServicesIncident />
      <IncidentManageServicesCatarories />
      <IncidentManageServicesFeature />
      <IncidentManageServicesDemo />
    </div>
  );
}
