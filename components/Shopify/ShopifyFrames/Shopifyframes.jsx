import Image from 'next/image'
import React from 'react'
import styles from "./Shopifyframes.module.css"


export const Shopifyframes = () => {

    const shopifyframesdata = [
        {
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Shopify/Screens/Group 771177.webp",
            htxt:"Get more of the right customers,across multiple channels",
            stxt:{
                one:"Attract customers with segmented multichannel compaigns.",
                two:"Send out great looking email campaigns in minutes with 100+ templates and customize with the drag-and-drop editor.",
                three:"Convert visitors faster in real-time using live chat and chatbots.",
            }

        },

        {
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Shopify/Screens/Group 771194.webp",
            htxt:"Have meaningful conversations to drive engagement",
            stxt:{
                one:"Have conversations with customers across channels like Whatsapp,SMS email chat.",
                two:"Segment customers based on custom shopify events like first time visitors and more.",
                three:"understand customers through a 360° lens with unified marketing and support  touchpoints in one CRM.",
            }

        },

        {
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Shopify/Screens/Group 771197.webp",
            htxt:"Accelerate revenue round the clock with powerful automation.",
            stxt:{
                one:"upsell and cross-sell with over 20+ pre-built shopify Playbooks.",
                two:"set up chatbots to engage with customers when you are away or while you sleep.",
                three:"send personalized automated message like offer promotions based on customer behavior.",
            }

        },

        {
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Shopify/Screens/Group 771200.webp",
            htxt:"Delight customers through contextial multichannel support",
            stxt:{
                one:"support customers in real-time wth 1:1 live chat and 24*7 through chatbots.",
                two:"combine customer conversations across WhatsApp, Instagram, Google Business Messages and more in a single Agent Inbox.",
                three:"Gain complete insight into sustomer interactions with your brand.",
            }

        },

    ]

  return (
    <div className={styles.shopifyframesmainboxes}>{shopifyframesdata.map((e)=>{
        return (
            <div className={styles.shopifyframesindibox}>
             <div className={styles.shopifyframesindileftbox}>
             
             <Image
          src={e.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "80%", height: "50%", objectFit:"contain" }}
        />
             
             </div>

             <div className={styles.shopifyframesindirightboxes}>
             <h2>{e.htxt}</h2>
             <ul>
             <li>{e.stxt.one}</li>
             <li>{e.stxt.two}</li>
             <li>{e.stxt.three}</li>
             </ul>
             
             </div>

            </div>
        )
    })}
   
    
    </div>
  )
}
