import React from 'react'
import styles from "./CustomerValue.module.css";

export const CustomerValue = () => {
  return (
    <div>
        <div className={styles.CustomerValuemaindiv}>
            <div  className={styles.CustomerValuemaindivinner} >
                <div className={styles.CustomerValuemaindivimage}>

                   <lottie-player
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/customerSucess/third.json"}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        >
                    </lottie-player>
                </div>
                <div className={styles.CustomerValuemaindivcontain} >
                    <h3>Proactively manage ‘At Risk’ customers</h3>
                    <p>Quickly see customer health with powerful alert rules that automatically identify which accounts require attention. When did your customer last log on? How active is each user? Any open tickets?  Are they behind on a payment? Instantly discover where your customers require attention.</p>
                    <p>Support at-risk accounts before they churn and always be prepared with everything you need to know about your customer’s health.</p>
                    </div>
            </div>

            <div  className={styles.CustomerValuemaindivinner1} >
                <div className={styles.CustomerValuemaindivimage}>
                    <lottie-player
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/customerSucess/second.json"}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        >
                    </lottie-player>
                </div>
                <div className={styles.CustomerValuemaindivcontain} >
                    <h3>Transform firefighting into delight</h3>
                    <p>Underlying customer issues can fester for weeks, which is often too late. Reorient teams as time-killer firefighters to champions of customer delight with more alerts, workflows, and knowledge.</p>
                    <p>Move from reactive support to anticipating customer needs by capturing massive amounts of account data without compromising performance.</p>
                    </div>
            </div>

            <div  className={styles.CustomerValuemaindivinner} >
                <div className={styles.CustomerValuemaindivimage}>
                   <lottie-player
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/customerSucess/fourth.json"}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        >
                    </lottie-player>
                </div>
                <div className={styles.CustomerValuemaindivcontain} >
                    <h3>Effortlesly grow customer value</h3>
                    <p>Easily manage key milestones in the customer lifecycle that impact your bottom line, such as churn, renewal, and expansion trends. Quickly understand the effectiveness of customer support programs in order to grow account usage and revenue.</p>
                    <p>Automate recurring account processes like onboarding, check-ins, and business reviews that prioritize and grow customer value.</p>
                    </div>
            </div>
            <div  className={styles.CustomerValuemaindivinner1} >
                <div className={styles.CustomerValuemaindivimage}>
                   <lottie-player
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/customerSucess/first.json"}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        >
                    </lottie-player>
                </div>
                <div className={styles.CustomerValuemaindivcontain} >
                    <h3>Help leaders discover actionable customer trends</h3>
                    <p>Arm customer support leaders with key account trends that are critical to business performance such as product adoption, support effectiveness, and financial health.</p>
                    <p>Quickly understand where customers stand in meeting their goals and optimize support coverage in order to deliver customer delight!</p>
                    </div>
            </div>
        </div>
    </div>
  )
}
