import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import CustomerServicesBanner from '../../components/CustomerServices/CustomerServicesBanner/CustomerServicesBanner'
import CustomerServicesSectionTwo from '../../components/CustomerServices/CustomerServicesSectionTwo/CustomerServicesSectionTwo'
import CustomerServicesSectionThree from '../../components/CustomerServices/CustomerServiceSectionThree/CustomerServiceSectionThree'
import CustomerServicesSectionOne from '../../components/CustomerServices/CustomerServicesSectionOne/CustomerServicesSectionOne'
import CustomerServicesScalable from '../../components/CustomerServices/CustomerServicesScalable/CustomerServicesScalable'

export default function CustomerServices() {
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
        <CustomerServicesBanner/>
        <CustomerServicesScalable/>
        <CustomerServicesSectionOne/>
        <CustomerServicesSectionTwo/>
        <CustomerServicesSectionThree/>
        <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
        </div>
        
   
  )
}
