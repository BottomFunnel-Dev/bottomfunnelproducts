import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./OurProcess.module.css";
import { OurProcessPush } from "./OurProcessPush/OurProcessPush";


export const OurProcess = () => {
  return (
    <div className={styles.aboutusourprocess}>
      <div className={styles.OurProcessaboutUsmain}>
        <div className={styles.OurProcessaboutUscontent}>
          <p> WHO WE ARE </p>
          <h1>
            About <span>Us</span>
          </h1>

          <p>
          Bottom Funnel is an innovative and forward-thinking company that specializes in providing a wide range of cutting-edge IT solutions. With a passion for innovation and a commitment to excellence, our team of experts leverages the latest technologies and best practices to deliver customized solutions that meet the unique needs of each client. At Bottom Funnel, we believe in taking an innovative approach to IT solutions, embracing new technologies and methodologies to stay ahead of the curve. Whether you need a mobile app developed from scratch, a custom software solution tailored to your specific needs, or a comprehensive digital marketing campaign to reach your target audience, our team has the skills and expertise to deliver outstanding results.
          </p>


          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">Get Started</button>

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

        <div className={styles.OurProcessaboutUsimage}>
          <img src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/aboutusImage/meeting.jpg" alt="about us main div" />
        </div>
      </div>
      <OurProcessPush />
    </div>
  );
};
