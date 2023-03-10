import styles from "./CustomerSpotlightBanner.module.css";
import Image from "next/image";
export const CustomerSpotLightBanner = () => {
    return (
        <div className={styles.CustomerSpotLightBannerParent}>
            <div className={styles.CustomerSpotLightBannerParentchildone}>
                <div>
                    <h1>Bottom Funnel Neo </h1>
                    <div><Image
                        src={"/Images/Customerspotlight/BannerLogo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    /></div>
                    
                </div>
                <h1> Case Studies</h1>
                <p> Check out how the Bottom Funnel Neo plateform empowers business by delivering delightful customer and employee experiences</p>
                <button>Start a free demo</button>
            </div>
            <div className={styles.CustomerSpotLightBannerParentchildtwo}>
            <Image
                        src={"/Images/Customerspotlight/Banner.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
        </div>
    )
}