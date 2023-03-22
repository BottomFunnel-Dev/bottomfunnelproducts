import React from 'react'
import styles from "./BusinessMassaging.module.css"
import Image from 'next/image'

export const BusinessMassaging = () => {
  return (
    <div>

<div className={styles.BusinessMassagingsingup}>
                <h2>
                Unlock the full power of Apple Messages for Business
                </h2>
                <button className={styles.BusinessMassagingsingupbutton}>Sing Up For Free</button>
            </div>
          <div  className={styles. BusinessMassagingmaindiv}>
            
        <div  className={styles. BusinessMassagingmaindivheading}>
        <h2 >Freshchat make businesses successful with
Apple Business Messages</h2>
<p>Offer contextual, digital-first experiences that your customers and agents will love. </p>
</div>

<div className={styles. BusinessMassagingmaindivcards } >
    <div className={styles. BusinessMassagingmaindivcardsbox}>
        <div className={styles. BusinessMassagingmaindivcardsboxinner}>
            <div className={styles. BusinessMassagingmaindivcardsboxinnerimage}>
        <div className={styles. BusinessMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/smartphone 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>All in one inbox</h6>
     <p>Brings conversations from web, mobile, and social messengers into one inbox</p>
     
     </div>
    </div>
    <div className={styles. BusinessMassagingmaindivcardsbox}>
    <div className={styles. BusinessMassagingmaindivcardsboxinner}>
            <div className={styles. BusinessMassagingmaindivcardsboxinnerimage}>
        <div className={styles. BusinessMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/smartphone 1 (1).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6> Integrate with your familiar apps</h6>
     <p>Connects with payments, order management, or CRM tools for real-time conversations on order updates, refunds, and more</p>
     </div>
    </div>
    <div className={styles. BusinessMassagingmaindivcardsbox} style={{border:"none"}}>
    <div className={styles. BusinessMassagingmaindivcardsboxinner}>
            <div className={styles. BusinessMassagingmaindivcardsboxinnerimage}>
        <div className={styles. BusinessMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/chat-bot 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Privacy and security</h6>
     <p>Secure with OTP authentication, privacy modes, GDPR compliance</p>
     </div>
    </div>
</div>
<div className={styles. BusinessMassagingmaindivcards} style={{border:"none"}}>
    <div className={styles. BusinessMassagingmaindivcardsbox}>
    <div className={styles. BusinessMassagingmaindivcardsboxinner}>
            <div className={styles. BusinessMassagingmaindivcardsboxinnerimage}>
        <div className={styles. BusinessMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/smartphone 1 (2).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Manage multiple business hours</h6>
     <p>for your support teams working across different regions, times, or time zones.</p>
     </div>
    </div>

    <div className={styles. BusinessMassagingmaindivcardsbox}>
    <div className={styles. BusinessMassagingmaindivcardsboxinner}>
            <div className={styles. BusinessMassagingmaindivcardsboxinnerimage}>
        <div className={styles. BusinessMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/smartphone 1 (3).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Support customers worldwide</h6>
     <p>with our Live Translate feature. Also, our agent platform and customer messenger supports over 32 languages.</p>
     </div>
    </div>
    <div className={styles. BusinessMassagingmaindivcardsbox} style={{border:"none"}}>
    <div className={styles. BusinessMassagingmaindivcardsboxinner}>
            <div className={styles. BusinessMassagingmaindivcardsboxinnerimage}>
        <div className={styles. BusinessMassagingmaindivcardsboximage}>
     <Image
                        src={"/Images/Applebusinesschat/chat-bot 1 (1).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     </div>
     <h6>Control agent access</h6>
     <p>with advanced Roles and Permissions. Create special privileges and profiles that specify what an agent can see and do.</p>
     </div>
    </div>
   
</div>
      </div>
    </div>
  )
}
