import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { SmallBusinessBanner } from "../../components/SmallBusiness/SmallBusinessBanner/SmallBusinessBanner";
import { SmallBusinessFreshDesk } from "../../components/SmallBusiness/SmallBusinessFreshDesk/SmallBusinessFreshDesk";
import { SmallBusinessManagement } from "../../components/SmallBusiness/SmallBusinessManagement/SmallBusinessManagement";
import { SmallBusinessSupport } from "../../components/SmallBusiness/SmallBusinessSupport/SmallBusinessSupport";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function SmallBusinees() {
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

      <SmallBusinessBanner />
      <SmallBusinessSupport />
      <SmallBusinessManagement />
      <SmallBusinessFreshDesk />
      <ProductsFooter />
    </div>
  );
}
