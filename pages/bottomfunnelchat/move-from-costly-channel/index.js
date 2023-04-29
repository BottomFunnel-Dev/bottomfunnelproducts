import React from 'react'
import { EnterprizePlatform } from '../../../components/ContactResolution/EnterprizePlatform/EnterprizePlatform'
import { CostlyChannelBanner } from '../../../components/MoveFromCostlyChannel/CostlyChannelBanner/CostlyChannelBanner'
import { DeliverStellar } from '../../../components/MoveFromCostlyChannel/DeliverStellar/DeliverStellar'
import { Limitation } from '../../../components/MoveFromCostlyChannel/Limitation/Limitation'
import { ScaleEfficiently } from '../../../components/MoveFromCostlyChannel/ScaleEfficiently/ScaleEfficiently'
import { SupportChannel } from '../../../components/MoveFromCostlyChannel/SupportChannel/SupportChannel'
import Navbar from '../../../components/Navbar/Navbar'
import { ProdNavbar } from '../../../components/ProdNavbar'
import LifeBottomFunnel from '../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../../components/TrustedByProductsPage/TrustedBy'
import { ChatFooter } from '../../../components/ChatFooter/ChatFooter'



const productData = {
  title: "Bottom Funnel Chat",
  logo: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/navbar/product/Chat.png",
  width: "65%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/bottomfunnelchat/allFeatures" },
    position: { left: "35%" },
    products: [
      {
        dropContent: "Messaging Channels",
        path: "/bottomfunnel-chat/messaging-channel",
      },
      {
        dropContent: "Chatbots",
        path: "/bottomfunnel-chat/chat-bots",
      },
      {
        dropContent: "Team Inbox",
        path: "/bottomfunnel-chat/team-inbox",
      },
      {
        dropContent: "Journeys",
        path: "/bottomfunnel-chat/journeys",
      },
    ],
  },
  list2: {
    title: "Integrations",
    more: { title: "View more integrations", path: "/" },
    position: { left: "95%" },
    products: [
      {
        dropContent: "Instagram DM",
        path: "/instagram-dm",
      },
      {
        dropContent: "Google Business Messages",
        path: "/google-business",
      },
      {
        dropContent: "WhatsApp",
        path: "/bottomfunnelchat/whatsapp-chat",
      },
      {
        dropContent: "Apple Business Chat",
        path: "/bottomfunnelchat/apple-business-chat",
      },
      {
        dropContent: "Facebook Messenger",
        path: "/bottomfunnelchat/facebook",
      },
      {
        dropContent: "LINE",
        path: "/bottomfunnelchat/linechat",
      },
      {
        dropContent: "SMS",
        path: "/bottomfunnelchat/sms",
      },
    ],
  },
  list3: {
    title: "Solutions",
    products: [
      {
        dropContent: "By Use Size",
        list: [
          { title: "Smart Conversations", path: "/bottomfunnelchat/solutions/smart-conversations" },
          { title: "Zero Contact Resolutions", path: "/bottomfunnelchat/solutions/contactresolution" },
          { title: "Provide convenient customer service", path: "/bottomfunnelchat/provide-convenient-customer-service" },
          { title: "Move from costly channels", path: "/bottomfunnelchat/move-from-costly-channel" },
        ],
      },
      {
        dropContent: "By Use Size",
        list: [
          { title: "Enterprise", path: "/bottomfunnelchat/solutions/enterprise" },
          { title: "SMB", path: "/bottomfunnelchat/smb" },
        ],
      },
    ],
  },
  // list4: {
  //   title: "Resources",
  //   more: { title: "View more resources", path: "/" },
  //   position: { right: "20%" },
  //   products: [
  //     {
  //       dropContent: "Holiday Support",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "Case Studies",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "Customer Spotlight",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "Ebooks",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "Blogs",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "Product Tours",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "Academy",
  //       path: "/",
  //     },
  //     {
  //       dropContent: "What's new",
  //       path: "/",
  //     },
  //   ],
  // },
  pricing: "",
};

export default function movefromcostlychannel() {
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
        <CostlyChannelBanner/>
        <SupportChannel/>
        <Limitation/>
        <ScaleEfficiently/>
        <DeliverStellar/>
        <EnterprizePlatform/>
       
      


        <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ChatFooter/>

    </div>
  )
}
