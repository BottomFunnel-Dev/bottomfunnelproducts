import React from 'react'
import styles from "./TravelSystem.module.css";
import Image from "next/image"

export const TravelSystem = () => {
  return (
    <div>
     <div className={styles.TravelSystemmaindiv}>
            <div className={styles.TravelSystemmaindivcontent}>
            <h4>Bottom Funnel is an intuitive CRM system that works right out of the box and enables you to get work done without wandering around the tool. It is a one-stop solution for travel agencies like yours that seamlessly syncs with your business environment and helps you stay ahead of your game. </h4>
            </div>
            
            <div className={styles.TravelSystemmaindivimage}>
            <Image
                        src={"/Images/Travelagencysales/ststem.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
        </div>
    </div>
  )
}
