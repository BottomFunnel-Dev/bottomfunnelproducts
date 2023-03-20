import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import VideosBanner from "../../components/Videos/VideosBanner/VideosBanner";
import VideosExplore from "../../components/Videos/VideosExplore/VideosExplore";
import VideoSpotlight from "../../components/Videos/VideoSpotlight/VideoSpotlight";


export default function Blog() {
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
     
      <VideosBanner/>
      <VideoSpotlight/>
      <VideosExplore/>
      
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  );
}
