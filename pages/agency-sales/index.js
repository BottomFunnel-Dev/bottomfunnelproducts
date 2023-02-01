import React from "react";
import { EstateAgency } from "../../components/RealEstateSales/EstateAgency/EstateAgency";
import { MakeYourDeal } from "../../components/SalesPage/MakeYourDeal/MakeYourDeal";
import { SalesWorldwide } from "../../components/SalesPage/SalesWorldwide/SalesWorldwide";
import { AgencyBanner } from "../../components/AgencyHomePage/AgencyBanner/AgencyBanner";
import { AgencyNeedCrm } from "../../components/AgencyHomePage/AgencyNeedCrm/AgencyNeedCrm";
import { AngencyCrm } from "../../components/AgencyHomePage/AngencyCrm/AngencyCrm";
import { AutomateTask } from "../../components/AgencyHomePage/AutomateTask/AutomateTask";
import { Discover } from "../../components/AgencyHomePage/Discover/Discover";
import { Performing } from "../../components/AgencyHomePage/Performing/Performing";

export default function AgencyHomePage() {
  return (
    <>
      <AgencyBanner />
      <AngencyCrm />
      <AgencyNeedCrm />
      <Discover />
      <AutomateTask />
      <Performing />

      <EstateAgency />
      <SalesWorldwide />
      <MakeYourDeal />
    </>
  );
}
