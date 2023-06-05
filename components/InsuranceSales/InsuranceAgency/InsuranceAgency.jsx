import React from 'react'
import style from "./InsuranceAgency.module.css";
import Image from 'next/image';


export const InsuranceAgency = () => {
    const data = [
        {
        img:"/Images/InsuranceSalesphotos/Documents1.png",
        hd:"Stay on top of your sales game",
        p:"Even when you’re away from your desk, get a holistic view of all your leads, accounts, deals, and contacts on your smartphone with theBottom Funnel Sales' Android or iPhone mobile app."
        },
        {
        img:"/Images/InsuranceSalesphotos/Securedata-cuate.png",
        hd:"Access multiple integrations",
        p:"Generate higher revenues by integrating theBottom Funnel Sales software with other business tools such as Google Calendar, Zapier, MailChimp, or Hubspot."
        },
        {
        img:"/Images/InsuranceSalesphotos/Emailcampaign.png",
        hd:"Compare performance reports",
        p:"View multiple reports on a single panel with the reports dashboard. Create your own or use the pre-existing templates on theBottom Funnel Sales platform and share them with your team."
        },
        
        ]
    return (
        <div className={style.InsuranceAgencymaindiv}>
            <h1>Do all of this and more with Bottom Funnel Sales</h1>
            <div className={style.InsuranceAgencyinnerdiv}>
            {data.map((e) => {
return (
    <div className={style.InsuranceAgencycarddiv}>
    <h4>{e.hd}</h4>
        <div className={style.InsuranceAgencycarddivimage}>
        <Image
src={e.img}
alt={"img"}
width={"0"}
height={"0"}
sizes={"100vw"}
style={{ width: "100%", height: "100%" }}

/>
        </div>
        <p>{e.p}</p>  </div>
  



  
  )
})}
</div>

           

        </div>
    )
}
