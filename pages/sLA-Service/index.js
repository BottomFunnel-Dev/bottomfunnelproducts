import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import Navbar from '../../components/Navbar/Navbar'
import { ServiceNavbar } from '../../components/Navbar/ServiceNavbar/ServiceNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { SLAScreens } from '../../components/SLAService/SLAScreens/SLAScreens'
import { SLAServiceBanner } from '../../components/SLAService/SLAServiceBanner/SLAServiceBanner'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function itmsService() {
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
    
        <ServiceNavbar
          navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <SLAServiceBanner/>
      <SLAScreens/>
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
