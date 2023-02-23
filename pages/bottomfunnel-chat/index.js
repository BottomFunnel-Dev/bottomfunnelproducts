import React from "react";
import { BottomfunnelchatBanner } from "../../components/BottomFunnelChat/BottomfunnelchatBanner/BottomfunnelchatBanner";
import { ConversationalEngagement } from "../../components/BottomFunnelChat/ConversationalEngagement/ConversationalEngagement";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function BottomFunnelChat() {
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
      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <BottomfunnelchatBanner />
      <TrustedBy />
      <ConversationalEngagement />
      <DeskStarted />

      <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      {/* <GetStarted/> */}
      <ReadyStarted />
      <ProductsFooter />
    </div>
  );
}
