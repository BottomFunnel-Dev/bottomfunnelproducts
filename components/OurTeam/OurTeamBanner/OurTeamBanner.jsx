import React from 'react';
import styles from "./OurTeamBanner.module.css";

export const OurTeamBanner = () => {
  return (
    <div className={styles.ourTeamBannermainboxes}>
      <div className={styles.ourTeamBannerheadingtxt}>
        <h1>
          {/* <span>Our</span> <span>Portfolio</span> */}
          Meet Our Team of Experts
        </h1>

        <p>
        At Bottom Funnel, our team is the driving force behind our success. Our leaders bring years of industry experience and expertise, while our development team is made up of skilled professionals with a passion for creating exceptional on-demand apps. We work together seamlessly, utilizing cutting-edge technology and a collaborative approach to ensure that our clients receive the best possible solutions.
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
