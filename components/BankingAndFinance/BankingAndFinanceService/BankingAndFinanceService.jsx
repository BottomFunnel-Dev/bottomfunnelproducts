import React from 'react'
import styles from "./BankingAndFinanceService.module.css"
import Image from 'next/image'

export default function BankingAndFinanceService () {
  return (
    <div className={styles.bankingFinanceServiceMainDiv}>
        <div className={styles.bankingFinanceServiceContainer}>
             
             <div className={styles.bankingFinanceServiceBox}>
                <h4>Unrivaled time to value</h4>
                <div className={styles.bankingFinanceServiceImages}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/vector1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                </div>
                <p>Our products are easy to configure and just work! You don't need an army of developers to maintain our platform. Innovative software that's actually simple.</p>
             </div>

             <div className={styles.bankingFinanceServiceBox}>
                <h4>Enterprise-grade</h4>
                <div className={styles.bankingFinanceServiceImages}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Image1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                </div>
                <p>Our secure, cloud-hosted platform scales with you and is customizable to match your unique needs with 640+ integrations and open APIs.</p>
             </div>

             <div className={styles.bankingFinanceServiceBox}>
                <h4>You can count on us</h4>
                <div className={styles.bankingFinanceServiceImages}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Image2.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                </div>
                <p>We're not just another vendor. From transparent pricing to partnership at every step of your journey, we are invested in making your business successful.</p>
             </div>

        </div>
        <div className={styles.bankingFinanceServiceHeadings}>
            <h2>Make Customer Service your competitive advantage</h2>
            <p>See how the Bottom Funnel Customer Service PLatform helps you deliver customer delight at scale.</p>
            <button>Start Demo</button>
        </div>
    </div>
  )
}
