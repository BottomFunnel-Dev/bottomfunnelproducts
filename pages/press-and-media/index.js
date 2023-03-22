import React from "react";

import { NewsEventBanner } from "../../components/PressAndMedia/NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "../../components/PressAndMedia/NewsEventSection/NewsEventSection";
import { MediaSection } from "../../components/PressAndMedia/MediaSection/MediaSection";
import { NewsEventSlider } from "../../components/PressAndMedia/NewsEventSlider/NewsEventSlider";

import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function PressMedia() {
  return (
    <div>
      <Head>
        <title>Press and Media| Bottom Funnel</title>
        <meta
          name="description"
          content="Find the latest news and updates on the press and media
          industry, including publications, conferences, law firms, 
         and more. Stay updated with our daily newsletter."
        />
      </Head>

      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <NewsEventBanner />
        <NewsEventSection />
        <MediaSection />
        {/* <NewsEventSlider /> */}

        {/* Other react required components  */}
        <StoriesSection />
        <TrustedBy />
        <LifeBottomFunnel />
        <GetStarted />
        <ProductsFooter />
      </main>
    </div>
  );
}
