import { ProjectManagementSoftwareBanner } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareBanner/ProjectManagementSoftwareBanner";
import { ProjectManagementSoftwareFeature } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareFeature/ProjectManagementSoftwareFeature";
import { ProjectManagementSoftwareIntegrate } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareIntegrate/ProjectManagementSoftwareIntegrate";
import { ProjectManagementSoftwareTrail } from "../../components/ProjectManagementSoftware/ProjectManagementSoftwareTrail/ProjectManagementSoftwareTrail";

export default function ProjectManagementSoftware() {
    return (
        <div>
            <ProjectManagementSoftwareBanner />
            <ProjectManagementSoftwareIntegrate />
            <ProjectManagementSoftwareFeature />
            <ProjectManagementSoftwareTrail />
        </div>
    )
}