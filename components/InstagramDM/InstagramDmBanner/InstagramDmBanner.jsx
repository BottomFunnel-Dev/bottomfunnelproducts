import React from 'react'
import styles from "./InstagramDmBanner.module.css"
import Image from 'next/image'

export default function InstagramDmBanner () {
  return (
    <div className={styles.instagramDmBannerMain}>
        <div className={styles.instagramDmBannerimg}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/InstagramDm/Group1.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.instagramDmBannertext}>
        <h1>Deliver delightfull experience on instagram</h1>
            <hr></hr>
            <p>Link multiple instagram Business accounts with Bottom Funnel and drive real-time conversations effortlessly</p>
            <button>Explore Now</button>
        </div>
    </div>
  )
}
