import React from "react";

import "./NewsEvent.css";

import { MediaSection } from "./MediaSection/MediaSection";
import { NewsEventBanner } from "./NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "./NewsEventSection/NewsEventSection";
import { NewsEventSlider } from "./NewsEventSlider/NewsEventSlider";

// ----- Other requried react components -----
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { Helmet } from "react-helmet";

export const NewsEvent = () => {
 

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Press & Media | Bottom Funnel</title>
        <meta
          name="description"
          content="Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field."
        />
      </Helmet>
      <NewsEventBanner />
      <NewsEventSection />
      <MediaSection />
      <NewsEventSlider />
      {/* Other react required components */}
      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
};
