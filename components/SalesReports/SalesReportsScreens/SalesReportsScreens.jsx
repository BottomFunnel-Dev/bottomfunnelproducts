import React from 'react'
import Image from 'next/image'
import style from "./SalesReportsScreens.module.css";

export const SalesReportsScreens = () => {
    const reportdata = [
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/salesreportimage/screen1.webp",
            hd:"Decipher data effortlessly with visual reports and dashboards",
            p:"With Bottom-Funnel robust analytics functionality, make data-driven decisions effortlessly, and improve your sales teams’ success rate. Right from monitoring leads’ website behavior to gauging the success of your marketing campaigns, deal insights, sales activities, etc., stay on top of your teams’ performance with visual reports and dashboards. Loaded with ready-to-use report templates, creating a sales report has never been simpler."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/salesreportimage/screen2.webp",
            hd:"Identify campaigns/ teams/salespersons that bring in revenue",
            p:"Pull out revenue metrics from your sales CRM by source, salesperson, territory, and more, with revenue analytics. Pinpoint the campaigns that work and the ones that don’t. Identify star performers on your team with the sales cycle and velocity reports; see which territories are leading sales."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/salesreportimage/screen3.webp",
            hd:"Track sales activities that lead to winning deals",
            p:"Use sales activity reports to cut through the noise and figure out exactly how your salespeople are approaching their deals. Analyze the different sales activities and obtain a holistic view of your team performance. Group and filter sales activities, generate graphs and add them to your dashboard for easy access."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/salesreportimage/screen4.webp",
            hd:"Understand sales cycles better",
            p:"With sales velocity reports, find out the time your team takes to convert sales qualified leads into paying customers. Understand the stages where your salespeople might be stuck in, and identify roadblocks to increase conversions."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/salesreportimage/screen5.webp",
            hd:"Analyze sales trends across your organization",
            p:"Use the sales reports to compare your efforts month on month. Make use of these numbers to make forecasts like predicting the expected close date for deals. Gain insights provided by our AI-powered CRM, to analyze sales activities and trends over the past week/month."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/salesreportimage/screen6.webp",
            hd:"Gain a holistic view of your business performance",
            p:"Know your business metrics inside out, and stay on top of your sales and marketing activities. With cross-module reporting in Freshsales, understand the impact of marketing campaigns on your sales performance. You can also create reports to gauge the success of individual/team’s achievements with respect to the sales goals that have been set for them."
        },
        
    ]
  return (
    <div>
        <div className={style.SalesReportsScreensmaindiv}>
           {reportdata.map((e) => {
            return(
<div  className={style.SalesReportsScreensmaininnerdiv}>
                <div className={style.SalesReportsScreensmaindivimage}>
                <Image
          src={e.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                </div>
                <div className={style.SalesReportsScreensmaindivcontent}>
                    <h2>{e.hd}</h2>
                    <p>{e.p}</p>
                </div>

            </div>

            );
           })} 

         


            

        </div>
    </div>
  )
}
