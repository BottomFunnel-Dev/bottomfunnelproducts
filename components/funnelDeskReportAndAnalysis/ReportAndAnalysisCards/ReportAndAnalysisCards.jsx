import React from 'react'
import styles from "./ReportAndAnalysisCards.module.css"
import Image from 'next/image'

export default function ReportAndAnalysisCards () {
    const cardsdata=[
        {
            title:"Derive actionable insights by focussing on metrics that matter",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funnelReportanalysis/Icons/Rectangle 28.webp",
            para:"Avoid confusion with large redundant data. Gather accurate and essential information in a single click. With all new interactive filters, you can drill, drag & drop, search and change filters in a jiffy."
        },
        {
            title:"Access your data anywhere using mobile app Analytics",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funnelReportanalysis/Icons/Rectangle 30.webp",
            para:"Analyze your business on-the-go with responsive widgets and an easy mobile and tablet layout. Get granular data right at the tip of your fingers and make impactful decisions with just one click."
        },
        {
            title:"Improve visibility on performance using Analytics Collaborators",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funnelReportanalysis/Icons/Rectangle 29.webp",
            para:"Share key business performance with respect to customers, performance of collaborators from each team, products, and other areas like tickets."
        }
    ]

  return (
    <div className={styles.ReportAndAnalysisCardsMain}>
        <h2>Develop and build a data-driven culture with easy to use Analytics</h2>
        <div className={styles.ReportAndAnalysisCardsdiv}>
        {cardsdata.map(({ img, title, para, idx }) => {
            return(
        <div key={idx} className={styles.ReportAndAnalysisCardsbox}>
            <h5>{title}</h5>
            <div className={styles.ReportAndAnalysisCardsimg}>
            <Image
                src={img}
                alt={"R&A icons"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit:'contain' }}
            />
            </div>
            <p>{para}</p>
        </div>
          );
        })}
        </div>
    </div>
  )
}
