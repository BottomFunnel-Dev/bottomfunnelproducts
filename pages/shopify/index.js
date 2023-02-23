import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Shopifybanner } from '../../components/Shopify/Shopifybanner/Shopifybanner'
import { Shopifyframes } from '../../components/Shopify/ShopifyFrames/Shopifyframes'
import { ShopifyIntigration } from '../../components/Shopify/ShopifyIntigration/ShopifyIntigration'
import { Shopifylowerbanner } from '../../components/Shopify/Shopifylowerbanner/Shopifylowerbanner'
import OndemandSection from '../../components/CommonComponents/OnDemandSection/OndemandSection'
import PlanProject from '../../components/CommonComponents/PlanProject/PlanProject'
import { SeoblogSection } from '../../components/CommonComponents/SeoBlogs/Seoblogs'
import Revamping from '../../components/revamping/Revamping'
import { TextDropdown } from '../../components/CommonComponents/faqSection/Faqs'
import ContectForm from '../../components/CommonComponents/ContectForm/ContectForm'
import MainFooter from '../../components/CommonComponents/FooterSection/MainFooter'
import StoriesSection from '../../components/CommonComponents/StoriesSection/StoriesSection'



export default function Shopify  () {
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
    <Shopifybanner />
    <ShopifyIntigration />
    <Shopifyframes />
    <Shopifylowerbanner />

    <StoriesSection />
    <OndemandSection />
    {/* <PortFolio />  */}
    <PlanProject />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
    <MainFooter />
    </div>
  )
}
