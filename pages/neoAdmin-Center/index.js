import React, { useState, useEffect } from "react";
import HeadSeo from "../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../Data/MeatdataData";

import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { NeoAdminAdministration } from "../../components/NeoAdminCenter/NeoAdminAdministration/NeoAdminAdministration";
import { NeoAdminBanner } from "../../components/NeoAdminCenter/NeoAdminBanner/NeoAdminBanner";
import { NeoAdminBilling } from "../../components/NeoAdminCenter/NeoAdminBilling/NeoAdminBilling";
import { NeoAdminEnterprise } from "../../components/NeoAdminCenter/NeoAdminEnterprise/NeoAdminEnterprise";

export default function NeoAdminCenter() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <>
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

        <SalesNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />

        <NeoAdminBanner />
        <NeoAdminEnterprise />
        <NeoAdminBilling />
        <NeoAdminAdministration />
      </div>
    </>
  );
}
