import React from "react";
import CommunityBanner from "../../components/Community/CommunityBanner/CommunityBanner";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";


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
      
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  );
}
