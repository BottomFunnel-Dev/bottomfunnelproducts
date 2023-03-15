import React from 'react'
import { AllproductsBanner } from '../../components/AllproductsandTrial/AllproductsBanner/AllproductsBanner'
import { CrmProduct } from '../../components/AllproductsandTrial/CrmProduct/CrmProduct'
import { ItServiceProduct } from '../../components/AllproductsandTrial/ItServiceProduct/ItServiceProduct'
import { ServiceProducts } from '../../components/AllproductsandTrial/ServiceProducts/ServiceProducts'
import Navbar from '../../components/Navbar/Navbar'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import { TalentProfiles } from '../../components/ProductsNewPage/TalentProfiles/TalentProfiles'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'

export default function allproducts() {
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

    <AllproductsBanner/>
    <ServiceProducts/>
    <ItServiceProduct/>
    <CrmProduct/>
   


      <Testimonial />
      <TrustedBy/>
     
      
      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
    </>
  )
}
