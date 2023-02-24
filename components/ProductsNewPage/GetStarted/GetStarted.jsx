import React from "react";
import styles from "./GetStarted.module.css";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";

export const GetStarted = () => {
  return (
    <div className={styles.getStartedMainOuterDIv}>
      <div className={styles.getStartedMainContentDiv}>
        <h1> Ready to get Started? </h1>
        <p>
          Join our community of 50,000+ companies of all sizes who use
          Bottom-Funnel‵s modern SaaS products to make it fast and easy to
          delight their customers and employees.Book your Free trials today
        </p>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          {" "}
          Book Your Free Trial{" "}
        </button>

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
  );
};

// export default GetStarted;
