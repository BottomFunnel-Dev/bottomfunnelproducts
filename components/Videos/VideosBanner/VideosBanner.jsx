import React from 'react'
import styles from "./VideosBanner.module.css"
import Image from 'next/image'

export default function VideosBanner () {
  return (

    <div className={styles.videoBannerMainDiv}>
        <div className={styles.videoBannerImage}>
        <Image
            src={"/Images/video/banner.png"}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%"}}
            />

            <div className={styles.videoBannerText}>
                <h2>From our client reviews to our best tools everything under one roof</h2>
            </div>
        </div>
    </div>
    )
}