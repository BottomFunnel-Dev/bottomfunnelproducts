import React, { useState, useEffect } from "react";
import HeadSeo from "../../../../components/HeadSeo/HeadSeo";
import { useRouter } from "next/router";
import { MetaData } from "../../../../Data/MeatdataData";

import EnterpriseBFChatBanner from "../../../../components/EnterpriseBFChat/EnterpriseBFChatBanner/EnterpriseBFChatBanner";
import EnterpriseBFChatData from "../../../../components/EnterpriseBFChat/EnterpriseBFChatData/EnterpriseBFChatData";
import EnterpriseBFChatNeed from "../../../../components/EnterpriseBFChat/EnterpriseBFChatNeed/EnterpriseBFChatNeed";
import EnterpriseBFChatScale from "../../../../components/EnterpriseBFChat/EnterpriseBFChatScale/EnterpriseBFChatScale";
import EnterpriseBFChatService from "../../../../components/EnterpriseBFChat/EnterpriseBFChatService/EnterpriseBFChatService";
import EnterpriseBFChatTools from "../../../../components/EnterpriseBFChat/EnterpriseBFChatTools/EnterpriseBFChatTools";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProdNavbar } from "../../../../components/ProdNavbar";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import { ChatFooter } from "../../../../components/ChatFooter/ChatFooter";

const productData = {
  title: "Bottom Funnel Chat",
  logo: "https://d3op2l77j7wnti.cloudfront.net/Images/navbar/product/Chat.png",
  width: "65%",
  list1: {
    title: "Features",
    more: {
      title: "View more features",
      path: "/bottomfunnelchat/allFeatures",
    },
    position: { left: "35%" },
    products: [
      {
        dropContent: "Messaging Channels",
        path: "/bottomfunnelchat/messagingchannel",
      },
      {
        dropContent: "Chatbots",
        path: "/bottomfunnelchat/chatbots",
      },
      {
        dropContent: "Team Inbox",
        path: "/team-inbox",
      },
      {
        dropContent: "Journeys",
        path: "/bottomfunnelchat/journeys",
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
          {
            title: "Smart Conversations",
            path: "/bottomfunnelchat/solutions/smart-conversations",
          },
          {
            title: "Zero Contact Resolutions",
            path: "/bottomfunnelchat/solutions/contactresolution",
          },
          {
            title: "Provide convenient customer service",
            path: "/bottomfunnelchat/provide-convenient-customer-service",
          },
          {
            title: "Move from costly channels",
            path: "/bottomfunnelchat/move-from-costly-channel",
          },
        ],
      },
      {
        dropContent: "By Use Size",
        list: [
          {
            title: "Enterprise",
            path: "/bottomfunnelchat/solutions/enterprise",
          },
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

export default function SmartConversation() {
  const [pageMeta, setPageMeta] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const data = MetaData.filter((item) => item.route === router.pathname);
    setPageMeta(data);
  }, [MetaData]);

  return (
    <div>
      <HeadSeo
        title={pageMeta[0]?.title}
        description={pageMeta[0]?.description}
        cannonicalpost={pageMeta[0]?.cannonicalpost}
      />

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

      <EnterpriseBFChatBanner />
      <EnterpriseBFChatService />
      <EnterpriseBFChatScale />
      <EnterpriseBFChatNeed />
      <EnterpriseBFChatTools />
      <EnterpriseBFChatData />

       
      <TrustedBy />
      <ReadyStarted />
      <LifeBottomFunnel />
      <ChatFooter />
    </div>
  );
}
