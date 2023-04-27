import React from 'react'
import styles from "./Smbfooter.module.css"
import Slider from "react-slick";
import Image from 'next/image';
export const Smbfooter = () => {

  const smbfooterdata = [
        {
            htxt:"Collaborate with context",
            stxt:"Huddle with team members within a ticket to discuss possible solutions and answer without stepping on each other's toes.",
            icon:"/Images/SMB/Rectangle 12.webp",
        },
        {
            htxt:"Gather Customer Feedback",
            stxt:"Send out satisfaction surveys to your customers so they can tell you what they like about your service or when you need to put in that extra effort.",
            icon:"/Images/SMB/Rectangle 12-1.webp",
        },
        {
            htxt:"Streamline customer data",
            stxt:"Huddle with team members within a ticket to discuss possible solutions and answers without stepping on each other's toes.",
            icon:"/Images/SMB/Rectangle 12-2.webp",
        },
    ]
  return (

    
    <div className={styles.smbfootermainboxes}>
    <h2>Transform your support from good to great</h2>
    <div className={styles.smbfooterdatamappingbox}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg> */}
  {smbfooterdata.map((e)=>{
        return (
   
            <div className={styles.smbfooterslickerbox}>
       
            <h4>{e.htxt}</h4>
            <div className={styles.smbfooterslickerimg}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "20%", height: "20%" , objectFit:"contain"}}
        />
            </div>
         

            <p>{e.stxt}</p>
  
           
           
            </div>
        )
    })}
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg> */}
    </div>
    <div className={styles.footertextbutton}>
    <h3>Sign up for Bottom Funnel today</h3>
    <p>Start your 21-day free trial.No credit card required.No strings attached.</p>
    <button className={styles.footerbutonsbm}>Start free trail</button>
    
    </div>
    
    </div>

  )
}
