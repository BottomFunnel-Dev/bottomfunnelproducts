import React from 'react'
import styles from "./Banner.module.css"
import Image from 'next/image'

export const Banner = () => {
  return (
    <div>
                    <div className={styles.ProvideConvenientBannermaindiv}>
   <div className={styles.ProvideConvenientBannermaindivinner}>
    <h1 >Make it easy for customers to reach you</h1>
    <p>Customers like to receive support on their own terms. Make it a convenient and hassle-free experience for them, every time.</p>
  <button className={styles.ProvideConvenientBannermaindivbutton}>Start Your Free Trial</button>
   </div>
   <div className={styles.ProvideConvenientBannerimage}>
   <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProvideConvenientCustomerServicephotos/banner.webp"}
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
