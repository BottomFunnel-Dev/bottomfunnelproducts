import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { OurDevBanner } from "../../components/OurDevPage/OurDevBanner/OurDevBanner";
import { OurDevProcess } from "../../components/OurDevPage/OurDevProcess/OurDevProcess";
import { OurWholeDev } from "../../components/OurDevPage/OurWholeDev/OurWholeDev";
import { OurDevQuery } from "../../components/OurDevPage/OurDevQuery/OurDevQuery";

import Head from "next/head";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function OurDevelopment() {
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

        <OurDevBanner />
        <OurDevProcess />
        <OurWholeDev />
        <OurDevQuery />
        <ProductsFooter />
      </main>
    </div>
  );
}
