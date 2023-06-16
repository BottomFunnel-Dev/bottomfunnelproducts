import React, { useState, useEffect } from "react";
import HeadSeo from "../../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../../Data/MeatdataData";

import { FeaturesBanner } from "../../../components/funneldeskFeatures/FeaturesBanner/FeaturesBanner";
import { FeaturesCardsLeft } from "../../../components/funneldeskFeatures/FeaturesCardsLeft/FeaturesCardsLeft";
import Navbar from "../../../components/Navbar/Navbar";
import { allfeatures } from "../../../components/Data/funneldeskFeatures";
import { FeatureDemo } from "../../../components/funneldeskFeatures/FeaturesDemo/FeatureDemo";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../../components/ProductsNewPage/TalentProfiles/TalentProfiles";

export default function funnelDeskFeatures() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  const {
    banner,
    ticketing,
    resolve,
    channel,
    workforce,
    productivity,
    help,
    efficiency,
    capabilities,
    security,
  } = allfeatures;

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
      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <FeaturesBanner data={banner} />
      <FeaturesCardsLeft cardsData={ticketing} right={true} />
      <FeaturesCardsLeft cardsData={resolve} right={false} />
      <FeaturesCardsLeft cardsData={channel} right={true} />
      <FeaturesCardsLeft cardsData={workforce} right={false} />
      <FeaturesCardsLeft cardsData={productivity} right={true} />
      <FeaturesCardsLeft cardsData={help} right={false} />
      <FeaturesCardsLeft cardsData={efficiency} right={true} />
      <FeaturesCardsLeft cardsData={capabilities} right={false} />
      <FeaturesCardsLeft cardsData={security} right={true} />
      <FeatureDemo />

      {/* <StoriesSection /> */}
       
      <TrustedBy />
      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />

      <ProductsFooter />
    </div>
  );
}
