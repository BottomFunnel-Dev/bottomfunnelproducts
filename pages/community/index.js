import React from "react";
import CommunityBanner from "../../components/Community/CommunityBanner/CommunityBanner";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import CommunityContentCategories from "../../components/Community/CommunityContentCategories/CommunityContentCategories";
import CommunityUserNetwork from "../../components/Community/CommunityUserNetwork/CommunityUserNetwork";
import CommunityHelp from "../../components/Community/CommunityHelp/CommunityHelp";
import CommunityConversation from "../../components/Community/CommunityConversation/CommunityConversation";
import { CommunityConnections } from "../../components/Community/CommunityConnections/CommunityConnections";


export default function Community() {
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
     
      <CommunityBanner/>
      <CommunityConnections/>
      <CommunityContentCategories/>
      <CommunityConversation/>
      <CommunityUserNetwork/>
      <CommunityHelp/>
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  );
}
