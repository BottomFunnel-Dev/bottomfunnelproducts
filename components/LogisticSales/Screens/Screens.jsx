import React from 'react'
import style from "./Screens.module.css";
import Image from 'next/image';

export const Screens = () => {
  return (
    <div>
    <div className={style.Screensmaindiv}>
        <div className={style.Screensmaininnerdiv}> 
        <div className={style.Screensmaininnerdivcontent}>
            <h3>Analyze how your business is performing</h3>
            <p>How many deals have you closed this month? Which sources are your prospects coming in from? How are your teams performing? You can track this and much more by generating reports and even comparing reports on a dashboard in simple steps with Logistics CRM software.</p>
            <p>Reports can help you track the nitty-gritty of how your teams and the overall company are performing across different parameters and help you develop relevant strategies to improve your business.</p>

        </div>
        <div className={style.Screensmaininnerdivimage}>
        <Image
                        src={"/Images/Logisticsalesphotos/007.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
        </div>

        </div>

        <div className={style.Screensmaininnerdivone}> 
        <div className={style.Screensmaininnerdivcontent}>
            <h3>Automate a large chunk of your work</h3>
            <p>Work smart, not hard could be an apt statement here. While digital transformation and technology adoption could be the major factors that will make your business stand out among competitors, the speed and quality of engagement with customers also play a vital role.</p>
            <p>If your teams are going to spend a large portion of their day on manual tasks, it translates to lesser time spent in understanding and engaging with their customer better. A CRM for Logistics software can offer a simple workaround for this and save you hours of manual work by simply automating a large chunk of your tasks.</p>
            <p>Reports can help you track the nitty-gritty of how your teams and the overall company are performing across different parameters and help you develop relevant strategies to improve your business.</p>
        </div>
        <div className={style.Screensmaininnerdivimage}>
        <Image
                        src={"/Images/Logisticsalesphotos/06.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
        </div>

        </div>

        <div className={style.Screensmaininnerdiv}> 
        <div className={style.Screensmaininnerdivcontent}>
            <h3>Get context into prospects with Customer 360</h3>
            <p>Your prospects may come from different sources: paid, excel imports, brokers, or other such sources. What happens once your leads get added into the CRM?

In addition to the information you’ve gathered about the prospect, the CRM for Logistics software comes with an ability to auto-enrich features, by updating information from the prospect’s social profiles or any publicly available data.</p>
<p>Furthermore, it gives you a 360-degree view of every engagement you’ve had with your prospect, be it emails, calls, appointments you’ve scheduled, tasks assigned, or notes you’ve taken for reference. You can surface vital information about the contact with the Summary section.

This ensures that you have context into your prospect’s needs, interests, and behavior when you engage with them, and this results in increasing your chances of closing a deal.</p>


        </div>
        <div className={style.Screensmaininnerdivimage}>
        <Image
                        src={"/Images/Logisticsalesphotos/01.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
        </div>

        </div>

        <div className={style.Screensmaininnerdivone}> 
        <div className={style.Screensmaininnerdivcontent}>
            <h3>Track how your deals are progressing</h3>
            <p>Once you know that the prospect is interested in transacting with you, the Logistics CRM software enables you to add your deals to a pipeline and track the progress you’re making with each prospect across deal stages. You can even identify bottlenecks in the process, and make business decisions accordingly.</p>
            <p>An easy-to-use CRM software even enables you to create multiple pipelines; one for closing deals, one for tracking missing orders, one for repeat orders, and more.</p>



        </div>
        <div className={style.Screensmaininnerdivimage}>
        <Image
                        src={"/Images/Logisticsalesphotos/43.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
        </div>

        </div>


        <div className={style.Screensmaininnerdiv}> 
        <div className={style.Screensmaininnerdivcontent}>
            <h3>Nurture your customers </h3>
            <p>Thanks to structuring data and having a goldmine of information about your customer preferences from past transactions, you can now build a good rapport with them by sending targeted, customized emails from time to time to create recall, build loyalty, and even earn more referrals.</p>

        </div>
        <div className={style.Screensmaininnerdivimage}>
        <Image
                        src={"/Images/Logisticsalesphotos/Activities 2.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
        </div>

        </div>
    </div>
    </div>
  )
}
