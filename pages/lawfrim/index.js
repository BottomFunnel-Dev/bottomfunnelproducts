import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { LawFrimBanner } from '../../components/LawFrim/LawFrimBanner/LawFrimBanner'
import { LawFrimScreens } from '../../components/LawFrim/LawFrimScreens/LawFrimScreens'
import { Leadingcrm } from '../../components/LawFrim/Leadingcrm/Leadingcrm'
import { WhatMore } from '../../components/LawFrim/WhatMore/WhatMore'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function lawfrim() {
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
        <SalesNavbar  navproductredux={{
            color: "black",
            logo: false,
          }}/> 
        <LawFrimBanner/>
        <Leadingcrm/>
        <LawFrimScreens/>
        <WhatMore/>

        <Trial/>
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
        
    </div>
    </>
  )
}
