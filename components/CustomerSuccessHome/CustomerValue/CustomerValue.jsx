import React from 'react'
import styles from "./CustomerValue.module.css";

export const CustomerValue = () => {
    const data = [
        {
        anm:"https://d3op2l77j7wnti.cloudfront.net/Animation/customerSucess/third.json",
        hd:"Proactively manage ‘At Risk’ customers",
        p:"Quickly see customer health with powerful alert rules that automatically identify which accounts require attention. When did your customer last log on? How active is each user? Any open tickets? Are they behind on a payment? Instantly discover where your customers require attention.",
        p2:"Support at-risk accounts before they churn and always be prepared with everything you need to know about your customer’s health."
        },
        {
        anm:"https://d3op2l77j7wnti.cloudfront.net/Animation/customerSucess/second.json",
        hd:"Transform firefighting into delight",
        p:"Underlying customer issues can fester for weeks, which is often too late. Reorient teams as time-killer firefighters to champions of customer delight with more alerts, workflows, and knowledge.",
        p2:"Move from reactive support to anticipating customer needs by capturing massive amounts of account data without compromising performance."
        },
        {
        anm:"https://d3op2l77j7wnti.cloudfront.net/Animation/customerSucess/fourth.json",
        hd:"Effortlesly grow customer value",
        p:"Easily manage key milestones in the customer lifecycle that impact your bottom line, such as churn, renewal, and expansion trends. Quickly understand the effectiveness of customer support programs in order to grow account usage and revenue.",
        p2:"Automate recurring account processes like onboarding, check-ins, and business reviews that prioritize and grow customer value.",
        },
        {
            anm:"https://d3op2l77j7wnti.cloudfront.net/Animation/customerSucess/first.json",
            hd:"Help leaders discover actionable customer trends",
            p:"Arm customer support leaders with key account trends that are critical to business performance such as product adoption, support effectiveness, and financial health."
            ,p2:"Quickly understand where customers stand in meeting their goals and optimize support coverage in order to deliver customer delight!"
            },
        
        ]
        
  return (
    <div>
        <div className={styles.CustomerValuemaindiv}>
           
            {data.map((e) => {
return (
    <div  className={styles.CustomerValuemaindivinner} >
    <div className={styles.CustomerValuemaindivimage}>

       <lottie-player
            src={e.anm}
            background="transparent"
            speed="1"
            loop
            autoplay
            >
        </lottie-player>
    </div>
    <div className={styles.CustomerValuemaindivcontain} >
        <h3>{e.hd}</h3>
        <p>{e.p}</p>
        <p>{e.p2}</p>
         </div>

</div>
)
})}


        </div>
    </div>
  )
}
