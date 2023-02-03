import React from "react";
import { FeaturesBanner } from "../../../components/funneldeskFeatures/FeaturesBanner/FeaturesBanner";
import { FeaturesCardsLeft } from "../../../components/funneldeskFeatures/FeaturesCardsLeft/FeaturesCardsLeft";
import Navbar from "../../../components/Navbar/Navbar";
import { allfeatures } from "../../../components/Data/funneldeskFeatures";
import { FeatureDemo } from "../../../components/funneldeskFeatures/FeaturesDemo/FeatureDemo";
import { ProductsNavbar } from "../../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function funnelDeskFeatures() {
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
    </div>
  );
}
