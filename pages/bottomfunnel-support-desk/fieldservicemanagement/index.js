import React, { useState, useEffect } from "react";
import HeadSeo from "../../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../../Data/MeatdataData";

import { Fieldservicemanagementbanner } from "../../../components/FieldServiceManagement/Fieldservicemanagementbanner";
import { ServiceExperience } from "../../../components/FieldServiceManagement/ServiceExperience";
import { Servicemanagementscreens } from "../../../components/FieldServiceManagement/Servicemanagementscreens";
import { Stellerfieldservice } from "../../../components/FieldServiceManagement/Stellerfieldservice";
import Navbar from "../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import { DeskFooter } from "../../../components/DeskFooter/DeskFooter";

export default function FieldServiceManagement() {
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

      <Fieldservicemanagementbanner />
      <ServiceExperience />
      <Servicemanagementscreens />
      <Stellerfieldservice />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <DeskFooter />
      {/* <ProductsFooter /> */}
    </div>
  );
}
