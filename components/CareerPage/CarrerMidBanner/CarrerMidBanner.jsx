import React from "react";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import career from "./CarrerMidBanner.module.css";

export const CarrerMidBanner = () => {
  return (
    <div className={career.carrerMidBannerContainer}>
      <h1>
        Join Our <span>Team</span>
      </h1>
      <p>
      Are you looking for an exciting new opportunity to join a dynamic and innovative team? Look no further than Bottom Funnel! Our company is dedicated to delivering top-notch products and services to our clients, and we're seeking talented individuals to help us achieve our goals. As a member of our team, you'll have the chance to work alongside like-minded individuals who share your passion for excellence. With competitive salaries, comprehensive benefits, and a supportive work culture, Bottom Funnel is the perfect place to take your career to the next level. Join us today and discover your true potential!
      </p>
      
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"> Send Query </button>


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
  );
};
