import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import { ManagedserviceProviderBanner } from "../../components/ManagedserviceProvider/ManagedserviceProviderBanner/ManagedserviceProviderBanner";
import { ManagedserviceProviderDemo } from "../../components/ManagedserviceProvider/ManagedserviceProviderDemo/ManagedserviceProviderDemo";
import { ManagedserviceProviderFreind } from "../../components/ManagedserviceProvider/ManagedserviceProviderFreind/ManagedserviceProviderFreind";
import { ManagedserviceProviderHelpDesk } from "../../components/ManagedserviceProvider/ManagedserviceProviderHelpDesk/ManagedserviceProviderHelpDesk";
import { ManagedserviceProviderSupport } from "../../components/ManagedserviceProvider/ManagedserviceProviderSupport/ManagedserviceProviderSupport";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function ManagedserviceProvider() {
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

      <ManagedserviceProviderBanner />
      <ManagedserviceProviderHelpDesk />
      <ManagedserviceProviderSupport />
      <ManagedserviceProviderFreind />
      <ManagedserviceProviderDemo />
    </div>
  );
}
