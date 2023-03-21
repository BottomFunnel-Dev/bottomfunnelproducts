import React from "react";
import styles from "./OurDevBanner.module.css";
import Image from "next/image";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";

export const OurDevBanner = () => {
  return (
    <div className={styles.ourDevBannerContainer}>
      <div className={styles.ourDevBannerImage}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ourDevPhotos/banner.webp"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.ourDevBannerMain}>
        <h1>
          <span>Bottom Funnel</span>Follows a pursuit to develop the best products for web and mobile.
        </h1>
        <hr />
        <p>
          Bottom funnel follows a pursuit to develop the best products for web and mobile. We have rich experience in creating apps, website and games. Our concept is to provide our customers a branded experience ensuring them a high quality product.This process is based on a thorough research of market needs, requirements and opportunities. After many brainstorming sessions, we came up with this funnel diagram.We believe that innovation is key to sustainable growth and we are committed to conducting ourselves in a transparent manner.
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
    </div>
  );
};
