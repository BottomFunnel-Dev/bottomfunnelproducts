import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import StoriesSection from '../../components/CommonComponents/StoriesSection/StoriesSection'
import { ContactManagementBanner } from '../../components/ContactManagementofSales/ContactManagementBanner/ContactManagementBanner'
import { Productivity } from '../../components/ContactManagementofSales/Productivity/Productivity'
import { TeamEfficiency } from '../../components/ContactManagementofSales/TeamEfficiency/TeamEfficiency'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
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
       {/* <relationshipBuild/> */}
       <Productivity/>
       <TeamEfficiency/>
       <Trial/>
       <StoriesSection />
      <TrustedBy />
      <LifeBottomFunnel />
      {/* <GetStarted/> */}
      <ReadyStarted />
      <ProductsFooter />
    
    </div>
  )
}
