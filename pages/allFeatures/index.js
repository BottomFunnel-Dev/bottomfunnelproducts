import React from "react";
import { AllFeaturesBanner } from "../../components/AllFeatures/AllFeaturesBanner/AllFeaturesBanner";
import { AllFeaturesDrive } from "../../components/AllFeatures/AllFeaturesDrive/AllFeaturesDrive";
import { AllFeatureSignUp } from "../../components/AllFeatures/AllFeatureSignUp/AllFeatureSignUp";
import { AllFeaturesReach } from "../../components/AllFeatures/AllFeaturesReach/AllFeaturesReach";
import { AllFeaturesTemplate } from "../../components/AllFeatures/AllFeaturesTemplate/AllFeaturesTemplate";
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
        <AllFeaturesReach/>
        <AllFeaturesTemplate/>
        <AllFeaturesReach/>
        <AllFeaturesTemplate/>
        <AllFeatureSignUp/>
      </div>
    </>
  );
}
