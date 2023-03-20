import React from 'react'
import styles from "./VideoSpotlight.module.css"
import Image from 'next/image'

export default function VideoSpotlight () {
  return (

    <div className={styles.videoSpotlightMainDiv}>
        <div className={styles.videoSpotlightHeading}>
          <h4>Customer Spotlight</h4>
        </div>
        <div className={styles.videoSpotlightContainerBox}>
            <div className={styles.videoSpotlightContainer}>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group2.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Travel Flap</h4>
                </div>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group3.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Amydus</h4>
                </div>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group4.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Yashika Fashions</h4>
                </div>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group5.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Next Holidays</h4>
                </div>
            </div>
            <div className={styles.videoSpotlightContainer}>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group6.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Blue Berry Travels</h4>
                </div>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group7.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>SPJ Electronics</h4>
                </div>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group8.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Voyla</h4>
                </div>
                <div className={styles.videoSpotlightBox}>
                  <div className={styles.videoSpotlightBoxImage}>
                    <Image
                        src={"/Images/video/Group5.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                  </div>
                  <h4>Next Holidays</h4>
                </div>
            </div>
        </div>
    </div>
    )
}