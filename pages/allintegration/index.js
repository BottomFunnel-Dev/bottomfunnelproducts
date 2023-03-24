import { AllIntegrationBanner } from "../../components/AllIntegration/AllIntegrationBanner/AllIntegrationBanner";
import { AllIntegrationTrail } from "../../components/AllIntegration/AllIntegrationTrail/AllIntegrationTrail";
import { AllIntegrationWay } from "../../components/AllIntegration/AllIntegrationWay/AllIntegrationWay";

export default function AllIntegration() {
    return (
        <div>
            <AllIntegrationBanner />
            <AllIntegrationWay/>
            <AllIntegrationTrail/>
        </div>
    )
}