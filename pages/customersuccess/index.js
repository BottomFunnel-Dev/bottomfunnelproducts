import React from 'react'
import { ActiveGoals } from '../../components/CustomerSuccessHome/ActiveGoals/ActiveGoals'
import { CustomerSuccessBanner } from '../../components/CustomerSuccessHome/CustomerSuccessBanner/CustomerSuccessBanner'
import { CustomerValue } from '../../components/CustomerSuccessHome/CustomerValue/CustomerValue'
import { RequestDemo } from '../../components/CustomerSuccessHome/RequestDemo/RequestDemo'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import { TalentProfiles } from '../../components/ProductsNewPage/TalentProfiles/TalentProfiles'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function CustomerSuccessHome() {
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
    <ProductsNavbar
      navproductredux={{
        color: "black",
        logo: false,
      }}
    />


       <CustomerSuccessBanner/>
       <ActiveGoals/>
       <CustomerValue/>
       <RequestDemo/>

       <Testimonial />
       <TrustedBy/>
     
      
      <ReadyStarted />
      {/* <TalentProfiles/> */}
      
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  )
}
