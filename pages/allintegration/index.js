import React, {useState, useEffect} from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { AllIntegrationBanner } from "../../components/AllIntegration/AllIntegrationBanner/AllIntegrationBanner";
import { AllIntegrationTrail } from "../../components/AllIntegration/AllIntegrationTrail/AllIntegrationTrail";
import { AllIntegrationWay } from "../../components/AllIntegration/AllIntegrationWay/AllIntegrationWay";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function AllIntegration() {
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
      <AllIntegrationBanner />
      <AllIntegrationWay />
      <AllIntegrationTrail />
      <ProductsFooter />
    </div>
  );
}
