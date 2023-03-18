import React from 'react'
import styles from "./Healthcarefeatures.module.css";
import Image from 'next/image';

export const Healthcarefeatures = () => {
  return (
    <div>
         <div>
   <div className={styles.Healthcarefeaturesmaindiv}>
    <div className={styles.Healthcarefeaturesmaindivcontent}>
        <h2>Capture all interactions and know your patients inside out</h2>
        <p>
        Freshsales unifies every record across a patient's medical history in one place by
        </p>
        <ul>
            <li> Giving a complete view of every patient’s contact details, social media profile, the doctor assigned, and medical bills</li>
        <li>Providing notes on the side for your staff to type down the patients’ symptoms, diagnosis, medication, and treatments for future reference</li>
        <li>Syncing with calendar to schedule and view upcoming appointments with the doctor</li>
        <li>Pulling together every conversation via email, chat, SMS, and phone call.</li>
        </ul>
    </div>
    <div className={styles.Healthcarefeaturesmaindivcontentimage}>
    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/healthcaresales/screen1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>


   <div className={styles.Healthcarefeaturesmaindiv}>
    <div className={styles.Healthcarefeaturesmaindivcontent}>
        <h2>Increase productivity with customized view of contacts </h2>
        <p>
        You have many patients walking in everyday. And it can get overwhelming for your hospital staff to keep track of all your patients and payments and other activities. With a modern CRM like Freshsales,
        </p>
        <p>you can customize the way your team views contacts - either in a list, table or Kanban view. They can also automate workflows with ready-to-use templates within the CRM like for setting up doctor appointments and sending payment reminder emails.</p>
        <p>With a healthcare CRM like Freshsales, you can organize customer data the way you want, access them on one screen, and perform your daily tasks faster than before</p>
        
    </div>
    <div className={styles.Healthcarefeaturesmaindivcontentimage}>
    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/healthcaresales/screen2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.Healthcarefeaturesmaindiv}>
    <div className={styles.Healthcarefeaturesmaindivcontent}>
        <h2>Gain instant visibility to medical bills</h2>
        <p>
        With a great number of patients coming in every day for different purposes, it is challenging to keep an eye on the billing process of each of them. With an easy-to-use healthcare CRM software, your staff can track the bills of each patient using a visual pipeline. 
        </p>
       <p>Freshsales provides multiple pipelines that allow you to customize the billing process for each department. You could also create a separate pipeline for doctors to calculate their commissions for each treatment performed.</p>
    </div>
    <div className={styles.Healthcarefeaturesmaindivcontentimage}>
    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/healthcaresales/screen3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.Healthcarefeaturesmaindiv}>
    <div className={styles.Healthcarefeaturesmaindivcontent}>
        <h2>Never miss a beat  </h2>
        <p>
        Help your staff hold the day together by automating everyday mundane tasks. Intelligent workflows in a healthcare CRM like Freshsales boost productivity by automating
        </p>
 
        <ul>
            <li>Repetitive tasks such as sending appointment confirmation emails, invoice generation</li>
        
        <li>Appointment reminders to patients and doctors</li>
        
        <li> Patient management tasks such as notifying the doctor with the patient details and timings as soon as an appointment is booked.</li>
        </ul>
        <p>A healthcare CRM like Freshsales also offers pre-designed workflow templates that can help your staff automate routine tasks that eat into their time. </p>
    </div>
    <div className={styles.Healthcarefeaturesmaindivcontentimage}>
    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/healthcaresales/screen4.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.Healthcarefeaturesmaindiv}>
    <div className={styles.Healthcarefeaturesmaindivcontent}>
        <h2>Make data-driven decisions with reports </h2>
        <p>
        With a medical sales software, cut through the noise and understand precisely
        </p>
    
        <ul>
            <li>Which branch or clinic has the most number of patient visits</li>
        
        <li>Which department brings you the most revenue, and which ones need more push</li>
        
        <li> The performance of your doctors and the revenue each of them generates.</li>
        
        </ul>
        <p>You can create reports and export them as CSV or PDF, create a dashboard to gain instant visibility on the overall performance, and even schedule these reports to be mailed to you at regular intervals. </p>
        <p>Freshsales CRM also provides out-of-the-box reports and dashboards that can help you stay on top of key metrics. You can also navigate between reports to get context and track team performance. Reports can be shared automatically on a monthly or any periodic basis. </p>
    </div>
    <div className={styles.Healthcarefeaturesmaindivcontentimage}>
    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/healthcaresales/screen5.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>
    </div>
    </div>
  )
}
