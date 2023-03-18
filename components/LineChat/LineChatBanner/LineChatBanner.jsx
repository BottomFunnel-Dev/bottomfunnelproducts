import styles from "./LineChatBanner.module.css"
import Image from "next/image"

export const LineChatBanner = () => {
    return (
        <div className={styles.LineChatBannerParent}>

            <div className={styles.LineChatBannerImage}>
            <Image
                    src={"/Images/LineChat/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                />
            </div>
            <div className={styles.LineChatBannerContent}>
                <h1>Automate customer engagement with proactive messaging</h1>
               <hr />
               <h4>Proactively engage your visitors and customers wherever they are the Journeys.</h4>
               <button>Explore Now</button>
            </div>
        </div>
    )
}