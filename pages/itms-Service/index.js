import React from 'react'
import { Advantage } from '../../components/ITSMService/Advantage/Advantage'
import { ITSMServiceBanner } from '../../components/ITSMService/ITSMServiceBanner/ITSMServiceBanner'
import { ITSMServicesScreens } from '../../components/ITSMService/ITSMServicesScreens/ITSMServicesScreens'
import Navbar from '../../components/Navbar/Navbar'
import { ServiceNavbar } from '../../components/Navbar/ServiceNavbar/ServiceNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { DeskFooter } from '../../components/DeskFooter/DeskFooter'

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
        <ITSMServiceBanner/>
        <ITSMServicesScreens/>
        <Advantage/>


        
        <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <DeskFooter/>
      {/* <ProductsFooter/> */}
    </div>
    </>
  )
}
