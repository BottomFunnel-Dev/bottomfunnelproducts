import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { ClientBanner } from "../../components/OurClient/ClientBanner/ClientBanner";
import { ClientSlider } from "../../components/OurClient/ClientSlider/ClientSlider";
import { OurClientbrand } from "../../components/OurClient/OurClientbrand/OurClientbrand";

import {
  branddata,
  startupdata,
  enterprisedata,
  imageData,
} from "../../Data/OurClient";

import Head from "next/head";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function OurClients() {
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

      <main>
        <ClientBanner />
        <ClientSlider data={imageData} />
        <OurClientbrand data={branddata} />
        <OurClientbrand data={startupdata} />
        <OurClientbrand data={enterprisedata} />
        <ProductsFooter />
      </main>
    </div>
  );
}
