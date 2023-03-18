import React from 'react'
import styles from "./EmailIntegrationCards.module.css";
import Image from 'next/image';

export const EmailIntegrationCards = () => {
  return (
    <div>
        <div className={styles.EmailIntegrationCards}>
         <div className={styles.EmailIntegrationCardsinner}>
             <div className={styles.EmailIntegrationCardsmainbox}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>Stay focused on selling with the two-way email sync</h3>
                  <p>Level up your email management by connecting your email inbox to Freshsales. With the two-way email sync, your calendar and existing conversations are automatically connected, and all incoming messages are intelligently mapped to the respective contacts and deals. Start sending emails, and record your contacts’ responses, all from a single platform. Avoid the constant tab switching, and be more productive.</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/EmailIntegrationphotos/bannerr (13).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>

             <div className={styles.EmailIntegrationCardsmainbox}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>Run outbound campaigns from your CRM</h3>
                  <p>Manage all your campaigns from within your CRM. Send emails in bulk, or run personalized outbound campaigns based on your prospects’ activities and behavior with Sales Sequences and Workflows. Reach out to your mailing list in seconds and continue crushing your sales targets with the smartest CRM in town.

Using workflow templates, you can enable a workflow by simply clicking a button or can edit an existing template to add more conditions and make it live.</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/EmailIntegrationphotos/bannerr (14).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>

             <div className={styles.EmailIntegrationCardsmainbox1}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>Deploy campaigns swiftly with email templates</h3>
                  <p>Free yourself from the mundane task of typing the same email repeatedly, and let our sales CRM take care of this for you. Create and save your well-crafted personalized emails as templates and send campaigns faster than ever.</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/EmailIntegrationphotos/bannerr (16).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>



             <div className={styles.EmailIntegrationCardsmainbox1}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>Analyze email performance</h3>
                  <p>Measure the results of your email campaigns to understand if your efforts are making an impact. Know which email templates are performing well and ones that don’t by tracking the open and click rates of different emails that you have sent. </p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/EmailIntegrationphotos/bannerr (15).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>
            </div>   

        </div>
    </div>
  )
}
