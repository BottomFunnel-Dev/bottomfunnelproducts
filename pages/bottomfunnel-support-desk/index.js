import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import { EliteLast } from "../../components/funnelDeskCom/EliteLast";
import { EliteServices } from "../../components/funnelDeskCom/EliteServices";
import { FunnelDeskBanner } from "../../components/funnelDeskCom/FunnelDeskBanner";
import { FunnelSupport } from "../../components/funnelDeskCom/FunnelSupport";
import { IndustryExperts } from "../../components/funnelDeskCom/IndustryExperts";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { IntegrationFooter } from "../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";
import { DeskFooter } from "../../components/DeskFooter/DeskFooter";

export default function FunnelDesk() {
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

      <FunnelDeskBanner />
      <FunnelSupport />
      <EliteServices />
      <EliteLast />
      <IndustryExperts />
      <IntegrationFooter />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />

      <LifeBottomFunnel />
      {/* <GetStarted /> */}
      <DeskFooter />
    </div>
  );
}
