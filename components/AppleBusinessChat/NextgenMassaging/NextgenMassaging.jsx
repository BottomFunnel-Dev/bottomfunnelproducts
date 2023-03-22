import React from 'react'
import styles from "./NextgenMassaging.module.css"
import Image from 'next/image'

export const NextgenMassaging = () => {
  return (
    <div>
         <div  className={styles.NextgenMassagingmaindiv}>
        <div  className={styles.NextgenMassagingmaindivheading}>
        <h2 >The next-gen messaging experience</h2>
        <p>Let your customers message you as easily as they message their friends and family</p>
</div>

<div className={styles.NextgenMassagingmaindivcards } >
    
    <div className={styles.NextgenMassagingmaindivcardsbox}>
     <h5>Be available for your customers on Apple Messages for Business</h5>
     <div className={styles.NextgenMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/image 24.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
      <li>Let your customers reach out to you on their preferred device and app.</li>
      <li>Empower your agents and bots to work together to offer exceptional service on Business Messages, with Freshchat.</li>
     </ul>
    </div>
    <div className={styles.NextgenMassagingmaindivcardsbox} >
     <h5>Simplify every customer interaction</h5>
     <div className={styles.NextgenMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/Frame.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
      <li>Enable your customers to get all the help they need in one place.</li>
      <li>Let your customers schedule appointments or meetings without having to leave the app.</li>
      <li>Offer instant, secure payment options with Apple Pay</li>
     </ul>
    </div>
</div>
<div className={styles.NextgenMassagingmaindivcards}>
    <div className={styles.NextgenMassagingmaindivcardsbox}>
     <h5>Future proof your customer service</h5>
     <div className={styles.NextgenMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/Frame (1).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
      <li>An effortless messaging experience for your customers and context-driven interactions for your team.</li>
      <li>Deliver great digital service experiences that your customers expect</li>
      <li>The future of messaging is mobile — be there to welcome your customers on Apple Messages for Business.</li>
     </ul>
    </div>
   

<div className={styles.NextgenMassagingmaindivcardsbox}>
     <h5>Automate repetitive conversations with AI</h5>
     <div className={styles.NextgenMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/image 25.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <ul>
      <li>Deflect repetitive, transactional service requests with AI-powered bots.</li>
      <li>Your agents can now focus oncomplex interactions that require a human touch</li>
      <li>Deliver seamless customer experiences with intuitive hand-off from bots to human agents.</li>
     </ul>
    </div>
   
</div>





      </div>
    </div>
  )
}
