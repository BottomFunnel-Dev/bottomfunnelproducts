import React from 'react';
import styles from "./SalesfooterMobileAppEmpower.module.css";
import Image from 'next/image';

export const SalesfooterMobileAppEmpower=()=>{
    const cards =[
        {
            img:"/Images/SalesfooterMobileApp/icon1.png",
            hd: "Send Emails",
            par:"Quickly send individual emails or in bulk, tackle unread emails, and never let opportunities fall through cracks"
        },
        {
            img:"/Images/SalesfooterMobileApp/icon2.png",
            hd:"Add tasks & appointments",
            par:"Add tasks, notes, or appointments on the go, even when offline. Keep your team informed about your activities, and progress on important deals and more."
        },
        {
            img:"/Images/SalesfooterMobileApp/icon3.png",
            hd:"Personalize mobile app",
            par:"With the app home screen, stay on top of your sales performance with notification cards, your weekly calendar with tasks and appointments, a list of overdue tasks, and several other key metrics."
        },
        {
            img:"/Images/SalesfooterMobileApp/icon4.png",
            hd:"Make calls",
            par:"Log calls and associate them with a contact, deal, or account. Enrich your logs by adding notes with a single click, for immediate context and recollection."
        },
        {
            img:"/Images/SalesfooterMobileApp/icon5.png",
            hd:"Check-in sales activities",
            par:"Keep your team informed about your where abouts when on scheduled offline meetings with your prospects, using the Check-in feature"
        },
        {
            img:"/Images/SalesfooterMobileApp/icon6.png",
            hd:"Record voice notes",
            par:"Record interactions with prospects or customers about their requirements/preferences, and use them to engage contextually in further conversations."
        }
    ]
return(
    <div className={styles.SalesfooterMobileAppEmpowerMain}>
<div className={styles.SalesfooterMobileAppEmpowerHeader}>
<h2> <b>Empower sales teams to work from anywhere and stay productive</b></h2>
</div>

<div className={styles.SalesfooterMobileAppEmpowersection}>
{cards.map((item) => {
            return (
<div className={styles.SalesfooterMobileAppEmpowerdiv}>
    <div className={styles.SalesfooterMobileAppEmpowerimages}>
    <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                   <div className={styles.SalesfooterMobileAppEmpowerContent}>
                <h2>{item.hd}</h2>
                <p>{item.par}</p>
                </div>
                </div>
               
                
    </div>
            );})}
</div>

</div>
)}