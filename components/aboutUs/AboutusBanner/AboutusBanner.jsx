import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./AboutusBanner.module.css";

export const AboutusBanner = () => {
  return (
    <div className={styles.aboutusBanner}>
      {/* <div className={styles.aboutusbannerimage}>
        <img src="https://d3op2l77j7wnti.cloudfront.net/Images/aboutusImage/banner.jpg" alt="About us banner" />
      </div> */}

      <div className={styles.aboutusbannercontent}>
        <h1>
          Build Your Brands presence With{" "}
          <span className={styles.aboutusanimatedtitle}>BOTTOM FUNNEL</span>
        </h1>
        <hr />
        <p>
          Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field.
        </p>

        <div>
          <div
            className="modal fade"
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
