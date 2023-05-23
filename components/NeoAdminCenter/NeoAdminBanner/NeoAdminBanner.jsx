import React from "react";
import styles from "./NeoAdminBanner.module.css";
import Image from "next/image";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";

export const NeoAdminBanner = () => {
  return (
    <div className={styles.neoAdminBannerDiv}>
        <div className={styles.neoAdminBannerText}>
            <div className={styles.neoAdminBannerContent}>
                <h1>Harmonize the administration and data security across diverse platforms of Bottom funnel</h1>
                <p>
                With one unified console, regardless of size, powerful admins can secure data, enable users, and manage subscription billing.
                </p>
                {/* <button>Start free trial</button> */}
                { <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">Get Started</button> }
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
                    className="btn-close "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div>
                  <PopupForm/>
                </div>
              </div>
            </div>
          </div>


        </div>
            </div>
        </div>
        <div className={styles.neoAdminBannerImage}>
            <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/neoAdmin/OBJECTS.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
        </div>
    </div>
  );
};
