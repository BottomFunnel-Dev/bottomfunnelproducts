import React from 'react'
import styles from "./BankingAndFinanceLandscape.module.css"
import Image from 'next/image'

export default function BankingAndFinanceLandscape () {
  return (
    <div className={styles.bankingFinanceMainDiv}>
        <div className={styles.bankingFinanceHeading}>
           <h2>The changing landscape of customer service in banking and financial services: <br/>
                3 key trends </h2>
        </div>
        <div className={styles.bankingFinanceContainer}>
             
             <div className={styles.bankingFinanceBox}>
                <h4>On-Hold NO MORE</h4>
                <div className={styles.bankingFinanceImages}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Rectangle4.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                </div>
                <p>Speed and efficiency of service are rated by consumers as the most important service criterion.</p>
             </div>

             <div className={styles.bankingFinanceBox}>
                <h4>Safety First</h4>
                <div className={styles.bankingFinanceImages}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Rectangle5.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                </div>
                <p>82% of customers were concerned about visiting their branch in person and that 63% of those polled were now more willing to try digital applications.</p>
             </div>

             <div className={styles.bankingFinanceBox}>
                <h4>In with the new</h4>
                <div className={styles.bankingFinanceImages}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Rectangle3.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                </div>
                <p>73% of financial services customers would like banks and insurance companies to offer new ways of communicating.</p>
             </div>

        </div>
    </div>
  )
}
