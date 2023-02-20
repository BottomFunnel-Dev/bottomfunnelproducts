import React from 'react'
import styles from "./OmniChannelSlids.module.css"
import Image from 'next/image'

export const OmniChannelSlids = () => {
  return (
    <div className={styles.OmniChannelSlidsmainpage}>
       <div className={styles.OmniChannelSlidsinnerdiv}>
        <div className={styles.OmniChannelSlidsinnerdivcards}>
        <div className={styles.OmniChannelSlidscontent}>
            <h3>Bottom-Funnel Support Desk</h3>
            <h5>Customer & agent delight made easy</h5>
            <ul>
                <li>Provide the best, most intuitive support across all channels.Proactively understand customer needs to serve excellence, the first time. </li>
                <li>Save time and reduce repetitive tasks. Help agents rapidly resolve customer inquiries with workforce automation and knowledge from one, unified platform.</li>
            </ul>
        </div>
        <div className={styles.OmniChannelSlidsinnerdivcardsimage}>
        <Image
          src={"/Images/Bottomfunnelomnichannelphotos/bannerbagground 9.webp"}
          alt={"Image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>

        </div>
        

       </div>

       <div className={styles.OmniChannelSlidsinnerdiv1}>
        <div className={styles.OmniChannelSlidsinnerdivcards1}>
        <div className={styles.OmniChannelSlidscontent}>
            <h3>Bottom-Funnel Chat</h3>
            <h5>Connect on channels that customers love</h5>
            <ul>
                <li>Provide the best, most intuitive support across all channels.Proactively understand customer needs to serve excellence, the first time. </li>
                <li>Save time and reduce repetitive tasks. Help agents rapidly resolve customer inquiries with workforce automation and knowledge from one, unified platform.</li>
            </ul>
        </div>
        <div className={styles.OmniChannelSlidsinnerdivcardsimage}>
        <Image
          src={"/Images/Bottomfunnelomnichannelphotos/bannerbagground 10.webp"}
          alt={"Image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>

        </div>
        

       </div>


       <div className={styles.OmniChannelSlidsinnerdiv}>
        <div className={styles.OmniChannelSlidsinnerdivcards}>
        <div className={styles.OmniChannelSlidscontent}>
            <h3>Bottom-Funnel Contact center</h3>
            <h5>Deliver field service that remote agents trust</h5>
            <ul>
                <li>Provide the best, most intuitive support across all channels.Proactively understand customer needs to serve excellence, the first time. </li>
                <li>Save time and reduce repetitive tasks. Help agents rapidly resolve customer inquiries with workforce automation and knowledge from one, unified platform.</li>
            </ul>
        </div>
        <div className={styles.OmniChannelSlidsinnerdivcardsimage}>
        <Image
          src={"/Images/Bottomfunnelomnichannelphotos/bannerbagground 11.webp"}
          alt={"Image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>

        </div>
        

       </div>


       <div className={styles.OmniChannelSlidsinnerdiv1}>
        <div className={styles.OmniChannelSlidsinnerdivcards1}>
        <div className={styles.OmniChannelSlidscontent}>
            <h3>Bottom-Funnel Field Service Management</h3>
            <h5>Customer & agent delight made easy</h5>
            <ul>
                <li>Provide the best, most intuitive support across all channels.Proactively understand customer needs to serve excellence, the first time. </li>
                <li>Save time and reduce repetitive tasks. Help agents rapidly resolve customer inquiries with workforce automation and knowledge from one, unified platform.</li>
            </ul>
        </div>
        <div className={styles.OmniChannelSlidsinnerdivcardsimage}>
        <Image
          src={"/Images/Bottomfunnelomnichannelphotos/bannerbagground 12.webp"}
          alt={"Image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>

        </div>
        

       </div>

       
    </div>
  )
}
