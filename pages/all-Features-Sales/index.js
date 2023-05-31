import React from "react";
import { AllFeaturesBanner } from "../../components/AllFeaturesofSales/AllFeaturesBanner/AllFeaturesBanner";
import { Automation } from "../../components/AllFeaturesofSales/Automation/Automation";
import { FavoriteApp } from "../../components/AllFeaturesofSales/FavoriteApp/FavoriteApp";
import { InformationCards } from "../../components/AllFeaturesofSales/InformationCards/InformationCards";
import { MakeSmarter } from "../../components/AllFeaturesofSales/MakeSmarter/MakeSmarter";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

export default function allFeaturesSales() {
  return (
    <>
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
        
        <SalesNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />
        
        <AllFeaturesBanner />
        <InformationCards />
        <FavoriteApp />
        <Automation />
        <MakeSmarter />

        <Testimonial />
        <TrustedBy />

        <ReadyStarted />
        {/* <TalentProfiles /> */}
        <LifeBottomFunnel />
        {/* added footer of sales in place of product footer */}
        <SalesFooter />
      </div>
    </>
  );
}
