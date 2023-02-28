import React from 'react'
import { BoostProductivity } from '../../components/EmailIntegration/BoostProductivity/BoostProductivity'
import { EmailIntegrationBanner } from '../../components/EmailIntegration/EmailIntegrationBanner/EmailIntegrationBanner'
import { EmailIntegrationCards } from '../../components/EmailIntegration/EmailIntegrationCards/EmailIntegrationCards'
import { EmailSell } from '../../components/EmailIntegration/EmailSell/EmailSell'

export default function emailintegration() {
    return (
    <div>
        <EmailIntegrationBanner/>
        <BoostProductivity/>
        <EmailIntegrationCards/>
        <EmailSell/>
    </div>
  )
}
