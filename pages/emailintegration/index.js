import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { BoostProductivity } from '../../components/EmailIntegration/BoostProductivity/BoostProductivity'
import { EmailIntegrationBanner } from '../../components/EmailIntegration/EmailIntegrationBanner/EmailIntegrationBanner'
import { EmailIntegrationCards } from '../../components/EmailIntegration/EmailIntegrationCards/EmailIntegrationCards'
import { EmailSell } from '../../components/EmailIntegration/EmailSell/EmailSell'
import { LookingSolution } from '../../components/EmailIntegration/LookingSolution/LookingSolution'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'

export default function emailintegration() {
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
        <EmailIntegrationBanner/>
        <BoostProductivity/>
        <EmailIntegrationCards/>
        <EmailSell/>
        <LookingSolution/>

        <TrustedBy />
        <Trial/>
        <Testimonial />
      <LifeBottomFunnel />
      {/* added footer of sales in place of product footer */}
      <SalesFooter/>
    </div>
    </>
  )
}
