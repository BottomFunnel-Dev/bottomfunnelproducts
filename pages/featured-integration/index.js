import React from 'react'
import { FeaturedIntegration } from '../../components/FeaturedIntegrationPage/FeaturedIntegration/FeaturedIntegration';
import { IntegrationBanner } from '../../components/FeaturedIntegrationPage/IntegrationBanner/IntegrationBanner'
import { IntegrationFooter } from '../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter';

const index = () => {
  return (
    <div>
        <IntegrationBanner/>
        <FeaturedIntegration/>
        <IntegrationFooter/>
    </div>
  )
}
export default index;