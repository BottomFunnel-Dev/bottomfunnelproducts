import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { NeoAdminAdministration } from "../../components/NeoAdminCenter/NeoAdminAdministration/NeoAdminAdministration";
import { NeoAdminBanner } from "../../components/NeoAdminCenter/NeoAdminBanner/NeoAdminBanner";
import { NeoAdminBilling } from "../../components/NeoAdminCenter/NeoAdminBilling/NeoAdminBilling";
import { NeoAdminEnterprise } from "../../components/NeoAdminCenter/NeoAdminEnterprise/NeoAdminEnterprise";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function NeoAdminCenter() {
  return (
    <>
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


        <NeoAdminBanner/>
        <NeoAdminEnterprise/>
        <NeoAdminBilling/>
        <NeoAdminAdministration/>
        
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted/>
        <LifeBottomFunnel/>
        <ProductsFooter/>
      </div>
    </>
  );
}
