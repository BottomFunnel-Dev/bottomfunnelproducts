import React from "react";
import styles from "./GoogleBusinessMessageBanner.module.css"
import Image from "next/image";
export const GoogleBusinessMessageBanner = () => {
    return (

        <div className={styles.GuideToShopFyBannerParent}>
            <div className={styles.GuideToShopFyBannerone}>
                <Image
                    src={"/Images/GoogleBusiness/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                />
            </div>
            <div className={styles.GuideToShopFyBannertwo}>
                <h1>Support customers at their moment
                    of need with Google’s Business
                    Messages </h1>
                <hr className={styles.hr} style={{ width: "80%" }} />

                <p>Engage high-intent visitors from Google Search and Google
Maps to drive smarter and richer conversations</p>
                <button>Explore Now</button>
            </div>





        </div>

    );
}