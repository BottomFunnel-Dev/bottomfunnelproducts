import React from 'react'
import styles from "./ConversationalEngagement.module.css"
import Image from 'next/image'

export const ConversationalEngagement = () => {
  return (
    <div>
        <div  className={styles.ConversationalEngagementmaindiv} >
            <h1>Unified and Contextual Conversational engagement</h1>
            <p>Make it easy for sales, marketing, and support teams to have proactive and meaningful conversations.</p>
        </div>

        <div className={styles.ConversationalEngagementimagediv}>
            <div className={styles.ConversationalEngagementcomponent}>
            <div className={styles.ConversationalEngagementimageinnerdiv} >
                <div className={styles.ConversationalEngagementimageinnerdivmain}>
                <Image
          src={"/Images/BottomFunnelChatphotos/screen1.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
                </div>
            </div>

            <div className={styles.ConversationalEngagementcontentmaindiv}>
                <div>
                    <h2>Intelligent conversation, anywhere</h2>
                </div>
                <div>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestiae sequi dolores sed, debitis possimus earum tempora molestias quae, ratione laudantium iste eveniet placeat quidem, nemo harum numquam aut rem.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam consequatur alias voluptatum incidunt earum nesciunt maxime exercitationem. Ad veritatis repellendus aliquam harum eius suscipit consequatur debitis ullam similique illo!</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magni voluptas blanditiis aliquid quibusdam aut optio numquam ducimus, perspiciatis repellendus nihil! Voluptatem atque dignissimos laboriosam asperiores velit recusandae, repellat fuga!</li>
                    </ul>
                </div>
            </div>
            </div>

            <div className={styles.ConversationalEngagementcomponent1}>
            <div className={styles.ConversationalEngagementimageinnerdiv} >
                <div className={styles.ConversationalEngagementimageinnerdivmain}>
                <Image
          src={"/Images/BottomFunnelChatphotos/screen2.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
                </div>
            </div>

            <div className={styles.ConversationalEngagementcontentmaindiv}>
                <div>
                    <h2>Simplified and contextual agent experiences</h2>
                </div>
                <div>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestiae sequi dolores sed, debitis possimus earum tempora molestias quae, ratione laudantium iste eveniet placeat quidem, nemo harum numquam aut rem.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam consequatur alias voluptatum incidunt earum nesciunt maxime exercitationem. Ad veritatis repellendus aliquam harum eius suscipit consequatur debitis ullam similique illo!</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magni voluptas blanditiis aliquid quibusdam aut optio numquam ducimus, perspiciatis repellendus nihil! Voluptatem atque dignissimos laboriosam asperiores velit recusandae, repellat fuga!</li>
                    </ul>
                </div>
            </div>
            </div>

            <div className={styles.ConversationalEngagementcomponent}>
            <div className={styles.ConversationalEngagementimageinnerdiv} >
                <div className={styles.ConversationalEngagementimageinnerdivmain}>
                <Image
          src={"/Images/BottomFunnelChatphotos/screen3.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
                </div>
            </div>

            <div className={styles.ConversationalEngagementcontentmaindiv}>
                <div>
                    <h2>Mordern, cost-effective support</h2>
                </div>
                <div>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestiae sequi dolores sed, debitis possimus earum tempora molestias quae, ratione laudantium iste eveniet placeat quidem, nemo harum numquam aut rem.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam consequatur alias voluptatum incidunt earum nesciunt maxime exercitationem. Ad veritatis repellendus aliquam harum eius suscipit consequatur debitis ullam similique illo!</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magni voluptas blanditiis aliquid quibusdam aut optio numquam ducimus, perspiciatis repellendus nihil! Voluptatem atque dignissimos laboriosam asperiores velit recusandae, repellat fuga!</li>
                    </ul>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}
