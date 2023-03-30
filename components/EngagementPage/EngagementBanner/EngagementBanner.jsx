import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./EngagementBanner.module.css";

export const EngagementBanner = () => {
  return (
    <div className={styles.engagementBannerContainer}>
      <div className={styles.engagementBannerImage}>
        <img
          src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/engagementPhotos/banner.png"
          alt="Engagement models banner human image"
        />
      </div>

      <div className={styles.engagementBannerMain}>
        <h1>
          <span>Bottom Funnel</span> Ensures Flexible Engagement Models to Cater to your Needs.
        </h1>
        <hr />
        <p>
          The Bottom Funnel is a process that helps small businesses increase their sales using flexible engagement models. Using real data, the Bottom Funnel can be used to analyze and optimize a business's current sales mix, identify profitable customer segments and create marketing campaigns that work for them. You can think about it as a sophisticated sales funnel with the ability to transform marketing efforts in order for them to become more active. This is because the bottom funnel also covers all the slow-moving customers and will allow you to gain a better understanding of what your customers want and need.
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
