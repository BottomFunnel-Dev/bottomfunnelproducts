import { BusinessTeamBanner } from "../../components/BusinessTeam/BusinessTeamBanner/BusinessTeamBanner";
import { BusinessTeamcards } from "../../components/BusinessTeam/BusinessTeamcards/BusinessTeamcards";
import { BusinessTeamEnterprise } from "../../components/BusinessTeam/BusinessTeamEnterprise/BusinessTeamEnterprise";
import { BusinessTeamexplore } from "../../components/BusinessTeam/BusinessTeamexplore/BusinessTeamexplore";
import { BusinessTeamForrestor } from "../../components/BusinessTeam/BusinessTeamForrestor/BusinessTeamForrestor";
import { BusinessTeamPortal } from "../../components/BusinessTeam/BusinessTeamPortal/BusinessTeamPortal";
import { BusinessTeamTrail } from "../../components/BusinessTeam/BusinessTeamTrail/BusinessTeamTrail";

export default function BusinessTeam() {
    return (
        <div>
            <BusinessTeamBanner />
            <BusinessTeamForrestor/>
            <BusinessTeamPortal/>
            <BusinessTeamEnterprise/>
            <BusinessTeamcards/>
            <BusinessTeamexplore/>
            <BusinessTeamTrail/>
        </div>
    )
}