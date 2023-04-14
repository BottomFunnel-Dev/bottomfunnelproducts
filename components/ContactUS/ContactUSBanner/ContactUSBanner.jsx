import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./ContactUSBanner.module.css";

export const ContactUSBanner = () => {
  return (
    <div className={styles.contactUsBannermain}>
      <div className={styles.ContactUsBannerimage}>
        <img src="/Images/contact/banner.png" alt="Contact us banner" />
      </div>

      <div className={styles.ContactUsBannerContent}>
        <h1>
          Share Your Details, Get In Touch Here at Bottom Funnel
        </h1>

        

        <p>
          It's hard to stand out in today's noisy market, but that doesn't mean
          you can't try! With over 95% of messages answered within 1 business
          day, Bottom Funnel is here to help make your project stand out from
          the crowd.
          <br />
          We understand that your time is precious, and we want to make sure you
          get the best possible response.
        </p>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">Get Started</button>

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
  );
};
