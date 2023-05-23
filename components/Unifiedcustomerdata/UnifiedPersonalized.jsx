import Image from 'next/image'
import React from 'react'
import styles from "./UnifiedPersonalized.module.css"


export const UnifiedPersonalized = () => {

    const unifiedpersonalizeddata = [
        {
            htxt:"For Sales",
            stxt:"Accelerate the progression of your pipeline, and focus on engaging your target audience with a holistic understanding of lead data from multiple sources.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/unified customer record/Components/business-and-finance.webp",

        },

        {
            htxt:"For Marketers",
            stxt:"By utilizing targeted and personalized multi-channel campaigns, it is possible to achieve higher marketing ROI and increase lead conversion. ",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/unified customer record/Components/image 41.webp",

        },

        {
            htxt:"For Support Teams",
            stxt:"A proactive approach to analyzing customer engagement history results in higher retention and upsell, demonstrating a positive perspective on the previous interactions with customers.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/unified customer record/Components/image 42.webp",

        },

    ]


    const unifiedanotherboxdata = [
        {
            htxt:"Data Collection",
        },

        {
            htxt:"Profile Unification",
        },

        {
            htxt:"Enrichment",
        },

        {
            htxt:"Activation",
        },

        {
            htxt:"Segmentation",
        },

    ]

  return (
    <div className={styles.unifiedpersonalizedmainboxes}>
    <div className={styles.unifiedpersonalizeheadingbox}>
    <h1>Evolve customer engagement plans based on analysis of insights and context</h1>
    <hr></hr>
    <p>Unified Customer Record enables sales, marketing and support teams leverage data from customer actions and behavior to deliver personalized engagement.</p>
    </div>
    
<div className={styles.unifiedpersonalizeddataboxes}>{unifiedpersonalizeddata.map((e)=>{
    return (
        <div className={styles.unifiedpersonaldataindiin}>
        <div className={styles.unifiedpersonalindiixon}>
        
        <Image
        src={e.icon}
        alt={"icon"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
        />
        
        </div>
        
        <div className={styles.unifeidpersonalinditxtbox}>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        
        </div>
        
        
        
        </div>
    )
})}</div>

<div className={styles.unifiedpersonalanotherboxe}>

<div className={styles.unifiedpersonalflexleftbox}>
<Image
src={"https://d3op2l77j7wnti.cloudfront.net/Images/unified customer record/Components/Frame.webp"}
alt={"image"}
width={"0"}
height={"0"}
sizes={"100vw"}
style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
        />

</div>

<div className={styles.unifiedpersonalflexrighttbox}>{unifiedanotherboxdata.map((e)=>{
    return (
        <div className={styles.unifiedpersoanoindi}>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ef4c23" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>
        <h4>{e.htxt}</h4></div>
    )
})}</div>
<button className={styles.explorenowbutton}>Explore now</button>
</div>


    </div>
  )
}
