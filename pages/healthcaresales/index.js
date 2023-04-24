import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { HealthcareCrm } from '../../components/HealthcareSales/HealthcareCrm/HealthcareCrm'
import { Healthcarefeatures } from '../../components/HealthcareSales/Healthcarefeatures/Healthcarefeatures'
import { HealthcareIndustries } from '../../components/HealthcareSales/HealthcareIndustries/HealthcareIndustries'
import { HealthcareSalesBanner } from '../../components/HealthcareSales/HealthcareSalesBanner/HealthcareSalesBanner'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'

export default function healthcaresales() {
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
        <SalesNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
    
      />
     <HealthcareSalesBanner/>
     <HealthcareCrm/>
     <Healthcarefeatures/>
     <HealthcareIndustries/>

     <Trial/>
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted/>
      <LifeBottomFunnel/>
       {/* added footer of sales in place of product footer */}
     <SalesFooter/>
    </div>
    </>
  )
}
