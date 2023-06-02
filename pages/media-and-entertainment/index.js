import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { MediaAndEntertainmentBanner } from "../../components/MediaAndEntertainment/MediaAndEntertainmentBanner/MediaAndEntertainmentBanner";
import { MediaAndEntertainmentDemo } from "../../components/MediaAndEntertainment/MediaAndEntertainmentDemo/MediaAndEntertainmentDemo";
import { MediaAndEntertainmentInfo } from "../../components/MediaAndEntertainment/MediaAndEntertainmentInfo/MediaAndEntertainmentInfo";
import { MediaAndEntertainmentSpotLight } from "../../components/MediaAndEntertainment/MediaAndEntertainmentSpotLight/MediaAndEntertainmentSpotLight";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function mediaAndEntertainment() {
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

      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <MediaAndEntertainmentBanner />
      <MediaAndEntertainmentInfo />
      <MediaAndEntertainmentSpotLight />
      <MediaAndEntertainmentDemo />
      <ProductsFooter />
    </div>
  );
}
