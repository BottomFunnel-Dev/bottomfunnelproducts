import React from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../../../components/Navbar/ProductsNavbar/ProductsNavbar'
import LifeBottomFunnel from '../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../../../components/ProductsNewPage/Testimonial/Testimonial'
import { Travelandhospitalitybanner } from '../../../../components/Travel-and-hospitality/Travelandhospitalitybanner'
import { TravelHospitalitydashbord } from '../../../../components/Travel-and-hospitality/TravelHospitalitydashbord'
import TrustedBy from '../../../../components/TrustedByProductsPage/TrustedBy'

export default function travelhositality ()  {
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

  <ProductsNavbar
  navproductredux={{
    color: "black",
    logo: false,
  }}
/>
    <Travelandhospitalitybanner />
    <TravelHospitalitydashbord />
    <TrustedBy />
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <ProductsFooter />
    
    </div>
  )
}
