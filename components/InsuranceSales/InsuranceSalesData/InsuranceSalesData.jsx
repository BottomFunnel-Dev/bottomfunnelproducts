import React from 'react'
import style from "./InsuranceSalesData.module.css";

export const InsuranceSalesData = () => {
  
    return (
        <div>
            <div className={style.InsuranceSalesDatamaindiv}>
                <div className={style.InsuranceSalesDatamaincontaindiv}>
                    <h2>Effectively track customer engagements</h2>
                    <p>As insurance salespersons, every day you are likely to be dealing with more than a handful of customers who have signed up for different policies; life, health, automotive or more. And, not only are you tasked with addressing customer queries based on the policy they’ve signed up for, but you’re also expected to keep track of which policy is up for renewal, which customer is requesting for a claim, what progress the claims have made, what approvals and documentation is required to process the claims and so on.Customer 360 inBottom Funnel Sales brings together internal teams — sales, support, and marketing, around a single, shared view of customer data. Improve collaboration, align your teams, break internal silos to deliver tailored customer experiences, and build deeper relationships with your customers.</p>
                    <p>It also offers a modern UI which allows your insurance agents to: </p>
                    <ul>
                        <li>Create the views you want in a click, have all the data you need at your fingertips</li>
                        <li>Organize customer data the way you want for instance, through Kanban cards</li>
                        <li>Drill down into your contacts using filters to view the data you want</li>
                        <li>Use bulk actions to send bulk emails, update a field in multiple contacts and more </li>
                    </ul>
                    <p>It also helps you keep track of all customer complaints in a single window, prioritizing them and closing them quickly and efficiently, thus creating another layer of a positive experience for your customers.</p>
                    <button className={style.Productivitymore}>Learn More &rarr;</button>
                </div>

                <div className={style.InsuranceSalesDatamainimagediv}>
                    <img src="https://d3op2l77j7wnti.cloudfront.net/Images/InsuranceSalesphotos/screen31.webp" alt="screen1" />
                </div>
            </div>


        </div>
    );
};
