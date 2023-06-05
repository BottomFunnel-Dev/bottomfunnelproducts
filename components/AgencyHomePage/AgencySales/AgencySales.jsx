import React from 'react'
import style from "./AgencySales.module.css";
import Image from 'next/image';

export const AgencySales = () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/logo1.png",
        hd:"Service customers on the go",
        p:"Don’t let your laptop or desktop hold you back. Access all functionalities of an agency CRM from anywhere, any time with the Bottom funnel salesmobile app."
        },
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/logo2.png",
        hd:"Customize your CRM with integrations",
        p:"Choose from a host of apps like Zapier, MailChimp, Segment, and Google Apps for work to integrate with your modern CRM."
        },
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/logo3.png",
        hd:"Qualify leads with lead scoring",
        p:"Rank your leads With the help of positive and negative scoring signals depending on how they engage with your business. Go after leads that are more relevant for your agency and are more likely to convert into a customer."
        },
        
        ]
    return (
        <div>
            <div className={style.AgencySalesmaindiv}>
                <h1>Do all of this and more with Bottom funnel sales</h1>
                <div className={style.AgencySalesinnerdiv}>
                {data.map((e) => {
return (
    <div className={style.AgencySalescarddiv}>
    <h4>{e.hd}</h4>
    <div className={style.AgencySalescarddivimage}>
        <Image
            src={e.img}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
        />
        {/* <img src="Images/realestatesales/Documents-cuate.png" alt="image" /> */}
    </div>
    <p>{e.p}</p>
                </div>
)
})}
                   
                    



            </div>
        </div>
        </div>
    )
}
