import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { ContactManagementBanner } from '../../components/ContactManagementofSales/ContactManagementBanner/ContactManagementBanner'
import { Productivity } from '../../components/ContactManagementofSales/Productivity/Productivity'
import { ReletionshipBuild } from '../../components/ContactManagementofSales/ReletionshipBuild/ReletionshipBuild'
import { TeamEfficiency } from '../../components/ContactManagementofSales/TeamEfficiency/TeamEfficiency'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'


export default function contactmanagement() {
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
     
       <ContactManagementBanner/>
      <ReletionshipBuild/>
       <Productivity/>
       <TeamEfficiency/>
       <TrustedBy/>
        <Trial/>
        <Testimonial />

      <LifeBottomFunnel />
     {/* added footer of sales in place of product footer */}
     <SalesFooter/>
    
    </div>
    </>
  )
}
