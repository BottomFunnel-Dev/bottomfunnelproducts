import React from "react";
import { DeveloperPortalCases } from "../../components/DevelopersPortal/DeveloperPortalCases/DeveloperPortalCases";
import { DeveloperPortalCommunity } from "../../components/DevelopersPortal/DeveloperPortalCommunity/DeveloperPortalCommunity";
import { DeveloperPortalDiscover } from "../../components/DevelopersPortal/DeveloperPortalDiscover/DeveloperPortalDiscover";
import { DeveloperPortalGetStarted } from "../../components/DevelopersPortal/DeveloperPortalGetStarted/DeveloperPortalGetStarted";
import { DeveloperPortalRegister } from "../../components/DevelopersPortal/DeveloperPortalRegister/DeveloperPortalRegister";
import { DeveloperResource } from "../../components/DevelopersPortal/DeveloperResource/DeveloperResource";
import { DevelopersPortalBanner } from "../../components/DevelopersPortal/DevelopersPortalBanner/DevelopersPortalBanner";
import { DevelopersPortalGrow } from "../../components/DevelopersPortal/DevelopersPortalGrow/DevelopersPortalGrow";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";


export default function DevelopersPortal() {
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
  
     <DevelopersPortalBanner/>
     <DeveloperPortalGetStarted/>
     <DeveloperResource/>
     <DevelopersPortalGrow/>
     <DeveloperPortalCommunity/>
     <DeveloperPortalDiscover/>
     <DeveloperPortalCases/>
     <DeveloperPortalRegister/>
     
      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
