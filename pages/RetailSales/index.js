import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import { MortarDead } from '../../components/RetailSales/MortarDead/MortarDead'
import { RetailSalesBanner } from '../../components/RetailSales/RetailSalesBanner/RetailSalesBanner'


export default function RetailSales() {
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
     <RetailSalesBanner/>
     <MortarDead/>
    </div>
    </>
  )
}
