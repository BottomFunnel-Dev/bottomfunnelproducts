import React from 'react'
import styles from "./PowerBack.module.css"
import Image from 'next/image'

export const PowerBack = () => {
  return (
    <div>
          <div  className={styles.PowerBackmaindiv}>
        <div  className={styles.PowerBackmaindivheading}>
            <div className={styles.PowerBackmaindivheadingcontent}>
        <h3 >Engage with customers, wherever they are</h3>
<p>Be where your customers are. Deliver support on the messaging channels they prefer.</p>
</div>
<div className={styles.PowerBackmaindivheadingimage}>
<Image
                        src={"/Images/ProvideConvenientCustomerServicephotos/3-1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
</div>
</div>
<div className={styles.PowerBackmaindivcardsbg }>
<div className={styles.PowerBackmaindivcards } >
    
    <div className={styles.PowerBackmaindivcardsbox}>
     <h6>Give power back to your customers </h6>
     <hr/>
     <div className={styles.PowerBackmaindivcardsboximage}>
     <Image
                        src={"/Images/ProvideConvenientCustomerServicephotos/3-2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
    <p>Without being limited to real-time chats, customers can reach you outside available hours and continue the conversation at their own pace.

</p>
    </div>
    <div className={styles.PowerBackmaindivcardsbox} >
     <h6>Bring self-service to the customer</h6>
     <hr/>
     <div className={styles.PowerBackmaindivcardsboximage}>
     <Image
                        src={"/Images/ProvideConvenientCustomerServicephotos/3-3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
    <p>Enable AI-powered self-service and allow customers to resolve issues without agent intervention, significantly improving customer satisfaction.</p>
    </div>
</div>
</div>
<div className={styles.PowerBackmaindivcards}>
    <div className={styles.PowerBackmaindivcardsbox}>
     <h6>Simplify call center IVRs</h6>
     <hr/>
     <div className={styles.PowerBackmaindivcardsboximage}>
     <Image
                        src={"/Images/ProvideConvenientCustomerServicephotos/3-4.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
  <p>Traditional IVRs are confusing to navigate and time-consuming for customers, resulting in poor experiences and high drop-offs. Allow customers to switch to a user-friendly, visual IVR instead, on messaging channels.</p>
    </div>
   

<div className={styles.PowerBackmaindivcardsbox}>
     <h6>Provide contextual, personalized support</h6>
     <hr/>
     <div className={styles.PowerBackmaindivcardsboximage}>
     <Image
                        src={"/Images/ProvideConvenientCustomerServicephotos/3-5.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Eliminate the need for customers to repeat themselves, with an asynchronous messaging solution that preserves conversation history across devices.</p>
    </div>
   
</div>
      </div>
    </div>
  )
}
