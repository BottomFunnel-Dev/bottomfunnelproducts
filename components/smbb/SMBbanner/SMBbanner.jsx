import React from 'react'
import styles from "./SMBbanner.module.css";
import Image from 'next/image';
export const SMBbanner = () => {
    return (
        <div className={styles.sMBbannerParent}>
            <div className={styles.sMBbannerImage}>
                <Image
                    src={"/Images/sbm/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.sMBbannerContent}>
                <h1>
                    Build your business with customer messaging and bots
                </h1>
                 <h5>
                    Use Bottom Funnel chats AL-powered messaging capabilities to help your team provide the best possible customer service wherever your customers are
                 </h5>
                 <button>Sign up</button>
            </div>

        </div>
    )
}