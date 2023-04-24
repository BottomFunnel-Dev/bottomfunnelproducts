import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { CloudTelephonyLowerBanner } from '../../components/CloudTelephony/CloudTelephonyLowerBanner'
import { CPQBanner } from '../../components/CPQ/CPQBanner/CPQBanner'
import { CpqScreens } from '../../components/CPQ/CpqScreens/CpqScreens'
import { SalesProcess } from '../../components/CPQ/SalesProcess/SalesProcess'
import { WhatCpq } from '../../components/CPQ/WhatCpq/WhatCpq'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'

export default function cpq() {
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



        <CPQBanner/>
        <WhatCpq/>
        <CpqScreens/>
        <SalesProcess/>
        <CloudTelephonyLowerBanner />

      
       
        <Trial/>
        <Testimonial />
        <TrustedBy />
        <ReadyStarted />
      <LifeBottomFunnel />
       {/* added footer of sales in place of product footer */}
     <SalesFooter/>
    
    </div>
    </>
  )
}
