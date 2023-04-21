import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { CRMedtech } from '../../components/EducationSales/CRMedtech/CRMedtech'
import { CRMSystem } from '../../components/EducationSales/CRMSystem/CRMSystem'
import { EdtechIndustries } from '../../components/EducationSales/EdtechIndustries/EdtechIndustries'
import { EducationSalesBanner } from '../../components/EducationSales/EducationSalesBanner/EducationSalesBanner'
import { Features } from '../../components/EducationSales/Features/Features'
import { Solution } from '../../components/EducationSales/Solution/Solution'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'

export default function  educationsales()  {
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
      

        
        <EducationSalesBanner/>
        <CRMedtech/>
        <CRMSystem/>
        <Features/>
        <Solution/>
        <EdtechIndustries/>


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
