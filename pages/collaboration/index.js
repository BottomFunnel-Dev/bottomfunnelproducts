import React from 'react'
import { Colaborationbuilding } from '../../components/Collaboration/Colaborationbuilding'
import { Colaborationexperience } from '../../components/Collaboration/Colaborationexperience'
import { Collaborationbanner } from '../../components/Collaboration/Collaborationbanner'
import { Collaborationdata } from '../../components/Collaboration/Collaborationdata'
import { Collaborationlowerbanner } from '../../components/Collaboration/Collaborationlowerbanner'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function collaboration  ()  {
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
    <Collaborationbanner />
    <Colaborationbuilding />
    <Colaborationexperience />
    <Collaborationdata />
<Collaborationlowerbanner />
   <TrustedBy />
 <Testimonial />
<ReadyStarted />
 <LifeBottomFunnel />
 <ProductsFooter />
    </div>
  )
}
