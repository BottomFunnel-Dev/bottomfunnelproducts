import React from 'react'
import styles from "./ResolutionWay.module.css"
import Image from 'next/image'

export const ResolutionWay = () => {
  return (
   
     <div>
      <div  className={styles.ResolutionWaymaindiv}>
        <div  className={styles.ResolutionWaymaindivheading}>
        <h2 >First contact resolution is no longer enough.
Zero contact resolution is the way to go</h2>
</div>

<div className={styles.ResolutionWaymaindivcards } >
    <div className={styles.ResolutionWaymaindivcardsbox}>
     <h6>Scaling issues for growing businesses</h6>
     <div className={styles.ResolutionWaymaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/increase 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>High growth businesses experience a massive increase in customer and customer service volume which the team isn’t ready to handle, yet..</p>
    </div>
    <div className={styles.ResolutionWaymaindivcardsbox}>
     <h6>Complicated support systems</h6>
     <div className={styles.ResolutionWaymaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/increase 1 (1).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Agents juggle between multiple traditional channels (phone, email, and live chat) while customers endure excruciatingly long wait times.</p>
    </div>
    <div className={styles.ResolutionWaymaindivcardsbox} style={{border:"none"}}>
     <h6>Customer irks</h6>
     <div className={styles.ResolutionWaymaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/increase 1 (2).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Customers are already frustrated when they reach out and it doesn’t help when they repeat issues across teams or made to wait for a long time or are asked to get later appointments for help.</p>
    </div>
</div>
<div className={styles.ResolutionWaymaindivcards} style={{border:"none"}}>
    <div className={styles.ResolutionWaymaindivcardsbox}>
     <h6>Customers expect simple solutions</h6>
     <div className={styles.ResolutionWaymaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/increase 1 (3).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Traditional channels like phone and email require multiple collaborations between internal teams and long running customer service processes.</p>
    </div>
    <div className={styles.ResolutionWaymaindivcardsbox} style={{border:"none"}}>
     <h6>Reactive support is too slow</h6>
     <div className={styles.ResolutionWaymaindivcardsboximage}>
     <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactresolutionphotos/increase 1 (4).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>By the time agents understand the issue of the customer, and route them to the right teams, the customer is frustrated at the support experience and the issue itself</p>
    </div>
   
</div>
      </div>
      </div>
  
    
  )
}
