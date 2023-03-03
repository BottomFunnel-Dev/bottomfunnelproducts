import React from 'react'
import { Fieldservicemanagementbanner } from '../../../../components/FieldServiceManagement/Fieldservicemanagementbanner'
import { ServiceExperience } from '../../../../components/FieldServiceManagement/ServiceExperience'
import { Servicemanagementscreens } from '../../../../components/FieldServiceManagement/Servicemanagementscreens'
import { Stellerfieldservice } from '../../../../components/FieldServiceManagement/Stellerfieldservice'
import Navbar from '../../../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../../../components/TrustedByProductsPage/TrustedBy'

export default function FieldServiceManagement  ()  {
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
    <Fieldservicemanagementbanner />
    <ServiceExperience />
    <Servicemanagementscreens/>
    <Stellerfieldservice />
    

    <TrustedBy />
    <Testimonial />
    <ReadyStarted />
    <LifeBottomFunnel />
    <ProductsFooter />
    </div>
  )
}