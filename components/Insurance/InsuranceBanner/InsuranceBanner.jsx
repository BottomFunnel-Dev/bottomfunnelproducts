import React from "react";
import styles from "./InsuranceBanner.module.css"
import Image from "next/image";
export const InsuranceBanner = () => {
    return (
        <div className={styles.InsuranceBannerParent}>

            <div>
                <h1>Cover your customer for life</h1>
                <p>
                    Build trust and long-term relationship with your insurance
                    customer by offering personized support at scale without compromising security.
                </p>
                <button>Start A Free Demo</button>
            </div>
            <div>
                <Image
                    src={"/Images/Insurance/banner.webp"}
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