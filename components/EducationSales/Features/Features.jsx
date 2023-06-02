import React from 'react'
import styles from "./Features.module.css";
import Image from "next/image"

export const Features = () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/Education 1.webp",
        hd:"Automate and reduce data entry",
        p1:"An average sales rep spends about 20% time entering data in the CRM. As a leader, you would want your sales team to focus most of their time on selling, but you also want an up-to-date CRM database to manage your operations. Achieve that balance with an education CRM that takes care of data entry for you. With Bottom Funnel Sales, you can",
       
        l1:"Automatically capture and save information of prospects who reach out to you via email, live chat, and web forms",
        l2:"Automatically capture and save information of prospects who reach out to you via email, live chat, and web forms",
        l3:"Migrate data from other CRM systems effortlessly and do away with the hours of manual data entry",
        l4:"Import and export customer and business details from spreadsheets.",
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/Education 2.webp",
            hd:"Drive meaningful conversations",
            p1:"Your salespeople must be empowered with the intricate details needed to engage students and handhold them in finding their perfect course. A student management software like Bottom Funnel Sales can help you have those meaningful conversations by",
           
            l1:"Unifying every record across the prospect and customer lifecycle in one place",
            l2:"Displaying quick summary of primary contact information, notes, tasks, and appointments",
            l3:"Laying down their chronological timeline—page visits, email engagement, the courses offered to them, and more",
            l4:"Identifying and prioritizing leads who are most interested in the courses based on their interactions with your website and email, using AI-based lead scoring.",
            },
            {
                img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/Education 3.webp",
                hd:"Tailor for your needs",
                p1:"As your business grows, you have to tweak or change your sales and business process. The right CRM should blend in with your business ecosystem by letting you customize it for your needs. You should be able to",
             
                l1:"Create custom input fields and web forms that fit your unique business needs",
                l2:"Information, notes, tasks, and appointments",
                l3:"Create custom filters that fetch details by last contacted time, activity type, and more",
                l4:"Create multiple deals pipelines, each with customized and relevant deal stages.",
                },
                {
                    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/Education 4.webp",
                    hd:"Get the word out about your courses",
                    p2:"Spread the word about the lessons by sending out bulk emails to students. But don’t just stop there—set up follow-up sequences with more interesting courses or offers based on their engagement with your emails. With sales sequences in a course management software like Bottom Funnel Sales, you can",
                    p1:"As you keep adding new courses to your library, some could turn out to be very popular, while some may not do all that well—one reason being people haven’t heard about it enough.",
                   
                    l1:"Create sequences based on activity or time-based triggers",
                    l2:"Decide from a list of email templates, device follow-up cadences, schedule email delivery time and select when leads exit the campaign",
                    l3:"Track how your emails are performing and create the perfect outreach for your audience.",
                    l4:"Set up follow-up sequences with more interesting courses or offers based on their engagement with your emails.",
                    },
                    {
                        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/Education 5.webp",
                        hd:"Stay on top of your tasks",
                        p1:"Studies show that sales reps spend 64% of their time in activities that do not generate revenue. Automate repetitive tasks to save time and boost their productivity using intelligent workflows. You can automatically",
                        p3:"An educational CRM like Bottom Funnel Sales offers predefined workflow templates that can make routine business tasks easier.",
                        l1:"Send reminder emails of upcoming courses",
                        l2:"Send welcome and birthday emails",
                        l3:"Update CRM fields",
                        l4:"Assign prospects to the right sales reps using territories.",
                        },
                    
    ]
  return (
    <div>
        {data.map((e) => {
return (
    <div className={styles.Featuresmaindiv}>
    <div className={styles.Featuresmaindivcontent}>
        <h2>{e.hd}</h2>
        <p>
  {e.p1}      </p>
  <p>
  {e.p2}      </p>
        <ul>
       <li>{e.l1}</li>  
       <li>{e.l2}</li>  
       <li>{e.l3}</li>  
       <li>{e.l4}</li>  
          </ul>
    </div>
    <div className={styles.Featuresmaindivcontentimage}>
    <Image
                        src={e.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
    <p>{e.p3}</p>
   </div>
)
})}
   
    </div>
  )
}
