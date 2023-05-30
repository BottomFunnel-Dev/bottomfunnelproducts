import React from 'react'
import styles from "./EnterpriseBFChatNeed.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatNeed () {
    const d = [{img:"/Images/enterpriseBFChat/image1.png",hd:"Manage multiple business hours",p:"For Your support teams working across different regions,times or time zones."},
    {img:"/Images/enterpriseBFChat/image2.png",hd:"Control agent access",p:"With advanced roles and permissions.Create special privileges."},
    {img:"/Images/enterpriseBFChat/image3.png",hd:"Support customers worldwide",p:"With our live translate feature.Also, our agent platform and customer messenger supports over 32 languages."}]
  return (
    <div className={styles.enterpriseBFChatNeedMainDiv}>
        <div className={styles.enterpriseBFChatNeedHeading}>
            <h3>Granular level controls to fine-tune for the needs of enterprise</h3>
        </div>
        <div className={styles.enterpriseBFChatNeedContainer}>
            {d.map((item) => {
                 return(
                    <div className={styles.enterpriseBFChatNeedContainerBox}>
                    <div className={styles.enterpriseBFChatNeedImage}>
                    <Image
                        src={item.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                    </div>
                    <h3>{item.hd}</h3>
                    <p>{item.p}</p>
                </div>
                 );
            })}
           
           
        </div>
    </div>
  )
}
