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
            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/customer.webp"}
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
        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Capitalize.webp"}
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
            <p>Empower agents to deliver assistance faster by getting the mundane and repetitive tasks out of their way. This goes a long way in increasing agent bandwidth without increasing headcount.</p>
            <ul>
                <li>
                    Increase team productivity by automating common tasks such as query assignment, following up, and gathering feedback
                </li>
                <li>
                    Complete complex backend processes such as customer due diligence and validation of financial documents in no time with agent-facing chatbots
                </li>
                <li>
                   Streamline support operations and securely digitize legacy banking processes with flexible APIs and 650+ one-click integrations
                </li>
            </ul>
        </div>
        <div className={styles.bankingAndFinancescaleimg}>
            <Image
            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/Optimize.webp"}
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
        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/dataLead.webp"}
        alt={"img"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.bankingAndFinancescaletext}>
        <h1>Let data lead the way</h1>
        <p>Identify roadblocks that are affecting customer experience in the industry, and continuously optimize your operations using live dashboards and advanced analytics to measure progress.</p>
        <ul>
            <li>
                Get key insights instantly with out-of-the-box reports
            </li>
            <li>
                Slice and dice data any way you want, to measure unique metrics
            </li>
            <li>
                Identify outliers in performance by drilling down on individual tickets
            </li>
        </ul>
        </div>
    </div>

    <div className={styles.bankingAndFinancescaleMain}>
        <div className={styles.bankingAndFinancescaletext}>
            <h1>Stay safe with state of the art security</h1>
            <p>Protecting your customer’s personal information is a top priority. Entrust Bottom funnel desk with the responsibility of keeping your customer’s data safe and secure.</p>
            <ul>
                <li>
                   Host your data in the US, EEA, IND or AU centers
                </li>
                <li>
                    Restrict login access outside of work by whitelisting only office network addresses
                </li>
                <li>
                    Equipped with HIPAA and GDPR-ready features
                </li>
            </ul>
        </div>
        <div className={styles.bankingAndFinancescaleimg}>
            <Image
            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bankingandfinance/StaySafe.webp"}
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
