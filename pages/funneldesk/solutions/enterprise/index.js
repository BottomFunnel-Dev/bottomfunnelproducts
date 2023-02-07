import React from "react";
import { EnterpriseDeskBanner } from "../../../../components/funnelDeskEnterprise/EnterpriseDeskBanner";
import { EnterpriseDeskService } from "../../../../components/funnelDeskEnterprise/EnterpriseDeskService";
import { EnterpriseEngage } from "../../../../components/funnelDeskEnterprise/EnterpriseEngage";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import StoriesSection from "../../../../components/CommonComponents/StoriesSection/StoriesSection";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function funnelDeskEnterprise() {
  return (
    <div style={{ color: "#393939" }}>
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
      <EnterpriseDeskBanner />
      <EnterpriseEngage />
      <EnterpriseDeskService />

      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      <GetStarted />
      <ProductsFooter />
    </div>
  );
}
