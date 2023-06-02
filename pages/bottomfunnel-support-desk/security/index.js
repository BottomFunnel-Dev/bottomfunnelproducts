import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { AdditionalProduct } from "../../../components/funnelDeskSecurity/additionalProduct/AdditionalProduct";
import { BestSecurityRoof } from "../../../components/funnelDeskSecurity/bestsSecurityRoof/bestSecurityRoof";
import { DataSecurity } from "../../../components/funnelDeskSecurity/dataSecurity/dataSecurity";
import { SecurePlatform } from "../../../components/funnelDeskSecurity/securePlatforms/SecurePlatform";
import { SecurityBanner } from "../../../components/funnelDeskSecurity/securityBanner/securityBanner";
import { SecureFeatureList } from "../../../components/funnelDeskSecurity/securityfeatureslist/SecureFeatureList";
import { SecurityMidBanner } from "../../../components/funnelDeskSecurity/securityMidBanner/SecurityMidBanner";
import { SecuritySSO } from "../../../components/funnelDeskSecurity/securitySSO/securitySSO";
import { SupportDeskSecurity } from "../../../components/funnelDeskSecurity/supportdesksecurity/supportDeskSecurity";
import Navbar from "../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { DeskFooter } from "../../../components/DeskFooter/DeskFooter";

export default function FunnedDeskSecurity() {
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
      <SecurityBanner />
      <SupportDeskSecurity />
      <BestSecurityRoof />
      <SecuritySSO />
      <DataSecurity />
      <SecurePlatform />
      <AdditionalProduct />
      <SecureFeatureList />
      <SecurityMidBanner />

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
