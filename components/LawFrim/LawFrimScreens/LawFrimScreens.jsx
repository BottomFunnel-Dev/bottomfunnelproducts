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
            p:"In law, no two cases are the same. Even if they are similar, the details vary to a great extent. With Freshsales case management tool, you can customize and capture everything related to a case without being restricted to standard fields."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 03.png",
            hd:"Engage with more context",
            p:"Your clients and prospects seek your legal help and will reach out to you by any means possible—phone, emails, web forms, chat, SMS. Amidst your busy schedule, you not just have to juggle between your phone and computer, but the information is also scattered across different tools. Finding key messages and case references instantly is a struggle."
        }

    ]
   
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
    
    
    <div className={styles.LawFrimScreensmaindiv}>
<div>
<h2>Say goodbye to the stacks of files
</h2>
<p>
To win cases, information is key. And traditionally, this information is strewn across your desk—excel sheets contain client data, notes with case-related insights, stacks of folders and files with crucial details spread all over your office. And when you need to find a key piece of information or even a quick update on a case, you have to read multiple files to find what you are looking for.
</p>
<p>Freshsales has a file manager built in that records and manages all the files related to a client in one place. So the files you need are just a click away inside your CRM tool. You can</p>
<ul>
    <li>Upload new files</li>
    <li>View the list of files linked to a client, case, or deal</li>
    <li>Share the file with your client or team</li>
    <li>Sort them based on the file name or creation date-time.</li>

</ul>
<p>Integrate with e-signing applications from our marketplace to send, sign, and manage your documents, paperless.</p>


</div>
<div className={styles.LawFrimScreensmaindivimage}>
<Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 04.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
</div>
    </div>
    <div className={styles.LawFrimScreensmaindiv}>
<div>
<h2>Reduce manual and redundant tasks</h2>
<p>
Time is a law firm’s most precious asset. Between following up with prospects and working on your current cases, you also have to take care of those important, but mundane tasks. To make it worse, you may forget to do one of those tasks. But with Freshsales, you can
</p>
<ul>
    <li>Set up follow-up sequences</li>
    <li>Create workflows by simply clicking a button or edit an existing template to send welcome emails, raise invoices, move from won deals from the deal pipeline to case pipeline, etc</li>
    <li>Send reminders about upcoming court sessions and necessary documents to your clients</li>
</ul>

</div>
<div className={styles.LawFrimScreensmaindivimage}>
<Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 02.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
</div>
    </div>

    </div>
    
  )
}
