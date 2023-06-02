import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { RemoteSupportBanner } from "../../components/RemoteSupport/RemoteSupportBanner/RemoteSupportBanner";
import { RemoteSupportCTEone } from "../../components/RemoteSupport/RemoteSupportCTEone/RemoteSupportCTEone";
import { RemoteSupportCTEthree } from "../../components/RemoteSupport/RemoteSupportCTEthree/RemoteSupportCTEthree";
import { RemoteSupportCTEtwo } from "../../components/RemoteSupport/RemoteSupportCTEtwo/RemoteSupportCTEtwo";
import { RemoteSupportExperts } from "../../components/RemoteSupport/RemoteSupportExperts/RemoteSupportExperts";
import { RemoteSupportGuide } from "../../components/RemoteSupport/RemoteSupportGuide/RemoteSupportGuide";
import { RemoteSupportNew } from "../../components/RemoteSupport/RemoteSupportNew/RemoteSupportNew";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { Omnichannel } from "../../components/Navbar/Omnichannel/Omnichannel";

export default function RemoteSupport() {
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
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <Omnichannel
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />

      <RemoteSupportBanner />
      <RemoteSupportNew />
      <RemoteSupportCTEone />
      <RemoteSupportExperts />
      <RemoteSupportCTEtwo />
      <RemoteSupportGuide />
      <RemoteSupportCTEthree />

      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
    </div>
  );
}
