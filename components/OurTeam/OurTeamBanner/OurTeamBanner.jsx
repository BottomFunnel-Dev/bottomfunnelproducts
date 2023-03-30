import React from 'react';
import styles from "./OurTeamBanner.module.css";

export const OurTeamBanner = () => {
  return (
    <div className={styles.ourTeamBannermainboxes}>
      <div className={styles.ourTeamBannerheadingtxt}>
        <h1>
          {/* <span>Our</span> <span>Portfolio</span> */}
          Meet our team
        </h1>

        <p>
          We have grown multifield and scaled new heights under the able guidance of these inquisitve minds. Meet the beacons 
          guiding the Bottom Funnel family and fostering a people-first culture.
        </p>

        {/* <div>
          <button className={styles.ourTeamBannerbutton}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">Get Started</button>


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


        </div> */}

      </div>

    </div>
  );
};
