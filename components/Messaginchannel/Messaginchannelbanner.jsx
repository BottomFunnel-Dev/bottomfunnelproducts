import Image from 'next/image'
import React from 'react'
import styles from "./Messaginchannelbanner.module.css"
import { PopupForm } from '../CommonComponents/PopupForm/PopupForm'


export const Messaginchannelbanner = () => {
  return (
    <div className={styles.messaginchannelbannermainboxes}>
    <div className={styles.messagingchannelbannerleft}>
    
    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Messaging channels/components/Group 1000006011.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
    
    </div>

    <div className={styles.messagingchannelbannerright}>
    <h2>Engage with <span>Customers</span> across messaging channels</h2>
    <p>Scale communication across channels and delight your customers at every touchpoint.</p>
    {/* <button className={styles.messaginchannelbannerbuton}>Explore Now</button> */}

    { <button className={styles.messaginchannelbannerbuton}
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
