import React from 'react'
import styles from "./SalesActivities.module.css"
import Image from 'next/image'

export const SalesActivities = () => {
    const SalesActv = [
        {
         img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen1.webp",
         hd:"Make more sales on the go",
         p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen1.webp",
            hd:"Make more sales on the go",
            p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
           },
           {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen2.webp",
            hd:"Make more sales on the go",
            p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
           },
           {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen3.webp",
            hd:"Make more sales on the go",
            p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
           },
           {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen4.webp",
            hd:"Make more sales on the go",
            p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
           },
           {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen5.webp",
            hd:"Make more sales on the go",
            p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
           },
           {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Mobilesalesoffeaturesphotos/screen6.webp",
            hd:"Make more sales on the go",
            p:"In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal’s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting."
           }
    
 
    ]
  return (
    <div>
        <div className={styles.SalesActivitiesmaindiv}>
           <h2> Optimize your sales process with sales Activities</h2>
           <p>Start tracking sales activities and identify the ones that increase conversions with powerful reports. Get all the insights that you need to streamline your process and start closing deals faster than ever.</p>
        </div>
        <div className={styles.SalesActivitiesinnerdiv}>
            {SalesActv.map((e) => {
                return(
                    <div className={styles.SalesActivitiesinnerdivbox}>
                    <div className={styles.SalesActivitiesinnerdivboxcontent}>
                        <h2>{e.hd}</h2>
                        <p>{e.p}</p>
                    </div>
                    <div className={styles.SalesActivitiesinnerdivboximage}>
                    <Image
              src={e.img}
              alt={""}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />  
                    </div>
    
                </div>
                );
            })}
           
            
        </div>
    </div>
  )
}
