import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { InsuranceBanner } from "../../components/Insurance/InsuranceBanner/InsuranceBanner";
import { InsuranceDemo } from "../../components/Insurance/InsuranceDemo/InsuranceDemo";
import { InsuranceRelationship } from "../../components/Insurance/InsuranceRelationship/InsuranceRelationship";
import { InsuranceRespond } from "../../components/Insurance/InsuranceRespond/InsuranceRespond";
import { InsuranceSoftware } from "../../components/Insurance/InsuranceSoftware/InsuranceSoftware";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function Insurance() {
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
      <InsuranceBanner />
      <InsuranceSoftware />
      <InsuranceRespond />
      <InsuranceRelationship />
      <InsuranceDemo />
      <ProductsFooter />
    </div>
  );
}
