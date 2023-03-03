import React from 'react'
import { DealBusinesshealth } from '../../components/DealManagement/DealBusinesshealth'
import { DealManagementBanner } from '../../components/DealManagement/DealManagementBanner'
import { DealManagementHandle } from '../../components/DealManagement/DealManagementHandle'
import { DealManagementLowerbanner } from '../../components/DealManagement/DealManagementLowerbanner'
import { DealManagementperformance } from '../../components/DealManagement/DealManagementperformance'
import { DealManagementTrack } from '../../components/DealManagement/DealManagementTrack'
import { DealManagementVisiability } from '../../components/DealManagement/DealManagementVisiability'
import { PipelineManagement } from '../../components/DealManagement/PipelineManagement'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

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
    <DealManagementBanner />
    <PipelineManagement />
    <DealBusinesshealth />
    <DealManagementHandle />
    <DealManagementperformance />
    <DealManagementTrack />
    <DealManagementVisiability />
    <DealManagementLowerbanner />

    <TrustedBy />
    <Testimonial />
    <ReadyStarted />
    <LifeBottomFunnel />
    <ProductsFooter />

    </div>
  )
}
