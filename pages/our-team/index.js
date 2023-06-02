import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import { OurTeamBanner } from "../../components/OurTeam/OurTeamBanner/OurTeamBanner";
import Navbar from "../../components/Navbar/Navbar";
import OurTeamCardsMain from "../../components/OurTeam/MainOurTeamCards/MainOurTeamCards";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";

const index = () => {
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
          color: "white",
          logo: true,
        }}
      />

      <OurTeamBanner />
      <OurTeamCardsMain />

      {/* Other react required components  */}

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
};

export default index;
