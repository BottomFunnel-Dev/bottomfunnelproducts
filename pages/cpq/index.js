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
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

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


        <TrustedBy />
        <Trial/>
        <Testimonial />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
    </>
  )
}
