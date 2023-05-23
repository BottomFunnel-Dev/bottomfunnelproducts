import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./OurAchievements.module.css";

export const OurAchievements = () => {
  return (
    <div className={styles.OurAchievementsmain}>
      <div className={styles.OurAchievementscontent}>
        <h1>
        What we have <span>achieved</span>
        </h1>
        <p>
        At Bottom Funnel, we've achieved significant success in the IT field, with a focus on on-demand app development, custom software development, and digital marketing. Our team of experts has developed and launched several on-demand apps across various industries, including food delivery, transportation, and healthcare. Our apps are known for their user-friendly interfaces, cutting-edge features, and exceptional performance
        </p>
        <p>
        We've also developed customized software solutions for clients across industries, helping them streamline operations and improve the overall user experience. Our digital marketing campaigns have helped clients reach their target audiences and drive growth. We've established strong collaborations with clients, working closely with them to understand their unique needs and develop solutions that exceed their expectations. Our commitment to teamwork, communication, and collaboration has helped us build strong, lasting relationships with clients. We're proud of our high levels of client satisfaction, with many clients returning for repeat business and referring us to others.
        </p>
        <p>
        At Bottom Funnel, we're committed to continuing to innovate, improve, and exceed clients' expectations in everything we do, helping businesses achieve their goals and take their businesses to the next level.

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
      <div className={styles.OurAchievementsimage}>
        <img
          src="https://d3op2l77j7wnti.cloudfront.net/Images/aboutusImage/our-achievements.jpg"
          alt="Our Achievement"
        />
      </div>
    </div>
  );
};
