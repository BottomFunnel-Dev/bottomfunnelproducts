import React from 'react'
import styles from "./SupportChannel.module.css"
import Image from 'next/image'


export const SupportChannel = () => {
  return (
    <div>

        <div className={styles.SupportChannelmaindivheading}>
            <h2>Conventional support channels struggle as you scale</h2>
        </div>
     <div className={styles.SupportChannelmaindiv}>
        <div className={styles.SupportChannelinnerdiv}>
            <div className={styles.SupportChannelinnerdivlogo}>
                 <div className={styles.SupportChannelinnerdivlogoimage}> 
                    <Image
                        src={"/Images/MoveFromCostlyChannal/image 23.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                 <div className={styles.SupportChannelinnerdivlogoheading}>
                    <h5>Email</h5>
                    </div>
            </div>
            <div className={styles.SupportChannelinnerdivcontent}>
                <p>Has high resolution times, causing frequent backlogs and poor customer experiences</p>
            </div>
        </div>

        <div className={styles.SupportChannelinnerdiv}>
            <div className={styles.SupportChannelinnerdivlogo}>
                 <div className={styles.SupportChannelinnerdivlogoimage}> 
                    <Image
                        src={"/Images/MoveFromCostlyChannal/image 23 (1).png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                 <div className={styles.SupportChannelinnerdivlogoheading}>
                    <h5>Phone</h5>
                    </div>
            </div>
            <div className={styles.SupportChannelinnerdivcontent}>
          <p>Comes with a high cost per contact, requiring heavy investments with growing volumes</p>
            </div>
        </div>

        <div className={styles.SupportChannelinnerdiv}>
            <div className={styles.SupportChannelinnerdivlogo}>
                 <div className={styles.SupportChannelinnerdivlogoimage}> 
                    <Image
                        src={"/Images/MoveFromCostlyChannal/image 23 (2).png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                 <div className={styles.SupportChannelinnerdivlogoheading}>
                    <h5>Live chat</h5>
                    </div>
            </div>
            <div className={styles.SupportChannelinnerdivcontent}>
           <p>Requires you to constantly grow your team, increasing costs exponentially</p>
           
            </div>
        </div>
     </div>
    </div>
  )
}
