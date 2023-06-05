import React, { useState, useEffect } from "react";
import HeadSeo from "../../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../../Data/MeatdataData";

import { SimplifiedTicketting } from "../../../components/funnelDeksTicketing/SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "../../../components/funnelDeksTicketing/TicketingBanner/TicketingBanner";
import { TicketingServices } from "../../../components/funnelDeksTicketing/TicketingServices/TicketingServices";
import { TickettingInbox } from "../../../components/funnelDeksTicketing/TickettingInbox/TickettingInbox";
import { TickettingStartTrials } from "../../../components/funnelDeksTicketing/TickettingStartTrials/TickettingStartTrials";
import Navbar from "../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";

import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { DeskFooter } from "../../../components/DeskFooter/DeskFooter";

export default function funnelDeskTicketing() {
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
      <TicketingBanner />
      <SimplifiedTicketting />
      <TickettingInbox />
      <TicketingServices />

      <TickettingStartTrials />

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
