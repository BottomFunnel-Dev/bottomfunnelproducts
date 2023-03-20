import React from 'react'
import styles from "./OmniChannelSlids.module.css"
import Image from 'next/image'

export const OmniChannelSlids = () => {
  return (
    <div className={styles.OmniChannelSlidsmainpage}>
       {/* <div className={styles.OmniChannelSlidsinnerdiv}>
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
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Bottomfunnelomnichannelphotos/bannerbagground 9.webp"}
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
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Bottomfunnelomnichannelphotos/bannerbagground 10.webp"}
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
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Bottomfunnelomnichannelphotos/bannerbagground 11.webp"}
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
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Bottomfunnelomnichannelphotos/bannerbagground 12.webp"}
          alt={"Image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>

        </div>
        

       </div> */}

      <div className={styles.funnelEliteService}>
        <div className={styles.contentSide}>
          <button>Bottom Funnel Support Desk</button>
          <h2>Customer & Agent Delight Made Easy</h2>
          <p>
            Provide the most intutive support across all channels. Producively
            understand customer needs to serve excellence, the first time
          </p>
          <p>
            Save time and reduce repetitive tasks. Help agents rapidly resolve
            customer inquiries with workforce automation and knowledge from one
            unified platform
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.gifSideOmnichannel}>
            <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/Supportdesk/supportdesk.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
        </div>
      </div>

      <div className={styles.fieldEliteService}>
        <div className={styles.contentSide}>
          <button>Field Service Management</button>
          <h2>Deliver field service that remote agents trust</h2>
          <p>
            Now more than ever, field teams need to serve customers safely and
            effectively while working remotely. offer field service that remote
            agents can trust to easily resolve issues while on the road.
          </p>
          <p>
            Route service teams efficiently based on availability proximity and
            skillset. Offer customers real-time updates via conversational bots
            and simplified appointment scheduling
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.gifSideOmnichannel}>
            <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/Supportdesk/feildservice.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
        </div>
      </div>

      <div className={styles.funnelEliteService}>
        <div className={styles.contentSide}>
          <button>Bottom Funnel Contact Centre</button>
          <h2>Answer support calls Effortlessly</h2>
          <p>
            Have more effective phone conversations and connect customers to the
            right expert, from the begining.
          </p>
          <p>
            Prompt agents with a 360-degree customer view and guided resolutions
            to improve call productivity. Take advantage of the powerful routing
            engines that drastically reduce call wait times and achieve smarter
            escalations
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.gifSideOmnichannel}>
            <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/Supportdesk/contactcentre.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
        </div>
      </div>
      <div className={styles.fieldEliteService}>
        <div className={styles.contentSide}>
          <button>Bottom Funnel Chat</button>
          <h2>Connect on the channels that customers love</h2>
          <p>
            Impress customers with availability in their channel of choice, and
            seamless transitions at any point in their journey. Integrate a
            blend of conversational experiences including live-chat, web, mobile
            and contact center support.
          </p>
          <p>
            Help customers find answers fast. Launch Al-powered chatbots to
            easily guide customers in solving their questions.
          </p>

          <h5>Explore now</h5>

        </div>
        <div className={styles.gifOmnichannel}>
            <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/Supportdesk/chat.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
        </div>
      </div>

    </div>
  )
}
