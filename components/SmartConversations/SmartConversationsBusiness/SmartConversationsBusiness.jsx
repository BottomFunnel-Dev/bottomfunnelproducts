import React from 'react'
import styles from "./SmartConversationsBusiness.module.css"
import Image from 'next/image'

export default function SmartConversationsBusiness () {
  return (
    <div className={styles.smartConversationsBusinessMainDiv}>
        <div className={styles.smartConversationsBusinessHeading}>
            <h2>It's more than just talk.Here's what smarter conversations mean for your business.</h2>
            <div className={styles.smartConversationsBusinessImagesDiv}>
                <div className={styles.smartConversationsBusinessImages}>
                    <h5>Efficient Operations</h5>
                    <p>Enable business leaders to achieve more with less improve agent productivity, save on hirring costs</p>
                    <div className={styles.smartConversationsBusinesspic}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/smartConversations/one.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                    </div>
                </div>
                <div className={styles.smartConversationsBusinessImages}>
                    <h5>Automated Support</h5>
                    <p>Offer customer support through intuitive <br/> self-service</p>
                    <div className={styles.smartConversationsBusinesspic}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/smartConversations/two.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                    </div>
                </div>
            </div>

            <div className={styles.smartConversationsBusinessImagesDiv}>
                <div className={styles.smartConversationsBusinessImages}>
                    <h5>Unified Messaging</h5>
                    <p>Talk to customers on their preferred messaging channels & unify their experience.</p>
                    <div className={styles.smartConversationsBusinesspic}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/smartConversations/three.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                    </div>
                </div>
                <div className={styles.smartConversationsBusinessImages}>
                    <h5>Empowered agents</h5>
                    <p>Help agents onboard quickly and deliver delightful customer experience.</p>
                    <div className={styles.smartConversationsBusinesspic}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/smartConversations/four.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
