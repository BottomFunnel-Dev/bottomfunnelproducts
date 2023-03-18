
import React from "react";
import styles from "./JourneyPersonalized.module.css";
import Image from "next/image";

export const JourneyPersonalized = () => {
    return (
        <div className={styles.JourneyPersonalizedParent}>

            <div>
            <h1 className={styles.JourneyPersonalizedmainheading}>Create personalized customer journey for every need</h1>
            <div className={styles.JourneyPersonizedOnlyChild}>
                <div className={styles.bannerimage}>
                <Image
                    src={"/Images/Journey/7791.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
                </div>
                <div style={{ marginLeft: "5%"}}>
                    <h2>Design your customer journey with the drag-and-drop editor</h2>
                    <p className={styles.JourneyPersonalizedPara}>Create your journey from scratch or edit pre-built journey with the visual editor
                        to meet editor triggers,actions,condition, and control to launch
                        your journeys bases on customer behavior </p>
                </div>
            </div>
            </div>
            <div>
            
            <div className={styles.JourneyPersonizedOnlyChild}>
               
                <div className={styles.JourneyPersonalizeddiv}>
                    <h2>Trigger journeys bases on customers behavioral data</h2>
                    <p className={styles.JourneyPersonalizedPara}>With pre-built Shopify events,launch journey bases on customer's activity 
                    to have personalized engagement . with all your cutomer data point in one place,you can 
                    target campaigns to go out at the right time to the right audience using segments  </p>
                </div>

                <div className={styles.bannerimage}> 
                <Image
                    src={"/Images/Journey/7792.png"}
                    alt={"img"}
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