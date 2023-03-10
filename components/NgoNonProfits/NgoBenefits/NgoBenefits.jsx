import React from 'react';
import styles from "./NgoBenefits.module.css";
import Image from 'next/image';

export default function NgoBenefits () {
  return (
     <div className={styles.ngoBenefitsMainDiv}>
        <div className={styles.ngoBenefitsText}>
           <h2>How a help desk software benefits non-profit organizations</h2>
           <p>Running a non-profit/NGO means that you've got to stay on top of all inquiries and commmunication that comes in. When your cause is important, you've got to go the extra mile to get things done-like answering queestions quickly and accurately round the clock.</p>
        </div>
        <div  className={styles.ngoBenefitsData}>
            <div className={styles.ngoBenefitsdataText}>
                <h2>Unify all queries in a single screen</h2>
                <p>Using Bottom Funnel, non-profit organization can manage their conversations with clients and donors all in one place,irrrespective of whether it's via email,phone,chat or social media.</p>
                <ul>
                    <li>
                        Manage, Collaborate, and work on incoming emails faster.
                    </li>
                    <li>
                        Deliver instant,conversational support through live chat, whatsApp, or Facebook Messenger.
                    </li>
                    <li>
                        Set up multi-level IVRs and handle calls efficiently with our cloud-based telephony system.
                    </li>
                    <li>
                        Answer donor inquiries on social media platform like twitter or Instagram  from your help desk.
                    </li>
                </ul>
            </div>
            <div className={styles.ngoBenefitsImageDiv}>
                <div className={styles.ngoBenefitsImage}>
                    <Image
                        src={"/Images/ngoandnonProfits/Group7.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
            </div>
        </div>
        <div  className={styles.ngoBenefitsData}>
            <div className={styles.ngoBenefitsImageDiv}>
                <div className={styles.ngoBenefitsImage}>
                    <Image
                        src={"/Images/ngoandnonProfits/Group8.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
            </div>
            <div className={styles.ngoBenefitsdataText}>
                <h2>Empower your staff to be more productive</h2>
                <p>NGOs using Bottom Funnel benefit from our intelligent automation featres that save countless hours of work for you and your team by organizing tickets more efficiently and cutting down on repetitive tasks.</p>
                <ul>
                    <li>
                        Categorize inquiries with subjects tags and priority labels, and route them to the right team member.
                    </li>
                    <li>
                        Collaborate and assign shared ownership for requests with other members of your organization.
                    </li>
                    <li>
                        Use canned responses and templates to resppond to donors in a fews clicks.
                    </li>
                </ul>
            </div>
        </div>    

        <div  className={styles.ngoBenefitsData}>
            <div className={styles.ngoBenefitsdataText}>
                <h2>Facilitate self-help with an exhaustive knowledge base</h2>
                <p>When you have repeated questions from interested donors or volunteers, a robust knowledge base f  FAQs and step-by-step guides saves time for your team to focus on ppriority issues.</p>
                <ul>
                    <li>
                        Host search-friendly content with appropriate tags, titles and short descriptions.
                    </li>
                    <li>
                        Own customized self-service portals and community forums.
                    </li>
                    <li>
                        Auto-suggestions of relevant solution articles deflects support tickets.
                    </li>
                    <li>
                        Create articles in multiple languages to serve a global audience.
                    </li>
                </ul>
            </div>
            <div className={styles.ngoBenefitsImageDiv}>
                <div className={styles.ngoBenefitsImage}>
                    <Image
                        src={"/Images/ngoandnonProfits/Group9.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
            </div>
        </div>
        <div  className={styles.ngoBenefitsData}>
            <div className={styles.ngoBenefitsImageDiv}>
                <div className={styles.ngoBenefitsImage}>
                    <Image
                        src={"/Images/ngoandnonProfits/Group10.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
            </div>
            <div className={styles.ngoBenefitsdataText}>
                <h2>Monitor volunteers and staff on field service efficiently</h2>
                <p>Non-Profits and NGOs involve a lotof fieldwork to champion the cause they're commmitted to. Bottom Funnel allows you to give consistent and speedy responses through seamless field service management.</p>
                <ul>
                    <li>
                        Enable research teams to communicate with patients and control groups with ease.
                    </li>
                    <li>
                        Keep all research teams and lab teams on the same page by sharing ownership of tasks.
                    </li>
                    <li>
                        Make sure deadlines are met by setting up  multiple SLAs.
                    </li>
                </ul>
            </div>
        </div>    
     </div>
  )
}
