import React from 'react'
import styles from "./GetMore.module.css"
import Image from 'next/image'

export const GetMore = () => {
  return (
    <div>
    <div  className={styles.GetMoremaindiv}>
        <div  className={styles.GetMoremaindivheading}>
        <h2 >First contact resolution is no longer enough.
Zero contact resolution is the way to go</h2>
</div>

<div className={styles.GetMoremaindivcards } >
    <div className={styles.GetMoremaindivcardsbox}>
        <div className={styles.GetMoremaindivcardsboxinner}>
            <div className={styles.GetMoremaindivcardsboxinnerimage}>
        <div className={styles.GetMoremaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/smartphone 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Omnichannel support</h6>
     <p>Let your customers reach you, wherever they are: WhatsApp, Apple Business Chat, Facebook Messenger, etc.</p>
     
     </div>
    </div>
    <div className={styles.GetMoremaindivcardsbox}>
    <div className={styles.GetMoremaindivcardsboxinner}>
            <div className={styles.GetMoremaindivcardsboxinnerimage}>
        <div className={styles.GetMoremaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/chat-bot 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6> AI-powered chatbots</h6>
     
     <p>AI-powered automations that delight customers and get their intent - helping with faster, zero contact resolution.</p>
     </div>
    </div>
    <div className={styles.GetMoremaindivcardsbox} style={{border:"none"}}>
    <div className={styles.GetMoremaindivcardsboxinner}>
            <div className={styles.GetMoremaindivcardsboxinnerimage}>
        <div className={styles.GetMoremaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/smartphone 1 (1).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Graceful agent transfers</h6>
     
     <p>Your bot can also gracefully transfer to an agent when issues require empathy and personal attention.</p>
     </div>
    </div>
</div>
<div className={styles.GetMoremaindivcards} style={{border:"none"}}>
    <div className={styles.GetMoremaindivcardsbox}>
    <div className={styles.GetMoremaindivcardsboxinner}>
            <div className={styles.GetMoremaindivcardsboxinnerimage}>
        <div className={styles.GetMoremaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/smartphone 1 (2).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Campaigns</h6>
     
     <p>Reach out to customers with proactive campaigns, targeted emails, in-app and push messages to your customers, before they reach you.</p>
     </div>
    </div>
    <div className={styles.GetMoremaindivcardsbox} style={{border:"none"}}>
    <div className={styles.GetMoremaindivcardsboxinner}>
            <div className={styles.GetMoremaindivcardsboxinnerimage}>
        <div className={styles.GetMoremaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/smartphone 1 (3).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Effortless integrations</h6>
     
     <p>Freshchat marketplace lets you integrate the tools that you use into your messaging workflow to get all the context you need in one place.</p>
     </div>
    </div>
   
</div>
      </div>
    </div>
  )
}
