import React from 'react'
import styles from "./SupportChannel.module.css"
import Image from 'next/image'


export const SupportChannel = () => {
    const datad = [{img:"/Images/MoveFromCostlyChannal/image 23.png",hd:"Email",p:"Has high resolution times, causing frequent backlogs and poor customer experiences"},
    {img:"/Images/MoveFromCostlyChannal/image 23 (1).png",hd:"Phone",p:"Comes with a high cost per contact, requiring heavy investments with growing volumes"},
    {img:"/Images/MoveFromCostlyChannal/image 23 (2).png",hd:"Live chat",p:"Requires you to constantly grow your team, increasing costs exponentially"},
]
  return (
    <div>

        <div className={styles.SupportChannelmaindivheading}>
            <h2>Conventional support channels struggle as you scale</h2>
        </div>
     <div className={styles.SupportChannelmaindiv}>
        {datad.map((item) => {
            return(
                <div className={styles.SupportChannelinnerdiv}>
                <div className={styles.SupportChannelinnerdivlogo}>
                     <div className={styles.SupportChannelinnerdivlogoimage}> 
                        <Image
                            src={item.img}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
    
                        />
                        </div>
                     <div className={styles.SupportChannelinnerdivlogoheading}>
                        <h5>{item.hd}</h5>
                        </div>
                </div>
                <div className={styles.SupportChannelinnerdivcontent}>
                    <p>{item.p}</p>
                </div>
            </div>  
            );
        })}
        
        
     </div>
    </div>
  )
}
