import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Whatasappcampaigns.module.css"

export const Whatasappcampaigns = () => {
    const [colorchange, Setcolorchange] = useState(false)


    const [imageChange, setImageChange]= useState("/Images/whatsapp/components/camp.webp")

    const handleImagechange = (imagepath) =>{
        setImageChange(() => imagepath)
    }

    const whatsappcampaignsdata = [
        {
            xtt:"Create and lunch code-free whatsApp Campaigns",
            img:"/Images/whatsapp/components/camp.webp"
        },

        {
            xtt:"Measure campaign's performance with Analytics & Reports",
            
            img:"/Images/whatsapp/components/Measure.webp"
        },

        {
            xtt:"Reach the right customers with advanced Segmentation",
            
            img:"/Images/whatsapp/components/Reach the right.webp"
        },

        {
            xtt:"Drive better engagement with rich multimedia messages",
            img:"/Images/whatsapp/components/Drivebetter.webp"
        },

        {
            xtt:"Automate Your engagement with Journeys",
            img:"/Images/whatsapp/components/Automate your engagement with  Journeys.webp"
        },

    ]

  return (
    <div className={styles.whatsappcampaignsmainboxes}>
    <h2>Run high-performing WhatsApp Campaigns</h2>
    <p>Create, preview and test your messages to your subscribers before you lunch.</p>
    <div className={styles.whatsappcampaigndatabox}>{whatsappcampaignsdata.map((e)=>{
        return (
            <div
            key={e.htxt} onClick={() => {
                handleImagechange(e.img)
                Setcolorchange(true)
            }}
            className={styles.shadowboxes}><h4>{e.xtt}</h4></div>
        )
    })}</div>

<div className={styles.shadowimagedownbox}></div>

<Image
          src={imageChange}
          alt={"imag"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "50%", height: "50%"??, objectFit:"contain", marginLeft:"25%"}}
????????????????/>

    </div>
  )
}
