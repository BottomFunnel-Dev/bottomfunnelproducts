import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'
import { ProdNavbar } from '../../components/ProdNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { Whatasappcampaigns } from '../../components/Whatsappnew/Whatasappcampaigns'
import { Whatsappbanner } from '../../components/Whatsappnew/Whatsappbanner'
import { Whatsappbots } from '../../components/Whatsappnew/Whatsappbots'
import { Whatsappcustomerexp } from '../../components/Whatsappnew/Whatsappcustomerexp'



const productData = {
  title: "Bottom Funnel Marketer",
  logo: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/navbar/product/Market.png",
  width: "45%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/404" },
    position: { right: "35%" },
    products: [
      {
        dropContent: "Multichannel Engagement",
        path: "/",
      },
      {
        dropContent: "Email & SMS",
        path: "/",
      },
      {
        dropContent: "WhatsApp",
        path: "/whatsapp",
      },
      {
        dropContent: "Journeys",
        path: "/journey",
      },
      {
        dropContent: "Landing Pages",
        path: "/landing-pages",
      },
      {
        dropContent: "Shopify Integration",
        path: "/",
      },
    ],
  },
  list4: {
    title: "Resources",
    more: false,
    position: { right: "20%" },
    products: [
      {
        dropContent: "Product Tours",
        path: "/product-tour",
      },
      {
        dropContent: "Case Studies",
        path: "/",
      },
      {
        dropContent: "What's new",
        path: "/whatsnew",
      },
      {
        dropContent: "Guide to Shopify",
        path: "/guideToShopFy",
      },
    ],
  },
  pricing: "",
};


export default function whatsapp  ()  {
  return (
  
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

    <ProdNavbar data={productData} />
    <Whatsappbanner />
    <Whatsappbots />
    <Whatsappcustomerexp />
    <Whatasappcampaigns />

    <TrustedBy />
    <Testimonial />
    <ReadyStarted />
    <LifeBottomFunnel />
    <ProductsFooter />

    </div>
  )
}
