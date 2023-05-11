
import React from "react";
import styles from "./JourneyPersonalized.module.css";
import Image from "next/image";

export const JourneyPersonalized = () => {
   const need =[
    {
        img:"/Images/Journey/7792.png",
        hd:"Design your customer journey with the drag-and-drop editor",
        par:"Create your journey from scratch or edit pre-built journey with the visual editor to meet editor triggers,actions,condition, and control to launch your journeys bases on customer behavior"
    },
    {
        img:"/Images/Journey/7792.png",
        hd:"Trigger journeys bases on customers behavioral data",
        par:"With pre-built Shopify events,launch journey bases on customer's activity to have personalized engagement . with all your cutomer data point in one place,you can target campaigns to go out at the right time to the right audience using segments "
    }
   ]
    return (
        <div className={styles.JourneyPersonalizedParent}>
         <h1 className={styles.JourneyPersonalizedmainheading}>Create personalized customer journey for every need</h1>
            {need.map((items, index)=>{  
                return( 
                    <div>

                    {/* <div className={styles.JourneyPersonizedOnlyChild} id={'abcd-${index}'} > */}
                    <div className={index === 0 ? styles.FirstItem : styles.JourneyPersonizedOnlyChild} id={'abcd-${index}'} >
                        <div className={styles.bannerimage}>
                        <Image
                            src={items.img}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                        </div>
                        <div >
                            <h2>{items.hd}</h2>
                            <p className={styles.JourneyPersonalizedPara}>{items.par} </p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}