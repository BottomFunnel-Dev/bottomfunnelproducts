import React from 'react'
import styles from "./AnalyticsofFeatureBanner.module.css"
import Image from 'next/image'
import { PopupForm } from '../../CommonComponents/PopupForm/PopupForm'

export const AnalyticsofFeatureBanner = () => {
  return (
    <div>
    <div className={styles.AnalyticsofFeatureBannermaindiv}>
      <div className={styles.AnalyticsofFeatureBannerimage}>
      <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/bgbanner.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
      </div>

      <div className={styles.AnalyticsofFeatureBannerimagecontent}>
        <div>
            <h1>Unlock Critical Business Insights with No-code <span>Analytics</span></h1>
            <hr/>

            <p>Build on top of customers data by seamlessly streaming events in real-time from bottom funnel products to third-party apps and AWS.   </p>
            {/* <button  className={styles.AnalyticsofFeatureBannerbutton}>Explore Now</button> */}
             { <button className={styles.AnalyticsofFeatureBannerbutton}
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
    </div>
    </div>
  )
}
