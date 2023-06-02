import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { ProductsNewPageBanner } from "../../components/ProductsNewPage/ProductsNewPageBanner/ProductsNewPageBanner";
import { SimpleAndEasy } from "../../components/ProductsNewPage/SimpleAndEasy/SimpleAndEasy";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import { TalentNetwork } from "../../components/ProductsNewPage/TalentNetwork/TalentNetwork";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

import Navbar from "../../components/Navbar/Navbar";

export default function Products() {
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
          logo: true,
        }}
      />

      <ProductsNewPageBanner />
      <TalentNetwork />
      <SimpleAndEasy />
      <TalentProfiles />

      {/* Other react required components  */}
      <ProductsFooter />
    </div>
  );
}
