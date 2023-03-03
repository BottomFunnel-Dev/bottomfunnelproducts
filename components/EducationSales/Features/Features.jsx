import React from 'react'
import styles from "./Features.module.css";
import Image from "next/image"

export const Features = () => {
  return (
    <div>
   <div className={styles.Featuresmaindiv}>
    <div className={styles.Featuresmaindivcontent}>
        <h2>Automate and reduce data entry</h2>
        <p>
        An average sales rep spends about 20% time entering data in the CRM. As a leader, you would want your sales team to focus most of their time on selling, but you also want an up-to-date CRM database to manage your operations. Achieve that balance with an education CRM that takes care of data entry for you. With Freshsales, you can
        </p>
        <ul>
            <li> Automatically capture and save information of prospects who reach out to you via email, live chat, and web forms</li>
        <li>Automatically capture and save information of prospects who reach out to you via email, live chat, and web forms</li>
        <li>Migrate data from other CRM systems effortlessly and do away with the hours of manual data entry</li>
        <li>Import and export customer and business details from spreadsheets.</li>
        </ul>
    </div>
    <div className={styles.Featuresmaindivcontentimage}>
    <Image
                        src={"/Images/Educationsales/Education 1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>


   <div className={styles.Featuresmaindiv}>
    <div className={styles.Featuresmaindivcontent}>
        <h2>Drive meaningful conversations</h2>
        <p>
        Your salespeople must be empowered with the intricate details needed to engage students and handhold them in finding their perfect course. A student management software like Freshsales can help you have those meaningful conversations by 
        </p>
        <ul>
            <li>Unifying every record across the prospect and customer lifecycle in one place</li>
        <li>A quick summary of emails, phone records, and engagement history with prospects and customers</li>
        <li>Displaying quick summary of primary contact information, notes, tasks, and appointments</li>
        <li>Laying down their chronological timeline—page visits, email engagement, the courses offered to them, and more</li>
        <li>Identifying and prioritizing leads who are most interested in the courses based on their interactions with your website and email, using AI-based lead scoring.</li>
        </ul>
    </div>
    <div className={styles.Featuresmaindivcontentimage}>
    <Image
                        src={"/Images/Educationsales/Education 2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.Featuresmaindiv}>
    <div className={styles.Featuresmaindivcontent}>
        <h2>Tailor for your needs</h2>
        <p>
        As your business grows, you have to tweak or change your sales and business process. The right CRM should blend in with your business ecosystem by letting you customize it for your needs. You should be able to
        </p>
        <ul>
            <li>Create custom input fields and web forms that fit your unique business needs</li>
        
        <li>rmation, notes, tasks, and appointments</li>
        <li>Create custom filters that fetch details by last contacted time, activity type, and more</li>
        <li> Create multiple deals pipelines, each with customized and relevant deal stages.</li>
        </ul>
    </div>
    <div className={styles.Featuresmaindivcontentimage}>
    <Image
                        src={"/Images/Educationsales/Education 3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.Featuresmaindiv}>
    <div className={styles.Featuresmaindivcontent}>
        <h2>Get the word out about your courses </h2>
        <p>
        As you keep adding new courses to your library, some could turn out to be very popular, while some may not do all that well—one reason being people haven’t heard about it enough. 
        </p>
    <p>Spread the word about the lessons by sending out bulk emails to students. But don’t just stop there—set up follow-up sequences with more interesting courses or offers based on their engagement with your emails. 

With sales sequences in a course management software like Freshsales, you can</p>
        <ul>
            <li>Create sequences based on activity or time-based triggers</li>
        
        <li>Decide from a list of email templates, device follow-up cadences, schedule email delivery time and select when leads exit the campaign</li>
        
        <li> Track how your emails are performing and create the perfect outreach for your audience.</li>
        </ul>
    </div>
    <div className={styles.Featuresmaindivcontentimage}>
    <Image
                        src={"/Images/Educationsales/Education 4.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
    </div>
   </div>

   <div className={styles.Featuresmaindiv}>
    <div className={styles.Featuresmaindivcontent}>
        <h2>Stay on top of your tasks </h2>
        <p>
        Studies show that sales reps spend 64% of their time in activities that do not generate revenue. Automate repetitive tasks to save time and boost their productivity using intelligent workflows. You can automatically
        </p>
    
        <ul>
            <li>Send reminder emails of upcoming courses</li>
        
        <li>Send welcome and birthday emails</li>
        
        <li> Update CRM fields</li>
        <li>Assign prospects to the right sales reps using territories.</li>
        </ul>
        <p>An educational CRM like Freshsales offers predefined workflow templates that can make routine business tasks easier. </p>
    </div>
    <div className={styles.Featuresmaindivcontentimage}>
    <Image
                        src={"/Images/Educationsales/Education 5.webp"}
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
