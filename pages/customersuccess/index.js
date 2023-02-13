import React from 'react'
import { ActiveGoals } from '../../components/CustomerSuccessHome/ActiveGoals/ActiveGoals'
import { CustomerSuccessBanner } from '../../components/CustomerSuccessHome/CustomerSuccessBanner/CustomerSuccessBanner'
import { CustomerValue } from '../../components/CustomerSuccessHome/CustomerValue/CustomerValue'
import { RequestDemo } from '../../components/CustomerSuccessHome/RequestDemo/RequestDemo'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsNavbar } from '../../components/Navbar/ProductsNavbar/ProductsNavbar'

export default function CustomerSuccessHome() {
    return (
    <div>

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


       <CustomerSuccessBanner/>
       <ActiveGoals/>
       <CustomerValue/>
       <RequestDemo/>
    </div>
  )
}
