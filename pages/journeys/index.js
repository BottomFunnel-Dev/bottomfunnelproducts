import React from "react";
import { JourneysBanner } from "../../components/Journeys/JourneysBanner/JourneysBanner";
import { JourneysChat } from "../../components/Journeys/JourneysChat/JourneysChat";
import { JourneysEnagement } from "../../components/Journeys/JourneysEnagement/JourneysEnagement";
import { JourneysTrail } from "../../components/Journeys/JourneysTrail/JourneysTrail";
import { JourneysWhy } from "../../components/Journeys/JourneysWhy/JourneysWhy";

export default function Journeys() {
    return (

        <div>

            <JourneysBanner />
            <JourneysChat />
            <JourneysEnagement />
            <JourneysWhy />
            <JourneysTrail/>
        </div>
    )
}