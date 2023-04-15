import React from 'react'
import BenchmarkBanner from '../../components/Customerengagement/BenchmarkBanner/BenchmarkBanner'
import Digital from '../../components/Customerengagement/Digital/Digital'
import CustomerEngagementPlatform from '../../components/Customerengagement/Platform/CustomerEngagementPlatform'
import CustomerEngagmentTrialBox from '../../components/Customerengagement/TrialBox/CustomerEngagmentTrialBox'
import Navbar from '../../components/Navbar/Navbar'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import { TalentProfiles } from '../../components/ProductsNewPage/TalentProfiles/TalentProfiles'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'


const CustomerEngagement= () => {
  return (
    <div>
        <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <BenchmarkBanner/>
      <CustomerEngagementPlatform/>
      <Digital/>
      <CustomerEngagmentTrialBox/>

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  )
}

export default CustomerEngagement
