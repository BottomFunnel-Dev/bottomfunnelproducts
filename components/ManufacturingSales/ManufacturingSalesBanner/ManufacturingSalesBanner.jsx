import React from 'react'
import styles from "./ManufacturingSalesBanner.module.css";
 import Image  from 'next/image';

export const ManufacturingSalesBanner = () => {
  return (
    <div>
        <div className={styles.ManufacturingSalesBannermaindiv}>
   <div className={styles.ManufacturingSalesBannermaindivinner}>
    <h1 >CRM of Manufacturing</h1>
    <p>Redefine customer-centricity with the leading modern CRM for manufacturing</p>
   <button className={styles.ManufacturingSalesBannermaindivbutton}>Start Your Free Trial</button>
   </div>

   <div className={styles.ManufacturingSalesBannerannimation}>
     <lottie-player
                  src={"https://d3op2l77j7wnti.cloudfront.net/Animation/salesindustriesanimation/Manufacturing.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
  </div>
    </div>
    </div>
  )
}
