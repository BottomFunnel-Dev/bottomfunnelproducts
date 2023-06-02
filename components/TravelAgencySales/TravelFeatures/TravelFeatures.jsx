import React from 'react'
import styles from "./TravelFeatures.module.css";
import Image from "next/image"

export const TravelFeatures= () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 1.webp",
        hd:"Catch them early and beat the competition",
        p1:"Over 40% of the millennial and Gen Z travelers plan their trips using travel review websites and online travel sites. This makes it essential for travel companies to have high-end systems to provide a smooth customer experience. And with every travel aggregator offering online services, you need to engage with your travelers when they are interested. Else, they are likely to bounce off your website.",
        p2:"A good travel agency CRM like Freshsales allows agents to chat and engage with potential customers as soon as they enter your website, and also capture form inquires and details automatically into the CRM.",
       
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 2.webp",
            hd:"Provide personalized experiences and make them come back",
            p1:"More than 85% of the millennials prefer to go to a new destination every time they travel. Each of them has unique interests, preferences, and choices. Some want to explore the wilderness of nature, while others may enjoy the buzz of cities. So, it is crucial that you understand their needs and personalize their experiences.",
            p2:"A CRM specifically designed for travel agents helps you understand your customers inside out by",
            l1:"Piecing together their contact and travel information in a single screen",
            l2:"Automatically enriching their details with social media information",
            l3:"Pulling together the entire conversation history you’ve had with them via phone, email, chat, and SMS",
            l4:"Laying down their complete activity timeline—page visits, brochures downloaded, email engagement, the travel packages offered to them and more.",
            },
            {
                img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 3.webp",
                hd:"Analyze trends and make smart decisions",
                p1:"With all the valuable information about your customers and their interactions sitting in one place, you can use a CRM with analytical capabilities to gain insights and strategize your sales and marketing. Freshsales lets you",
             
                l1:"Analyze travel trends and forecast which months are likely to have less business than others",
                l2:"Know which travel packages are popular, and which ones are not",
                l3:"Understand how many people are interested in a destination",
                l4:"Know how your travel agents are performing and review every activity to tie it down to their metrics.",
                },
                {
                    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 4.webp",
                    hd:"Stay on top of follow-ups",
                    p1:"To keep your business afloat during off-seasons, and turn one-time customers into repeat customers, you need to engage them with personalized, relevant, and effective emails. And well, not just stop there.",
                    p2:"It is crucial to follow up with them on a regular basis. A travel agent CRM software like Freshsales empowers your sales team to create compelling sales sequences by allowing them to",
                    l1:"Select from a list of email templates, personalize the templates, and set up email delivery timelines",
                    l2:"Schedule follow-up emails based on activity or time-based triggers",
                    l3:"Track how the emails are performing and tailor the perfect outreach for your audience.",
                    l4:"Schedule follow-up emails based on activity or time-based triggers",
                    },
    ]

  return (
   
    <div>
        {data.map((e) => {
return (
    <div className={styles.TravelFeaturesmaindiv}>
    <div className={styles.TravelFeaturesmaindivcontent}>
        <h2>{e.hd}</h2>
      
        <p>
      {e.p1}  </p>
      <p>
      {e.p2}  </p>
      <ul>
          <li>{e.l1}</li>
          <li>{e.l2}</li>
          <li>{e.l3}</li>
          <li>{e.l4}</li>
           </ul>
         
    </div>
    <div className={styles.TravelFeaturesmaindivcontentimage}>
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

   {/* <div className={styles.TravelFeaturesmaindiv}>
    <div className={styles.TravelFeaturesmaindivcontent}>
        <h2>Catch them early and beat the competition</h2>
        <p>
        Over 40% of the millennial and Gen Z travelers plan their trips using travel review websites and online travel sites. This makes it essential for travel companies to have high-end systems to provide a smooth customer experience. And with every travel aggregator offering online services, you need to engage with your travelers when they are interested. Else, they are likely to bounce off your website.
        </p>
        <p>A good travel agency CRM like Freshsales allows agents to chat and engage with potential customers as soon as they enter your website, and also capture form inquires and details automatically into the CRM.</p>
        
    </div>
    <div className={styles.TravelFeaturesmaindivcontentimage}>
    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>


   <div className={styles.TravelFeaturesmaindiv}>
    <div className={styles.TravelFeaturesmaindivcontent}>
        <h2>Provide personalized experiences and make them come back</h2>
        <p>
        More than 85% of the millennials prefer to go to a new destination every time they travel. Each of them has unique interests, preferences, and choices. Some want to explore the wilderness of nature, while others may enjoy the buzz of cities. So, it is crucial that you understand their needs and personalize their experiences. 
        </p>
        <p>A CRM specifically designed for travel agents helps you understand your customers inside out by</p>
        <ul>
            <li>Piecing together their contact and travel information in a single screen</li>
        <li>Automatically enriching their details with social media information</li>
        <li>Pulling together the entire conversation history you’ve had with them via phone, email, chat, and SMS</li>
        <li>Laying down their complete activity timeline—page visits, brochures downloaded, email engagement, the travel packages offered to them and more.</li>
        </ul>
    </div>
    <div className={styles.TravelFeaturesmaindivcontentimage}>
    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.TravelFeaturesmaindiv}>
    <div className={styles.TravelFeaturesmaindivcontent}>
        <h2>Analyze trends and make smart decisions</h2>
        <p>
        With all the valuable information about your customers and their interactions sitting in one place, you can use a CRM with analytical capabilities to gain insights and strategize your sales and marketing. Freshsales lets you
        </p>
        <ul>
            <li>Analyze travel trends and forecast which months are likely to have less business than others</li>
        
        <li>Know which travel packages are popular, and which ones are not</li>
        <li>Understand how many people are interested in a destination</li>
        <li> Know how your travel agents are performing and review every activity to tie it down to their metrics.</li>
        </ul>
    </div>
    <div className={styles.TravelFeaturesmaindivcontentimage}>
    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.TravelFeaturesmaindiv}>
    <div className={styles.TravelFeaturesmaindivcontent}>
        <h2>Stay on top of follow-ups </h2>
        <p>
        To keep your business afloat during off-seasons, and turn one-time customers into repeat customers, you need to engage them with personalized, relevant, and effective emails. And well, not just stop there. 
        </p>
    <p>It is crucial to follow up with them on a regular basis. A travel agent CRM software like Freshsales empowers your sales team to create compelling sales sequences by allowing them to</p>
        <ul>
            <li>Select from a list of email templates, personalize the templates, and set up email delivery timelines</li>
        
        <li>Schedule follow-up emails based on activity or time-based triggers</li>
        
        <li> Track how the emails are performing and tailor the perfect outreach for your audience.</li>
        </ul>
    </div>
    <div className={styles.TravelFeaturesmaindivcontentimage}>
    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 4.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.TravelFeaturesmaindiv}>
    <div className={styles.TravelFeaturesmaindivcontent}>
        <h2>Resolve issues faster and keep your customers happy  </h2>
        <p>
        It is no secret that the current generation of travelers relies heavily on social media. So, one glitch in their vacation and your online credibility takes a dip. But we know glitches happen; hence, it is crucial that your support team address every issue and resolve it immediately. 
        </p>
        <p>A CRM with seamless helpdesk integration bridges the gap between sales and support, where the sales team has visibility into the past issues faced by travelers. With this information in hand, your sales team will be better prepared before approaching the customer with the next travel package. </p>
    
       
    </div>
    <div className={styles.TravelFeaturesmaindivcontentimage}>
    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/Travel agency 5.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div> */}
    </div>

    
  )
}
