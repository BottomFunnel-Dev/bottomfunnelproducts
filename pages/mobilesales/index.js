import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'

import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'

import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { SalesActivities } from '../../components/SalesMobileofFeatures/SalesActivities/SalesActivities'
import { SalesMobileofFeaturesbanner } from '../../components/SalesMobileofFeatures/SalesMobileofFeaturesbanner/SalesMobileofFeaturesbanner'
import { Solution } from '../../components/SalesMobileofFeatures/Solution/Solution'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function mobilesales() {
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
        <SalesMobileofFeaturesbanner/>
        <SalesActivities/>
        <Solution/>

        <TrustedBy />
        <Trial/>
        <Testimonial />

      <LifeBottomFunnel />
      <ProductsFooter />
     
    </div>
    </>
  )
}
