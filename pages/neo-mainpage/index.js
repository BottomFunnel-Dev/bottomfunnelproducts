import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";
import { NeoMainpageBanner } from "../../components/NeoMainpage/NeoMainpageBanner/NeoMainpageBanner";
import { NeoMainpageCTE } from "../../components/NeoMainpage/NeoMainpageCTE/NeoMainpageCTE";
import { NeoMainpageFeature } from "../../components/NeoMainpage/NeoMainpageFeature/NeoMainpageFeature";
import { NeoMainpageCTEtwo } from "../../components/NeoMainpage/NeoMainpageCTEtwo/NeoMainpageCTEtwo";
import { NeoMainpageServices } from "../../components/NeoMainpage/NeoMainpageServices/NeoMainpageServices";

export default function neoMainpage(){
    return(
        <>
        <Navbar
          productMount={{
            navMount: true,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
          />

          <NeoMainpageBanner/>
          <NeoMainpageCTE/>
          <NeoMainpageFeature/>
          <NeoMainpageCTEtwo/>
          <NeoMainpageServices/>

      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <TalentProfiles/>
      <LifeBottomFunnel/>
      <SalesFooter/>
        
        </>
    )}

