import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import awards from "./AwardsBanner.module.css";

export const AwardsBanner = () => {
  return (
    <div className={awards.awardsBannerMain}>
      <div className={awards.awardsBannerContentMain}>
        <div className={awards.awardsbannerContent}>
          <h1>Awards & Memberships</h1>
          <p>
            In recognition of our continuous learning process and the innovative
            business solutions that have benefited most of our clients, we are
            awarded the Bar of Success badge, which, as a result, increases our
            level of excellence. We sync daily.
          </p>
          <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">Contact us</button>

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

        <div className={awards.awardsbannerImage}>
          <img src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/AwardsPhotos/banner.png" alt="Awards vector" />
        </div>

      </div>
    </div>
  );
};
