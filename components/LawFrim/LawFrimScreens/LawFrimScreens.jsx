import React from 'react'
import styles from "./LawFrimScreens.module.css";
import Image from 'next/image';

export const LawFrimScreens = () => {
    const data1 = [
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 01.png",
            hd:"Capture Everything",
            p:"Legal, being a data-sensitive industry, it is essential to securely record every single interaction you have with your prospects and clients. And it is even better when all that information is curated on a single page. You also get to customize the essential data points you want to see upfront in the summary and highlights section."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 05.png",
            hd:"Manage things end to end",
            p:"In law, no two cases are the same. Even if they are similar, the details vary to a great extent. With Bottom Funnel Sales case management tool, you can customize and capture everything related to a case without being restricted to standard fields."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 03.png",
            hd:"Engage with more context",
            p:"Your clients and prospects seek your legal help and will reach out to you by any means possible—phone, emails, web forms, chat, SMS. Amidst your busy schedule, you not just have to juggle between your phone and computer, but the information is also scattered across different tools. Finding key messages and case references instantly is a struggle."
        }

    ]
    const data2 = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 04.png",
        hd:"Say goodbye to the stacks of files",
        p1:"To win cases, information is key. And traditionally, this information is strewn across your desk—excel sheets contain client data, notes with case-related insights, stacks of folders and files with crucial details spread all over your office. And when you need to find a key piece of information or even a quick update on a case, you have to read multiple files to find what you are looking for.",
        p2:"Bottom Funnel Sales has a file manager built in that records and manages all the files related to a client in one place. So the files you need are just a click away inside your CRM tool. You can",
        p3:"Integrate with e-signing applications from our marketplace to send, sign, and manage your documents, paperless.",
        l1:"Upload new files",
        l2:"View the list of files linked to a client, case, or deal",
        l3:"Share the file with your client or team",
        l4:"Sort them based on the file name or creation date-time.",
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 02.png",
            hd:"Reduce manual and redundant tasks",
            p1:"Time is a law firm’s most precious asset. Between following up with prospects and working on your current cases, you also have to take care of those important, but mundane tasks. To make it worse, you may forget to do one of those tasks. But with Bottom Funnel Sales, you can",
            l1:"Set up follow-up sequences",
            l2:"Create workflows by simply clicking a button or edit an existing template to move from won deals from the deal pipeline to case pipeline, etc",
            l3:"Send reminders about upcoming court sessions and necessary documents to your clients",
            l4:"Easily edit simple templates to send welcome emails , raise invoices etc."
            
        }] 

  return (
    <div>
        <div className={styles.LawFrimScreens}>
            {data1.map((e) => {
                return(
                    <div className={styles.LawFrimScreensmaindiv}>
<div>
<h2>{e.hd}</h2>
<p>
{e.p}
</p>

</div>
<div className={styles.LawFrimScreensmaindivimage}>
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
                );
            })}
      
        </div>
    
    
        {data2.map((e) => {
return (
<div className={styles.LawFrimScreensmaindiv}>
<div>
<h2>{e.hd}
</h2>
<p>{e.p1}</p>
<p>{e.p2}</p><ul>
   <li>{e.l1}</li>
   <li>{e.l2}</li>
   <li>{e.l3}</li>
   <li>{e.l4}</li>

</ul>
<p>{e.p3}</p>


</div>
<div className={styles.LawFrimScreensmaindivimage}>
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
