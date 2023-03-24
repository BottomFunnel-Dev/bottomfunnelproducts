import { IncidentManageServicesBanner } from "../../components/IncidentManageServices/IncidentManageServicesBanner/IncidentManageServicesBanner";
import { IncidentManageServicesCatarories } from "../../components/IncidentManageServices/IncidentManageServicesCatarories/IncidentManageServicesCatarories";
import { IncidentManageServicesDemo } from "../../components/IncidentManageServices/IncidentManageServicesDemo/IncidentManageServicesDemo";
import { IncidentManageServicesFeature } from "../../components/IncidentManageServices/IncidentManageServicesFeature/IncidentManageServicesFeature";
import { IncidentManageServicesIncident } from "../../components/IncidentManageServices/IncidentManageServicesIncident/IncidentManageServicesIncident";
import { IncidentManageServicesSupport } from "../../components/IncidentManageServices/IncidentManageServicesSupport/IncidentManageServicesSupport";

export default function IncidentManagementService() {
    return (
        <div>
            <IncidentManageServicesBanner />
            <IncidentManageServicesSupport/>
            <IncidentManageServicesIncident/>
            <IncidentManageServicesCatarories/>
            <IncidentManageServicesFeature/>
            <IncidentManageServicesDemo/>
        </div>
    )
}