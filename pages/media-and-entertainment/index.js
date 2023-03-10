import React from "react";
import { MediaAndEntertainmentBanner } from "../../components/MediaAndEntertainment/MediaAndEntertainmentBanner/MediaAndEntertainmentBanner";
import { MediaAndEntertainmentDemo } from "../../components/MediaAndEntertainment/MediaAndEntertainmentDemo/MediaAndEntertainmentDemo";
import { MediaAndEntertainmentInfo } from "../../components/MediaAndEntertainment/MediaAndEntertainmentInfo/MediaAndEntertainmentInfo";
import { MediaAndEntertainmentSpotLight } from "../../components/MediaAndEntertainment/MediaAndEntertainmentSpotLight/MediaAndEntertainmentSpotLight";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
export default function mediaAndEntertainment() {
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
     <MediaAndEntertainmentBanner />
      <MediaAndEntertainmentInfo />
      <MediaAndEntertainmentSpotLight />
      <MediaAndEntertainmentDemo />
      <ProductsFooter/>
    </div>
  );
}