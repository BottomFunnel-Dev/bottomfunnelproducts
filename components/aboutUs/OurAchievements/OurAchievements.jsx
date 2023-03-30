import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./OurAchievements.module.css";

export const OurAchievements = () => {
  return (
    <div className={styles.OurAchievementsmain}>
      <div className={styles.OurAchievementscontent}>
        <h1>
          Our <span>Achievements</span>
        </h1>
        <p>
          Bottom Funnel is an IT company that goes the extra mile for its
          clients. We understand your business and deliver solutions that solve
          problems, not add more work.
        </p>
        <p>
          Our expertise in end-to-end services means you get a complete solution
          to your business needs - from fixing software glitches to providing
          training on new technologies. We partner with companies big and small,
          so we have experience working with every type of company.
        </p>
        <p>
          If you're looking for a partner who will put their customers' needs
          before their own, then look no further - Bottom Funnel is just the
          agency you've been searching for!
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
          src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/aboutusImage/our-achievements.jpg"
          alt="Our Achievement"
        />
      </div>
    </div>
  );
};
