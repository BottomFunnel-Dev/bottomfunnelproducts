import React from 'react'
import styles from "./Unifiedcustomerbanner.module.css"
import { PopupForm } from '../CommonComponents/PopupForm/PopupForm'


export const Unifiedcustomerbanner = () => {
  return (
    <div className={styles.unifiedcustomerbannermainboxes}>
    <div className={styles.unifiedcustomerbennerleftbox}>
    
    <lottie-player
    src="https://d3op2l77j7wnti.cloudfront.net/Animation/unifiedbanneranimation/Banner animation JSon file for Developers.json"
    background="transparent"
    speed="1"
    style={{ width: "100%", height: "100%",  }}
    loop
    autoplay
  ></lottie-player>

    </div>
    <div className={styles.unifiedcustomerbannerrightbox}>
    <h1>A unified record that provides a complete understanding of a <span>customer's history</span> in one go.</h1>
    <hr></hr>
    <p>Unified Customer Record in the native customer data platform that captured customer data from all touchpoints and powers your business to deliver delightful customer experiences.</p>
    
    {/* <button className={styles.unifiedcustomerbannerbutton}>Get Started</button> */}

    { <button className={styles.unifiedcustomerbannerbutton}
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
  )
}
