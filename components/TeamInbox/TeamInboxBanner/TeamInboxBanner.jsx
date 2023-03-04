import React from 'react'
import styles from "./TeamInboxBanner.module.css"
import Image from 'next/image'

export default function TeamInboxBanner () {
  return (
    <div className={styles.TeamInboxBannerMain}>
        <div className={styles.TeamInboxBannerimg}>
        <Image
          src={"/Images/MarketerTeamInbox/components/Frame.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.TeamInboxBannertext}>
        <h1>This is where the magic happens</h1>
            <hr></hr>
            <p>Give your team a workspace that's designed for ease, Productivity and collaboration </p>
            <button>Explore Now</button>
        </div>
    </div>
  )
}
