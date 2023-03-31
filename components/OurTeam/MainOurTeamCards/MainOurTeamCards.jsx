import React from 'react';
import styles from "./MainOurTeamCards.module.css";
import Image from 'next/image';
import OurLeaders from './OurLeaders/OurLeaders';
import OurDevelopers from './OurDevelopers/OurDevelopers';

import { ourLeaders } from "../../../Data/OurTeamsData";
import { ourDevelopers } from "../../../Data/OurTeamsData";
import { ourDesigners } from "../../../Data/OurTeamsData";
import { ourDigitalMarketers } from "../../../Data/OurTeamsData";
import OurDesignerss from './OurDesigners/OurDesigners';
import OurDigitalMarketers from './OurDigitalMarketers/OurDigitalMarketers';
import { PopupForm } from '../../CommonComponents/PopupForm/PopupForm';

import career from "./MainOurTeamCards.module.css";

const MainOurTeamCards = () => {

  const { OurLeadersData } = ourLeaders;
  const { OurDevelopersData } = ourDevelopers;
  const { OurDesignersData } = ourDesigners;
  const { OurDigitalMarketersData } = ourDigitalMarketers;

  return (
    <div>

      <div className={styles.ourDevProcessContainer}>
        <div>
          <OurLeaders Onblogdata={OurLeadersData} />
          <OurDevelopers OnDevelopersdata={OurDevelopersData} />
          <OurDesignerss OnDesignerssdata={OurDesignersData} />
          <OurDigitalMarketers OnDigitalMarketerdata={OurDigitalMarketersData} />
        </div>

        <div>
          <div className={career.carrerMidBannerContainer}>
            <h1>
              Join Our <span>Team</span>
            </h1>
            <p>
              Bottom Funnel truly values work-life balance. We work hard, but at the end of the day you can switch off.
            </p>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"> Send Query </button>


            <div>
              <div
                className="modal"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div>
                      <PopupForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainOurTeamCards;