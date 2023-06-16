import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import CustomerServicesBanner from "../../components/CustomerServices/CustomerServicesBanner/CustomerServicesBanner";
import CustomerServicesSectionTwo from "../../components/CustomerServices/CustomerServicesSectionTwo/CustomerServicesSectionTwo";
import CustomerServicesSectionThree from "../../components/CustomerServices/CustomerServiceSectionThree/CustomerServiceSectionThree";
import CustomerServicesSectionOne from "../../components/CustomerServices/CustomerServicesSectionOne/CustomerServicesSectionOne";
import CustomerServicesScalable from "../../components/CustomerServices/CustomerServicesScalable/CustomerServicesScalable";

export default function CustomerServices() {
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
      <CustomerServicesBanner />
      <CustomerServicesScalable />
      <CustomerServicesSectionOne />
      <CustomerServicesSectionTwo />
      <CustomerServicesSectionThree />
       
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
