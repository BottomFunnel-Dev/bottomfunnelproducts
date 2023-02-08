import React from 'react'
import { ActiveGoals } from '../../components/CustomerSuccessHome/ActiveGoals/ActiveGoals'
import { CustomerSuccessBanner } from '../../components/CustomerSuccessHome/CustomerSuccessBanner/CustomerSuccessBanner'
import { CustomerValue } from '../../components/CustomerSuccessHome/CustomerValue/CustomerValue'
import { RequestDemo } from '../../components/CustomerSuccessHome/RequestDemo/RequestDemo'


export default function CustomerSuccessHome() {
    return (
    <div>
       <CustomerSuccessBanner/>
       <ActiveGoals/>
       <CustomerValue/>
       <RequestDemo/>
    </div>
  )
}
