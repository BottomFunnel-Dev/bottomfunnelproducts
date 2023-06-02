import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { ContentMarketingServicesBanner } from "../../components/ContentMarketingServices/ContentMarketingServicesBanner/ContentMarketingServicesBanner";
import { ContentMarketingServicesBrands } from "../../components/ContentMarketingServices/ContentMarketingServicesBrands/ContentMarketingServicesBrands";
import { ContentMarketingServicesExpertise } from "../../components/ContentMarketingServices/ContentMarketingServicesExpertise/ContentMarketingServicesExpertise";
import { ContentMarketingServicesSolution } from "../../components/ContentMarketingServices/ContentMarketingServicesSolution/ContentMarketingServicesSolution";
import { ContentMarketingServicesUnderstading } from "../../components/ContentMarketingServices/ContentMarketingServicesUnderstading/ContentMarketingServicesUnderstading";
import { ContentMarketingServicesWorks } from "../../components/ContentMarketingServices/ContentMarketingServicesWorks/ContentMarketingServicesWorks";

export default function ContentMarketingservices() {
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
      <ContentMarketingServicesBanner />
      <ContentMarketingServicesBrands />
      <ContentMarketingServicesExpertise />
      <ContentMarketingServicesUnderstading />
      <ContentMarketingServicesWorks />
      <ContentMarketingServicesSolution />
    </div>
  );
}
