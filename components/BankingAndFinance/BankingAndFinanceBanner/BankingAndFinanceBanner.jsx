import React from 'react'
import styles from "./BankingAndFinanceBanner.module.css"
import Image from 'next/image'

export default function BankingAndFinanceBanner () {
  return (
    <div className={styles.bankingAndFinanceBannerMain}>
        <div className={styles.bankingAndFinanceBannerimg}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/banner.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.bankingAndFinanceBannertext}>
            <h1>Invest in building better customer relationships.</h1>
            <p>Banking and finance customers expect the highest degree of data privacy, and quick, reliable service. Offer fast and personalized support  with Bottom Funnel, an easy-to-use and secure customer service software.</p>
            <button>Start Demo</button>
        </div>
    </div>
  )
}
