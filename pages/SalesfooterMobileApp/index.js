import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";
import SalesfooterMobileAppFeatures from "../../components/SalesfooterMobileApp/SalesfooterMobileAppFeatures/SalesfooterMobileAppFeatures";
import { SalesfooterMobileAppEmpower } from "../../components/SalesfooterMobileApp/SalesfooterMobileAppEmpower/SalesfooterMobileAppEmpower";
import { SalesfooterMobileAppCTEtwo } from "../../components/SalesfooterMobileApp/SalesfooterMobileAppCTEtwo/SalesfooterMobileAppCTEtwo";

export default function SalesfooterMobileApp(){
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
        <SalesNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />
        <SalesfooterMobileAppFeatures/>
        <SalesfooterMobileAppEmpower/>
        <SalesfooterMobileAppCTEtwo/>

       




       <Testimonial/>
        <TrustedBy/>
      <ReadyStarted/>
      <TalentProfiles/>
      <LifeBottomFunnel/>
      <SalesFooter/>
        
        </>


       
    )
}