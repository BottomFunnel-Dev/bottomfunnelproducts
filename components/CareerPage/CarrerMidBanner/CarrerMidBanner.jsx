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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores
        temporibus obcaecati illum officia, corrupti, officiis ducimus atque
        voluptatem dicta aliquam, esse porro error perferendis doloribus
        molestiae unde libero eius.
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
