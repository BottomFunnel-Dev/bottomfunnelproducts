import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { DeveloperPortalCases } from "../../components/DevelopersPortal/DeveloperPortalCases/DeveloperPortalCases";
import { DeveloperPortalCommunity } from "../../components/DevelopersPortal/DeveloperPortalCommunity/DeveloperPortalCommunity";
import { DeveloperPortalDiscover } from "../../components/DevelopersPortal/DeveloperPortalDiscover/DeveloperPortalDiscover";
import { DeveloperPortalGetStarted } from "../../components/DevelopersPortal/DeveloperPortalGetStarted/DeveloperPortalGetStarted";
import { DeveloperPortalRegister } from "../../components/DevelopersPortal/DeveloperPortalRegister/DeveloperPortalRegister";
import { DeveloperResource } from "../../components/DevelopersPortal/DeveloperResource/DeveloperResource";
import { DevelopersPortalBanner } from "../../components/DevelopersPortal/DevelopersPortalBanner/DevelopersPortalBanner";
import { DevelopersPortalGrow } from "../../components/DevelopersPortal/DevelopersPortalGrow/DevelopersPortalGrow";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function DevelopersPortal() {
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

      <DevelopersPortalBanner />
      <DeveloperPortalGetStarted />
      <DeveloperResource />
      <DevelopersPortalGrow />
      <DeveloperPortalCommunity />
      <DeveloperPortalDiscover />
      <DeveloperPortalCases />
      <DeveloperPortalRegister />

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
