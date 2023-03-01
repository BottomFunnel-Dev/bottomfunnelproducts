import React from "react";
import { AllFeaturesBanner } from "../../components/AllFeatures/AllFeaturesBanner/AllFeaturesBanner";
import { AllFeaturesDrive } from "../../components/AllFeatures/AllFeaturesDrive/AllFeaturesDrive";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";


export default function SocialMediaCampaign() {
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

        <AllFeaturesBanner/>
        <AllFeaturesDrive/>
        
      </div>
    </>
  );
}
