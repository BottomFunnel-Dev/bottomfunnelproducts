import React from 'react'
import { Advantages } from '../../components/AnalyticsofFeature/Advantages/Advantages'
import { AnalyticsofFeatureBanner } from '../../components/AnalyticsofFeature/AnalyticsofFeatureBanner/AnalyticsofFeatureBanner'
import { Insight } from '../../components/AnalyticsofFeature/Insight/Insight'
import { Trial } from '../../components/AnalyticsofFeature/Trial/Trial'
import Navbar from '../../components/Navbar/Navbar'
import { ProdNavbar } from '../../components/ProdNavbar'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'

export default function AnalyticsofFeature () {
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
   <AnalyticsofFeatureBanner/>
   <Advantages/>
   <Insight/>
   <Trial/>
   <ProductsFooter />
    </div>
  )
}
