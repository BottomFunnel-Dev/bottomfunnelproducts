import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { AllIndustriesBanner } from "../../components/AllIndustries/AllIndustriesBanner";
import { AllindustrycustomerDelight } from "../../components/AllIndustries/AllindustrycustomerDelight";
import { Allindustryfooter } from "../../components/AllIndustries/Allindustryfooter";
import { IntegrationFooter } from "../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function Allindustry() {
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

      <AllIndustriesBanner />
      <AllindustrycustomerDelight />
      <Allindustryfooter />

      <IntegrationFooter />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />

      <LifeBottomFunnel />
      {/* <GetStarted /> */}
      <ProductsFooter />
    </div>
  );
}
