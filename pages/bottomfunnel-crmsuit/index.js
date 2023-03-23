import React from "react";
import { BottomFunnelTeamBanner } from "../../components/BottomFunnelTeam/BottomFunnelTeamBanner/BottomFunnelTeamBanner";
import { BottomFunnelTeamCards } from "../../components/BottomFunnelTeam/BottomFunnelTeamCards/BottomFunnelTeamCards";
import { Implementation } from "../../components/BottomFunnelTeam/Implementation/Implementation";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";

export default function bottomfunnelCrmSuit() {
  return (
    <div>
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
      <BottomFunnelTeamBanner />
      <BottomFunnelTeamCards />
      <Implementation />

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      {/* <TalentProfiles /> */}
      <LifeBottomFunnel />
      <SalesFooter />
    </div>
  );
}
