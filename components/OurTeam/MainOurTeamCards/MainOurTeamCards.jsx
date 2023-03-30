import React from 'react';
import OurLeaders from './OurLeaders/OurLeaders';
import OurDevelopers from './OurDevelopers/OurDevelopers';

import { ourLeaders } from "../../../Data/OurTeamsData";
import { ourDevelopers } from "../../../Data/OurTeamsData";
import { ourDesigners } from "../../../Data/OurTeamsData";
import { ourDigitalMarketers } from "../../../Data/OurTeamsData";
import OurDesignerss from './OurDesigners/OurDesigners';
import OurDigitalMarketers from './OurDigitalMarketers/OurDigitalMarketers';

const MainOurTeamCards = () => {

  const { OurLeadersData } = ourLeaders;
  const { OurDevelopersData } = ourDevelopers;
  const { OurDesignersData } = ourDesigners;
  const { OurDigitalMarketersData } = ourDigitalMarketers;

  return (
    <div>
      <OurLeaders Onblogdata={OurLeadersData} />
      <OurDevelopers OnDevelopersdata={OurDevelopersData}  />
      <OurDesignerss OnDesignerssdata={OurDesignersData}  />
      <OurDigitalMarketers OnDigitalMarketerdata={OurDigitalMarketersData}  />
    </div>
  )
}

export default MainOurTeamCards;