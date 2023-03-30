import React from "react";
import { OurTeamBanner } from "../../components/OurTeam/OurTeamBanner/OurTeamBanner";
import Navbar from "../../components/Navbar/Navbar";
import  OurTeamCardsMain  from "../../components/OurTeam/MainOurTeamCards/MainOurTeamCards"

const index = () => {

  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />

      <OurTeamBanner />
      <OurTeamCardsMain/>
    </div>
  );
};

export default index;
