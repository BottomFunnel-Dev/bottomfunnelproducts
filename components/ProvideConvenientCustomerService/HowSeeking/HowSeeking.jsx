import React from 'react'
import styles from "./HowSeeking.module.css"
import Image from 'next/image'

export const HowSeeking = () => {
  return (
    <div>
      <div  className={styles.HowSeekingmaindiv}>
        <div  className={styles.HowSeekingmaindivheading}>
        <h2 >First contact resolution is no longer enough.
Zero contact resolution is the way to go</h2>
</div>

<div className={styles.HowSeekingmaindivcards } >
    <div className={styles.HowSeekingmaindivcardsbox}>
        <div className={styles.HowSeekingmaindivcardsboxinner}>
            <div className={styles.HowSeekingmaindivcardsboxinnerimage}>
        <div className={styles.HowSeekingmaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProvideConvenientCustomerService/2-1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Long wait times</h6>
      <p>High volumes on conventional support channels such as email, phone, and live chat often lead to long queues of frustrated customers.</p>
     </div>
    </div>
   
    <div className={styles.HowSeekingmaindivcardsbox} >
    <div className={styles.HowSeekingmaindivcardsboxinner}>
            <div className={styles.HowSeekingmaindivcardsboxinnerimage}>
        <div className={styles.HowSeekingmaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProvideConvenientCustomerService/2-2.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Lack of context</h6>
     <p>Customers hate being made to repeat themselves to multiple agents for the same issue.</p>
     </div>
    </div>
</div>
<div className={styles.HowSeekingmaindivcards} >
    <div className={styles.HowSeekingmaindivcardsbox}>
    <div className={styles.HowSeekingmaindivcardsboxinner}>
            <div className={styles.HowSeekingmaindivcardsboxinnerimage}>
        <div className={styles.HowSeekingmaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProvideConvenientCustomerService/2-3.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Limited channels</h6>
     <p>Customers today prefer messaging a business over picking up the phone. But many businesses don’t give them that option.</p>
     </div>
    </div>
    <div className={styles.HowSeekingmaindivcardsbox} >
    <div className={styles.HowSeekingmaindivcardsboxinner}>
            <div className={styles.HowSeekingmaindivcardsboxinnerimage}>
        <div className={styles.HowSeekingmaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProvideConvenientCustomerService/2-4.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Agent-driven conversations</h6>
     <p>When customers can’t dictate the channel, time, and pace of support conversations, they don’t feel in charge of the resolution process.</p>
     </div>
    </div>


    <div className={styles.HowSeekingmaindivcardsbox}>
    <div className={styles.HowSeekingmaindivcardsboxinner}>
            <div className={styles.HowSeekingmaindivcardsboxinnerimage}>
        <div className={styles.HowSeekingmaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProvideConvenientCustomerService/2-5.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Poor self-service</h6>
     <p>Customers often want a quick response to straightforward issues. But inadequate self-service options leave them confused and disappointed.</p>
     </div>
    </div>
   
</div>
      </div>
    </div>
  )
}
