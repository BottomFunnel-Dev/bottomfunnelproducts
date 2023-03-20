import React from 'react'
import styles from "./VideosExplore.module.css"
import Image from 'next/image'

export default function VideosExplore () {
  return (

    <div className={styles.videoExploreMainDiv}>
        <div className={styles.videoExploreDiv}>
            <div className={styles.videoExploreImage1}>
                <Image
                    src={"/Images/video/Frame1.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                />
            </div>
            <div className={styles.videoExploreText}>
                <h2>Explore the power of people first-values</h2>
                <button>Discover More</button>
            </div>
            <div className={styles.videoExploreImage2}>
                <Image
                    src={"/Images/video/Group1.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                />
            </div>
        </div>
    </div>
    
    )
}