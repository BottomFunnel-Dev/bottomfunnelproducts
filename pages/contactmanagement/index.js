import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { ContactManagementBanner } from '../../components/ContactManagementofSales/ContactManagementBanner/ContactManagementBanner'
import { Productivity } from '../../components/ContactManagementofSales/Productivity/Productivity'
import { ReletionshipBuild } from '../../components/ContactManagementofSales/ReletionshipBuild/ReletionshipBuild'
import { TeamEfficiency } from '../../components/ContactManagementofSales/TeamEfficiency/TeamEfficiency'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'


export default function contactmanagement() {
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
       <ContactManagementBanner/>
      <ReletionshipBuild/>
       <Productivity/>
       <TeamEfficiency/>
       <TrustedBy/>
        <Trial/>
        <Testimonial />

      <LifeBottomFunnel />
      <ProductsFooter />
      
    
    </div>
  )
}
