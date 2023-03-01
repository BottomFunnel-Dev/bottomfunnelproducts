import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BottomFunnelOmnichannelBanner } from '../../components/BottomFunnelOmnichannel/BottomFunnelOmnichannelBanner/BottomFunnelOmnichannelBanner'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'
import { OmnichannelSolution } from '../../components/BottomFunnelOmnichannel/OmnichannelSolution/OmnichannelSolution'
import { OmniChannelSlids } from '../../components/BottomFunnelOmnichannel/OmniChannelSlids/OmniChannelSlids'
import StoriesSection from '../../components/CommonComponents/StoriesSection/StoriesSection'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { GetStarted } from '../../components/ProductsNewPage/GetStarted/GetStarted'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'

export default function BottomFunnelOmnichannel () {
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
    <ProductsNavbar
      navproductredux={{
        color: "black",
        logo: false,
      }}
    />
        
<BottomFunnelOmnichannelBanner/>
<OmnichannelSolution/>
{/* <TrustedBy/> */}
<OmniChannelSlids/>

{/* <StoriesSection/> */}
      
<Testimonial />
      <TrustedBy/>
      <ReadyStarted />
      <LifeBottomFunnel/>
      {/* <GetStarted/> */}
     
      <ProductsFooter/>
    
      
    </div>
  )
}
