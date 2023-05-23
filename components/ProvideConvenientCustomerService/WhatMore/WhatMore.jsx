import React from 'react'
import styles from "./WhatMore.module.css"
import Image from 'next/image'

export const WhatMore = () => {
  return (
    <div>
         <div  className={styles.WhatMoremaindiv}>
        <div  className={styles.WhatMoremaindivheading}>
        <h2 >What More You Get From Bottom Funnel?</h2>
</div>

<div className={styles.WhatMoremaindivcards } >
    <div className={styles.WhatMoremaindivcardsbox}>
        <div className={styles.WhatMoremaindivcardsboxinner}>
            <div className={styles.WhatMoremaindivcardsboxinnerimage}>
        <div className={styles.WhatMoremaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/ProvideConvenientCustomerService/4-1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Multichannel support</h6>
     <p>Let customers get in touch with you on the messaging apps of their choice.</p>
     </div>
    </div>
   
    <div className={styles.WhatMoremaindivcardsbox} >
    <div className={styles.WhatMoremaindivcardsboxinner}>
            <div className={styles.WhatMoremaindivcardsboxinnerimage}>
        <div className={styles.WhatMoremaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/ProvideConvenientCustomerService/4-2.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>AI-powered chatbots</h6>
     <p>Build complex bots with zero code to deflect low-touch issues. Follow up answers with bot flows that engage customers and lead them to resolution.</p>
     </div>
    </div>

    <div className={styles.WhatMoremaindivcardsbox}>
    <div className={styles.WhatMoremaindivcardsboxinner}>
            <div className={styles.WhatMoremaindivcardsboxinnerimage}>
        <div className={styles.WhatMoremaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/ProvideConvenientCustomerService/4-3.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Graceful agent transfers</h6>
     <p>For complex issues, allow the chatbot to transition the conversation to a human agent seamlessly.</p>
     </div>
    </div>  
</div>
<div className={styles.WhatMoremaindivcards} >
    <div className={styles.WhatMoremaindivcardsbox}>
    <div className={styles.WhatMoremaindivcardsboxinner}>
            <div className={styles.WhatMoremaindivcardsboxinnerimage}>
        <div className={styles.WhatMoremaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/ProvideConvenientCustomerService/4-4.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Campaigns</h6>
     <p>Send targeted emails, in-app, and push messages to customers based on their actions and personas.</p>
     </div>
    </div>
    <div className={styles.WhatMoremaindivcardsbox} >
    <div className={styles.WhatMoremaindivcardsboxinner}>
            <div className={styles.WhatMoremaindivcardsboxinnerimage}>
        <div className={styles.WhatMoremaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/ProvideConvenientCustomerService/4-5.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Effortless integrations</h6>
     <p>Allow customers to converse using their favorite apps and tools within the chatbot. Use the Freshchat marketplace to build integrations easily.</p>
     </div>
    </div>


   
   
</div>
      </div>
    </div>
  )
}
