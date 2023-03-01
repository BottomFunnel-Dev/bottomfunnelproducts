import React from "react";
import { BottomfunnelchatBanner } from "../../components/BottomFunnelChat/BottomfunnelchatBanner/BottomfunnelchatBanner";
import { ConversationalEngagement } from "../../components/BottomFunnelChat/ConversationalEngagement/ConversationalEngagement";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

const productData = {
  title: "Bottom Funnel Chat",
  logo: "/Images/navbar/product/Chat.png",
  width: "65%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/404" },
    position: { left: "30%" },
    products: [
      {
        dropContent: "Messaging Channels",
        path: "/404",
      },
      {
        dropContent: "Chatbots",
        path: "/404",
      },
      {
        dropContent: "Team Inbox",
        path: "/404",
      },
      {
        dropContent: "Journeys",
        path: "/404",
      },
    ],
  },
  list2: {
    title: "Integrations",
    more: { title: "View more integrations", path: "/404" },
    products: [
      {
        dropContent: "Instagram DM",
        path: "/404",
      },
      {
        dropContent: "Google Business Messages",
        path: "/404",
      },
      {
        dropContent: "WhatsApp",
        path: "/404",
      },
      {
        dropContent: "Apple Business Chat",
        path: "/404",
      },
      {
        dropContent: "Facebook Messenger",
        path: "/404",
      },
      {
        dropContent: "LINE",
        path: "/404",
      },
      {
        dropContent: "SMS",
        path: "/404",
      },
    ],
  },
  list3: {
    title: "Solutions",
    products: [
      {
        dropContent: "By Use Size",
        list: [
          { title: "Smart Conversations", path: "/404" },
          { title: "Zero Contact Resolutions", path: "/404" },
          { title: "Provide convenient customer service", path: "/404" },
          { title: "Move from costly channels", path: "/404" },
        ],
      },
      {
        dropContent: "By Use Size",
        list: [
          { title: "Enterprise", path: "/404" },
          { title: "SMB", path: "/404" },
        ],
      },
    ],
  },
  list4: {
    title: "Resources",
    more: { title: "View more resources", path: "/404" },
    position: { right: "20%" },
    products: [
      {
        dropContent: "Holiday Support",
        path: "/404",
      },
      {
        dropContent: "Case Studies",
        path: "/404",
      },
      {
        dropContent: "Customer Spotlight",
        path: "/404",
      },
      {
        dropContent: "Ebooks",
        path: "/404",
      },
      {
        dropContent: "Blogs",
        path: "/404",
      },
      {
        dropContent: "Product Tours",
        path: "/404",
      },
      {
        dropContent: "Academy",
        path: "/404",
      },
      {
        dropContent: "What's new",
        path: "/404",
      },
    ],
  },
  pricing: "",
};

export default function BottomFunnelChat() {
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
      <ProdNavbar data={productData} />
      <BottomfunnelchatBanner />
      <TrustedBy />
      <ConversationalEngagement />
      {/* <DeskStarted /> */}

    
      <Testimonial />
      <TrustedBy />
     
      
      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />



      
        
        
    </div>
  );
}
