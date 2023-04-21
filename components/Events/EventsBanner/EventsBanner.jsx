import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./EventsBanner.module.css"
import Image from "next/image";
export const EventsBanner = () => {
    return (
        <>
            <div className={styles.EventsBannerParent}>
                <div className={styles.EventsBannerimage}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Event/banner.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "90%", height: "90%" }}
                    />
                </div>
                <div div className={styles.EventsBannercontent}>
                    <h1>
                        Stream Events in <span className={styles.EventsBannercolor}>Real-Time</span>
                    </h1>
                    <hr />
                    <h4>
                        Build on top of customer data by seamlessly streaming events in real-time from freshworks products to third -party apps aws
                    </h4>
                    {/* <button>
                        Explore Now
                    </button> */}
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
            <div className={styles.EventsBannercontentline} ></div>

        </>
    )
}