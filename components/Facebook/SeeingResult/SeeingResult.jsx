import React from 'react'
import styles from "./SeeingResult.module.css"
import Image from 'next/image'


export const SeeingResult = () => {
  return (
    <div>
       <div className={styles.SeeingResultcomponnent}>
        <h3>Start seeing results in real-time</h3>
        <p>Read, respond, and manage message from your Customers in one place make use of canned responses and FAQs to offer effortless digital customer service get insights into your facebook conversations without leaving your Bottomfunnel-chat account.</p>
        <div className={styles.SeeingResultcomponnentimage}>
        <Image
                  src={"/Images/facebookphotos/banner bg1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
       </div>
       <div className={styles.SeeingResultcomponnentheading}>
       <h3>Content Categories</h3>
       </div>
       <div className={styles.SeeingResultmaindiv}>
       <div className={styles.SeeingResultmaindivrows}>
        <div className={styles.SeeingResultmaindivrowsimage}>
        <Image
            src={"/Images/facebookphotos/image 72.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        </div>
        <h5>All in one inbox</h5>
        <p>Brings conversations from web, mobile, and social messengers under one inbox </p>
       </div>

       <div className={styles.SeeingResultmaindivrows}>
        <div className={styles.SeeingResultmaindivrowsimage}>
        <Image
            src={"/Images/facebookphotos/image 73.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        </div>
        <h5>Integrate with your familiar apps</h5>
        <p>Connects with payments, order management, or CRM tools for real-time conversations on order updates, refunds and more </p>
       </div>

       <div className={styles.SeeingResultmaindivrows}>
        <div className={styles.SeeingResultmaindivrowsimage}>
        <Image
            src={"/Images/facebookphotos/image 77.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        </div>
        <h5>Privacy and Security</h5>
        <p> Secure with  OTP authentication, privacy modes, hipaa and GDPR compliance </p>
       </div>
       </div>
       
       <div className={styles.SeeingResultmaindiv}>
       <div className={styles.SeeingResultmaindivrows}>
        <div className={styles.SeeingResultmaindivrowsimage}>
        <Image
            src={"/Images/facebookphotos/image 74.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        </div>
        <h5>Manage multiple business hours</h5>
        <p>Brings conversations from web, mobile, and social messengers under one inbox </p>
       </div>

       <div className={styles.SeeingResultmaindivrows}>
        <div className={styles.SeeingResultmaindivrowsimage}>
        <Image
            src={"/Images/facebookphotos/image 75.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        </div>
        <h5>Support customers world wide </h5>
        <p>Brings conversations from web, mobile, and social messengers under one inbox </p>
       </div>

       <div className={styles.SeeingResultmaindivrows}>
        <div className={styles.SeeingResultmaindivrowsimage}>
        <Image
            src={"/Images/facebookphotos/image 76.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        </div>
        <h5>Control agent access</h5>
        <p>Brings conversations from web, mobile, and social messengers under one inbox </p>
       </div>
       </div>
    </div>
  )
}
