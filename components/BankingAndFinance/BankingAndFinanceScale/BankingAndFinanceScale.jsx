import React from 'react'
import styles from "./BankingAndFinanceScale.module.css"
import Image from 'next/image'

export default function BankingAndFinanceScale () {
  return (
    <>
    <div className={styles.bankingAndFinancescaleMain}>
        <div className={styles.bankingAndFinancescaletext}>
            <h1>Be customer-friendly at scale</h1>
            <p>Efficiently engage in 1-1 conversations to help your customers with everything from filling forms online to solving payment errors.</p>
            <ul>
                <li>
                   Be available on all channels including on email, phone, live chat, telephone, social media, and messaging app
                </li>
                <li>
                    Reduce call wait-time by offering real-time support live-chat and instant messaging channels
                </li>
                <li>
                    Resolve service requests faster with a 360-degree view of customers
                </li>
                <li>
                    Reduce costs with our native solutions for live chat and telephony by saving on agent licenses
                </li>
            </ul>
        </div>
        <div className={styles.bankingAndFinancescaleimg}>
            <Image
            src={"/Images/bankingandfinance/customer.webp"}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
    </div>

    <div className={styles.bankingAndFinancescaleMain1}>
        <div className={styles.bankingAndFinancescaleimg}>
        <Image
        src={"/Images/bankingandfinance/Capitalize.webp"}
        alt={"img"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.bankingAndFinancescaletext}>
        <h1>Capitalize on self-service</h1>
        <p>Ease customer anxiety about critical financial transactions by offering intuitive self-service options that enable them to find immediate solutions. </p>
        <ul>
            <li>
                Publish a customized support center with FAQs
            </li>
            <li>
                Provide conversational self-service with easy-to-launch AI-chatbots
            </li>
            <li>
                Offer one-click assistance on your website and mobile app using smart widgets
            </li>
        </ul>
        </div>
    </div>

    <div className={styles.bankingAndFinancescaleMain}>
        <div className={styles.bankingAndFinancescaletext}>
            <h1>Optimize for speed and efficiency </h1>
            <p>Banking and finance customers expect the highest degree of data privacy, and quick, reliable service. Offer fast and personalized support  with Bottom Funnel, an easy-to-use and secure customer service software.</p>
            <button>Start Demo</button>
        </div>
        <div className={styles.bankingAndFinancescaleimg}>
            <Image
            src={"/Images/bankingandfinance/Optimize.webp"}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
    </div>

    <div className={styles.bankingAndFinancescaleMain1}>
        <div className={styles.bankingAndFinancescaleimg}>
        <Image
        src={"/Images/bankingandfinance/dataLead.webp"}
        alt={"img"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.bankingAndFinancescaletext}>
        <h1>Invest in building better customer relationships.</h1>
        <p>Banking and finance customers expect the highest degree of data privacy, and quick, reliable service. Offer fast and personalized support  with Bottom Funnel, an easy-to-use and secure customer service software.</p>
        <button>Start Demo</button>
        </div>
    </div>

    <div className={styles.bankingAndFinancescaleMain}>
        <div className={styles.bankingAndFinancescaletext}>
            <h1>Invest in building better customer relationships.</h1>
            <p>Banking and finance customers expect the highest degree of data privacy, and quick, reliable service. Offer fast and personalized support  with Bottom Funnel, an easy-to-use and secure customer service software.</p>
            <button>Start Demo</button>
        </div>
        <div className={styles.bankingAndFinancescaleimg}>
            <Image
            src={"/Images/bankingandfinance/StaySafe.webp"}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
    </div>
</>
  )
}
