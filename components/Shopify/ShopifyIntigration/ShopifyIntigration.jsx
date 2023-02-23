import Image from 'next/image'
import React from 'react'
import styles from "./ShopifyIntigration.module.css"


export const ShopifyIntigration = () => {
    
const shopifyintegrationdata = [
    {
        htxt:"Shopify customizations",
        stxt:"Pre-built shopify playbooks, behavior segments and performance insights to boost sales and improve conversions.",
        icon:"/Images/Shopify/icon/vector 1.webp",
    },

    {
        htxt:"Conversational marketing and support ",
        stxt:"All your shopify online store data in one place for teams to understand customers and provide contextual experiences.",
        icon:"/Images/Shopify/icon/image 1.webp",
    },

    {
        htxt:"Multichannel engagement",
        stxt:"WhatsApp, SMS, Email & Chat in one solution to speak with customers in one solution to speak with customers in a channel of their choise with targeted messages.",
        icon:"/Images/Shopify/icon/image 2.webp",
    },

   

]


  return (
    <div className={styles.shopifyintegrationmainboxes}>
    <div className={styles.shopifyintegrationtextboxes}>
    <h2>Integrate your shopify store with Bottom Funnel Marketer to manage all customer interactions in one place</h2>
    <p>purpose-built for your shopify store to help you message sharper, convert faster and delight better.</p>
    </div>
    <div className={styles.shopifyintegrationboxingformapp}>{shopifyintegrationdata.map((e)=>{
        return (
            <div className={styles.shopifyintegrationdataindi}>
            <h4>{e.htxt}</h4>
<div className={styles.shopifyintegrationicons}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
        />
</div>
<p>{e.stxt}</p>
</div>
        )
    })}</div>
    </div>
  )
}
