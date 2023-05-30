import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
import styles from "./EventsBanner.module.css"
import Image from "next/image";
export const EventsBanner = () => {
    return (
        <>
            <div className={styles.EventsBannerParent}>
                <div className={styles.EventsBannerimage}>
                    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Event/banner.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "90%", height: "90%" }}
                    />
                </div>
                <div div className={styles.EventsBannercontent}>
                    <h1>
                    Analyze  <span className={styles.EventsBannercolor}>real-time </span>stream events
                    </h1>
                    <hr />
                    <p>
                    Utilize customer data to stream live events in real-time from the Bottom Funnel products to third-party apps and Amazon Web Services.
 </p>
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