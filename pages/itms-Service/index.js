import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { Advantage } from "../../components/ITSMService/Advantage/Advantage";
import { ITSMServiceBanner } from "../../components/ITSMService/ITSMServiceBanner/ITSMServiceBanner";
import { ITSMServicesScreens } from "../../components/ITSMService/ITSMServicesScreens/ITSMServicesScreens";
import Navbar from "../../components/Navbar/Navbar";
import { ServiceNavbar } from "../../components/Navbar/ServiceNavbar/ServiceNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { DeskFooter } from "../../components/DeskFooter/DeskFooter";

export default function itmsService() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <>
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

        <ServiceNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />

        <ITSMServiceBanner />
        <ITSMServicesScreens />
        <Advantage />

         
        <TrustedBy />
        <ReadyStarted />
        <LifeBottomFunnel />
        <DeskFooter />
        {/* <ProductsFooter/> */}
      </div>
    </>
  );
}
