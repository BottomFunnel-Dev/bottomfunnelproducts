import React from "react";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TeamInboxBanner from "../../components/TeamInbox/TeamInboxBanner/TeamInboxBanner";
import TeamInboxFeatures from "../../components/TeamInbox/TeamInboxFeatures/TeamInboxFeatures";
import TeamInboxLower from "../../components/TeamInbox/TeamInboxLower/TeamInboxLower";
import TeamInboxWork from "../../components/TeamInbox/TeamInboxWork/TeamInboxWork";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";




export default function TeamInbox() {
  return (
    <div>
    

      <TeamInboxBanner />
      <TeamInboxFeatures />
      <TeamInboxWork />
      <TeamInboxLower />

      <TrustedBy />
      <Testimonial />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
