import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import { SaleSmarter } from '../../components/SalesPage/SaleSmarter/SaleSmarter'
import SuitDeals from '../../components/SuitePage/SuitDeals/SuitDeals'
import SuiteBanner from '../../components/SuitePage/SuiteBanner/SuiteBanner'
import SuiteBusiness from '../../components/SuitePage/SuiteBusiness/SuiteBusiness'
import SuiteLower from '../../components/SuitePage/SuiteLower/SuiteLower'
import SuitFeature from '../../components/SuitePage/SuitFeature/SuitFeature'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import { SalesFooter } from '../../components/SalesFooter/SalesFooter'

export default function SuitePage() {
  return (
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
       

      <SuiteBanner/>
      <SuiteBusiness/>
      <SuitFeature/>
      <SuitDeals/>
      <SaleSmarter/>
      <SuiteLower/>


      <Testimonial />
      <TrustedBy />
      <ReadyStarted/>
      <LifeBottomFunnel/>
     {/* added footer of sales in place of product footer */}
     <SalesFooter/>
    </div>
  )
}
