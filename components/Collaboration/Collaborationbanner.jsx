import Image from 'next/image'
import React from 'react'
import styles from "./Collaborationbanner.module.css"
import { PopupForm } from '../CommonComponents/PopupForm/PopupForm'


export const Collaborationbanner = () => {
  return (
    <div className={styles.collaborationbannermainboxes}>
    <div className={styles.collaborationbannerleftbox}>
    
    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006028.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "95%" , objectFit:"contain"}}
            />

    </div>

    <div className={styles.collaborationbannerrightbox}>
    <h1>Effortlessly facilitate team collaboration to enhance output levels</h1>
    <p>Increase the effectiveness of teams through the ability to collaborate contextually, at any time, and seamlessly within the workflow.</p>

    {/* <button className={styles.collaborationbannerbutton}>Explore Now</button> */}
    { <button className={styles.collaborationbannerbutton}
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
