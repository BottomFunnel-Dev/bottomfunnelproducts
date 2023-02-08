import React from 'react'
import { ConversonalCrm } from '../../components/MarketerHomePage/ConversonalCrm/ConversonalCrm'
import { ForBusiness } from '../../components/MarketerHomePage/ForBusiness/ForBusiness'
import { MarketerHomePageBanner } from '../../components/MarketerHomePage/MarketerHomePageBanner/MarketerHomePageBanner'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'



export default function MarketerHomePage() {
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
    <ProductsNavbar
      navproductredux={{
        color: "black",
        logo: false,
      }}
    />

        
     <MarketerHomePageBanner/>
     <ConversonalCrm/>
     <ForBusiness/>

    </div>
  )
}
