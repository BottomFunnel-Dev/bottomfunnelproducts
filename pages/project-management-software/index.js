import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { ProjectManagementSoftwareBanner } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareBanner/ProjectManagementSoftwareBanner";
import { ProjectManagementSoftwareFeature } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareFeature/ProjectManagementSoftwareFeature";
import { ProjectManagementSoftwareIntegrate } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareIntegrate/ProjectManagementSoftwareIntegrate";
import { ProjectManagementSoftwareTrail } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareTrail/ProjectManagementSoftwareTrail";

export default function ProjectManagementSoftware() {
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

      <ProjectManagementSoftwareBanner />
      <ProjectManagementSoftwareIntegrate />
      <ProjectManagementSoftwareFeature />
      <ProjectManagementSoftwareTrail />
    </div>
  );
}
