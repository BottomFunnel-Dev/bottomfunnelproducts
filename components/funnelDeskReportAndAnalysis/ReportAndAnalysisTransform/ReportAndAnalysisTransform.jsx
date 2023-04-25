import React from 'react'
import Image from "next/image";
import Styles from "./ReportAndAnalysisTransform.module.css"

export const ReportAndAnalysisTransform = () => {
  return (
    <div className={Styles.transformMain}>
        <h1>Transform your Business into an Insight-Driven Enterprise</h1>
        <div className={Styles.transformdiv}>
            <div className={Styles.transformtext}>
                <h2>With the analytics capabilities, you can: </h2>
                <ol className={Styles.list}>
                    <li>Monitor helpdesk productivity</li>
                    <li>Measure customer satisfaction</li>
                    <li>Optimize agent workload</li>
                    <li>Improve service efficiency</li>
                    <li>Resolve faster</li>
                </ol>
            </div>
            <div className={Styles.transformimg}>
            <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funnelReportanalysis/Vectors/Group.webp"}
          alt={"report analysis"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" , objectFit:"contain" }}
        />
            </div>
        </div>
    </div>
  )
}
