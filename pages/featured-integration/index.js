import React from 'react'
import { FeaturedIntegration } from '../../components/FeaturedIntegrationPage/FeaturedIntegration/FeaturedIntegration';
import { FeatureList } from '../../components/FeaturedIntegrationPage/FeatureList/FeatureList';
import { IntegrationBanner } from '../../components/FeaturedIntegrationPage/IntegrationBanner/IntegrationBanner'
import { IntegrationFooter } from '../../components/FeaturedIntegrationPage/Integrationfooter/IntegrationFooter';

const index = () => {
  return (
    <div>
        <IntegrationBanner/>
        <FeaturedIntegration/>
        <FeatureList/>
        <IntegrationFooter/>
    </div>
  )
}
export default index;