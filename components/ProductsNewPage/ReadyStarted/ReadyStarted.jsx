import React from "react";
import styles from "./ReadyStarted.module.css";
import Image from "next/image";
import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
const ReadyStarted = () => {
  return (
    <div className={styles.readyStartOuterDiv}>
      <div className={styles.textcontent}>
        <h2>Ready to get started</h2>
        <p>
          Join our community of 50.000+companies of all sizes who use Bottom
          Funnel mordern Products to make it fast and easy to delight thier
          customers and employees
        </p>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" >CONTACT SALES</button>

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

      <div className={styles.logoImage}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/bottom.png"
          alt="Components/lifeimage1.png"
        />
      </div>
    </div>
  );
};

export default ReadyStarted;
