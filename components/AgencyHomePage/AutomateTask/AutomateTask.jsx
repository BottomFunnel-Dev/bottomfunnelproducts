import React from 'react'
import style from "./AutomateTask.module.css";
import Image from 'next/image';

export const AutomateTask = () => {
  return (
    <div>
        <div className={style.AutomateTaskmaindiv}>
          <div className={style.AutomateTaskinnerdiv}>
            <div className={style.AutomateTaskdiv1}>
            <h2> Automate your tasks</h2>
            <p>One of the key challenges agencies face is that they often don’t have a separate sales or business development team and a customer servicing team.

Often, the same team that services the customer has to manage sales as well.</p>
            <p>In such a scenario, amidst meeting client deadlines on projects, agencies are also tasked with performing mundane tasks like sending emails, setting reminders to share invoices, following up on payments, and more.</p>
            <p>An advertising and media agency CRM software can reduce the time you invest in such tasks with workflow automation. Using a set of pre-designed action flows, you can automate the most common business activity without having to set up a workflow from scratch. Set up workflows by simply clicking a button or editing an existing template. 

From welcome emails to internal reminders for your team members to complete tasks to sending reminder emails to clients when their contract is up for renewal, a large portion of your tasks can be managed by the system while you focus on servicing your customers better. </p>
            
            </div>
            <div className={style.AutomateTaskimage}>
            <Image
  src={"/Images/Agencyhomepagephotos/006.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
             {/* <img src="/Images/Agencyhomepagephotos/screen1.png" alt="image" /> */}
            </div>

          </div>

          <div className={style.AutomateTaskinnerdiv}>

          <div className={style.AutomateTaskimage}>
          <Image
  src={"/Images/Agencyhomepagephotos/contacts.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
             {/* <img src="/Images/Agencyhomepagephotos/screen1.png" alt="image" /> */}
            </div>
            <div className={style.AutomateTaskdiv2}>
            <h2> View all customer data in one place</h2>
            <p>In response to the challenge agencies face in organizing all customer data in one place, an advertising and media agency CRM software provides a 360𝆩 view of all your engagements with each of your customers in a chronological timeline view.</p>
            <p>Every email or call log is stored in the customer’s activity timeline so that you don’t have to spend time juggling through multiple apps to track where you left last. You can see highlights covering a contact’s background information, such as open deals, active marketing lists, and meeting notes within your agency CRM software.</p>
            
            
            </div>
            

          </div>
            
            

        </div>
    </div>
  )
}
