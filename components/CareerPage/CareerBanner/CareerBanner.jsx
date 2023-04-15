import React from "react";
import career from "./CareerBanner.module.css";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import { CareerReason } from "../CareerReason/CareerReason";

export const CareerBanner = () => {
  return (
    <div className={career.careerBannerMain}>
      
      <div className={career.careerBannerImage}>
        <img src="Images/careerPhotos/banner.png" alt="Career banner" />
      </div>

      <div className={career.careerBannerContent}>
        <h1>
          Work With the best In Bottom Funnel
        </h1>
        <hr />
        <p>
          Bottom Funnel is changing the way people think about their online
          presence. Our innovations are helping them to connect, build a
          reputation, and make a name for themselves in a world that's becoming
          more and more digital by the day. Join us and become part of our next
          big thing.
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
      <CareerReason/>
    </div>
  );
};
