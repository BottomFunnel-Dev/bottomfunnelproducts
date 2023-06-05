import React from 'react'
import style from "./InsuranceSalesScreens.module.css";
import Image from 'next/image';


export const InsuranceSalesScreens = () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/InsuranceSalesphotos/screen41.webp",
        hd:"Prioritize customer needs better",
        p1:"Strike while the iron is hot, goes an old adage. Today, in an industry like insurance, when you’re facing neck and neck competition, focussing on customers who are really interested in your business could help you close more deals and make you stand out in the market.",
        p2:"A CRM for insurance software can offer all this and more to help you carve a niche amidst other players. Contact scoring, for instance, helps you identify high-intent leads based on who they are and their engagement with your business. An Insurance CRM likeBottom Funnel Sales assigns each contact a score based on positive and negative signals and also recommends the next best actions to engage with them.",
    
     
        },
        {
            img:"/Images/InsuranceSalesphotos/Activities01.png",
            hd:"Ensure quick turnarounds and timely follow-ups",
            p1:"How can you ensure quick turnarounds and timely follow-ups with your customer without having to manually keep track of each and every task from time to time? This is where workflow automation comes into play.",
            p2:"With insurance CRM tools such asBottom Funnel Sales, you can create pre-designed emails, and follow-ups for your internal sales teams and customers, thus allowing the system to take over, and reducing the time spent on implementing them.",
            p3:"Bottom funnel sales CRM also comes with pre-designed workflow templates that can help you automate the most common business activities.",
            p4:"You can enable a workflow by simply clicking a button or can edit an existing template to add more conditions and make it live. For example, if you need to send a reminder to a customer whose policy is up for renewal, send a welcome email to a new customer, or assign a customer in a particular geography to a specific sales team, automations can fulfill these tasks in a jiffy while also making your customers feel connected with your business at all times.",
         
            },
            {
                img:"https://d3op2l77j7wnti.cloudfront.net/Images/InsuranceSalesphotos/Activities2.png",
                hd:"Build long-lasting Relationships",
                p1:"Buying insurance is not a one-time deal. From educating a prospect about the need for an insurance policy to continue engaging with your existing customers on policy updations, consistency in communication is key to build an active and loyal customer base. It could also help you earn more referrals.",
                p2:"Take this statistic for instance. According to an EY Global Customer Survey, 86% of the customers feel they’re not very satisfied with the communication from their insurance provider. Moreover, a Deloitte report reveals that 60% of the consumers don’t get great value from their insurance agents.",
                p3:"How can you turn this around? You can use sales campaigns to create customized, personalized email newsletters such as health tips for a particular season, myths surrounding car insurance or cross-selling, or upselling based on the policy a customer has opted for. The campaigns can also be tracked to improve performance and can be scheduled to be sent when the time is right.",
             
                },
                {
                    img:"https://d3op2l77j7wnti.cloudfront.net/Images/InsuranceSalesphotos/screen21.webp",
                    hd:"Create customized, relevant conversations",
                    p1:"Amidst growing competition, legal battles, rising interest rates and changing customer attitudes towards purchasing an insurance policy, there’s no better time than now to be more customized in communicating with your potential customers or leads to create a winning pitch.",
                    p2:"How old are they? What is their nature of work? Do they have a history of severe illness? Do they own a car or a house? How many members are there in their family? Communicating with your potential customers based on an understanding of their lifestyle, interests, and needs can make a world of difference in helping you lay the foundation for a long-lasting relationship with them.",
               
                 
                    },
    ]
    return (
        <div>
            {data.map((e) => {
return (
    <div className={style.InsuranceSalesScreensmaindiv}>
    <div className={style.InsuranceSalesScreensmaincontaindiv}>
        <h2>{e.hd}</h2>
        <p>{e.p1}</p>
        <p>{e.p2}</p>
        <p>{e.p3}</p>
        <p>{e.p4}</p>
        <button className={style.Productivitymore}>Learn More &rarr; </button>
    </div>
    <div className={style.InsuranceSalesScreensmainimagediv}>
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
    )
}
