import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import NgoBenefits from "../../components/NgoNonProfits/NgoBenefits/NgoBenefits";
import NgoNonProfitsBanner from "../../components/NgoNonProfits/NgoNonProfitsBanner/NgoNonProfitsBanner";
import NgoWhyUs from "../../components/NgoNonProfits/NgoWhyUs/NgoWhyUs";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";


export default function NgoandNonProfits() {
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
      
      <NgoNonProfitsBanner/>
      <NgoWhyUs/>
      <NgoBenefits/>
      
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  );
}
