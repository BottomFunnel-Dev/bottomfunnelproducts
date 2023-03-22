import React from 'react'
import { BetterService } from '../../components/BottomFunnelService/BetterService/BetterService'
import { BottomFunnelServiceBanner } from '../../components/BottomFunnelService/BottomFunnelServiceBanner/BottomFunnelServiceBanner'
import { PopularFeatures } from '../../components/BottomFunnelService/PopularFeatures/PopularFeatures'
import { ServiceTools } from '../../components/BottomFunnelService/ServiceTools/ServiceTools'
import { ServiceWalk } from '../../components/BottomFunnelService/ServiceWalk/ServiceWalk'
import { DeskStarted } from '../../components/funnelDeskCom/DeskStarted'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import { TalentProfiles } from '../../components/ProductsNewPage/TalentProfiles/TalentProfiles'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { ServiceFooter } from '../../components/ServiceFooter/ServiceFooter'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function bottomfunnelservice () {
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
    
       


      <BottomFunnelServiceBanner/>
      {/* <TrustedBy/> */}
      <BetterService/>
      <ServiceTools/>
      <PopularFeatures/>
      <ServiceWalk/>

{/* <DeskStarted/> */}

      <Testimonial />
      <TrustedBy/>
     
      
      <ReadyStarted />
      <TalentProfiles/>
      <LifeBottomFunnel />
      <ServiceFooter />


      
     </div>
     </>
  )
}
