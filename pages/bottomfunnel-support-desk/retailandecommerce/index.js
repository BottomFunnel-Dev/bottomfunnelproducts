import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { RetailEcommerceBanner } from "../../../components/funnelDeskRetailEcommerce/RetailEcommerceBanner";
import { RetailInsights } from "../../../components/funnelDeskRetailEcommerce/RetailInsights";
import { RetailRedefine } from "../../../components/funnelDeskRetailEcommerce/RetailRedefine";
import { RetailsCustomer } from "../../../components/funnelDeskRetailEcommerce/RetailsCustomer";
import { RetailShopers } from "../../../components/funnelDeskRetailEcommerce/RetailShopers";
import { RetailTeam } from "../../../components/funnelDeskRetailEcommerce/RetailTeam";
import Navbar from "../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { IntegrationFooter } from "../../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter";
import { DeskFooter } from "../../../components/DeskFooter/DeskFooter";

export default function funnelDeskRetailEcommerce() {
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

      <RetailEcommerceBanner />
      <RetailShopers />
      <RetailRedefine />
      <RetailsCustomer />
      <RetailTeam />
      <RetailInsights />
      <IntegrationFooter />

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
