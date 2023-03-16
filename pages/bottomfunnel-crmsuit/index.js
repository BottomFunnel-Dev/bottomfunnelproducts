import React from 'react'
import { BottomFunnelTeamBanner } from '../../components/BottomFunnelTeam/BottomFunnelTeamBanner/BottomFunnelTeamBanner'
import { BottomFunnelTeamCards } from '../../components/BottomFunnelTeam/BottomFunnelTeamCards/BottomFunnelTeamCards'
import { Implementation } from '../../components/BottomFunnelTeam/Implementation/Implementation'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function bottomfunnelCrmSuit() {
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
    {/* <ProductsNavbar
      navproductredux={{
        color: "black",
        logo: false,
      }}
    /> */}
       
<BottomFunnelTeamBanner/>
<BottomFunnelTeamCards/>
<Implementation/>


<Testimonial />
      <TrustedBy/>

      <ReadyStarted />
      {/* <TalentProfiles /> */}
      <LifeBottomFunnel />
      <ProductsFooter />

    </div>
  )
}
