import React from 'react'
import styles from "./EmailIntegrationCards.module.css";
import Image from 'next/image';

export const EmailIntegrationCards = () => {
  //mapped data
 const emailcards =[
  {
    hd:"Stay focused on selling with the two-way email sync",
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/EmailIntegrationphotos/bannerr (13).webp",
    p:"Level up your email management by connecting your email inbox to Freshsales. With the two-way email sync, your calendar and existing conversations are automatically connected, and all incoming messages are intelligently mapped to the respective contacts and deals. Start sending emails, and record your contacts’ responses, all from a single platform. Avoid the constant tab switching, and be more productive.",
  },
  {
    hd:"Run outbound campaigns from your CRM ",
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/EmailIntegrationphotos/bannerr (14).webp",
    p:"Manage all your campaigns from within your CRM. Send emails in bulk, or run personalized outbound campaigns based on your prospects’ activities and behavior with Sales Sequences and Workflows. Reach out to your mailing list in seconds and continue crushing your sales targets with the smartest CRM in town. Using workflow templates, you can enable a workflow by simply clicking a button or can edit an existing template to add more conditions and make it live.",
  },
  {
    hd:"Deploy campaigns swiftly with email templates",
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/EmailIntegrationphotos/bannerr (16).webp",
    p:"Free yourself from the mundane task of typing the same email repeatedly, and let our sales CRM take care of this for you. Create and save your well-crafted personalized emails as templates and send campaigns faster than ever.",
  },
  {
    hd:"Analyze email performance",
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/EmailIntegrationphotos/bannerr (15).webp",
    p:"Measure the results of your email campaigns to understand if your efforts are making an impact. Know which email templates are performing well and ones that don’t by tracking the open and click rates of different emails that you have sent.",
  },
 ]
  return (
    <div>
        
         <div className={styles.EmailIntegrationCardsinner}>
          {emailcards.map((e) => {
            return(
              <div className={styles.EmailIntegrationCardsmainbox}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>{e.hd}</h3>
                  <p>{e.p}</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={e.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>

            )
          })}
            
            </div>   

       
    </div>
  )
}
