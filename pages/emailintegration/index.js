import React from 'react'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import { BoostProductivity } from '../../components/EmailIntegration/BoostProductivity/BoostProductivity'
import { EmailIntegrationBanner } from '../../components/EmailIntegration/EmailIntegrationBanner/EmailIntegrationBanner'
import { EmailIntegrationCards } from '../../components/EmailIntegration/EmailIntegrationCards/EmailIntegrationCards'
import { EmailSell } from '../../components/EmailIntegration/EmailSell/EmailSell'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

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

        <TrustedBy />
        <Trial/>
        <Testimonial />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
    </>
  )
}
