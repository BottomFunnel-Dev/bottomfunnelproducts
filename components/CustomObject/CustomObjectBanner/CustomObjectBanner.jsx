import React from "react";
import styles from "./CustomObjectBanner.module.css";
import Image from "next/image";
export const CustomObjectBanner = () => {
    return (
        <div>
            <div className={styles.CustomObjectParent}>
                <div className={styles.CustomObjectone}>
                    <Image
                        src={"/Images/customObject/Banner.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                
                <div className={styles.CustomObjecttwo}>
                    <h1>Bring in Your unique business context inside <span style={{ color: "#EF5122" }}>Bottom Funnel</span> products </h1>
                    <hr className={styles.hr} style={{ width: "80%" }} />

                    <p>Create new business object,get deeper insights, and deliver delight</p>
                    <button>Explore Now</button>
                </div>


            </div>
            <div className={styles.line}></div>
        </div>
    );
}