import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";

import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { Navbar } from "react-bootstrap";
import FormulaFieldsBanner from "../../components/FormulaFields/FormulaFieldsBanner/FormulaFieldsBanner";
import FormulaFieldsExplain from "../../components/FormulaFields/FormulaFieldsExplain/FormulaFieldsExplain";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

import FormulaFieldsCTA from "../../components/FormulaFields/FormulaFieldsCTA/FormulaFieldsCTA";
import FormulaFieldsGetData from "../../components/FormulaFields/FormulaFieldsGetData/FormulaFieldsGetData";
import FormulaFieldsCTAnext from "../../components/FormulaFields/FormulaFieldsCTAnext/FormulaFieldsCTAnext";

export default function FormulaFields() {
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
      <SalesNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />

      <FormulaFieldsBanner />
      <FormulaFieldsExplain />
      <FormulaFieldsGetData />
      <FormulaFieldsCTA />
      <FormulaFieldsCTAnext />
      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <SalesFooter />
    </div>
  );
}
