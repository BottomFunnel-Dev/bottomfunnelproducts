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
                <h1>No more waiting in line !</h1>
              
               <p>Instant and personalized responses and resolution for your customers on LINE</p>
               <button>Sign up</button>
            </div>
        </div>
    )
}