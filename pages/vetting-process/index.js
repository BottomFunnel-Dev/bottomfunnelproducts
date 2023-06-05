import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { VettingBanner } from "../../components/VettingPage/VettingBanner/VettingBanner";
import { VettingProcess } from "../../components/VettingPage/VettingProcess/VettingProcess";
import { VettingTalent } from "../../components/VettingPage/VettingTalent/VettingTalent";
import { VettingHiring } from "../../components/VettingPage/VettingHiring/VettingHiring";
import { VettingGrow } from "../../components/VettingPage/VettingGrow/VettingGrow";
import { VettingRoles } from "../../components/VettingPage/VettingRoles/VettingRoles";

import Head from "next/head";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Vetting() {
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
        <Navbar
          productMount={{
            navMount: true,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />

        <VettingBanner />
        {/* <VettingProcess /> */}
        <VettingTalent />
        <VettingHiring />
        <VettingGrow />
        <VettingRoles />
        <ProductsFooter />
      </main>
    </div>
  );
}
