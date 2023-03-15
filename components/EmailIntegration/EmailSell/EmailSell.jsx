import React from 'react'
import styles from "./EmailSell.module.css";
import Image from 'next/image';


export const EmailSell = () => {
  return (
    <div className={styles.EmailSelltopdiv}>
        <div className={styles.EmailSellmaindiv}>
            <h2>
                Everythings you need to send emails that sell
            </h2>
            <p>Create and send sales emails that get read. With Freshsales, gain unmatched deliverability rates and productivity-boosting features that help you deliver the right emails at the right time. Make your email outreach more effective and speed up your sales cycle.</p>
           <div  className={styles.EmailSellmaincarddiv}>
            <div className={styles.EmailSellmaincarddivinner}>
                <h5>Schedule emails</h5>
                <div  className={styles.EmailSellmaincarddivinnerimage}>
                <Image
          src={"/Images/EmailIntegrationphotos/bannerr (3).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
                <p>Set your campaigns to go out at a specific date and time when your customers are most likely to read them.</p>
            </div>

            <div className={styles.EmailSellmaincarddivinner}>
                <h5>Set up real-time alerts</h5>
                <div  className={styles.EmailSellmaincarddivinnerimage}>
                <Image
          src={"/Images/EmailIntegrationphotos/bannerr (5).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
                <p>Get real-time alerts on email opens, link clicks, and new emails, and connect with your prospects at the right time.</p>
            </div>

            <div className={styles.EmailSellmaincarddivinner}>
                <h5>Forward emails</h5>
                <div  className={styles.EmailSellmaincarddivinnerimage}>
                <Image
          src={"/Images/EmailIntegrationphotos/bannerr (4).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
                <p>Sell from any inbox, forward or BCC emails, and follow up on conversations right from your CRM account.</p>
            </div>
           </div>

           <div  className={styles.EmailSellmaincarddiv}>
            <div className={styles.EmailSellmaincarddivinner}>
                <h5>Customize emails</h5>
                <div  className={styles.EmailSellmaincarddivinnerimage}>
                <Image
          src={"/Images/EmailIntegrationphotos/bannerr (6).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
                <p>Switch things up and capture your prospects’ attention with attractive colors and fonts using custom HTML code.</p>
            </div>

            <div className={styles.EmailSellmaincarddivinner}>
                <h5>Automate email communication</h5>
                <div  className={styles.EmailSellmaincarddivinnerimage}>
                <Image
          src={"/Images/EmailIntegrationphotos/bannerr (8).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
                <p>Use Sales Sequences and Workflows in Freshsales to automate your outbound email campaigns.</p>
            </div>

            <div className={styles.EmailSellmaincarddivinner}>
                <h5>Share email templates</h5>
                <div  className={styles.EmailSellmaincarddivinnerimage}>
                <Image
          src={"/Images/EmailIntegrationphotos/bannerr (7).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
                <p>Identify the emails that bring in the most responses and share the templates with your team for their reference.</p>
            </div>
           </div>
        
        </div>
    </div>
  )
}
