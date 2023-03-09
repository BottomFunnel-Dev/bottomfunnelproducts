import React from "react";
import { ContentMarketingServicesBanner } from "../../components/ContentMarketingServices/ContentMarketingServicesBanner/ContentMarketingServicesBanner";
import { ContentMarketingServicesBrands } from "../../components/ContentMarketingServices/ContentMarketingServicesBrands/ContentMarketingServicesBrands";
import { ContentMarketingServicesExpertise } from "../../components/ContentMarketingServices/ContentMarketingServicesExpertise/ContentMarketingServicesExpertise";
import { ContentMarketingServicesSolution } from "../../components/ContentMarketingServices/ContentMarketingServicesSolution/ContentMarketingServicesSolution";
import { ContentMarketingServicesUnderstading } from "../../components/ContentMarketingServices/ContentMarketingServicesUnderstading/ContentMarketingServicesUnderstading";
import { ContentMarketingServicesWorks } from "../../components/ContentMarketingServices/ContentMarketingServicesWorks/ContentMarketingServicesWorks";
 export default function ContentMarketingservices() {
    return (
        <div >
       <ContentMarketingServicesBanner/> 
       <ContentMarketingServicesBrands/>
       <ContentMarketingServicesExpertise/>
       <ContentMarketingServicesUnderstading/>
       <ContentMarketingServicesWorks/>
       <ContentMarketingServicesSolution/>
    </div>
    );
}
