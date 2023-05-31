import React from 'react'
import styles from "./InstagramDmBanner.module.css"
import Image from 'next/image'

export default function InstagramDmBanner () {
  return (
    <div className={styles.instagramDmBannerMain}>
        <div className={styles.instagramDmBannerimg}>
        <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/InstagramDm/Group1.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.instagramDmBannertext}>
        <h1>Creating Delightful Experiences on Instagram</h1>
            <hr></hr>
            <p>Unleash the Power of Bottom Funnel's AI Chat Support to Engage and Delight Your Instagram Audience.</p>
            <button>Explore Now</button>
        </div>
    </div>
  )
}
