import styles from "./JourneysBanner.module.css"
import Image from "next/image"

export const JourneysBanner = () => {
    return (
        <div className={styles.journeysBannerParent}>

            <div className={styles.journeysBannerImage}>
            <Image
                    src={"/Images/Journeys/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                />
            </div>
            <div className={styles.journeysBannerContent}>
                <h1>Automate customer engagement with proactive messaging</h1>
               <hr />
               <h4>Proactively engage your visitors and customers wherever they are the Journeys.</h4>
               <button>Explore Now</button>
            </div>
        </div>
    )
}