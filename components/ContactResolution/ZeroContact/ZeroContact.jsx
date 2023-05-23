import React from 'react'
import styles from "./ZeroContact.module.css"
import Image from 'next/image'

export const ZeroContact = () => {
  return (
    <div>
          <div  className={styles.ZeroContactmaindiv}>
        <div  className={styles.ZeroContactmaindivheading}>
        <h2 >Zero contact resolution is the solution for the future,
presented today by Freshchat</h2>
</div>

<div className={styles.ZeroContactmaindivcards } >
    
    <div className={styles.ZeroContactmaindivcardsbox}>
     <h4>Offer ZCR for continuous conversations at scale</h4>
     <div className={styles.ZeroContactmaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/contactresolutionphotos/OBJECTS.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
        <li>Brands that have a high growth make use of digital-first customer service.</li>
        <li>With a self-service and automation-powered process, brands don’t worry about training hundreds of new agents as they scale up.</li>
     </ul>
    </div>
    <div className={styles.ZeroContactmaindivcardsbox} >
     <h4>Serve ZCR everywhere</h4>
     <div className={styles.ZeroContactmaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/contactresolutionphotos/Frame.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
        <li>With Omnichannel customer service, solve the problems that are created with multiple channels.</li>
        <li>Support customers who reach out from all your supported channels in a single place without delay.</li>
        <li>Achieve ZCR with robust self-service and automations powered by AI across your support channels.</li>
     </ul>
    </div>
</div>
<div className={styles.ZeroContactmaindivcards}>
    <div className={styles.ZeroContactmaindivcardsbox}>
     <h4>Deliver ZCR to enhance your customer experience</h4>
     <div className={styles.ZeroContactmaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/contactresolutionphotos/OBJECTS (1).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
        <li>Freshchat offers you the right set of tools that enable great self-service coverage, perfect answer suggestions, and AI-powered automations that are easy to set up.</li>
        <li>When customers experience zero contact resolution, they are no longer bound by the limitations of conventional channels like live chat.</li>
     </ul>
    </div>
   

<div className={styles.ZeroContactmaindivcardsbox}>
     <h4>Your customers expect uncomplicated solutions</h4>
     <div className={styles.ZeroContactmaindivcardsboximage}>
     <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/contactresolutionphotos/Illustration.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
     <li>Digital customer services are able to handle transactional customer service processes and simpler, repetitive interactions. Achieve zero contact resolution thanks to the power of digital-first customer service by Freshchat.</li>

     </ul>
    </div>
   
</div>
      </div>
    </div>
  )
}
