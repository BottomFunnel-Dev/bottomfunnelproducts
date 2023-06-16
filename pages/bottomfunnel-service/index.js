import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { BetterService } from "../../components/BottomFunnelService/BetterService/BetterService";
import { BottomFunnelServiceBanner } from "../../components/BottomFunnelService/BottomFunnelServiceBanner/BottomFunnelServiceBanner";
import { PopularFeatures } from "../../components/BottomFunnelService/PopularFeatures/PopularFeatures";
import { ServiceTools } from "../../components/BottomFunnelService/ServiceTools/ServiceTools";
import { ServiceWalk } from "../../components/BottomFunnelService/ServiceWalk/ServiceWalk";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { ServiceNavbar } from "../../components/Navbar/ServiceNavbar/ServiceNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { ServiceFooter } from "../../components/ServiceFooter/ServiceFooter";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function bottomfunnelservice() {
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

        <BottomFunnelServiceBanner />
        {/* <TrustedBy/> */}
        <BetterService />
        <ServiceTools />
        <PopularFeatures />
        <ServiceWalk />

        {/* <DeskStarted/> */}

         
        <TrustedBy />

        <ReadyStarted />
        <TalentProfiles />
        <LifeBottomFunnel />
        <ServiceFooter />
      </div>
    </>
  );
}
