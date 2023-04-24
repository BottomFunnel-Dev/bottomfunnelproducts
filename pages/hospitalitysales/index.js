import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { CustomerEngage } from '../../components/HospitalitySales/CustomerEngage/CustomerEngage'
import { Experience } from '../../components/HospitalitySales/Experience/Experience'
import { HospitalitySalesBanner } from '../../components/HospitalitySales/HospitalitySalesBanner/HospitalitySalesBanner'
import { Worldwide } from '../../components/HospitalitySales/Worldwide/Worldwide'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'

export default function hospitalitysales() {
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
        <HospitalitySalesBanner/>
        <CustomerEngage/>
        <Experience/>
        <Worldwide/>

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
