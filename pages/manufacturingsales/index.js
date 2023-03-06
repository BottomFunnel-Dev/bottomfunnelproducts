import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { Business } from '../../components/ManufacturingSales/Business/Business'
import { ManufacturingCrm } from '../../components/ManufacturingSales/ManufacturingCrm/ManufacturingCrm'
import { ManufacturingFeatures } from '../../components/ManufacturingSales/ManufacturingFeatures/ManufacturingFeatures'
import { ManufacturingSalesBanner } from '../../components/ManufacturingSales/ManufacturingSalesBanner/ManufacturingSalesBanner'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function manufacturingsales() {
    return (
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
            }}/> 
<ManufacturingSalesBanner/>
<ManufacturingCrm/>
<ManufacturingFeatures/>
<Business/>

<Trial/>
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>



    </div>
  )
}
