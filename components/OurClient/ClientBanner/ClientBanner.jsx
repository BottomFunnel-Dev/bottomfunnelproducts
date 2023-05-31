import React from "react";
import clients from "./ClientBanner.module.css";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";

export const ClientBanner = () => {
  return (
    <div className={clients.ourClientBannerMain}>
      <div className={clients.ourClientBannerContent}>
        <h1>Our Client</h1>
        <p>
          Bottom Funnel is such a transparent name for them. It has become the
          synonym of trust when it comes to buying and selling products online.
          Bottom Funnel becomes the first choice of customers in this digital
          age.
        </p>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">Become Client</button>

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

      <div className={clients.ourClientBannerImage}>
        <img
          src="https://d3op2l77j7wnti.cloudfront.net/Images/ourclientPhotos/banner.png"
          alt="Our Client page banner"
        />
      </div>
    </div>
  );
};
