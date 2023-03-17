import React from "react";
import { MultichannelEngagementBanner } from "../../components/MultichannelEngagement/MultichannelEngagementBanner/MultichannelEngagementBanner";
import { MultichannelEngagementPersonalise } from "../../components/MultichannelEngagement/MultichannelEngagementPersonalise/MultichannelEngagementPersonalise";

export default function MultichannelEngagement() {
    return (
        <div>

            <MultichannelEngagementBanner />
            <MultichannelEngagementPersonalise/>
        </div>
    );
}
