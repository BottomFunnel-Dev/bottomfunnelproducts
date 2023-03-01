import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { SocialMediaCampaignAwareness } from "../../components/SocialMediaCampaign/SocialMediaCampaignAwareness/SocialMediaCampaignAwareness";
import { SocialMediaCampaignBanner } from "../../components/SocialMediaCampaign/SocialMediaCampaignBanner/SocialMediaCampaignBanner";
import { SocialMediaCampaignSolution } from "../../components/SocialMediaCampaign/SocialMediaCampaignSolution/SocialMediaCampaignSolution";
import { SocialMediaConnected } from "../../components/SocialMediaCampaign/SocialMediaConnected/SocialMediaConnected";


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

        <SocialMediaCampaignBanner/>
        <SocialMediaCampaignSolution/>
        <SocialMediaCampaignAwareness/>
        <SocialMediaConnected/>
        
      </div>
    </>
  );
}
