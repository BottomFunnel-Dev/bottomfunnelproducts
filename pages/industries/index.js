import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { AllIndustriesBanner } from "../../components/AllIndustries/AllIndustriesBanner";
import { AllindustrycustomerDelight } from "../../components/AllIndustries/AllindustrycustomerDelight";
import { Allindustryfooter } from "../../components/AllIndustries/Allindustryfooter";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function Allindustry() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div style={{ color: "#393939" }}>
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
      <AllIndustriesBanner />
      <AllindustrycustomerDelight />
      <Allindustryfooter />
    </div>
  );
}
