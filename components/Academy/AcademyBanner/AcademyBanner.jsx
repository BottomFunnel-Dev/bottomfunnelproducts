import React from 'react'
import styles from "./AcademyBanner.module.css"
import Image from 'next/image'

export default function AcademyBanner () {
  return (
    <div className={styles.academyBanner}>

      <div className={styles.academyBannerImage}>
        <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/academy/banner.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%"}}
        />
      </div>

    <div className={styles.academyHeading}>
        <h2>Bottom funnel Academy</h2>
        <p>Customer service training and upskill for you and your team.</p>
        <button>Enroll Now</button>
        <button className={styles.academyButton}>Log In</button>
    </div>
    </div>
  )
}
