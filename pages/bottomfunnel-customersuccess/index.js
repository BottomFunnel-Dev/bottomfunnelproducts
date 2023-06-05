import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { ActiveGoals } from "../../components/CustomerSuccessHome/ActiveGoals/ActiveGoals";
import { CustomerSuccessBanner } from "../../components/CustomerSuccessHome/CustomerSuccessBanner/CustomerSuccessBanner";
import { CustomerSuccessLeadership } from "../../components/CustomerSuccessHome/CustomerSuccessLeadership/CustomerSuccessLeadership";
import { CustomerValue } from "../../components/CustomerSuccessHome/CustomerValue/CustomerValue";
import { RequestDemo } from "../../components/CustomerSuccessHome/RequestDemo/RequestDemo";
import { DeskFooter } from "../../components/DeskFooter/DeskFooter";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { CustomerSuccess } from "../../components/Navbar/CustomerSuccess/CustomerSuccess";

export default function CustomerSuccessHome() {
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
      <CustomerSuccess
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />

      <CustomerSuccessBanner />
      <CustomerSuccessLeadership />
      <ActiveGoals />
      <CustomerValue />
      <RequestDemo />
      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <DeskFooter />
    </div>
  );
}
