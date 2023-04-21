import React from "react";
import styles from "./CustomObjectBanner.module.css";
import Image from "next/image";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
export const CustomObjectBanner = () => {
    return (
        <div>
            <div className={styles.CustomObjectParent}>
                <div className={styles.CustomObjectone}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/Banner.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                
                <div className={styles.CustomObjecttwo}>
                    <h1>Bring in Your unique business context inside <span style={{ color: "#EF5122" }}>Bottom Funnel</span> products </h1>
                    <hr className={styles.hr} style={{ width: "80%" }} />

                    <p>Create new business object,get deeper insights, and deliver delight</p>
                    {/* <button>Explore Now</button> */}
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
            <div className={styles.line}></div>
        </div>
    );
}