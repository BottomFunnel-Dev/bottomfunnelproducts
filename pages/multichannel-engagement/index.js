import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import { MultichannelEngagementBanner } from "../../components/MultichannelEngagement/MultichannelEngagementBanner/MultichannelEngagementBanner";
import { MultichannelEngagementPersonalise } from "../../components/MultichannelEngagement/MultichannelEngagementPersonalise/MultichannelEngagementPersonalise";
import { MarketerNavbar } from "../../components/MarketerNavbar";

const productData = {
  title: "Bottom Funnel Marketer",
  logo: "https://d3op2l77j7wnti.cloudfront.net/Images/navbar/product/Market.png",
  width: "45%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/404" },
    position: { right: "35%" },

    products: [
      {
        dropContent: "Multichannel Engagement",
        path: "/multichannel-engagement",
      },
      {
        dropContent: "Email & SMS",
        path: "/",
      },
      {
        dropContent: "WhatsApp",
        path: "/whatsapp",
      },
      {
        dropContent: "Journeys",
        path: "/journey",
      },
      {
        dropContent: "Landing Pages",
        path: "/landing-pages",
      },
      {
        dropContent: "Shopify Integration",
        path: "/shopify",
      },
    ],
  },
  list4: {
    title: "Resources",
    more: false,
    position: { right: "20%" },
    products: [
      {
        dropContent: "Product Tours",
        path: "/product-tour",
      },
      {
        dropContent: "Case Studies",
        path: "/",
      },
      {
        dropContent: "What's new",
        path: "/whatsnew",
      },
      {
        dropContent: "Guide to Shopify",
        path: "/guideToShopFy",
      },
    ],
  },
  pricing: "/pricing",
};

export default function MultichannelEngagement() {
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
      <MarketerNavbar data={productData} />
      <MultichannelEngagementBanner />
      <MultichannelEngagementPersonalise />
    </div>
  );
}
