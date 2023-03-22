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
            Going digital will bring higher revenues and growth. Marketing is
            all about targeting the right people with the right message, Digital
            marketing helps you do that efficiently. We are your partner in
            building your digital brand, communicating and being found,
            nourishing your customers, followers, and fans, and feeding your
            commercial team. Whatever your industry, we have a path, a solution
            for you. If you are already an international company, or if you want
            to expand your business, we work with you. We help you create
            content that resonates with them and draws them into your online
            world where they will engage with your brand on social media
            platforms like Facebook or Twitter.
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
