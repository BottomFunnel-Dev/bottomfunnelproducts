import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { Solution } from '../../components/SalesMobileofFeatures/Solution/Solution'
import { SalesReportsBanner } from '../../components/SalesReports/SalesReportsBanner/SalesReportsBanner'
import { SalesReportsScreens } from '../../components/SalesReports/SalesReportsScreens/SalesReportsScreens'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function salesreports() {
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
        <SalesReportsBanner/>
        <SalesReportsScreens/>
        <Solution/>

       
        <Trial/>
        <Testimonial />
        <TrustedBy />
        <ReadyStarted />
      <LifeBottomFunnel />
      <ProductsFooter />
     

    </div>
    </>
  )
}
