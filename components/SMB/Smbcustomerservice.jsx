import Image from 'next/image'
import React from 'react'
import styles from "./Smbcustomerservice.module.css"


export const Smbcustomerservice = () => {
    const smbcustomerservicedata = [
        {
            htxt:"Unify customer conversations",
            stxt:"Bring all customer issues from email,chat, phone or social media into bottom funnel, keep customers happy by creating fast, personalized customer experiences across channels.",
            link:"Learn more about multichannel support",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/SMB/one.json",
            icon:"/Images/SMB/Rectangle 9.webp",
        },

        {
            htxt:"Speed up resolutions",
            stxt:"Save time by automating routine, time-consuming actions, including routing customer request,following up, and gathering feedback.Answer questions in a click with canned responses.",
            link:"Increase agent productivity and engagement",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/SMB/two.json",
            icon:"/Images/SMB/Rectangle 10-1.webp",
        },

        {
            htxt:"Help Customers help themselves",
            stxt:"Enable customers to find answer on their own by publishing an on-brand FAQ portal.Self-service",
            link:"Offer self-service with FAQ portals",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/SMB/three.json",
            icon:"/Images/SMB/Rectangle 11.webp",
        },

        // {
        //     htxt:"Get actionable insights",
        //     stxt:"Track key metrics such as customer satisfaction score and average response time using customizable dashboards and reports to measure performance, increase accountability and make better decisions.",
        //     link:"Utilize reports to support better",
        //     img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SMB/Group 46.webp",
        //     icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SMB/Rectangle 10.webp",
        // },
    ]
  return (
    <div className={styles.smbcustomerservicemainboxes}>
    <h2>One SMB customer service solution for all your problems</h2>
    <div className={styles.smbcustomerservicedatamapping}>{smbcustomerservicedata.map((e)=>{
        return (
            <div className={styles.smbcustomerdataindi}>
            <div className={styles.smbcustomerindileftbox}>
            <div className={styles.smbcustomerindiicon}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" , objectFit:"contain", padding:"5px"}}
        />

            </div>
            <h3>{e.htxt}</h3>
            <p>{e.stxt}</p>
            <h6>{e.link} {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
            </h6>
            
            </div>
            <div className={styles.smbcustomerindirightbox}>
              <lottie-player
                src={e.img}
                background="transparent"
                speed="1"
                loop
                autoplay
                >
              </lottie-player>
            
            
            </div>            
            </div>
        )
    })}
    
   
    
    
    
    </div>
    
    </div>
  )
}
