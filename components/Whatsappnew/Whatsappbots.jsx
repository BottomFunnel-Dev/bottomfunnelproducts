import Image from 'next/image'
import React from 'react'
import styles from "./Whatsappbots.module.css"

export const Whatsappbots = () => {

    const whatsappbotsdata = [
        {
            htxt:"JEWELERY BOT",
            stxt:"Jewellery bot helps customers bool store appointments via whatsapp.schedule home trails answer queries related to products, orders, payments, returns and exchanges.",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/whatsapp/components/Group 1000006246.webp",
            btn:"DEMO JEWELRY BOT"
        },

        {
            htxt:"BEAUTY AND WELLNESS BOT",
            stxt:"Beauty bot helps your customers pick the right products for their use in whatsApp, track orders,checkout link to complete purchase,and assists with information on your affliate programme.",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/whatsapp/components/Group 1000006245.webp",
            btn:"DEMO BEAUTY BOT"
        },

        {
            htxt:"APPAREL BOT",
            stxt:"Apparel bot displays your products in WhatsApp for customers to select and shop directly,answer order queries, helps with return and refunds and other customer queries.",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/whatsapp/components/Group 1000006277.webp",
            btn:"DEMO APPAREL BOT"
        },


    ]



  return (
    <div className={styles.whatsappbotsmainboxes}>
    <h2>See WhatsApp Bots in action</h2>
    <p>Our bots can be customized for your online store to work for you 24*7 - help your customers
    find the right products, answer questions and more.
    </p>
    <div className={styles.whatsappdatamapping}>{whatsappbotsdata.map((e)=>{
        return (
            <div className={styles.whatsappbotsdataindi}>
            <div className={styles.whatsappindiimgbox}>
            <Image
          src={e.img}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />

            </div>
            <div className={styles.whatsappinditxtbox}>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            <button className={styles.mappingbtn}>{e.btn}</button>
            </div>
            
            </div>
        )
    })}</div>



    </div>
  )
}
