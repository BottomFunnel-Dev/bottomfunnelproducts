import styles from "./EventsBanner.module.css"
import Image from "next/image";
export const EventsBanner = () => {
    return (
        <>
        <div className={styles.EventsBannerParent}>
            <div className={styles.EventsBannerimage}>
                <Image
                    src={"/Images/Event/banner.webp"}
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
                <button>
                    Explore Now
                </button>
            </div>
        </div>
        <div className={styles.EventsBannercontentline} ></div>

        </>
    )
}