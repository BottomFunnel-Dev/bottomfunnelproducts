import React from 'react'
import { DealBusinesshealth } from '../../components/DealManagement/DealBusinesshealth'
import { DealManagementBanner } from '../../components/DealManagement/DealManagementBanner'
import { DealManagementLowerbanner } from '../../components/DealManagement/DealManagementLowerbanner'
import { DealManagementVisiability } from '../../components/DealManagement/DealManagementVisiability'
import { PipelineManagement } from '../../components/DealManagement/PipelineManagement'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'

export default function  dealmanagement()  {
  return (
    
    <div>
    <Navbar
        productMount={{
          navMount: false,
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
    <DealManagementBanner />
    <PipelineManagement />
    <DealBusinesshealth />
    
    <DealManagementVisiability />
    <DealManagementLowerbanner />

    <TrustedBy />
    <Testimonial />
    <ReadyStarted />
    <LifeBottomFunnel />
     {/* added footer of sales in place of product footer */}
     <SalesFooter/>
    

    </div>
  )
}
