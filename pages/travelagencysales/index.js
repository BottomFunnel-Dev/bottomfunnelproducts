import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { CRMTravel } from '../../components/TravelAgencySales/CRMTravel/CRMTravel'
import { DoallThis } from '../../components/TravelAgencySales/DoallThis/DoallThis'
import { TravelAgencySalesBanner } from '../../components/TravelAgencySales/TravelAgencySalesBanner/TravelAgencySalesBanner'
import { TravelFeatures } from '../../components/TravelAgencySales/TravelFeatures/TravelFeatures'
import { TravelSystem } from '../../components/TravelAgencySales/TravelSystem/TravelSystem'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function  travelagencysales()  {
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
        <TravelAgencySalesBanner/>
        <CRMTravel/>
        <DoallThis/>
        <TravelFeatures/>
        <TravelSystem/>


        <Trial/>
        <Testimonial/>
        <TrustedBy/>
        <ReadyStarted />
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
    </>
  )
}
