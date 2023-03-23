import React from 'react'
import { Advantage } from '../../components/ITSMService/Advantage/Advantage'
import { ITSMServiceBanner } from '../../components/ITSMService/ITSMServiceBanner/ITSMServiceBanner'
import { ITSMServicesScreens } from '../../components/ITSMService/ITSMServicesScreens/ITSMServicesScreens'

export default function itmsService() {
    return (
    <div>
        <ITSMServiceBanner/>
        <ITSMServicesScreens/>
        <Advantage/>
    </div>
  )
}
