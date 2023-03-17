import React from 'react'
import styles from "./ContactResolutionBanner.module.css"
import Image from 'next/image'


export const ContactResolutionBanner = () => {
  return (
    <div>
              <div className={styles.ContactResolutionBannermaindiv}>
   <div className={styles.ContactResolutionBannermaindivinner}>
    <h1 >Zero contact resolution to reduce customer friction</h1>
    <p>
Enable your customers to get answers to their questions by themselves for faster resolutions without human intervention.</p>
  <button className={styles.ContactResolutionBannermaindivbutton}>Start Your Free Trial</button>
   </div>
   <div className={styles.ContactResolutionBannerimage}>
   <Image
                        src={"/Images/contactresolutionphotos/icon.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
  </div>
    </div>
    </div>
  )
}
