import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { DeskFooter } from "../../components/DeskFooter/DeskFooter";
import Navbar from "../../components/Navbar/Navbar";
import { PricingAddOns } from "../../components/Pricing/PricingAddOns/PricingAddOns";

import { PricingBanner } from "../../components/Pricing/PricingBanner/PricingBanner";
import { PricingQuestion } from "../../components/Pricing/PricingQuestion/PricingQuestion";
import { PricingStarted } from "../../components/Pricing/PricingStarted/PricingStarted";
import { PricingTopBanner } from "../../components/Pricing/PricingTopBanner/PricingTopBanner";

import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function Pricing() {
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
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <PricingTopBanner />
      <PricingBanner addOn={<PricingAddOns />} />

      <PricingQuestion />
      <PricingStarted />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <TalentProfiles />

      <LifeBottomFunnel />
      <DeskFooter />
      {/* <ProductsFooter /> */}
    </div>
  );
}
