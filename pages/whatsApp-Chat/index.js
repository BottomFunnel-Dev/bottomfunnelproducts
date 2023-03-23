import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ProdNavbar } from '../../components/ProdNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { AccessingWhatsapp } from '../../components/WhatsappChat/AccessingWhatsapp/AccessingWhatsapp'
import { ConnectWithCustomer } from '../../components/WhatsappChat/ConnectWithCustomer/ConnectWithCustomer'
import { CustomerWhatsappService } from '../../components/WhatsappChat/CustomerWhatsappService/CustomerWhatsappService'
import { DoMore } from '../../components/WhatsappChat/DoMore/DoMore'
import { WhatsappChatBanner } from '../../components/WhatsappChat/WhatsappChatBanner/WhatsappChatBanner'



const productData = {
  title: "Bottom Funnel Chat",
  logo: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/navbar/product/Chat.png",
  width: "65%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/" },
    position: { left: "35%" },
    products: [
      {
        dropContent: "Messaging Channels",
        path: "/messagingchannel",
      },
      {
        dropContent: "Chatbots",
        path: "/",
      },
      {
        dropContent: "Team Inbox",
        path: "/team-inbox",
      },
      {
        dropContent: "Journeys",
        path: "/",
      },
    ],
  },
  list2: {
    title: "Integrations",
    more: { title: "View more integrations", path: "/" },
    position: { left: "75%" },
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
        path: "/",
      },
      {
        dropContent: "Apple Business Chat",
        path: "/",
      },
      {
        dropContent: "Facebook Messenger",
        path: "/",
      },
      {
        dropContent: "LINE",
        path: "/",
      },
      {
        dropContent: "SMS",
        path: "/",
      },
    ],
  },
  list3: {
    title: "Solutions",
    products: [
      {
        dropContent: "By Use Size",
        list: [
          { title: "Smart Conversations", path: "/" },
          { title: "Zero Contact Resolutions", path: "/" },
          { title: "Provide convenient customer service", path: "/" },
          { title: "Move from costly channels", path: "/" },
        ],
      },
      {
        dropContent: "By Use Size",
        list: [
          { title: "Enterprise", path: "/" },
          { title: "SMB", path: "/" },
        ],
      },
    ],
  },
  list4: {
    title: "Resources",
    more: { title: "View more resources", path: "/" },
    position: { right: "20%" },
    products: [
      {
        dropContent: "Holiday Support",
        path: "/",
      },
      {
        dropContent: "Case Studies",
        path: "/",
      },
      {
        dropContent: "Customer Spotlight",
        path: "/",
      },
      {
        dropContent: "Ebooks",
        path: "/",
      },
      {
        dropContent: "Blogs",
        path: "/",
      },
      {
        dropContent: "Product Tours",
        path: "/",
      },
      {
        dropContent: "Academy",
        path: "/",
      },
      {
        dropContent: "What's new",
        path: "/",
      },
    ],
  },
  pricing: "",
};


export default function whatsAppChat  ()  {
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
        <WhatsappChatBanner/>
        <AccessingWhatsapp/>
        <CustomerWhatsappService/>
        <DoMore/>
        <ConnectWithCustomer/>

        <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  )
}