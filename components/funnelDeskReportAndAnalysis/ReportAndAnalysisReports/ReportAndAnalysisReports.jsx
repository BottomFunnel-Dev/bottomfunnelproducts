import React from 'react'
import styles from "./ReportAndAnalysisReports.module.css"
import Image from 'next/image'

export default function ReportAndAnalysisReports  () {
    const reportdata=[
        {
            img:"/Images/funnelReportanalysis/Vectors/Group 770717.webp",
            title:"Leverage  in-built Freshdesk reports to address business needs",
            para:"Use handcrafted reports from our library for quick insights. Save time and avoid manual work with an exhaustive set of actionable reports. With brand new visualization capabilities added to the product, you can easily understand large volume of data and present it to stakeholders with rich visuals and vibrant colours",
            fetr:"Learn more",
        },
        {
            img:"/Images/funnelReportanalysis/Vectors/Group 770730.webp",
            title:"Customize and just Do It Yourself with no code!",
            para:"With multiple ways to look at helpdesk reporting, Freshdesk Analytics lets you customize and build your reports in the way you want them — with absolutely no coding and minimal effort. Create reports on the fly without having to depend on a data analyst or external business intelligence tools. Turn every employee in your organization into a decision scientist.",
            fetr:"Learn more",
        },
        {
            img:"/Images/funnelReportanalysis/Vectors/Group 770691.webp",
            title:"Team Dashboards",
            para:"Customize your dashboards to showcase required metrics and enable your teams to make data-driven decisions to meet their support targets. A customized dashboard will give your agents visibility into the tickets that require immediate attention, help them quickly jump in, and assist the team thereby improving the overall metrics. It can also motivate them to make it to the top of the leaderboard.",
            fetr:"Learn more ",
        },
        {
            img:"/Images/funnelReportanalysis/Vectors/image 6.webp",
            title:"Extend Freshdesk Analytics capabilities with GoodData integration",
            para:"Create reports from scratch, send alerts to admins whenever there’s a spike/drop in numbers, access advanced statistical metrics, and more with this integration. Admins can stay on top of updates with the help of dynamic dashboards and KPI alerts whenever there is a spike/drop in numbers. Drill down data with the help of visualizations like bar charts, bullet charts, etc. ",
            fetr:"Learn more",
        },
    ]
  return (
    <div className={styles.reportsMain}>
        <div className={styles.reportsdiv}>
        {reportdata.map(({ img, title, para, fetr, idx }) => {
          return (
            <div key={idx} className={styles.reportsbox}>
                <div className={styles.reportsimg}>
                <Image
                    src={img}
                    alt={"SuitePage/icons/"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%", objectFit:"contain" }}
                    />
                </div>
                <div className={styles.reportstext}>
                    <h5>{title}</h5>
                    <p>{para}</p>
                    <h6>{fetr}</h6>
                </div>

            </div>
          );
        })}
        </div>
        <hr style={{border:"2px solid #ef4c23", width:"40%",backgroundColor:"#ef4c23", }}></hr>
    </div>
  )
}
