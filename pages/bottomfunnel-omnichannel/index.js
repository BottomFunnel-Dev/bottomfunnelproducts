import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BottomFunnelOmnichannelBanner } from '../../components/BottomFunnelOmnichannel/BottomFunnelOmnichannelBanner/BottomFunnelOmnichannelBanner'
import { OmnichannelSolution } from '../../components/BottomFunnelOmnichannel/OmnichannelSolution/OmnichannelSolution'
import { OmniChannelSlids } from '../../components/BottomFunnelOmnichannel/OmniChannelSlids/OmniChannelSlids'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import {DeskFooter} from "../../components/DeskFooter/DeskFooter";
import { Omnichannel } from '../../components/Navbar/Omnichannel/Omnichannel'

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
    <Omnichannel
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
     
      <DeskFooter/>
    
      
    </div>
  )
}
