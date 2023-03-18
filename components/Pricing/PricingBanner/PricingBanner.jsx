import { useState } from "react";
import React from "react";
import { PricingTrail } from "../PricingTrail/PricingTrail";
import styl from "./PricingBanner.module.css";
import Image from "next/image";
import styles from "../PricingTrail/PricingTrail.module.css"
import { PricingAddOns } from "../PricingAddOns/PricingAddOns";
import { PricingAddOnsChat } from "../PricingAddOns/PricingAddOnsChat";
import { PricingAddOnsSales } from "../PricingAddOns/PricingAddOnsSales";
import { PricingAddOnsServices } from "../PricingAddOns/PricingAddOnsServices";
import { PricingAddOnsmarketers } from "../PricingAddOns/PricingAddOnsmarketers";



export const PricingBanner = ({props}) => {
   

 const DeskTrail =(
    <>
    <div className={styles.PricingTrailParent}>

    <div className={styles.PricingTrailParentfirstchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For Getting Started</h6>
            <h5>Starter</h5>
        </div>

        <hr className={styles.line} />
        <h1>&#8377;1,399</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Workspace</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Knowledge Base</h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Self Service Portal</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Workflow Automator</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>



        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Orchestration</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Access Controls</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Analytics Starter</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Multiple portal Languages</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Custom SSL</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Marketplace Apps</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Mobile Apps</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 1000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentSecchild}>
        <div className={styles.PricingTrailParentchildheading}>
            <h6>For Bussiness Across thier LOBs</h6>
            <h5>Growth</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;3,599</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Service Catalog
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Asset Management -
                Includes 100 managed
                assets</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Employee Onboarding</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  On-call Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Portal Customization</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   MSP Mode
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Multiple SLAs
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Rules
                r</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Approval Workflows</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Hours</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Cloud Management</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>










    <div className={styles.PricingTrailParentthirdchild}>

        <div className={styles.PricingTrailParentchildheadingthird}>
            <h6>For Large Organization</h6>
            <h5>Pro</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;1,399</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonthird}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Problem Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Change Management
            </h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Project Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   SaaS Management
                r</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Software License
                Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Contract Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Alert Management</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Service Health Monitoring</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Analytics Pro</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Team Dashboards</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 5000 Orchestration
                transactions/mo/
                account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentfourthchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For Enterprises</h6>
            <h5>Enterprice</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;1,399</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Freddy Virtual Agent on
                MS Teams and Slack</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Freddy Agent Assist
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Audit Logs
            </h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Sandbox</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




</div>
<div className={styles.PricingTrailfooterline}>
    <p> Transaction defination :  </p>
    <p> Any action via the App node int workflow Automomotor</p>
</div>
</>
 );

 const ChatTrail =(
    <>
    <div className={styles.PricingTrailParent}>

    <div className={styles.PricingTrailParentfirstchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For Getting Started</h6>
            <h5>Free</h5>
        </div>

        <hr className={styles.line} />
        <h1>&#8377;0</h1>
        <p>up to 100 agents, billed annually &#8377;0 up to 100 agents, billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Workspace</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Knowledge Base</h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Self Service Portal</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Workflow Automator</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>



        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Orchestration</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Access Controls</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Analytics Starter</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Multiple portal Languages</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Custom SSL</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Marketplace Apps</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Mobile Apps</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 1000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentSecchild}>
        <div className={styles.PricingTrailParentchildheading}>
            <h6>For fast growth</h6>
            <h5>Growth</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;999</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Service Catalog
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Asset Management -
                Includes 100 managed
                assets</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Employee Onboarding</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  On-call Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Portal Customization</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   MSP Mode
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Multiple SLAs
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Rules
                r</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Approval Workflows</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Hours</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Cloud Management</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>










    <div className={styles.PricingTrailParentthirdchild}>

        <div className={styles.PricingTrailParentchildheadingthird}>
            <h6>For high performance</h6>
            <h5>Pro</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;2799</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonthird}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Problem Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Change Management
            </h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Project Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   SaaS Management
                r</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Software License
                Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Contract Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Alert Management</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Service Health Monitoring</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Analytics Pro</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Team Dashboards</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 5000 Orchestration
                transactions/mo/
                account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentfourthchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For enterprise-grade support</h6>
            <h5>Enterprice</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;4,9999</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Freddy Virtual Agent on
                MS Teams and Slack</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Freddy Agent Assist
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Audit Logs
            </h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Sandbox</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




</div>
<div className={styles.PricingTrailfooterline}>
    <p> Transaction defination :  </p>
    <p> Any action via the App node int workflow Automomotor</p>
</div>
</>
 );


 const SalesTrail =(
    <>
    <div className={styles.PricingTrailParent}>

    <div className={styles.PricingTrailParentfirstchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>FREE FOR 3 USERS</h6>
            <h5>FREE </h5>
        </div>

        <hr className={styles.line} />
        <h1>&#8377;999</h1>
        <p>/user/month, billed annually &#8377;1,999 /user/month, billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Workspace</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Knowledge Base</h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Self Service Portal</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Workflow Automator</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>



        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Orchestration</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Access Controls</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Analytics Starter</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Multiple portal Languages</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Custom SSL</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Marketplace Apps</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Mobile Apps</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 1000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentSecchild}>
        <div className={styles.PricingTrailParentchildheading}>
            <h6>Everything you need</h6>
            <h5>Pro</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;999</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Service Catalog
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Asset Management -
                Includes 100 managed
                assets</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Employee Onboarding</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  On-call Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Portal Customization</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   MSP Mode
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Multiple SLAs
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Rules
                r</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Approval Workflows</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Hours</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Cloud Management</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>










    <div className={styles.PricingTrailParentthirdchild}>

        <div className={styles.PricingTrailParentchildheadingthird}>
            <h6>CRM your way</h6>
            <h5>Enterprise</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;4,799</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonthird}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Problem Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Change Management
            </h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Project Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   SaaS Management
                r</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Software License
                Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Contract Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Alert Management</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Service Health Monitoring</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Analytics Pro</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Team Dashboards</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 5000 Orchestration
                transactions/mo/
                account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentfourthchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For enterprise-grade support</h6>
            <h5>Enterprice</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;4,9999</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Freddy Virtual Agent on
                MS Teams and Slack</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Freddy Agent Assist
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Audit Logs
            </h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Sandbox</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




</div>
<div className={styles.PricingTrailfooterline}>
    <p> Transaction defination :  </p>
    <p> Any action via the App node int workflow Automomotor</p>
</div>
</>
 );




 const ServicesTrail =(
    <>
    <div className={styles.PricingTrailParent}>

    <div className={styles.PricingTrailParentfirstchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For getting started</h6>
            <h5>Starter </h5>
        </div>

        <hr className={styles.line} />
        <h1>&#8377;13,199</h1>
        <p>/user/month, billed annually &#8377;20,999 /user/month, billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Workspace</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Knowledge Base</h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Self Service Portal</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Workflow Automator</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>



        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Orchestration</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Access Controls</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Analytics Starter</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Multiple portal Languages</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Custom SSL</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Marketplace Apps</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Mobile Apps</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 1000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentSecchild}>
        <div className={styles.PricingTrailParentchildheading}>
            <h6>growing businesses</h6>
            <h5>Growth</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;3,999</h1>
        <p>/agent/month,billed annaually &#8377;4,999/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Service Catalog
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Asset Management -
                Includes 100 managed
                assets</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Employee Onboarding</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  On-call Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Portal Customization</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   MSP Mode
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Multiple SLAs
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Rules
                r</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Approval Workflows</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Hours</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Cloud Management</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>










    <div className={styles.PricingTrailParentthirdchild}>

        <div className={styles.PricingTrailParentchildheadingthird}>
            <h6>Service management solution</h6>
            <h5>Enterprise</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;8,799</h1>
        <p>/agent/month,billed annaually &#8377;10,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonthird}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Problem Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Change Management
            </h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Project Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   SaaS Management
                r</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Software License
                Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Contract Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Alert Management</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Service Health Monitoring</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Analytics Pro</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Team Dashboards</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 5000 Orchestration
                transactions/mo/
                account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentfourthchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For enterprise-grade support</h6>
            <h5>Enterprice</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;4,9999</h1>
        <p>/agent/month,billed annaually &#8377;4,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Freddy Virtual Agent on
                MS Teams and Slack</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Freddy Agent Assist
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Audit Logs
            </h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Sandbox</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




</div>
<div className={styles.PricingTrailfooterline}>
    <p> Transaction defination :  </p>
    <p> Any action via the App node int workflow Automomotor</p>
</div>
</>
 );



 
 const MarketrsTrail =(
    <>
    <div className={styles.PricingTrailParent}>

    <div className={styles.PricingTrailParentfirstchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>FREE For startups</h6>
            <h5>FREE </h5>
        </div>

        <hr className={styles.line} />
        <h1>&#8377;0</h1>
        <p>/user/month, billed annually &#8377;0 /user/month, billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Workspace</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Knowledge Base</h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Self Service Portal</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Workflow Automator</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Incident Management</h6>
        </div>



        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Orchestration</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Access Controls</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Analytics Starter</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Multiple portal Languages</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Custom SSL</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Marketplace Apps</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Mobile Apps</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 1000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentSecchild}>
        <div className={styles.PricingTrailParentchildheading}>
            <h6>Everything you need</h6>
            <h5>Growth</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;2,999</h1>
        <p>/agent/month,billed annaually &#8377; 5,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Service Catalog
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Asset Management -
                Includes 100 managed
                assets</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Employee Onboarding</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  On-call Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Portal Customization</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   MSP Mode
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Multiple SLAs
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Rules
                r</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Approval Workflows</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Business Hours</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Cloud Management</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Release Management</h6>
        </div >

        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>










    <div className={styles.PricingTrailParentthirdchild}>

        <div className={styles.PricingTrailParentchildheadingthird}>
            <h6>Popular</h6>
            <h5>Pro</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;10,799</h1>
        <p>/agent/month,billed annaually &#8377;12,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonthird}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Problem Management
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Change Management
            </h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Project Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  SLA Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   SaaS Management
                r</h6>
        </div>




        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>   Software License
                Management
            </h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Contract Management</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Alert Management</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Service Health Monitoring</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Analytics Pro</h6>
        </div>
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Team Dashboards</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 5000 Orchestration
                transactions/mo/
                account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




    <div className={styles.PricingTrailParentfourthchild}>

        <div className={styles.PricingTrailParentchildheading}>
            <h6>For enterprise-Business</h6>
            <h5>Enterprice</h5>
        </div>
        <hr className={styles.line} />
        <h1>&#8377;20,9999</h1>
        <p>/agent/month,billed annaually &#8377;25,299/agent/month,billed monthly</p>
        <button className={styles.PricingTrailButtonone}>Starter Trail</button>
        <hr className={styles.linetwo} />
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6>  Freddy Virtual Agent on
                MS Teams and Slack</h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Freddy Agent Assist
            </h6>
        </div>

        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Audit Logs
            </h6>
        </div >
        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> Sandbox</h6>
        </div>


        <div className={styles.PricingTrailcheckdiv}>
            <div>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Pricing/Rigth.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

            </div>
            <h6> 2000 Orchestration transactions/mp/account</h6>
        </div>


        <button className={styles.PricingTrailButtontwo}> See All Features</button>
    </div>




</div>
<div className={styles.PricingTrailfooterline}>
    <p> Transaction defination :  </p>
    <p> Any action via the App node int workflow Automomotor</p>
</div>
</>
 );


 


 

 const [state, setstate] = useState(DeskTrail)
 const [addOn, setaddOn] = useState(<PricingAddOns/>)
 

    const BottomFunnelDesk= () =>{
       
        setstate(DeskTrail)
        setaddOn(<PricingAddOns/>)

     
    }
    const BottomFunnelChat= () =>{
       
        setstate(ChatTrail)
        setaddOn(<PricingAddOnsChat/>)
     
    }
    const BottomFunnelsales= () =>{
       
        setstate(SalesTrail)
        setaddOn(<PricingAddOnsSales/>)
    }

    const BottomFunnelservices= () =>{
       
        setstate(ServicesTrail)
        setaddOn(<PricingAddOnsServices/>)
     
    }

    const BottomFunnelMarketer= () =>{
       
        setstate(MarketrsTrail)
        setaddOn(<PricingAddOnsmarketers/>)
     
    }

    return (
        <>
        <div className={styl.PricingBannerParent}>
            <h1>Bottom Funnel Service Pricing</h1>
            <h4>Right-size Your IT Service Management</h4>
            <button>Sign Up For Free</button>
            <div className={styl.PricingBannerParentonlychild}>
               
                <button className={styl.PricingBannerParentbuttonborder}  onClick={BottomFunnelDesk}>Bottom Funnel Desk </button>
                <button className={styl.PricingBannerParentbuttonborder} onClick={BottomFunnelChat}>Bottom Funnel Chat </button>
                <button className={styl.PricingBannerParentbuttonborder}  onClick={BottomFunnelsales}>Bottom Funnel Sales</button>
                <button className={styl.PricingBannerParentbuttonborder} onClick={BottomFunnelservices}>Bottom Funnel Services</button>
                <button className={styl.PricingBannerParentbuttonoborder} onClick={BottomFunnelMarketer}>Bottom Funnel Marketer</button>
                
               
            </div>
        </div>
        <PricingTrail data={state}/>
          {addOn}
       
        </>
    );
}