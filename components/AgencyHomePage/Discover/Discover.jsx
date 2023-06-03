import React from 'react'
import style from "./Discover.module.css";
import Image from 'next/image';

export const Discover = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/Activities 01.webp",
    hd:"Discover and evaluate your prospects",
    p1:"While a winning pitch could make or break a deal with your prospect, what’s also important is to understand their business, and gain insights into what exactly they are looking for from your agency. But, how do you gauge that? And, how do you determine whether the prospect came through a social media campaign you were running, through a referral or through your website?",
    p2:"An advertising and media agency CRM software can enable you to gather relevant insights about your prospects through multiple means. For one, if you’ve been running campaigns on social platforms, you can use relevant integrations in your CRM to track where the lead is coming from.Secondly, if a customer has visited your website or app, you can understand their behavior and interests using event tracking, which tracks the pages your prospects visited and how they engaged with your site. Thirdly, you can also use web forms on your website to collect relevant data about your prospects or engage in live chat with them to understand their requirements better.",
   
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/006.webp",
      hd:"Automate your tasks",
      p1:"One of the key challenges agencies face is that they often don’t have a separate sales or business development team and a customer servicing team. Often, the same team that services the customer has to manage sales as well.",
      p2:"In such a scenario, amidst meeting client deadlines on projects, agencies are also tasked with performing mundane tasks like sending emails, setting reminders to share invoices, following up on payments, and more.",
      p3:"An advertising and media agency CRM software can reduce the time you invest in such tasks with workflow automation. Using a set of pre-designed action flows, you can automate the most common business activity without having to set up a workflow from scratch. Set up workflows by simply clicking a button or editing an existing template. From welcome emails to internal reminders for your team members to complete tasks to sending reminder emails to clients when their contract is up for renewal, a large portion of your tasks can be managed by the system while you focus on servicing your customers better."
      },
      {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/agency.png",
        hd:"View all customer data in one place",
        p1:"In response to the challenge agencies face in organizing all customer data in one place, an advertising and media agency CRM software provides a 360𝆩 view of all your engagements with each of your customers in a chronological timeline view.",
        p2:"Every email or call log is stored in the customer’s activity timeline so that you don’t have to spend time juggling through multiple apps to track where you left last. You can see highlights covering a contact’s background information, such as open deals, active marketing lists, and meeting notes within your agency CRM software.",
        p3:""
        },
        {
          img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/agency1.png",
          hd:"Analyze how your business is performing",
          p1:"Once you’ve determined whether the prospect is relevant for your business, you can move him/her to your deals pipeline, where you can track the progress made with each customer. Depending on the progress you make with them, you can move them across different deal stages such as interested to follow up or pitching to under review and more.",
          p2:"A pipeline view also helps you determine revenue forecasts, gives insights into how each of your deals is performing, helps identify gaps in your business so you can come up with strategies to address them, and more.",
          p3:"You can also generate daily, weekly, or monthly sales reports to draw performance insights. You can get a sector-wise breakdown of customers you’re servicing to determine where you’re getting the most business from, create a report on customers by deal stages, assess revenues each of your sales/client servicing teams is bringing in, etc. Using the reports dashboard, you can stay on top of key metrics, navigate between reports to get context and track team performance. Further, these reports can be shared and exported. You can get a sector-wise breakdown of customers you’re servicing to determine where you’re getting the most business from, create a report on customers by deal stages, assess revenues each of your sales/client servicing teams is bringing in, and more."
          },
          {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/Activities 2.webp",
            hd:"Keep the conversation going",
            p1:"You put your heart and soul into the first few months to win that customer and sign up the project. But once you are on good terms, you tend to take a back seat because it’s nearly impossible to keep that momentum going. While this may seem natural to you, from the customer’s perspective, the ‘relationship’ starts waning.",
            p2:"So, how do you engage with them from time to time to build trust and comfort? Like Aaron Levy, the Director of Paid Search at Elite SEM puts it, one of the key strategies to keeping clients engaged is to “be their best friends! Learn their birthdays, their kids' names and best of all, how to get their bonuses!”Of course, you can do this too in an agency CRM software with sales campaigns. Keep that communication channel always open with your customers by sending them wishes, sharing a newsletter on ideas that you worked on with other customers that became a hit and so on.",
            
            },]
  return (
   <div className={style.Discovermaindiv}>
    {data.map((e) => {
      return (
        <div className={style.Discovermaininnerdiv}>
        <div className={style.Discovercontain}>
          <h2>{e.hd}</h2>
          <p>{e.p1}</p>
          <p>{e.p2}</p>
          <p>{e.p3}</p>
  
        </div>
        
        <div className={style.Discoverimage}>
          <Image
            src={e.img}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
  
          />
          
        </div>
      </div>
      )
      })}
          {/* <div className={style.Discovermaindiv}>
        <div className={style.Discovercontain}>
        <h2>Discover and evaluate your prospects</h2>
   
          <p>While a winning pitch could make or break a deal with your prospect, what’s also important is to understand their business, and gain insights into what exactly they are looking for from your agency. But, how do you gauge that? And, how do you determine whether the prospect came through a social media campaign you were running, through a referral or through your website?</p>
          <p>An advertising and media agency CRM software can enable you to gather relevant insights about your prospects through multiple means. For one, if you’ve been running campaigns on social platforms, you can use relevant integrations in your CRM to track where the lead is coming from.Secondly, if a customer has visited your website or app, you can understand their behavior and interests using event tracking, which tracks the pages your prospects visited and how they engaged with your site. Thirdly, you can also use web forms on your website to collect relevant data about your prospects or engage in live chat with them to understand their requirements better.</p>
          <p>Learn-More</p>
  
        </div>
        
        <div className={style.Discoverimage}>
          <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/Activities 01.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
  
          />
          
        </div>
      </div> */}
  </div>
  );
};
