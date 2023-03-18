import React from 'react'
import styles from "./CostlyChannelBanner.module.css"
import Image from 'next/image'

export const CostlyChannelBanner = () => {
  return (
    <div>
                          <div className={styles.CostlyChannelBannermaindiv}>
   <div className={styles.CostlyChannelBannermaindivinner}>
    <h1 >Make Customer Service a profit center</h1>
    <p>Adopt a digital-first approach to resolve faster, control costs, and scale customer service.</p>
  <button className={styles.CostlyChannelBannermaindivbutton}>Start Your Free Trial</button>
   </div>
   <div className={styles.CostlyChannelBannerimage}>
   <Image
                        src={"/Images/MoveFromCostlyChannal/OBJECTS.png"}
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
