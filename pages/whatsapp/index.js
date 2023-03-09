import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { Whatasappcampaigns } from '../../components/Whatsappnew/Whatasappcampaigns'
import { Whatsappbanner } from '../../components/Whatsappnew/Whatsappbanner'
import { Whatsappbots } from '../../components/Whatsappnew/Whatsappbots'
import { Whatsappcustomerexp } from '../../components/Whatsappnew/Whatsappcustomerexp'

export default function whatsapp  ()  {
  return (
    <div>
    <Navbar
    productMount={{
      navMount: false,
    }}
    navredux={{
      color: "black",
      logo: false,
    }}
  />

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
