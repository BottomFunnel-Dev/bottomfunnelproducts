import React from "react";
import styles from "./OurDevQuery.module.css";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";

export const OurDevQuery = () => {
  return (
    <div className={styles.ourDevQueryContainer}>
      <h1>We are ready to Get Started! Share your idea with us</h1>
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
  );
};
