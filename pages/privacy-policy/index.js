import React from "react";
import { Privacy } from "../../components/PrivacyPolicy/PrivacyPolicy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />

        <Privacy/>

        <ReadyStarted />
        <TalentProfiles />

        <LifeBottomFunnel />
        <ProductsFooter />
    </>
  );
}
