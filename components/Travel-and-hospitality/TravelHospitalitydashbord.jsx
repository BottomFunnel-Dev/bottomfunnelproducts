import Image from 'next/image';
import React from 'react';
import styles from "./TravelHospitalitydashbord.module.css";


export const TravelHospitalitydashbord = () => {

    const traveldashboarddata = [
        {
            htxt:"Be where your guests are",
            ctxt:"Your guests are on the move.Make it easy for them to seek help-from your mobile app,on the phone or on Facebook Messenger and whatsapp. Unify all customer communications onto a single platform.",
            stxt:
            {
                list1:"Integrate phone, live-chat, email, social,FB Messenger, WhatsApp and more.",
                list2:"Use context and booking history to have relevant,personal conversations.",
                list3:"Respond to queries faster with omnichannel queue management.",
                list4: "Optimize customer context by integrating with your business applications."
            },

            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Travel & hospitality/Vectors/Group 770571.webp",
            link:"Explore omnichannel customer service >",
        },

        {
            htxt:"Inspire loyalty with contextual engagement",
            ctxt:"Customers across all industries hate having to repeat themselves.Equip your team with customer context and booking history to have delightful conversations and drive repeat business.",
            stxt:
            {
                list1:"Access customer profiles, booking history and past conversations.",
                list2: "Use customer data to prioritize queues and have contextual conversations.",
                list3:"Resolve issues faster with the information at your fingertips.",
                list4: "Optimize customer context by integrating with your business applications."
               
            },

            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Travel & hospitality/Vectors/Group 770548.webp",
            link:"Explore the Bottom funnel Marketplace >",
        },

        {
            htxt:"AI-powered travel agents",
            ctxt:"Don't put your customers on hold.Deliver instant responses with AI and chatbots and make your customer services more efficient by automating routine queries.",
            stxt:
            {
                list1:"Reduce ticket volumes by automating routine queries.",
                list2:"Provide 24/7 support for instant responses with chatbots.",
                list3:"Escalate complex queries from bots to live-agents.",
                list4:"Identify purchase intent and convert service enquiries into leads."
            },

            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Travel & hospitality/Vectors/Group 340369.webp",
            link:"Explore Freddy, the AI-powered Omnibot >",
        },

        {
            htxt:"Make customer service a team sport",
            ctxt:"Good service involves multiple teams and departments.Bring your customer service,Operations,finance and other teams on one platform to deliver speedy responses to your customers.",
            stxt:
            {
                list1:"Resolve queries faster with contextual collaboration.",
                list2:"Share tasks across teams for increased efficiency.",
                list3:"Bring third-party members into conversations.",
                list4:"Identify purchase intent and convert service enquiries into leads."
            },

            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Travel & hospitality/Vectors/Group 770554.webp",
            link:"Explore contextual collaboration >",
        },
        {
            htxt:"Use data to improve the guest experience",
            ctxt:"You are in the business of experience.Your service needs continuous improvement to stay ahead of the competition. Unlock the power of customer feedback to find insights and improve your services.",
            stxt:
            {
                list1:"Forecast volumes and spot trends to improve customer experience.",
                list2:"Use real-time team dashboards to stay on top of your daily operations.",
                list3:"Gather customer feedback to improve the guest experience.",
                list4:"Identify purchase intent and convert service enquiries into leads."
            },

            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Travel & hospitality/Vectors/Group 770570.webp",
            link:"Explore contextual collaboration >",
        },

    ]

  return (
    <div className={styles.travelhositalitydasmainboxes}>{traveldashboarddata.map((e)=>{
        return (
            <div className={styles.travelhospitalitydasdatamappingondi}>
            
            <div className={styles.travelhospitalitydashleftbox}>
            <h3>{e.htxt}</h3>
            <hr></hr>
            <p>{e.ctxt}</p>
            <ul>
            <li>{e.stxt.list1}</li>
            <li>{e.stxt.list2}</li>
            <li>{e.stxt.list3}</li>
            <li>{e.stxt.list4}</li>
            </ul>
           <h6>{e.link}</h6>
            
            </div>
            <div className={styles.travelhospitalitydashrightbox}>
            <Image
                src={e.img}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit:"contain", padding:"5px" }}
                />
            </div>
            
            </div>
        )
    })}
  
    
    
    </div>
  )
}
