import React from 'react'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { SaleSmarter } from '../../components/SalesPage/SaleSmarter/SaleSmarter'
import SuiteBanner from '../../components/SuitePage/SuiteBanner/SuiteBanner'
import SuiteBusiness from '../../components/SuitePage/SuiteBusiness/SuiteBusiness'
import SuitFeature from '../../components/SuitePage/SuitFeature/SuitFeature'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function SuitePage() {
  return (
    <div>
      <SuiteBanner/>
      <SuiteBusiness/>
      <SuitFeature/>
      <SaleSmarter/>
      <Testimonial />
        <TrustedBy />
        <ReadyStarted/>
        <LifeBottomFunnel/>
        <ProductsFooter/>
    </div>
  )
}
