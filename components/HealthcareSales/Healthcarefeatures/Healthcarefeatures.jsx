import React from 'react'
import styles from "./Healthcarefeatures.module.css";
import Image from 'next/image';

export const Healthcarefeatures = () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/screen1.webp",
        hd:"Capture all interactions and know your patients inside out",
        p1:"Bottom Funnel Sales unifies every record across a patient's medical history in one place by",
        
        l1:"Giving a complete view of every patient’s contact details, social media profile, the doctor assigned, and medical bills",
        l2:"Providing notes on the side for your staff to type down the patients’ symptoms, diagnosis, medication, and treatments for future reference",
        l3:"Syncing with calendar to schedule and view upcoming appointments with the doctor .Pulling together every conversation via email, chat, SMS, and phone call.",
        },
    {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/screen2.webp",
        hd:"Increase productivity with customized view of contacts",
        p1:"You have many patients walking in everyday. And it can get overwhelming for your hospital staff to keep track of all your patients and payments and other activities. With a modern CRM like Bottom Funnel Sales,",
        p2:"You can customize the way your team views contacts - either in a list, table or Kanban view. They can also automate workflows with ready-to-use templates within the CRM like for setting up doctor appointments and sending payment reminder emails.",
        p3:"With a healthcare CRM like Bottom Funnel Sales, you can organize customer data the way you want, access them on one screen, and perform your daily tasks faster than before.",
      
    },
    {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/screen3.webp",
        hd:"Gain instant visibility to medical bills",
        p1:"With a great number of patients coming in every day for different purposes, it is challenging to keep an eye on the billing process of each of them. With an easy-to-use healthcare CRM software, your staff can track the bills of each patient using a visual pipeline.",

        p2:"Bottom Funnel Sales provides multiple pipelines that allow you to customize the billing process for each department. You could also create a separate pipeline for doctors to calculate their commissions for each treatment performed.",
       
    },
    {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/screen4.webp",
        hd:"Never miss a beat",
        p1:"Help your staff hold the day together by automating everyday mundane tasks. Intelligent workflows in a healthcare CRM like Bottom Funnel Sales boost productivity by automating",
        p2:"A healthcare CRM like Bottom Funnel Sales also offers pre-designed workflow templates that can help your staff automate routine tasks that eat into their time.",
      
        l1:"Repetitive tasks such as sending appointment confirmation emails, invoice generation",
        l2:"Appointment reminders to patients and doctors",
        l3:"Patient management tasks such as notifying the doctor with the patient details and timings as soon as an appointment is booked.",
        
    },
    {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/screen5.webp",
        hd:"Make data-driven decisions with reports",
        p1:"With a medical sales software, cut through the noise and understand precisely",
        p2:"You can create reports and export them as CSV or PDF, create a dashboard to gain instant visibility on the overall performance, and even schedule these reports to be mailed to you at regular intervals.",
        p3:"Bottom Funnel Sales CRM also provides out-of-the-box reports and dashboards that can help you stay on top of key metrics. You can also navigate between reports to get context and track team performance. Reports can be shared automatically on a monthly or any periodic basis.",
        l1:"Which branch or clinic has the most number of patient visits",
        l2:"Which department brings you the most revenue, and which ones need more push",
        l3:"The performance of your doctors and the revenue each of them generates.",
        
    }]

  return (
    <div>
         <div>
   
   {data.map((e) => {
return (
<div className={styles.Healthcarefeaturesmaindiv}>
    <div className={styles.Healthcarefeaturesmaindivcontent}>
        <h2>{e.hd}</h2>
        <p>
      {e.p1}
        </p>
        <ul>
       <li>{e.l1}</li>  
       <li>{e.l2}</li>  
       <li>{e.l3}</li>  
      
          </ul>
          <p>{e.p2}</p>
    <p>{e.p3}</p>
    </div>
    <div className={styles.Healthcarefeaturesmaindivcontentimage}>
    <Image
                        src={e.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   
   </div>
)
})}



   
    </div>
    </div>
  )
}
