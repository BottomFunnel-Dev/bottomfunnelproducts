import React from 'react'
import styles from "./SMSBanner.module.css";
import Image from 'next/image';

export const SMSBanner = () => {
    return (
        <div className={styles.smsbannerParent}>
            <div className={styles.smsbannerImage}>
                <Image
                    src={"/Images/sms/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.smsbannerContent}>
                <h1>

                    Elevate conversational messaging with SMS powered by best-in-class service provider  </h1>
                <hr />
                <h5>
                    Proactively engage your visitors and customers wherever they are with Journeys.
                </h5>
                <button>Explore Now</button>
            </div>

        </div>
    )
}