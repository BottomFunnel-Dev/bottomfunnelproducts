import React from "react";
import { EnterpriseDeskBanner } from "../../../../components/funnelDeskEnterprise/EnterpriseDeskBanner";
import { EnterpriseDeskService } from "../../../../components/funnelDeskEnterprise/EnterpriseDeskService";
import { EnterpriseEngage } from "../../../../components/funnelDeskEnterprise/EnterpriseEngage";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { GetStarted } from "../../../../components/ProductsNewPage/GetStarted/GetStarted";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../../../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";

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

      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
