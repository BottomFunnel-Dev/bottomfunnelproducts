import React from "react";
import styles from "./VettingBanner.module.css";
import Image from "next/image";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";


export const VettingBanner = () => {
  return (
    <div className={styles.vettingBannerContainer}>
      <div className={styles.vettingBannerImage}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/VettingPhotos/banner.webp"}
          alt={"Humanimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.vettingBannerMain}>
        <h1>
          <span>Bottom Funnel</span> talent network is India's largest network
          of top professionals.
        </h1>
        <hr />
        <p>
          Bottom Funnel is the process of thoroughly investigating an
          individual, company, or other entity before making a decision to go
          forward with a joint project. A background review is an example of a
          vetting process for a potential employee. Once the vetting process is
          concluded, a well-informed hiring decision can be made.
        </p>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"> Get Started </button>

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
